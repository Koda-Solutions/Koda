'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import Image from 'next/image'; // 1. لازم نعمل استيراد للكومبوننت ده

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border-custom transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {' '}
          {/* 2. ضفت gap عشان يبعدوا عن بعض شوية */}
          {/* 3. ضفت الصورة هنا في الأول عشان تظهر على اليمين في العربي */}
          <div className="relative w-9 h-9 lg:w-10 lg:h-10 hover:scale-105 transition-transform">
            <Image
              src="/icon.png" // Next.js بيقرا الصورة دي تلقائي من app directory
              alt="Koda Solutions Logo"
              fill
              className="object-contain" // عشان يحافظ على أبعاد اللوجو وميمطش
              priority
            />
          </div>
          <div className="text-2xl lg:text-3xl font-black tracking-tighter text-primary cursor-default select-none hover:scale-105 transition-transform">
            {t.nav.logo}
          </div>
        </div>

        {/* Desktop Actions (شاشات الكمبيوتر) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="px-4 py-2 rounded-full hover:bg-card transition-all duration-300 flex items-center gap-2 text-sm font-bold border border-transparent hover:border-border-custom group"
            aria-label="Toggle Language"
          >
            <Globe
              size={18}
              className="text-foreground-muted group-hover:text-primary transition-colors"
            />
            <span className="mt-0.5 text-foreground">
              {language === 'ar' ? 'Franco' : 'عربي'}
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full hover:bg-card transition-all duration-300 border border-transparent hover:border-border-custom text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
            className="bg-primary text-white text-sm lg:text-base font-black px-6 py-2.5 rounded-xl glow-orange transition-all hover:bg-primary/90 cursor-pointer shadow-lg shadow-primary/20"
          >
            {t.nav.contact}
          </motion.button>
        </div>

        {/* Mobile Actions (ظاهرين في الموبايل فوق) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="w-10 h-10 rounded-full bg-card/50 border border-border-custom flex items-center justify-center text-xs font-black text-foreground hover:border-primary transition-colors"
          >
            {language === 'ar' ? 'FR' : 'ع'}
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-full bg-card/50 border border-border-custom flex items-center justify-center text-foreground hover:border-primary transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 -mr-2 rounded-full hover:bg-card transition-colors text-foreground"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (القائمة الجانبية) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border-custom overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              <div className="text-center">
                <p className="text-foreground-muted text-sm mb-4 font-bold">
                  {language === 'ar' ? 'جاهز تبدأ رحلتك؟' : 'Ready to start?'}
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleContactClick();
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary text-white text-lg font-black py-4 rounded-2xl glow-orange text-center shadow-lg shadow-primary/20"
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
