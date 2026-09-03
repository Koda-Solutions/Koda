import type { Metadata } from 'next';
import { Fraunces, Figtree } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from '@/components/Providers';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const thmanyahSans = localFont({
  src: [
    {
      path: '../fonts/thmanyah-sans/thmanyah-sans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/thmanyah-sans/thmanyah-sans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/thmanyah-sans/thmanyah-sans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/thmanyah-sans/thmanyah-sans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/thmanyah-sans/thmanyah-sans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-arabic',
  display: 'swap',
});

const thmanyahSerifDisplay = localFont({
  src: [
    {
      path: '../fonts/thmanyah-serif-display/thmanyahserifdisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/thmanyah-serif-display/thmanyahserifdisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/thmanyah-serif-display/thmanyahserifdisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/thmanyah-serif-display/thmanyahserifdisplay-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-arabic-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kodasolutions.net'),

  verification: {
    google: 'nVxOxzZbIM5NOMJe2Qt7z0PyVF1_3mSXENCni1ZS1UE',
  },

  title: {
    default: 'كودا | افتح متجرك الإلكتروني في دقايق',
    template: '%s | كودا',
  },
  description:
    'كودا هي أسهل طريقة للتاجر المصري إنه يفتح متجر إلكتروني حقيقي. اختار تصميم، ضيف منتجاتك، واستقبل الدفع كاش أو أونلاين من غير أي برمجة.',

  keywords: [
    'كودا',
    'Koda',
    'إنشاء متجر إلكتروني',
    'متجر إلكتروني مصر',
    'Shopify Egypt',
    'شوبيفاي مصر',
    'دفع عند الاستلام',
    'بوابات الدفع مصر',
    'شركات الشحن مصر',
    'E-commerce Egypt',
    'SaaS Egypt',
    'بيزنس أونلاين',
  ],

  authors: [{ name: 'Koda Team' }],
  creator: 'Koda',
  publisher: 'Koda',

  openGraph: {
    title: 'كودا | افتح متجرك الإلكتروني في دقايق',
    description:
      'اختار تصميم، ضيف منتجاتك، واستقبل الدفع كاش أو أونلاين من غير أي برمجة.',
    url: 'https://kodasolutions.net',
    siteName: 'Koda',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'كودا، افتح متجرك الإلكتروني',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كودا | افتح متجرك الإلكتروني في دقايق',
    description: 'اختار تصميم، ضيف منتجاتك، وابدأ البيع من غير برمجة.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: [{ url: '/icon.png', sizes: '512x512', type: 'image/png' }],
    apple: '/apple-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Koda',
  alternateName: ['كودا'],
  url: 'https://kodasolutions.net',
  logo: 'https://kodasolutions.net/icon.png',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'منصة تساعد التاجر المصري يفتح متجره الإلكتروني بنفسه، من غير خبرة تقنية.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EGP',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${fraunces.variable} ${figtree.variable} ${thmanyahSans.variable} ${thmanyahSerifDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-paper text-ink">
        <Providers>
          <main className="min-h-screen flex flex-col">{children}</main>
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
