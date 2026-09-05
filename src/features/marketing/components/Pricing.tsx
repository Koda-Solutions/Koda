'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-fraunces' : 'font-thmanyah-display font-black';

  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
            {t.pricing.eyebrow}
          </span>
          <h2 className={cn('mt-3 text-2xl md:text-4xl font-semibold', headingFont)}>
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-ink-muted">{t.pricing.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={cn(
                'rounded-2xl border p-7 flex flex-col gap-4 h-full',
                plan.featured
                  ? 'bg-accent border-accent text-paper'
                  : 'bg-paper-raised border-line'
              )}
            >
              <div className={cn('font-semibold text-lg', headingFont)}>
                {plan.name}
              </div>
              <div className={cn('text-3xl font-semibold', headingFont)}>
                {plan.price}
                {plan.period && (
                  <span
                    className={cn(
                      'text-sm font-semibold ms-1.5',
                      plan.featured ? 'text-paper/75' : 'text-ink-muted'
                    )}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <div
                className={cn(
                  'text-sm',
                  plan.featured ? 'text-paper/85' : 'text-ink-muted'
                )}
              >
                {plan.desc}
              </div>
              <ul className="flex flex-col gap-2.5 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={17} className="mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href="/onboarding"
                variant={plan.featured ? 'glass' : 'primary'}
                className="w-full mt-auto"
              >
                {t.pricing.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
