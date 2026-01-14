'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleContactClick = () => {
    const message = t.common.whatsappContactMessage;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  if (!mounted) return null;

  return (
    <nav
      // التعديل 1: شيلنا lg:h-20 وخليناها تعتمد على الـ Padding بتاع الكونتينر اللي تحت
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b transition-all duration-300 backdrop-blur-3xl"
    >
      {/* التعديل 2: h-16 (64px) ثابتة للكل، ده المقاس البروفيشنال */}
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 lg:gap-3">
          {/* تصغير اللوجو سنة بسيطة */}
          <div className="relative w-8 h-8 lg:w-9 lg:h-9 hover:scale-105 transition-transform">
            <Image
              src="/icon.png"
              alt="Koda Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* تصغير الفونت لـ 2xl بدل 3xl */}
          <div className="text-xl lg:text-2xl font-black tracking-tighter text-primary cursor-default select-none hover:scale-105 transition-transform">
            {t.nav.logo}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            // تقليل الـ padding عشان الزرار يبقى ملموم
            className="px-3 py-1.5 rounded-full hover:bg-card transition-all duration-300 flex items-center gap-2 text-xs lg:text-sm font-bold border border-transparent hover:border-border-custom group"
            aria-label="Toggle Language"
          >
            <Globe
              size={16}
              className="text-foreground-muted group-hover:text-primary transition-colors"
            />
            <span className="mt-0.5 text-foreground">
              {language === 'ar' ? 'فرانكو' : 'عربي'}
            </span>
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-card transition-all duration-300 border border-transparent hover:border-border-custom text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
            // تصغير زرار الـ CTA: px-5 py-2 وخلينا الخط text-sm
            className="bg-primary text-white text-sm font-black px-5 py-2 rounded-xl glow-orange transition-all hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/20"
          >
            {t.nav.contact}
          </motion.button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="h-9 px-3 rounded-full bg-card/50 border border-border-custom flex items-center justify-center text-[10px] font-black text-foreground hover:border-primary transition-colors"
          >
            <span className="mt-0.5">
              {language === 'ar' ? 'فرانكو' : 'عربي'}
            </span>
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full bg-card/50 border border-border-custom flex items-center justify-center text-foreground hover:border-primary transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={toggleMenu}
            className="p-1.5 -mr-1.5 rounded-full hover:bg-card transition-colors text-foreground"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-border-custom overflow-hidden backdrop-blur-3xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <div className="text-center">
                <p className="text-foreground-muted text-xs mb-3 font-bold">
                  {language === 'ar' ? 'جاهز تبدأ رحلتك؟' : 'Ready to start?'}
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleContactClick();
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary text-white text-base font-black py-3 rounded-xl glow-orange text-center shadow-lg shadow-primary/20"
                >
                  {t.nav.contact}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
