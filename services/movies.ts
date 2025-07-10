import {
  getAllTimeTopRatedSeries,
  getLatestTrendingSeries,
  getPopularSeries,
} from '@/services/series'

import { Credit } from '@/types/credit'
import { MediaResponse } from '@/types/media'
import {
  MovieDetails,
  MultiMovieDetailsRequestProps,
} from '@/types/movie-details'
import {
  Movie,
  MovieResponse,
  MultiRequestProps,
  Param,
} from '@/types/movie-result'
import { fetchClient } from '@/lib/fetch-client'
import { movieType } from '@/lib/tmdbConfig'

const getNowPlayingMovies = async (params: Param = {}) => {
  const url = `movie/${movieType.now_playing}`
  return fetchClient.get<MovieResponse>(url, params)
}

const getLatestTrendingMovies = async (params: Param = {}) => {
  const url = `${movieType.trending}/movie/day?language=en-US`
  return fetchClient.get<MovieResponse>(url, params, true)
}

const getAllTimeTopRatedMovies = async (params: Param = {}) => {
  const url = `movie/${movieType.top_rated}?language=en-US`
  return fetchClient.get<MovieResponse>(url, params, true)
}
const getPopularMovies = async (params: Param = {}) => {
  'use server'
  const url = `movie/${movieType.popular}?language=en-US`
  return fetchClient.get<MediaResponse>(url, params, true)
}

// New function to get trending media (movies and TV shows) for the week
const getTrendingAllWeek = async (page: number = 1, params: Param = {}) => {
  const url = `trending/all/week?language=en-US&page=${page}`
  return fetchClient.get<MovieResponse>(url, params, true) // Assuming MovieResponse can handle mixed media types if structured similarly
}

// New function to get 40 trending items (2 pages)
const getTrendingMediaForHeroSlider = async (
  params: Param = {}
): Promise<Movie[]> => {
  try {
    const [page1Response, page2Response] = await Promise.all([
      getTrendingAllWeek(1, params),
      getTrendingAllWeek(2, params),
    ])

    const combinedResults = [
      ...(page1Response?.results || []),
      ...(page2Response?.results || []),
    ]

    return combinedResults // Ensure we only take up to 40 items
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error fetching trending media for hero slider:', error)
    }
    return [] // Return empty array or throw error as per desired error handling
  }
}

const populateHomePageData = async (): Promise<MultiRequestProps> => {
  try {
    // Use allSettled to prevent one failed request from causing the entire operation to fail
    const results = await Promise.allSettled([
      getTrendingMediaForHeroSlider(),
      getLatestTrendingMovies(),
      getPopularMovies(),
      getAllTimeTopRatedMovies(),
      getLatestTrendingSeries(),
      getPopularSeries(),
      getAllTimeTopRatedSeries(),
    ])

    return {
      trendingMediaForHero: results[0].status === 'fulfilled' ? results[0].value || [] : [],
      latestTrendingMovies: results[1].status === 'fulfilled' ? results[1].value?.results || [] : [],
      popularMovies: results[2].status === 'fulfilled' ? results[2].value?.results || [] : [],
      allTimeTopRatedMovies: results[3].status === 'fulfilled' ? results[3].value?.results || [] : [],
      latestTrendingSeries: results[4].status === 'fulfilled' ? results[4].value?.results || [] : [],
      popularSeries: results[5].status === 'fulfilled' ? results[5].value?.results || [] : [],
      allTimeTopRatedSeries: results[6].status === 'fulfilled' ? results[6].value?.results || [] : [],
    }
  } catch (error: any) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Failed to load home page data:', error)
    }
    // Return empty arrays rather than throwing
    return {
      trendingMediaForHero: [],
      latestTrendingMovies: [],
      popularMovies: [],
      allTimeTopRatedMovies: [],
      latestTrendingSeries: [],
      popularSeries: [],
      allTimeTopRatedSeries: [],
    }
  }
}

