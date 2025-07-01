export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Navision',
  description: 'Navision is a movie and tv show streaming platform.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
      scroll: true,
    },
    {
      title: 'Movies',
      href: '/movies',
      scroll: true,
    },
    {
      title: 'TV Shows',
      href: '/tv-shows',
      scroll: true,
    },
    {
      title: 'Watch History',
      href: '/watch-history',
      scroll: true,
    },
    {
      title: 'Disclaimer',
      href: '/disclaimer',
      scroll: false,
    },
  ],
  personalLogo:
    'https://pbs.twimg.com/profile_images/1446549954231738370/IVkXC16N_400x400.jpg',
  links: {
    twitter: 'https://twitter.com/preetam',
    github: 'https://github.com/preetam-90',
    website: 'https://www.navision.com/',
    buyMeACoffee: 'https://buymeacoffee.com/preetam',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
  },
  email: 'contact@navision.com',
  websiteURL: 'https://www.navision.com',
  twitterTag: '@preetam',
  image:
    'https://pbs.twimg.com/profile_images/1446549954231738370/IVkXC16N_400x400.jpg',
  keywords: [
    'Navision',
    'Navision Site',
    'Navision Streaming',
    'Movie Streaming',
    'TV Show Streaming',
    'Navision Live',
    'Software Engineer',
    'Frontend Engineer',
    'Web Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Preetam',
    'React Developer',
    'React Engineer',
    'React.js',
    'ReactJS',
    'React Developer',
    'Next.js',
    'NextJS',
    'Next.js Developer',
    'Next.js Engineer',
  ],
}
