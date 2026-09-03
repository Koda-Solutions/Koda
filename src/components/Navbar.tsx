'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const headingFont = language === 'en' ? 'font-fraunces' : 'font-black';
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const links = [
    { href: '#features', label: t.nav.features },
    { href: '#themes', label: t.nav.themes },
    { href: '#pricing', label: t.nav.pricing },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b"
    >
      <div className="container h-16 flex items-center justify-between">
        <span className={cn('font-semibold text-xl', headingFont)}>
          {t.nav.logo}
        </span>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-muted">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {language === 'ar' ? 'EN' : 'AR'}
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full text-ink-muted hover:text-ink transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button variant="primary" className="px-5 py-2 text-sm">
            {t.nav.cta}
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="h-9 px-3 rounded-full glass-button text-xs font-bold"
          >
            {language === 'ar' ? 'EN' : 'AR'}
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full glass-button flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-full glass-button flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t overflow-hidden"
          >
            <div className="container py-5 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-ink-muted font-medium"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.cta}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
