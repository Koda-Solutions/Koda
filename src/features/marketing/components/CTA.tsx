'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function CTA() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-display' : 'font-thmanyah-display font-black';

  return (
    <section className="py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-accent text-paper py-16 px-8 text-center flex flex-col items-center gap-4"
        >
          <h2 className={cn('text-3xl md:text-5xl', headingFont)}>
            {t.cta.title}
          </h2>
          <p className="text-paper/85">{t.cta.subtitle}</p>
          <Button variant="outline" className="mt-2" href="/onboarding">
            {t.cta.button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
