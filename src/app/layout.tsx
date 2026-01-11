import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'Koda Solutions | كودا - شريكك التقني للتجارة الإلكترونية والبرمجة',
  description:
    'كودا (Koda Solutions) هي وكالة برمجية رائدة في مصر والوطن العربي. متخصصون في إنشاء المتاجر الإلكترونية (Shopify, WordPress), البرمجة الخاصة, وتطوير المواقع. حلول تقنية متكاملة لنمو أعمالك.',
  keywords: [
    'Koda Solutions',
    'كودا',
    'Koda Agency',
    'Shopify Egypt',
    'شوبيفاي مصر',
    'WordPress Agency',
    'ووردبريس',
    'Custom Development',
    'برمجة خاصة',
    'شركات برمجة',
    'تصميم متاجر',
    'إنشاء متجر إلكتروني',
    'E-commerce solutions Egypt',
    'Web development agency',
    'تطوير مواقع',
    'Digital transformation',
    'Koda',
  ],
  authors: [{ name: 'Koda Solutions' }],
  creator: 'Koda Solutions',
  alternates: {
    canonical: 'https://kodasolutions.net',
  },
  openGraph: {
    title: 'Koda Solutions | كودا - ابني متجرك بأي تقنية تناسبك',
    description:
      'شوبيفاي؟ ووردبريس؟ برمجة خاصة؟ إحنا بنعمل كل حاجة. استلم متجرك مربوط بشركات الشحن والدفع فوراً مع كودا.',
    url: 'https://kodasolutions.net',
    siteName: 'Koda Solutions',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Koda Solutions - حلول التجارة الإلكترونية المتكاملة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koda Solutions | كودا - شوبيفاي، ووردبريس، وبرمجة خاصة',
    description:
      'كل حلول التجارة الإلكترونية في مكان واحد. شحن، دفع، وتطوير كامل مع كودا سوليوشنز.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Koda Solutions',
    alternateName: ['Koda', 'كودا', 'Koda Agency'],
    url: 'https://kodasolutions.net',
    logo: 'https://kodasolutions.net/icon.png',
    image: 'https://kodasolutions.net/og-image.png',
    sameAs: [
      'https://www.facebook.com/kodasolutions',
      'https://www.linkedin.com/company/kodasolutions',
      'https://x.com/kodasolutions',
      'https://www.instagram.com/kodasolutions',
    ],
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressRegion: 'Egypt',
    },
    description:
      'Koda Solutions is a leading software house specializing in E-commerce development, custom software, and digital transformation.',
    offers: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Consultation',
        },
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
