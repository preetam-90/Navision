import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import {
  getMovieDetailsById,
  populateMovieDetailsPage,
} from '@/services/movies'

import { getPosterImageURL } from '@/lib/utils'
import { MoviesDetailsContent } from '@/components/media/details-content'
import { MovieDetailsHero } from '@/components/media/details-hero'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params

  const movieDetails = await getMovieDetailsById(id)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: movieDetails.title,
    description: movieDetails.overview,
    metadataBase: new URL(`/movies/${id}`, process.env.NEXT_PUBLIC_BASE_URL),
    openGraph: {
      images: [
        ...previousImages,
        getPosterImageURL(movieDetails.poster_path),
        getPosterImageURL(movieDetails.backdrop_path),
      ],
    },
  }
}

export default async function MoviePage({ params }: Props) {
  const { id } = await params
  const { movieCredits, movieDetails, similarMovies, recommendedMovies } =
    await populateMovieDetailsPage(id)

  return (
    <header className="relative">
      <MovieDetailsHero movie={movieDetails} />
      <MoviesDetailsContent
        movie={movieDetails}
        movieCredits={movieCredits}
        similarMovies={similarMovies}
        recommendedMovies={recommendedMovies}
      />
    </header>
  )
}
