'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const socialLinks = [
  {
    icon: <Facebook size={18} />, // تصغير الايقونات سنة بسيطة
    url: 'https://www.facebook.com/koda.solutions.eg/',
  },
  {
    icon: <Instagram size={18} />,
    url: 'https://www.instagram.com/koda.solutions_/',
  },
  {
    icon: <Linkedin size={18} />,
    url: 'https://www.linkedin.com/company/koda-solutions',
  },
  { icon: <Twitter size={18} />, url: 'https://x.com/Koda_Solutions' },
];

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    // التعديل 1: py-24 للديسكتوب (كانت 32) عشان السكشن يقصر شوية زي الـ 90%
    <section className="relative min-h-screen flex items-center pt-16 pb-12 lg:py-24 overflow-hidden bg-background">
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* التعديل 2: gap-12 للديسكتوب (كانت 16) عشان نلم الفراغات العرضية */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ================= 1. IMAGE COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 w-full flex justify-center lg:justify-end"
          >
            {/* التعديل 3: تصغير حجم الصورة لـ 480px (كانت 550px) عشان تحاكي الـ Zoom Out */}
            <div className="relative w-[260px] sm:w-[350px] lg:w-[480px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl scale-90 animate-pulse" />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-full h-full"
              >
                <Image
                  src="/Hero-Photo.png"
                  alt="Koda App Interface"
                  fill
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ================= 2. TEXT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`order-2 lg:order-1 flex flex-col justify-center ${
              isRTL
                ? 'lg:items-start text-center lg:text-right'
                : 'lg:items-start text-center lg:text-left'
            }`}
          >
            {/* Badge */}
            <div
              className={`mb-5 lg:mb-6 w-full flex justify-center lg:justify-start`}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-bold tracking-wide shadow-sm hover:bg-primary/15 transition-colors cursor-default">
                <span>🚀</span>
                <span>
                  {isRTL
                    ? 'مستقبل التجارة الإلكترونية'
                    : 'The Future of E-commerce'}
                </span>
              </span>
            </div>

            {/* Main Title */}
            {/* التعديل 4: تصغير الخط لـ 6xl (كان 7xl) عشان ميبقاش ضخم */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-[1.2] text-foreground tracking-tighter">
              {t.hero.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                {t.hero.titleAccent}
              </span>
            </h1>

            {/* Subtitle */}
            {/* التعديل 5: text-lg للديسكتوب (كان xl) */}
            <p className="text-base lg:text-lg text-foreground-muted mb-6 lg:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* CTA & Socials Wrapper */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 lg:gap-5 w-full justify-center lg:justify-start`}
            >
              {/* Main Button */}
              {/* التعديل 6: تصغير الزرار سنة بسيطة px-7 py-3.5 */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = t.hero.whatsappMessage;
                  window.open(
                    `https://wa.me/201212228091?text=${encodeURIComponent(
                      message
                    )}`,
                    '_blank'
                  );
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-primary text-white text-base lg:text-lg font-bold rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                {t.hero.ctaDesktop}
              </motion.button>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      backgroundColor: 'rgba(255, 143, 80, 0.1)',
                      color: '#FF8F50',
                      borderColor: '#FF8F50',
                    }}
                    className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-card border border-border-custom flex items-center justify-center text-foreground-muted transition-all duration-300"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
