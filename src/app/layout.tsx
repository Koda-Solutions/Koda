import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import FloatingWhatsApp from '@/components/FloatingWhatsApp'; // تأكد ان المسار صح

// تظبيط الفونت العربي (Cairo) والانجليزي (Inter)
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kodasolutions.net'),

  // ✅ 1. كود التفعيل الخاص بجوجل
  verification: {
    google: 'nVxOxzZbIM5NOMJe2Qt7z0PyVF1_3mSXENCni1ZS1UE',
  },

  // 2. إعدادات العنوان والوصف (مأخوذة من الهوية القوية للمشروع)
  title: {
    default: 'كودا | من دكان.. لإمبراطورية',
    template: '%s | كودا',
  },
  description:
    'حول دكانك لإمبراطورية رقمية بملكية كاملة و0% عمولة. نصمم لك متجرك على Shopify، Easy Order، أو برمجة خاصة (Custom)، مع ربط ذكي وفوري بكافة بوابات الدفع وشركات الشحن في مصر.',

  // 3. الكلمات المفتاحية (SEO Keywords Bomb)
  keywords: [
    'كودا',
    'Koda',
    'Koda Solutions',
    'تصميم متاجر الكترونية',
    'برمجة خاصة',
    'Shopify Egypt',
    'شوبيفاي مصر',
    'انشاء متجر الكتروني',
    'Software House Egypt',
    'شركات برمجة في مصر',
    'Web Development Cairo',
    'Next.js Developer',
    'SaaS Development',
    'E-commerce Solutions',
    'بوابات الدفع مصر',
    'شركات الشحن مصر',
    'Digital Transformation',
    'Full Stack Development',
    'React.js Agency',
    'ازاي اعمل موقع الكتروني',
    'البيع اونلاين',
    'دروبشيبينغ مصر',
  ],

  authors: [{ name: 'Koda Team' }],
  creator: 'Koda Solutions',
  publisher: 'Koda Solutions',

  // 4. السوشيال ميديا والشير
  openGraph: {
    title: 'كودا | من دكان.. لإمبراطورية',
    description:
      'امتلك متجرك الإلكتروني بملكية كاملة و0% عمولة. حلول احترافية وبرمجة خاصة.',
    url: 'https://kodasolutions.net',
    siteName: 'Koda Solutions',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // لازم تكون الصورة دي موجودة في folder public
        width: 1200,
        height: 630,
        alt: 'كودا - حلول التجارة الإلكترونية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كودا | من دكان.. لإمبراطورية',
    description: 'متجرك الخاص بملكية 100% وبدون عمولات.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

// 5. الـ Schema (Structured Data) لجوجل
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Koda Solutions',
  alternateName: ['كودا', 'Koda'],
  url: 'https://kodasolutions.net',
  logo: 'https://kodasolutions.net/icon.png',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'EG',
    addressLocality: 'Cairo',
  },
  priceRange: '$$',
  description:
    'وكالة حلول برمجية متخصصة في التجارة الإلكترونية وتطوير المتاجر.',
  offers: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Custom E-commerce Development',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Shopify Consultation & Setup',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* حقن الـ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cairo.variable} ${inter.variable} font-cairo antialiased bg-background text-foreground`}
      >
        <Providers>
          {/* المحتوى الأساسي للصفحة */}
          <main className="min-h-screen flex flex-col">{children}</main>

          {/* ✅ الفلوتينج واتساب هنا عشان يظهر فوق كل الصفحات */}
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
