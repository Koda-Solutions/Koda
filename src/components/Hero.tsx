'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

export default function Hero() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-fraunces' : 'font-black';

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
            <Button variant="primary">{t.hero.ctaPrimary}</Button>
            <Button variant="glass">{t.hero.ctaSecondary}</Button>
          </div>
          <p className="mt-4 text-sm text-ink-muted">{t.hero.fine}</p>
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
            className="relative w-[280px] rounded-[34px] bg-paper-raised border border-line shadow-xl p-3.5"
          >
            <div className="absolute -start-12 top-24 glass rounded-2xl px-3 py-2 text-xs font-bold flex items-center gap-2 max-w-[140px] shadow-lg">

              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              {t.hero.phone.whatsappBubble}
            </div>

            <div className="rounded-[22px] overflow-hidden border border-line bg-paper">
              <div className="flex items-center justify-between px-4 pt-3.5 pb-2.5 font-bold text-sm">
                <span>{t.hero.phone.storeName}</span>
                <span className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div className="mx-3 mb-2.5 h-[70px] rounded-xl bg-gradient-to-br from-accent-soft to-paper-raised border border-line flex items-center justify-center text-xs font-bold text-accent-ink text-center px-3">
                {t.hero.phone.banner}
              </div>
              <div className="grid grid-cols-2 gap-2 px-3 pb-3">
                {t.hero.phone.products.map((p) => (
                  <div
                    key={p.name}
                    className="bg-paper-raised border border-line rounded-xl p-2"
                  >
                    <div className="h-14 rounded-lg bg-[repeating-linear-gradient(135deg,var(--line),var(--line)_6px,transparent_6px,transparent_12px)] mb-1.5" />
                    <div className="text-[11px] font-semibold">{p.name}</div>
                    <div className="text-[11px] font-bold text-accent-ink mt-0.5">
                      {p.price}
                    </div>
                    <div className="mt-1.5 text-[10px] font-bold text-center bg-accent-soft text-accent-ink rounded-md py-1">
                      {t.hero.phone.addToCart}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-around px-2 py-2.5 border-t border-line">
                {t.hero.phone.nav.map((item, i) => (
                  <span
                    key={item}
                    className={cn(
                      'text-[10px] font-bold',
                      i === 0 ? 'text-accent-ink' : 'text-ink-muted'
                    )}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
