import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700', '900'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'Koda Solutions | من دكان لإمبراطورية',
  description: 'نساعد التجار المحليين على بناء أنظمة تجارة إلكترونية متكاملة.',
};

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
      </body>
    </html>
  );
}
