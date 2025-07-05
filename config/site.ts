export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Navision',
  description: 'Navision is a movie and tv show tracker built by Preetam Kumar.',
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
    'https://i.postimg.cc/R03LypvV/PXL-20230705-131447762-PORTRAIT.jpg',
  links: {
    twitter: 'https://www.instagram.com/preetam_90',
    github: 'https://github.com/preetam-90',
    website: 'https://vidionai.me',
    buyMeACoffee: 'https://buymeacoffee.com/preetam90',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
  },
  email: 'preetamkumar8873@gmail.com',
  websiteURL: 'https://bhaiflix.vercel.app',
  twitterTag: '@preetam_90',
  image:
    'https://i.postimg.cc/R03LypvV/PXL-20230705-131447762-PORTRAIT.jpg',
  keywords: [
    'Navision',
    'Navision Site',
    'Navision Tracker',
    'Movie Tracker',
    'TV Show Tracker',
    'Bhaiflix',
    'Software Engineer',
    'Frontend Engineer',
    'Web Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Preetam Kumar',
    'Preetam',
    'Kumar Preetam',
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
