# Environment Setup Instructions

To make this application work correctly, you need to create a `.env` file in the root directory with the following environment variables:

```
NEXT_PUBLIC_TMDB_BASEURL=https://api.themoviedb.org/3/
NEXT_PUBLIC_IMAGE_CACHE_HOST_URL=https://image.tmdb.org/t/p
NEXT_PUBLIC_STREAMING_MOVIES_API_URL=
NEXT_PUBLIC_SEARCH_ACTOR_GOOGLE=https://www.google.com/search?q=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_HEADER_KEY=Bearer your_tmdb_api_key_here
```

## Steps to get TMDB API Key:

1. Sign up at https://www.themoviedb.org/signup
2. Go to your account settings
3. Navigate to the API section
4. Request an API key by filling out the form
5. Once approved, copy your API key to the `.env` file

After setting up the environment variables, restart the development server using `pnpm dev`. 