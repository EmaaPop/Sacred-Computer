import Package from '@root/package.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: Package.name,
  description: Package.description,
  metadataBase: new URL('https://wireframes.internet.dev'),
  openGraph: {
    description: Package.description,
    images: [
      {
        url: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/57a5715d-d332-47d0-8ec8-40cfa75bf36f.png',
        width: 1500,
        height: 785,
      },
    ],
    title: Package.name,
    type: 'website',
    url: 'https://sacred.computer',
  },
  twitter: {
    card: 'summary_large_image',
    description: Package.description,
    handle: '@internetxstudio',
    images: ['https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/57a5715d-d332-47d0-8ec8-40cfa75bf36f.png'],
    title: Package.name,
    url: 'https://sacred.computer',
  },
  icons: {
    apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    icon: '/favicon-32x32.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
    shortcut: '/favicon-16x16.png',
  },
}; 