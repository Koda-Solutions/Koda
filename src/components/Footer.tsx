'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-1 border-t border-border-custom bg-card">
      <div className="container mx-auto px-6 text-center">
        <div className="text-1xl font-black mb-1 tracking-tighter text-primary">
          Koda Solutions
        </div>

        <p className="text-foreground-muted text-sm font-normal">
          © {new Date().getFullYear()} {t.footer.tagline}
        </p>
      </div>
    </footer>
  );
}
