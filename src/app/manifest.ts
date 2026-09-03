import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Koda',
    short_name: 'Koda',
    description: 'من بيدج لبراند حقيقي يثق فيه عملاؤك',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f2ea',
    theme_color: '#146b64',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
