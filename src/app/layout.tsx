import type { Metadata } from 'next';
import { Cairo } from 'next/font/google'; // استخدمنا كايرو عشان العربي يبقى مظبوط
import './globals.css';

// إعداد الفونت العربي
const cairo = Cairo({ subsets: ['arabic'] });

// دي الميتاداتا اللي اتفقنا عليها
export const metadata: Metadata = {
  title: 'كودا | شريكك التقني للتجارة الإلكترونية',
  description:
    'وكالة برمجية متكاملة لإنشاء المتاجر الإلكترونية. بنقدملك حلول احترافية سواء على Shopify، WordPress، EasyOrders، أو برمجة خاصة. بنسلمك السيستم مربوط جاهز بشركات الشحن وبوابات الدفع.',
  keywords: [
    'إنشاء متجر إلكتروني',
    'تصميم مواقع',
    'كودا',
    'Shopify Egypt',
    'WordPress Woocommerce',
    'EasyOrders',
    'برمجة خاصة',
    'شركات شحن مصر',
    'بوابات دفع إلكتروني',
  ],
  authors: [{ name: 'Koda Team' }],
  openGraph: {
    title: 'كودا | ابني متجرك بأي تقنية تناسبك',
    description:
      'شوبيفاي؟ ووردبريس؟ برمجة خاصة؟ إحنا بنعمل كل حاجة. استلم متجرك مربوط بشركات الشحن والدفع فوراً.',
    url: 'https://koda-solutions.vercel.app',
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
};

// ده الجزء اللي كان ناقص عندك (RootLayout)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
