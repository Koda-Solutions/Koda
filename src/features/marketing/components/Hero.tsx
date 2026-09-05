'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import StorefrontPreview from './previews/StorefrontPreview';
import { SketchUnderline } from '@/components/ui/SketchUnderline';
import {
  ArrowCurve,
  DoodleTag,
  Hatch,
  Scribble,
  Sparkle,
  Star,
  Zip,
} from '@/components/ui/Doodles';
import { themePalettes, FREE_THEME } from '@/data/themePreviews';

const nour = themePalettes.find((p) => p.key === FREE_THEME)!;

export default function Hero() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-display' : 'font-thmanyah-display font-black';

  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* The marginalia. Decorative, so hidden from assistive tech and from
          narrow screens, where there is no margin to draw in and they would
          only collide with the content. */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block text-ink"
        aria-hidden
      >
        <Star className="absolute top-[9%] start-[47%] w-7 h-7 text-[var(--marker-coral)] tilt-r-2" />
        <Sparkle className="absolute top-[62%] start-[40%] w-6 h-6 text-[var(--marker-sun)]" />
        <Scribble className="absolute top-[3%] start-[31%] w-24 h-10 opacity-60 tilt-l" />
        <Zip className="absolute top-[46%] end-[3%] w-12 h-8 text-[var(--marker-sky)] opacity-80" />
        <Hatch className="absolute bottom-[8%] end-[8%] w-16 h-16 opacity-30" />
        <Hatch className="absolute top-[10%] start-[2%] w-14 h-14 opacity-20" />
        {/* The arrow points from the buttons at the phone. It used to sit at
            30% from the top, which put its head straight through the headline
            and covered the one word the underline is there to emphasise. It
            lives below the copy now, in the gap nothing else occupies. */}
        <ArrowCurve className="hidden lg:block absolute top-[74%] start-[41%] w-24 h-14 text-[var(--marker-coral)] opacity-70 rtl:-scale-x-100" />
      </div>

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
              'mt-4 text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[0.98] tracking-[-0.035em]',
              headingFont
            )}
          >
            {t.hero.titleLine1}{' '}
            {/* The accent word is underlined by hand rather than coloured. A
                second colour on a heading is what every template does; a stroke
                drawn under it is what a person does when they want you to look
                at that word. */}
            <span className="relative inline-block">
              {t.hero.titleAccent}
              <SketchUnderline className="underline-anchor" />
            </span>
          </h1>
          <p className="mt-5 text-lg text-ink-muted max-w-[46ch]">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href="/onboarding">
              {t.hero.ctaPrimary}
            </Button>
            <Button variant="outline" href="#themes">
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
            <div className="absolute -start-12 top-24 z-20 sketch sketch-shadow-sm bg-[var(--marker-sun)] text-ink px-3 py-2 text-xs font-bold flex items-center gap-2 max-w-[150px] tilt-r-2">

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
            <DoodleTag className="absolute -top-5 -end-6 z-20 rotate-[6deg] bg-paper">
              {t.hero.tag}
            </DoodleTag>

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
