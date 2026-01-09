import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'كودا',
  description:
    'حول تجارتك لبراند كبير مع كودا. متجر إلكتروني خاص بيك، 0% عمولة، وربط مع شركات الشحن. ابدأ إمبراطوريتك الآن.',
  keywords: [
    'متجر إلكتروني',
    'انشاء موقع',
    'تجارة الكترونية',
    'Koda Solutions',
    'شوبيفاي',
    'WooCommerce',
    'تسويق الكتروني',
  ],
  authors: [{ name: 'Koda Solutions' }],
  openGraph: {
    title: 'Koda Solutions | من دكان لإمبراطورية',
    description:
      'حول تجارتك لبراند كبير مع كودا. متجر إلكتروني خاص بيك، 0% عمولة، وربط مع شركات الشحن.',
    url: 'https://koda-solutions.com',
    siteName: 'Koda Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Koda Solutions - From a Shop to an Empire',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كودا | من دكان.. لإمبراطورية',
    description:
      'حول تجارتك لبراند كبير مع كودا. متجر إلكتروني خاص بيك، 0% عمولة، وربط مع شركات الشحن.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon.png',
    },
  },
  appleWebApp: {
    title: 'Koda',
    statusBarStyle: 'black-translucent',
    startupImage: ['/logo.png'],
  },
};

import { Analytics } from '@vercel/analytics/react';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} font-cairo antialiased bg-background text-text`}
      >
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
