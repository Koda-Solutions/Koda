'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    // زيادة الـ padding لـ py-6 أو py-8 عشان الفوتر ياخد حقه في الصفحة
    <footer className="py-6 lg:py-8 border-t border-border-custom bg-card relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          {/* Brand Name */}
          <div className="text-xl md:text-2xl font-black tracking-tight text-primary">
            Koda Solutions
          </div>

          {/* Copyright Text */}
          <p className="text-foreground-muted text-sm font-medium order-last md:order-first">
            © {new Date().getFullYear()} {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
