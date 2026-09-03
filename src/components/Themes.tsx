'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '@/lib/utils';

const previews = [
  {
    bg: '#EFE6D6',
    bars: ['#B99A6B', '#D8C9A8'],
    blocks: '#DDCDAE',
  },
  {
    bg: '#E4EEEA',
    bars: ['#146B64', '#8FBDB4'],
    blocks: '#BFDAD2',
  },
  {
    bg: '#22201A',
    bars: ['#D8C9A8', '#4B463A'],
    blocks: '#3A362C',
  },
];

export default function Themes() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-fraunces' : 'font-thmanyah-display font-black';

  return (
    <section id="themes" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
            {t.themes.eyebrow}
          </span>
          <h2 className={cn('mt-3 text-2xl md:text-4xl font-semibold', headingFont)}>
            {t.themes.title}
          </h2>
          <p className="mt-4 text-ink-muted">{t.themes.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.themes.items.map((theme, i) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-paper-raised overflow-hidden"
            >
              <div
                className="h-[150px] p-4 flex flex-col gap-2"
                style={{ background: previews[i].bg }}
              >
                <div
                  className="h-2 w-2/5 rounded-full"
                  style={{ background: previews[i].bars[0] }}
                />
                <div
                  className="h-2 w-4/5 rounded-full"
                  style={{ background: previews[i].bars[1] }}
                />
                <div className="flex gap-2 flex-1 mt-1.5">
                  {[0, 1, 2].map((j) => (
                    <div
                      key={j}
                      className="flex-1 rounded-lg"
                      style={{ background: previews[i].blocks }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-line">
                <div className={cn('font-semibold text-base', headingFont)}>
                  {theme.name}
                </div>
                <div className="text-sm text-ink-muted mt-0.5">
                  {theme.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