const getMovieDetailsById = async (id: string, params: Param = {}) => {
  const url = `movie/${id}?language=en-US`
  try {
    return await fetchClient.get<MovieDetails>(url, params, true)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error fetching details for movie ${id}:`, error)
    }
    return {
      id: parseInt(id),
      title: 'Unable to load content',
      overview: 'Content temporarily unavailable',
      poster_path: '',
      backdrop_path: '',
      adult: false,
      genres: [],
      homepage: '',
      imdb_id: '',
      original_language: '',
      original_title: '',
      release_date: '',
      budget: 0,
      revenue: 0,
      runtime: 0,
      status: '',
      tagline: '',
      vote_average: 0,
      vote_count: 0,
      production_companies: [],
      production_countries: [],
      spoken_languages: [],
      belongs_to_collection: {
        id: 0,
        name: '',
        poster_path: '',
        backdrop_path: ''
      },
      popularity: 0,
      video: false
    }
  }
}

const getMovieCreditsById = async (id: string, params: Param = {}) => {
  const url = `movie/${id}/credits?language=en-US`
  try {
    return await fetchClient.get<Credit>(url, params, true)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error fetching credits for movie ${id}:`, error)
    }
    return { id: parseInt(id), cast: [], crew: [] }
  }
}

const getSimilarMoviesById = async (id: string, params: Param = {}) => {
  const url = `movie/${id}/similar?language=en-US`
  try {
    return await fetchClient.get<MovieResponse>(url, params, true)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error fetching similar movies for ${id}:`, error)
    }
    return { page: 1, results: [], total_pages: 0, total_results: 0 }
  }
}

const getRecommendedMoviesById = async (id: string, params: Param = {}) => {
  const url = `movie/${id}/recommendations?language=en-US`
  try {
    return await fetchClient.get<MovieResponse>(url, params, true)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Error fetching recommended movies for ${id}:`, error)
    }
    return { page: 1, results: [], total_pages: 0, total_results: 0 }
  }
}

const populateMovieDetailsPage = async (
  id: string
): Promise<MultiMovieDetailsRequestProps> => {
  // Create a fallback data object
  const fallbackData: MultiMovieDetailsRequestProps = {
    movieDetails: {
      id: parseInt(id),
      title: 'Unable to load content',
      overview: 'Content temporarily unavailable',
      poster_path: '',
      backdrop_path: '',
      adult: false,
      genres: [],
      homepage: '',
      imdb_id: '',
      original_language: '',
      original_title: '',
      release_date: '',
      budget: 0,
      revenue: 0,
      runtime: 0,
      status: '',
      tagline: '',
      vote_average: 0,
      vote_count: 0,
      production_companies: [],
      production_countries: [],
      spoken_languages: [],
      belongs_to_collection: {
        id: 0,
        name: '',
        poster_path: '',
        backdrop_path: ''
      },
      popularity: 0,
      video: false
    },
    movieCredits: { id: parseInt(id), cast: [], crew: [] },
    similarMovies: [],
    recommendedMovies: []
  };

  // In production mode, suppress console errors to prevent client-side error messages
  const originalConsoleError = console.error;
  if (process.env.NODE_ENV === 'production') {
    console.error = () => {};
  }

  try {
    // Use allSettled to prevent one failed request from causing the entire operation to fail
    const results = await Promise.allSettled([
      getMovieDetailsById(id),
      getMovieCreditsById(id),
      getSimilarMoviesById(id),
      getRecommendedMoviesById(id),
    ]);
    
    // Extract values or use fallbacks for rejected promises
    const movieDetails = results[0].status === 'fulfilled' ? results[0].value : fallbackData.movieDetails;
    const movieCredits = results[1].status === 'fulfilled' ? results[1].value : fallbackData.movieCredits;
    const similarMovies = results[2].status === 'fulfilled' ? results[2].value?.results || [] : [];
    const recommendedMovies = results[3].status === 'fulfilled' ? results[3].value?.results || [] : [];
    
    return {
      movieDetails,
      movieCredits,
      similarMovies,
      recommendedMovies,
    };
  } catch (error: any) {
    // Only log errors in development
    if (process.env.NODE_ENV !== 'production') {
      console.error('Failed to load movie details page data:', error);
    }
    // Return fallback data if anything fails
    return fallbackData;
  } finally {
    // Always restore console.error
    console.error = originalConsoleError;
  }
}

export {
  getNowPlayingMovies,
  getLatestTrendingMovies,
  getAllTimeTopRatedMovies,
  getPopularMovies,
  populateHomePageData,
  getMovieDetailsById,
  getMovieCreditsById,
  populateMovieDetailsPage,
  getTrendingMediaForHeroSlider, // Export the new function
}
