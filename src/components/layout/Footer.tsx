'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-display' : 'font-thmanyah-display font-black';

  return (
    <footer className="py-10 border-t border-line">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-mark.png"
            alt=""
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className={cn('font-semibold text-lg', headingFont)}>
            {t.nav.logo}
          </span>
        </div>
        <div className="flex gap-6 text-sm text-ink-muted">
          <a href="#features" className="hover:text-ink">
            {t.nav.features}
          </a>
          <a href="#themes" className="hover:text-ink">
            {t.nav.themes}
          </a>
          <a href="#pricing" className="hover:text-ink">
            {t.nav.pricing}
          </a>
        </div>
        <span className="text-sm text-ink-muted">{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
