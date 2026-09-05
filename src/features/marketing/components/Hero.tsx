'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import StorefrontPreview from './previews/StorefrontPreview';
import { themePalettes, FREE_THEME } from '@/data/themePreviews';

const nour = themePalettes.find((p) => p.key === FREE_THEME)!;

export default function Hero() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-display' : 'font-thmanyah-display font-black';

  return (
    <header className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
            {t.hero.eyebrow}
          </span>
          <h1
            className={cn(
              'mt-4 text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.12]',
              headingFont
            )}
          >
            {t.hero.titleLine1}{' '}
            <span className="text-accent-ink">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 text-lg text-ink-muted max-w-[46ch]">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href="/onboarding">
              {t.hero.ctaPrimary}
            </Button>
            <Button variant="glass" href="#themes">
              {t.hero.ctaSecondary}
            </Button>
          </div>
          <p className="mt-4 text-sm text-ink-muted">{t.hero.fine}</p>

          {/* The cost and speed objections arrive before anyone scrolls, so they get
              answered here in three words each rather than waiting for a section. */}
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
            {t.hero.trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[13px] font-semibold text-ink-muted"
              >
                <Check size={15} className="text-accent-ink shrink-0" strokeWidth={2.6} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-[6%_12%] rounded-full bg-accent-soft blur-3xl -z-10" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[300px] rounded-[38px] bg-paper-raised border border-line shadow-2xl p-3"
          >
            <div className="absolute -start-12 top-24 glass rounded-2xl px-3 py-2 text-xs font-bold flex items-center gap-2 max-w-[140px] shadow-lg">

              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              {t.hero.phone.whatsappBubble}
            </div>

            {/*
              The real storefront renderer, not a sketch of one.

              This used to be a hand-drawn approximation with hatched grey boxes
              where the products go. A seller looking at it learned nothing about
              whether Koda would make their shop look good, which is the only
              question the hero has to answer. Now it is the same component the
              theme gallery uses, in the Nour palette every free store starts on,
              so what is promised here is literally what gets built.
            */}
            <div className="rounded-[24px] overflow-hidden border border-line">
              <StorefrontPreview
                palette={nour}
                copy={t.themes.preview}
                heightClass="h-[430px]"
                textClass="text-[10px]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
