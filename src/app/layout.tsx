import type { Metadata } from 'next';
import { Archivo, Caveat, Karla } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

/**
 * Display: Archivo, at its heaviest.
 *
 * The headline is a bold grotesque, not handwriting. That is the single thing
 * that makes a sketchbook page look designed rather than scrappy: one very heavy
 * voice holding the composition, with everything drawn arranged around it.
 *
 * The previous version set headings in Caveat, which has a small x-height and
 * turns to mush below about 32px. Handwriting is now reserved for margin notes,
 * where it belongs and where it reads.
 */
const display = Archivo({
  subsets: ['latin'],
  variable: '--font-display-sans',
  display: 'swap',
  weight: ['700', '800', '900'],
});

/**
 * Annotation: Caveat.
 *
 * Margin notes, arrows, doodle captions and stickers. Never a headline and never
 * a paragraph. A real handwriting face rather than a rounded sans pretending,
 * which is the difference between a page that looks drawn and one that looks
 * merely friendly.
 */
const hand = Caveat({
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
  // One weight. Caveat only ever appears as short annotations, and three
  // weights of it were three more files on the wire for a difference nobody
  // can see at the two sizes it is used at.
  weight: ['600'],
});

/**
 * Body: Karla.
 *
 * A humanist grotesque with slightly odd proportions, so it sits next to
 * handwriting without looking like a system font that wandered in. Deliberately
 * not Inter, and deliberately not a second handwriting face: nobody reads three
 * paragraphs of handwriting, and this page has to be read by someone deciding
 * whether to trust us with their shop.
 */
const body = Karla({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

/**
 * Thmanyah Sans, the Arabic body face.
 *
 * Only the weights the page actually sets. Every declared face is preloaded on
 * every visit, and these are Arabic fonts carrying a full Arabic glyph set at
 * roughly 75KB each, so an unused weight is not a rounding error: it is 75KB
 * of a mobile visitor's data competing with the HTML for bandwidth. Light (300)
 * was declared and referenced nowhere.
 *
 * A weight that is not here still renders. The browser synthesises it from the
 * nearest face, which is exactly the bug documented in CLAUDE.md, where Arabic
 * headings set to 600 came out visibly thinner than intended. So before setting
 * a weight on Arabic text, check it is in this list, and add the file if it is
 * not, rather than letting the browser guess.
 */
const thmanyahSans = localFont({
  src: [
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

/**
 * Thmanyah Serif Display, the Arabic heading face.
 *
 * One weight, because the page uses exactly one. Every one of the fifteen
 * places that reaches for this face pairs it with font-black, matching the
 * brand's own bold look, so Regular, Medium and Bold were shipping and
 * preloading 240KB that nothing on the site could ever display.
 *
 * If a lighter Arabic heading is ever wanted, add the file back here. Setting
 * the class alone will not do it.
 */
const thmanyahSerifDisplay = localFont({
  src: [
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
    default: 'كودا | من بيدج لبراند',
    template: '%s | كودا',
  },
  description:
    'كودا بيحوّل صفحتك على انستجرام أو فيسبوك لمتجر إلكتروني حقيقي يبان محترف. اختار تصميم، وابدأ تبيع كاش أو أونلاين من غير برمجة.',

  keywords: [
    'كودا',
    'Koda',
    'من صفحة لبراند',
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
    title: 'كودا | من بيدج لبراند.',
    description:
      'منصة بتحوّل صفحتك على انستجرام أو فيسبوك لمتجر حقيقي يبان محترف ويثق فيه عملاؤك.',
    url: 'https://kodasolutions.net',
    siteName: 'Koda',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'كودا، من بيدج لبراند',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كودا | من بيدج لبراند.',
    description:
      'منصة بتحوّل صفحتك على انستجرام أو فيسبوك لمتجر حقيقي يبان محترف ويثق فيه عملاؤك.',
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
    'منصة بتساعد التاجر المصري يحوّل صفحته على السوشيال ميديا لمتجر إلكتروني حقيقي يثق فيه عملاؤه، من غير خبرة تقنية.',
  slogan: 'من بيدج لبراند.',
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
      className={`${display.variable} ${hand.variable} ${body.variable} ${thmanyahSans.variable} ${thmanyahSerifDisplay.variable}`}
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
