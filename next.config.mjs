/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_TMDB_BASEURL: process.env.NEXT_PUBLIC_TMDB_BASEURL,
    NEXT_PUBLIC_IMAGE_CACHE_HOST_URL: process.env.NEXT_PUBLIC_IMAGE_CACHE_HOST_URL,
  },
  // Vercel-specific optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
