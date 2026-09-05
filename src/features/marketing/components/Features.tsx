'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const marks = ['Aa', '£', '✓', '→', '⊕', '★'];

export default function Features() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-fraunces' : 'font-thmanyah-display font-black';

  return (
    <section id="features" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
            {t.features.eyebrow}
          </span>
          <h2 className={cn('mt-3 text-2xl md:text-4xl font-semibold', headingFont)}>
            {t.features.title}
          </h2>
          <p className="mt-4 text-ink-muted">{t.features.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-paper-raised p-6 flex flex-col gap-3.5"
            >
              <div
                className={cn(
                  'w-10 h-10 rounded-xl bg-accent-soft text-accent-ink flex items-center justify-center font-semibold',
                  headingFont
                )}
              >
                {marks[i]}
              </div>
              <h3 className="font-semibold text-[17px]">{item.title}</h3>
              <p className="text-sm text-ink-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
