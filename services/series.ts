import { seriesDTO } from '@/dtos/series'

import { Credit } from '@/types/credit'
import { Param } from '@/types/movie-result'
import {
  MultiSeriesDetailsRequestProps,
  SeriesDetails,
} from '@/types/series-details'
import { SeriesResponse } from '@/types/series-result'
import { fetchClient } from '@/lib/fetch-client'
import { tvType } from '@/lib/tmdbConfig'

const getLatestTrendingSeries = async (params: Param = {}) => {
  const url = `trending/tv/day?language=en-US`
  const rawData = await fetchClient.get<SeriesResponse>(url, params, true)
  
  // Ensure we have a valid response with results before calling DTO
  if (rawData && Array.isArray(rawData.results)) {
    return seriesDTO(rawData)
  }
  
  // Fallback when results is missing or not an array
  return {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  }
}

const getPopularSeries = async (params: Param = {}) => {
  'use server'
  const url = `tv/${tvType.popular}?language=en-US`
  const rawData = await fetchClient.get<SeriesResponse>(url, params, true)
  
  // Ensure we have a valid response with results before calling DTO
  if (rawData && Array.isArray(rawData.results)) {
    return seriesDTO(rawData)
  }
  
  // Fallback when results is missing or not an array
  return {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  }
}

const getAllTimeTopRatedSeries = async (params: Param = {}) => {
  const url = `tv/${tvType.top_rated}?language=en-US`
  const rawData = await fetchClient.get<SeriesResponse>(url, params, true)
  
  // Ensure we have a valid response with results before calling DTO
  if (rawData && Array.isArray(rawData.results)) {
    return seriesDTO(rawData)
  }
  
  // Fallback when results is missing or not an array
  return {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  }
}

const getSeriesDetailsById = async (id: string, params: Param = {}) => {
  const url = `tv/${id}?language=en-US`
  try {
    return await fetchClient.get<SeriesDetails>(url, params, true)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error fetching details for series ${id}:`, error)
    }
    return {
      id: parseInt(id),
      name: 'Unable to load content',
      overview: 'Content temporarily unavailable',
      poster_path: '',
      backdrop_path: '',
      adult: false,
      created_by: [],
      episode_run_time: [],
      first_air_date: '',
      genres: [],
      homepage: '',
      in_production: false,
      languages: [],
      last_air_date: '',
      last_episode_to_air: null,
      next_episode_to_air: null,
      networks: [],
      number_of_episodes: 0,
      number_of_seasons: 0,
      origin_country: [],
      original_language: '',
      original_name: '',
      production_companies: [],
      production_countries: [],
      seasons: [],
      spoken_languages: [],
      status: '',
      tagline: '',
      type: '',
      vote_average: 0,
      vote_count: 0
    }
  }
}

const getSeriesCreditsById = async (id: string, params: Param = {}) => {
  const url = `tv/${id}/credits?language=en-US`
  try {
    return await fetchClient.get<Credit>(url, params, true)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error fetching credits for series ${id}:`, error)
    }
    return { id: parseInt(id), cast: [], crew: [] }
  }
}

const getSimilarSeriesById = async (id: string, params: Param = {}) => {
  const url = `tv/${id}/similar?language=en-US`
  const rawData = await fetchClient.get<SeriesResponse>(url, params, true)
  
  // Ensure we have a valid response with results before calling DTO
  if (rawData && Array.isArray(rawData.results)) {
    return seriesDTO(rawData)
  }
  
  // Fallback when results is missing or not an array
  return {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  }
}

const getRecommendedSeriesById = async (id: string, params: Param = {}) => {
  const url = `tv/${id}/recommendations?language=en-US`
  const rawData = await fetchClient.get<SeriesResponse>(url, params, true)
  
  // Ensure we have a valid response with results before calling DTO
  if (rawData && Array.isArray(rawData.results)) {
    return seriesDTO(rawData)
  }
  
  // Fallback when results is missing or not an array
  return {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  }
}

const populateSeriesDetailsPageData = async (
  id: string
): Promise<MultiSeriesDetailsRequestProps> => {
  // Create a fallback data object
  const fallbackData: MultiSeriesDetailsRequestProps = {
    seriesDetails: {
      id: parseInt(id),
      name: 'Unable to load content',
      overview: 'Content temporarily unavailable',
      poster_path: '',
      backdrop_path: '',
      adult: false,
      created_by: [],
      episode_run_time: [],
      first_air_date: '',
      genres: [],
      homepage: '',
      in_production: false,
      languages: [],
      last_air_date: '',
      last_episode_to_air: null,
      next_episode_to_air: null,
      networks: [],
      number_of_episodes: 0,
      number_of_seasons: 0,
      origin_country: [],
      original_language: '',
      original_name: '',
      production_companies: [],
      production_countries: [],
      seasons: [],
      spoken_languages: [],
      status: '',
      tagline: '',
      type: '',
      vote_average: 0,
      vote_count: 0
    },
    seriesCredits: { id: parseInt(id), cast: [], crew: [] },
    similarSeries: [],
    recommendedSeries: []
  };

  // In production mode, suppress console errors to prevent client-side error messages
  const originalConsoleError = console.error;
  if (process.env.NODE_ENV === 'production') {
    console.error = () => {};
  }

  try {
    // Use allSettled to prevent one failed request from causing the entire operation to fail
    const results = await Promise.allSettled([
      getSeriesDetailsById(id),
      getSeriesCreditsById(id),
      getSimilarSeriesById(id),
      getRecommendedSeriesById(id),
    ]);
    
    // Extract values or use fallbacks for rejected promises
    const seriesDetails = results[0].status === 'fulfilled' ? results[0].value : fallbackData.seriesDetails;
    const seriesCredits = results[1].status === 'fulfilled' ? results[1].value : fallbackData.seriesCredits;
    const similarSeries = results[2].status === 'fulfilled' ? results[2].value?.results || [] : [];
    const recommendedSeries = results[3].status === 'fulfilled' ? results[3].value?.results || [] : [];
    
    return {
      seriesDetails,
      seriesCredits,
      similarSeries,
      recommendedSeries,
    };
  } catch (error: any) {
    // Only log errors in development
    if (process.env.NODE_ENV !== 'production') {
      console.error('Failed to load series details page data:', error);
    }
    // Return fallback data if anything fails
    return fallbackData;
  } finally {
    // Always restore console.error
    console.error = originalConsoleError;
  }
}

export {
  getLatestTrendingSeries,
  getPopularSeries,
  getAllTimeTopRatedSeries,
  getSeriesDetailsById,
  getSeriesCreditsById,
  populateSeriesDetailsPageData,
}
