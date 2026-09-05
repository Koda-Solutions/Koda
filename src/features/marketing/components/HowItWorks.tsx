'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

/**
 * Three steps, numbered.
 *
 * The numbers earn their place here: this is a real sequence a seller moves through,
 * and showing how short it is answers "I am not technical" better than claiming to be
 * simple would. The rail connecting the steps is the message.
 */
export default function HowItWorks() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-display' : 'font-thmanyah-display font-black';

  return (
    <section id="how" className="py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
            {t.howItWorks.eyebrow}
          </span>
          <h2 className={cn('mt-3 text-2xl md:text-4xl font-semibold', headingFont)}>
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-ink-muted">{t.howItWorks.subtitle}</p>
        </motion.div>

        <ol className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* the rail, desktop only: it says "this is short" at a glance */}
          <span
            aria-hidden
            className="hidden md:block absolute top-6 inset-x-[16%] h-px bg-line"
          />

          {t.howItWorks.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <span
                className={cn(
                  'relative z-10 w-12 h-12 rounded-full bg-accent text-paper flex items-center justify-center text-lg',
                  language === 'en' ? 'font-display font-semibold' : 'font-thmanyah-display font-black'
                )}
              >
                {i + 1}
              </span>
              <h3 className={cn('mt-5 text-lg font-semibold', headingFont)}>
                {step.title}
              </h3>
              <p className="mt-2 text-ink-muted text-[15px] leading-relaxed">
                {step.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
