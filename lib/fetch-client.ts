import queryString from 'query-string'
import { revalidateTag } from 'next/cache'

import { apiConfig } from '@/lib/tmdbConfig'

// Cache configuration optimized for Cloudflare Workers
const CACHE_CONFIG = {
  // Popular/trending data - changes frequently
  DYNAMIC: {
    revalidate: 3600, // 1 hour
    tags: ['tmdb-dynamic'],
    cacheControl: 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=1800',
  },
  // Movie/series details - semi-static
  DETAILS: {
    revalidate: 28800, // 8 hours
    tags: ['tmdb-details'],
    cacheControl: 'public, max-age=14400, s-maxage=28800, stale-while-revalidate=7200',
  },
  // Search results - short-lived
  SEARCH: {
    revalidate: 1800, // 30 minutes
    tags: ['tmdb-search'],
    cacheControl: 'public, max-age=900, s-maxage=1800, stale-while-revalidate=900',
  },
  // Static data - rarely changes
  STATIC: {
    revalidate: 86400, // 24 hours
    tags: ['tmdb-static'],
    cacheControl: 'public, max-age=43200, s-maxage=86400, stale-while-revalidate=21600',
  },
}

// Retry configuration
const RETRY_CONFIG = {
  maxRetries: 3,
  initialDelay: 300, // ms
  backoffFactor: 2,
  jitter: 0.1, // 10% jitter
}

// Helper function for delay with exponential backoff
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Calculate backoff delay with jitter
const calculateBackoff = (attempt: number) => {
  const baseDelay = RETRY_CONFIG.initialDelay * Math.pow(RETRY_CONFIG.backoffFactor, attempt)
  const jitter = baseDelay * RETRY_CONFIG.jitter
  return baseDelay + (Math.random() * 2 - 1) * jitter
}

// Determine cache type based on URL patterns
const getCacheType = (url: string): keyof typeof CACHE_CONFIG => {
  if (url.includes('/search/')) return 'SEARCH'
  if (url.includes('/movie/') || url.includes('/tv/')) {
    // Individual movie/tv details
    if (url.match(/\/(movie|tv)\/\d+$/)) return 'DETAILS'
    // Related content (similar, recommendations, credits)
    if (url.includes('/similar') || url.includes('/recommendations') || url.includes('/credits')) {
      return 'DETAILS'
    }
  }
  // Popular, trending, top-rated lists
  if (url.includes('/trending/') || url.includes('/popular') || url.includes('/top_rated')) {
    return 'DYNAMIC'
  }
  return 'STATIC'
}

// Generate cache key for consistent caching
const generateCacheKey = (url: string, params?: Record<string, string | number>): string => {
  // Extract the base URL without any query parameters
  const baseUrl = url.split('?')[0]
  
  const sortedParams = params ? 
    Object.keys(params)
      .sort()
      .reduce((acc, key) => ({ ...acc, [key]: params[key] }), {}) 
    : {}
  
  const queryString = Object.keys(sortedParams).length > 0 
    ? `?${new URLSearchParams(sortedParams as Record<string, string>).toString()}`
    : ''
  
  return `tmdb:${baseUrl}${queryString}`
}

