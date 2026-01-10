import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'كودا | شريكك التقني للتجارة الإلكترونية',
  description:
    'وكالة برمجية متكاملة لإنشاء المتاجر الإلكترونية. بنقدملك حلول احترافية سواء على Shopify، WordPress، EasyOrders، أو برمجة خاصة (Custom). بنسلمك السيستم مربوط جاهز بشركات الشحن وبوابات الدفع، مع استشارة تختارلك الأنسب لميزانيتك.',
  keywords: [
    'إنشاء متجر إلكتروني',
    'تصميم مواقع',
    'كودا',
    'Shopify Egypt',
    'خبراء شوبيفاي',
    'WordPress Woocommerce',
    'ووردبريس',
    'EasyOrders',
    'برمجة خاصة',
    'Laravel',
    'شركات شحن مصر',
    'بوابات دفع إلكتروني',
    'تجارة إلكترونية',
    'تطوير ويب',
  ],
  authors: [{ name: 'Koda Team' }],
  creator: 'Koda',
  publisher: 'Koda',
  metadataBase: new URL('https://koda-solutions.vercel.app'), // متنساش تغير الدومين لما تحجز
  openGraph: {
    title: 'كودا | ابني متجرك بأي تقنية تناسبك',
    description:
      'شوبيفاي؟ ووردبريس؟ برمجة خاصة؟ إحنا بنعمل كل حاجة. استلم متجرك مربوط بشركات الشحن والدفع فوراً.',
    url: 'https://koda-solutions.vercel.app/',
    siteName: 'كودا',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'كودا - حلول التجارة الإلكترونية المتكاملة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كودا | شوبيفاي، ووردبريس، وبرمجة خاصة',
    description:
      'كل حلول التجارة الإلكترونية في مكان واحد. شحن، دفع، وتطوير كامل.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
};
