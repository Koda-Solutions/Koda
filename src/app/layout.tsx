import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

// تظبيط الفونت العربي (Cairo)
const cairo = Cairo({ subsets: ['arabic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kodasolutions.net'),

  // ✅ 1. كود التفعيل الخاص بجوجل
  verification: {
    google: 'nVxOxzZbIM5NOMJe2Qt7z0PyVF1_3mSXENCni1ZS1UE',
  },

  // 2. إعدادات العنوان والوصف
  title: {
    default: 'كودا | شريكك التقني للتجارة الإلكترونية',
    template: '%s | كودا',
  },
  description:
    'امتلك متجرك الإلكتروني بملكية كاملة و 0% عمولة. كودا بتقدم حلول شوبيفاي، ووردبريس، ايزي اوردر، وبرمجة خاصة، مع ربط فوري بشركات الشحن والدفع في مصر.',

  // 3. الكلمات المفتاحية (عربي وإنجليزي)
  keywords: [
    // --- Brand Identity ---
    'كودا',
    'Koda',
    'Koda Solutions',
    'Koda Agency',
    'Koda Tech',
    'Koda Software House',
    'شركة كودا',
    'كودا للبرمجيات',
    'موقع كودا',
    'Kodasolutions.net',
    'Koda Egypt',

    // --- General Services (Arabic) ---
    'تصميم مواقع',
    'انشاء متجر الكتروني',
    'برمجة مواقع',
    'تصميم متجر الكتروني',
    'تطوير مواقع الويب',
    'شركات برمجة في مصر',
    'افضل شركة تصميم مواقع',
    'عمل موقع الكتروني',
    'انشاء موقع بيع اونلاين',
    'تصميم موقع شركة',
    'تصميم ويب سايت',
    'سعر تصميم موقع الكتروني',
    'تكلفة انشاء متجر الكتروني',
    'عرض سعر تصميم موقع',
    'باقات تصميم المواقع',
    'شركات تصميم مواقع في القاهرة',
    'تصميم تطبيقات ويب',
    'تطوير تطبيقات الويب',
    'برمجة تطبيقات',

    // --- General Services (English) ---
    'Web Design Egypt',
    'Web Development Cairo',
    'Software House Egypt',
    'E-commerce Development',
    'Create Online Store',
    'Build Website',
    'Website Design Agency',
    'Custom Web Application',
    'Web Development Company',
    'Best Software House in Cairo',
    'Website Builders Egypt',
    'Online Shop Creation',
    'E-commerce Solutions',
    'Digital Transformation Agency',

    // --- Custom Development & Tech ---
    'برمجة خاصة',
    'Custom Development',
    'Custom Programming',
    'Full Stack Development',
    'Next.js Developer',
    'React.js Agency',
    'Node.js Backend',
    'Laravel Developer',
    'MERN Stack Egypt',
    'SaaS Development',
    'Dashboard Development',
    'CRM System',
    'ERP System',
    'لوحة تحكم خاصة',
    'سيستم إدارة مخازن',
    'برمجة سيستم خاص',
    'تطوير واجهات المستخدم',
    'UI/UX Design',
    'تجربة المستخدم',

    // --- Shopify & Platforms ---
    'Shopify',
    'Shopify Egypt',
    'Shopify Expert',
    'Shopify Developer',
    'شوبيفاي',
    'انشاء متجر شوبيفاي',
    'تصميم متجر شوبيفاي',
    'تعريب قالب شوبيفاي',
    'بديل شوبيفاي',
    'Shopify Alternative',
    'WooCommerce',
    'ووكومرس',
    'WordPress',
    'ووردبريس',
    'متجر ووردبريس',
    'WordPress Agency Egypt',
    'EasyOrders',
    'Zid',
    'Salla',
    'ExpandCart',
    'زد',
    'سلة',
    'اكسباند كارت',
    'منصات تجارة الكترونية',
    'افضل منصة متجر الكتروني',

    // --- Payments & Shipping Integration ---
    'Payment Integration',
    'Payment Gateway Egypt',
    'Fawry Integration',
    'Paymob Integration',
    'Instapay Integration',
    'Kashier',
    'Accept Payments Online',
    'ربط بوابات الدفع',
    'الدفع الالكتروني في مصر',
    'ربط فوري',
    'ربط بايموب',
    'الدفع عند الاستلام',
    'COD Egypt',
    'Cash on Delivery',
    'Shipping Integration',
    'Bosta Integration',
    'Mylerz Integration',
    'Aramex Integration',
    'ربط شركات الشحن',
    'بوسطة',
    'ارامكس',
    'شحن وتوصيل',
    'تتبع الشحنات',

    // --- Specific Long-Tail & Intent (Arabic) ---
    'ازاي اعمل موقع الكتروني',
    'خطوات انشاء متجر الكتروني',
    'الربح من التجارة الالكترونية',
    'تحويل المحل لمتجر الكتروني',
    'بيع اونلاين في مصر',
    'تسويق الكتروني',
    'ادارة المتاجر الالكترونية',
    'متجر الكتروني متكامل',
    'متجر متعدد التجار',
    'متجر دروبشيبينغ',
    'Dropshipping Egypt',
    'Multi-vendor Marketplace',
    'نظام افلييت',
    'Affiliate System',
    'برمجة موقع عقارات',
    'برمجة موقع مطعم',
    'منيو الكتروني',
    'QR Code Menu',
    'موقع حجز مواعيد',
    'Booking System',

    // --- Specific Long-Tail & Intent (English) ---
    'Start E-commerce Business',
    'Sell Online in Egypt',
    'Online Store Cost',
    'Cheap Website Design',
    'Professional Web Design',
    'Responsive Web Design',
    'Mobile First Design',
    'SEO Friendly Website',
    'Fast Loading Website',
    'Secure Payment Online',
    'Business Website',
    'Corporate Website',
    'Landing Page Design',
    'تصميم صفحة هبوط',
    'High Conversion Store',

    // --- Location Based ---
    'تصميم مواقع الاسكندرية',
    'شركات برمجة التجمع الخامس',
    'شركات برمجة مدينة نصر',
    'Software House Maadi',
    'Software House Sheikh Zayed',
    'Web Design Alexandria',
    'مطورين ويب مصر',
    'مستقلين برمجة',
    'Freelance Developer Egypt',
    'وكالة تسويق رقمي',
    'Digital Marketing Agency',

    // --- Comparative & Competitive ---
    'لماذا كودا',
    'مميزات البرمجة الخاصة',
    'عيوب شوبيفاي',
    'مميزات ووردبريس',
    'مقارنة منصات المتاجر',
    'افضل شركة برمجة 2026',
    'ارخص شركة تصميم مواقع',
    'حلول تقنية للشركات',
    'Tech Solutions',
    'IT Consultancy',
    'استشارات تقنية',
    'تحليل انظمة',
    'System Analysis',
    'Database Design',
    'تطوير قواعد البيانات',

    // --- Support & Maintenance ---
    'دعم فني مواقع',
    'Website Maintenance',
    'Website Hosting Egypt',
    'استضافة مواقع',
    'حجز دومين',
    'Domain Registration',
    'GoDaddy Egypt',
    'Hostinger Egypt',
    'تأمين المواقع',
    'Website Security',
    'SSL Certificate',
    'شهادة امان',
    'سرعة الموقع',
    'Website Performance',
    'Google PageSpeed',

    // --- Tech Stack Keywords ---
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Vercel',
    'AWS',
    'Cloud Hosting',
    'Server Management',
    'API Integration',
    'REST API',
    'GraphQL',
    'Headless CMS',
    'Sanity CMS',
    'Strapi',
    'PWA',
    'Progressive Web App',
    'تطبيقات الويب التقدمية',
  ],

  authors: [{ name: 'Koda Team' }],
  creator: 'Koda',
  publisher: 'Koda',

  // 4. شكل اللينك لما يتبعت شير
  openGraph: {
    title: 'كودا | ابني إمبراطوريتك الرقمية',
    description: 'متجرك الخاص بملكية 100% وبدون عمولات. حلول دفع وشحن متكاملة.',
    url: 'https://kodasolutions.net',
    siteName: 'Koda Solutions',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'كودا - حلول التجارة الإلكترونية',
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
  },
};

// 5. الـ Schema (الكود السري لتعريف البيزنس لجوجل)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Koda Solutions',
  alternateName: ['كودا', 'Koda'],
  url: 'https://kodasolutions.net',
  logo: 'https://kodasolutions.net/og-image.png',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'EG',
    addressLocality: 'Cairo',
  },
  priceRange: '$$',
  description:
    'وكالة حلول برمجية متخصصة في التجارة الإلكترونية، تقديم استشارات تقنية، وتطوير متاجر شوبيفاي وبرمجة خاصة.',
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
    <html lang="ar" dir="rtl">
      <head>
        {/* حقن الـ Schema في الهيدر */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