export const fetchClient = {
  get: async <T>(
    url: string,
    params?: Record<string, string | number>,
    isHeaderAuth = false
  ): Promise<T> => {
    // Validate API configuration
    if (!apiConfig.baseUrl) {
      throw new Error('TMDB Base URL is not configured. Check your environment variables.')
    }

    // Always use API key as fallback if header key fails
    const apiKey = apiConfig.apiKey || ''
    const headerKey = apiConfig.headerKey || ''

    // Ensure we have at least one authentication method
    if (!apiKey && !headerKey) {
      throw new Error('TMDB API credentials not configured. Check your environment variables.')
    }

    // Extract base URL without query parameters
    const baseUrl = url.split('?')[0]
    
    // Parse existing query parameters from URL
    const existingParams = url.includes('?') ? 
      queryString.parse(url.split('?')[1]) as Record<string, string> : 
      {}
    
    // Build query parameters, combining existing and new params
    const query: Record<string, string | number> = { 
      ...existingParams,
      ...params 
    }
    
    // Always include API key in query for more reliable auth
    if (apiKey) {
      query.api_key = apiKey
    }

    const cacheType = getCacheType(baseUrl)
    const cacheConfig = CACHE_CONFIG[cacheType]
    const cacheKey = generateCacheKey(baseUrl, query)
    
    // Implementation with retry logic
    let lastError: Error | null = null
    
    for (let attempt = 0; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
      try {
        // If this isn't the first attempt, log retry information
        if (attempt > 0 && process.env.NODE_ENV !== 'production') {
          console.log(`[TMDB Retry] Attempt ${attempt}/${RETRY_CONFIG.maxRetries} for ${baseUrl}`)
        }
        
        // Ensure baseUrl doesn't include any query params that might conflict with our query object
        const cleanBaseUrl = baseUrl.split('?')[0]
        const fullUrl = `${apiConfig.baseUrl}/${cleanBaseUrl}`
        const queryStringUrl = queryString.stringifyUrl({ url: fullUrl, query })

        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
          'Cache-Control': cacheConfig.cacheControl,
          'CF-Cache-Tag': cacheConfig.tags.join(','),
          'X-Cache-Key': cacheKey,
        }

        // Add authorization header if using header authentication and we have a header key
        if (isHeaderAuth && headerKey) {
          headers['Authorization'] = `Bearer ${headerKey}`
        }

        if (process.env.NODE_ENV === 'development') {
          console.log(`[TMDB Request] Fetching: ${queryStringUrl}`)
          console.log(`[TMDB Auth] Using ${isHeaderAuth ? 'header auth' : 'query param auth'}`)
        }
        
        // Add safety timeout to prevent hanging requests
        const fetchPromise = fetch(queryStringUrl, {
          method: 'GET',
          headers,
          // Next.js caching with optimized revalidation
          next: { 
            revalidate: cacheConfig.revalidate,
            tags: [...cacheConfig.tags, cacheKey],
          },
        });
        
        // Add timeout to fetch request
        const timeoutPromise = new Promise<Response>((_, reject) => {
          setTimeout(() => {
            reject(new Error('Request timeout after 10s'));
          }, 10000);
        });
        
        const res = await Promise.race([fetchPromise, timeoutPromise]);

        // Enhanced error handling
        if (!res.ok) {
          const errorBody = await res.text()
          if (process.env.NODE_ENV !== 'production') {
            console.error(`[TMDB API Error] Status: ${res.status}, URL: ${queryStringUrl}, Body: ${errorBody}`)
          }
          
          // Rate limiting or server errors should be retried
          if (res.status === 429 || res.status >= 500) {
            throw new Error(`TMDB API error: ${res.status} ${res.statusText} - ${errorBody}`)
          }
          
          // Client errors shouldn't be retried
          return Promise.reject(new Error(`TMDB API error: ${res.status} ${res.statusText} - ${errorBody}`))
        }

        // Robust JSON parsing with error handling
        const contentType = res.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
          const textBody = await res.text()
          if (process.env.NODE_ENV !== 'production') {
            console.error(`[TMDB API Error] Non-JSON response: ${textBody}`)
          }
          throw new Error('Expected JSON response from TMDB API')
        }

        const data = await res.json()
        
        // Log cache strategy for debugging
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Cache] ${cacheType} strategy for ${cacheKey}`)
        }

        return data
      } catch (error: any) {
                  lastError = error
          
          // Do not log any errors in production mode
          if (process.env.NODE_ENV !== 'production') {
            console.error(`[TMDB Fetch Error] Attempt ${attempt + 1}/${RETRY_CONFIG.maxRetries + 1} for ${cacheKey}:`, error.message)
          }
        
        // If we've reached max retries, or it's a client error, fail
        if (attempt >= RETRY_CONFIG.maxRetries) {
          break
        }
        
        // Wait before next retry with exponential backoff
        const backoffTime = calculateBackoff(attempt)
        if (process.env.NODE_ENV !== 'production') {
          console.log(`[TMDB Retry] Waiting ${backoffTime}ms before retry...`)
        }
        await delay(backoffTime)
      }
    }
    
    // If we get here, all retries have failed
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[TMDB Error] All ${RETRY_CONFIG.maxRetries + 1} attempts failed for ${cacheKey}`)
    }
    
    // Try to return a minimal fallback response based on the entity type
    if (baseUrl.includes('movie/') && !baseUrl.includes('credits') && !baseUrl.includes('similar') && !baseUrl.includes('recommendations')) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('[TMDB Fallback] Returning minimal fallback movie entity')
      }
      return {
        id: parseInt(baseUrl.split('/')[1]) || 0,
        title: 'Unable to load data',
        overview: 'Content temporarily unavailable. Please try again later.',
        poster_path: null,
        backdrop_path: null,
      } as unknown as T;
    }

    // Special handling for TV series entity
    if (baseUrl.includes('tv/') && !baseUrl.includes('credits') && !baseUrl.includes('similar')) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('[TMDB Fallback] Returning minimal fallback TV series entity')
      }
      
      // Check if this is likely a TV series list (popular, top_rated, etc)
      if (baseUrl.match(/\/tv\/(popular|top_rated|on_the_air|airing_today)$/)) {
        return {
          page: 1,
          results: [],
          total_pages: 0,
          total_results: 0,
        } as unknown as T;
      }
      
      // Otherwise return a single TV show entity
      return {
        id: parseInt(baseUrl.split('/')[1]) || 0,
        name: 'Unable to load data',
        overview: 'Content temporarily unavailable. Please try again later.',
        poster_path: null,
        backdrop_path: null,
      } as unknown as T;
    }
    
    // For movie/TV collections, popular/trending lists
    if (baseUrl.includes('popular') || baseUrl.includes('trending') || baseUrl.includes('top_rated')) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('[TMDB Fallback] Returning empty results collection')
      }
      
      // Return properly structured empty results array for any collection type
      return {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
      } as unknown as T;
    }

    // For similar/recommendations collections
    if (baseUrl.includes('similar') || baseUrl.includes('recommendations')) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('[TMDB Fallback] Returning empty similar/recommendations collection')
      }
      return {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
      } as unknown as T;
    }
    
    // For credits
    if (baseUrl.includes('credits')) {
      if (process.env.NODE_ENV !== 'production') {
        console.log('[TMDB Fallback] Returning empty credits collection')
      }
      return {
        id: parseInt(baseUrl.split('/')[1]) || 0,
        cast: [],
        crew: []
      } as unknown as T;
    }
    
    // Last resort - throw the error
    throw new Error(`Failed to fetch from TMDB after ${RETRY_CONFIG.maxRetries + 1} attempts: ${lastError?.message}. URL: ${url}`)
  },

  post: async <T>(url: string, body = {}): Promise<T> => {
    try {
      const res = await fetch(`${apiConfig.baseUrl}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiConfig.headerKey}`,
          'Cache-Control': 'no-cache',
        },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        throw new Error(`TMDB API POST error: ${res.status} ${res.statusText}`)
      }

      return await res.json()
    } catch (error: any) {
      console.error(`[POST Error] ${url}:`, error.message)
      throw error
    }
  },

  // Utility to purge cache by tags (for use with Cloudflare)
  purgeCache: async (tags: string[]): Promise<void> => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Cache Purge] Would purge tags: ${tags.join(', ')}`)
      return
    }

    // In production, this would integrate with Cloudflare's cache purge API
    // For now, we'll use Next.js revalidateTag if available
    if (typeof revalidateTag !== 'undefined') {
      tags.forEach(tag => {
        try {
          revalidateTag(tag)
        } catch (error) {
          console.warn(`[Cache Purge] Failed to purge tag ${tag}:`, error)
        }
      })
    }
  },

  // Preload critical data for cache warming
  preloadCriticalData: async (): Promise<void> => {
    const criticalEndpoints = [
      { url: 'movie/popular', params: { page: 1 } },
      { url: 'tv/popular', params: { page: 1 } },
      { url: 'trending/movie/day', params: { page: 1 } },
      { url: 'trending/tv/day', params: { page: 1 } },
    ]

    console.log('[Cache Warm] Starting critical data preload...')
    
    const preloadPromises = criticalEndpoints.map(async ({ url, params }) => {
      try {
        await fetchClient.get(url, params, true)
        console.log(`[Cache Warm] Preloaded: ${url}`)
      } catch (error) {
        console.warn(`[Cache Warm] Failed to preload ${url}:`, error)
      }
    })
    
    await Promise.allSettled(preloadPromises)
    console.log('[Cache Warm] Critical data preload completed')
  },
}
