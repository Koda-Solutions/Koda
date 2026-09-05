'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Wallet, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn, handFont } from '@/lib/utils';
import { railClass, railItem, SwipeHint } from '@/components/ui/Rail';

const icons = [Zap, ShieldCheck, Wallet, Sparkles];

/**
 * Speed, security, cost and simplicity, as the four questions a seller actually asks
 * rather than four adjectives about us.
 *
 * A feature strip that says "Fast · Secure · Affordable · Simple" is a claim and reads
 * as one. The same four points asked in the seller's own words, and answered plainly,
 * are an argument. That is the whole reason this section is shaped as questions.
 */
export default function Assurances() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-display' : 'font-thmanyah-display font-black';
  const hintFont = handFont(language);

  return (
    <section className="py-20 md:py-24 bg-paper-raised border-y border-line">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
            {t.assurances.eyebrow}
          </span>
          <h2 className={cn('mt-3 text-3xl md:text-5xl', headingFont)}>
            {t.assurances.title}
          </h2>
          <p className="mt-4 text-ink-muted">{t.assurances.subtitle}</p>
        </motion.div>

        <SwipeHint text={t.common.swipe} className={hintFont} />
        <div className={railClass('md', 'gap-5 md:grid-cols-2')}>
          {t.assurances.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className={cn(
                  'bg-paper-raised p-6 flex gap-4 sketch-shadow-sm',
                  i % 2 === 0 ? 'sketch tilt-l' : 'sketch-2 tilt-r',
                  railItem('md')
                )}
              >
                <span className="w-10 h-10 rounded-xl bg-accent-soft text-accent-ink flex items-center justify-center shrink-0">
                  <Icon size={19} strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-ink-muted text-[15px] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
