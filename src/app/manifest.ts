import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Koda Solutions',
    short_name: 'Koda',
    description: 'حول تجارتك لإمبراطورية',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ff8c42',
    icons: [
      {
        src: '/icon',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
