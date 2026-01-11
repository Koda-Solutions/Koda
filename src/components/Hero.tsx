'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const socialLinks = [
  {
    icon: <Facebook size={18} />,
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
    <section className="relative min-h-[70vh] lg:min-h-[90vh] flex items-center pt-16 lg:pt-24 overflow-hidden bg-background">
      {/* Background Accents */}
      <div className="absolute top-1/4 -right-20 w-60 h-60 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-[80px] lg:blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 lg:w-80 lg:h-80 bg-secondary/10 rounded-full blur-[80px] lg:blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center ${
            isRTL ? 'lg:text-right' : 'lg:text-left'
          } z-10 order-2 lg:order-1`}
        >
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 leading-tight text-foreground">
            {t.hero.title} <br />
            <span className="text-primary glow-text">{t.hero.titleAccent}</span>
          </h1>
          <p
            className={`text-xs md:text-base lg:text-lg mb-6 lg:mb-10 max-w-lg mx-auto ${
              isRTL ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'
            } text-foreground-muted leading-relaxed`}
          >
            {t.hero.subtitle}
          </p>

          <div
            className={`flex flex-col items-center ${
              isRTL ? 'lg:items-end' : 'lg:items-start'
            } gap-8 lg:gap-10`}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const message = t.hero.whatsappMessage;
                const encodedMessage = encodeURIComponent(message);
                window.open(
                  `https://wa.me/201212228091?text=${encodedMessage}`,
                  '_blank'
                );
              }}
              className="w-full sm:w-auto bg-primary text-white text-sm lg:text-lg font-black px-6 lg:px-8 py-3 lg:py-4 rounded-xl glow-orange hover:bg-primary/90 transition-all cursor-pointer min-h-[44px] lg:min-h-[48px]"
            >
              <span className="hidden sm:inline">{t.hero.ctaDesktop}</span>
              <span className="sm:hidden">{t.hero.ctaMobile}</span>
            </motion.button>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border-custom flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full mx-auto md:w-full h-72 md:h-80 lg:h-auto aspect-square flex items-center justify-center order-1 lg:order-2"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl opacity-40" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <div className="relative w-[90%] h-[90%] lg:w-[85%] lg:h-[85%]">
              <Image
                src="/Hero-Photo.png"
                alt="Koda Mobile Store Application"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
