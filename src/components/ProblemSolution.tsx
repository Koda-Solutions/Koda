'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '@/lib/utils';

export default function ProblemSolution() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-fraunces' : 'font-black';

  return (
    <section id="problem" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
            {t.problem.eyebrow}
          </span>
          <h2 className={cn('mt-3 text-2xl md:text-4xl font-semibold', headingFont)}>
            {t.problem.title}
          </h2>
          <p className="mt-4 text-ink-muted">{t.problem.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-line bg-paper-raised p-8 opacity-90"
          >
            <h3 className={cn('font-semibold text-lg mb-1.5', headingFont)}>
              {t.problem.beforeTitle}
            </h3>
            <p className="text-sm text-ink-muted mb-5">
              {t.problem.beforeSubtitle}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {t.problem.beforeItems.map((item) => (
                <span
                  key={item}
                  className="text-sm font-semibold px-3.5 py-2 rounded-full bg-paper border border-line text-ink-muted line-through decoration-ink-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-accent-soft p-8"
          >
            <h3 className={cn('font-semibold text-lg mb-1.5 text-accent-ink', headingFont)}>
              {t.problem.afterTitle}
            </h3>
            <p className="text-sm text-ink-muted mb-5">
              {t.problem.afterSubtitle}
            </p>
            <ul className="flex flex-col gap-3.5">
              {t.problem.afterItems.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-bold text-accent-ink"
                >
                  <span className="w-6 h-6 rounded-full bg-paper-raised flex items-center justify-center text-xs">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
