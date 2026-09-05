'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

/**
 * Native <details> rather than a JavaScript accordion.
 *
 * It is keyboard accessible and findable by browser search for free, it works before
 * hydration, and on a phone on bad mobile data that matters more than an animation.
 */
export default function FAQ() {
  const { t, language } = useLanguage();
  const headingFont = language === 'en' ? 'font-display' : 'font-thmanyah-display font-black';

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="container grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
            {t.faq.eyebrow}
          </span>
          <h2 className={cn('mt-3 text-2xl md:text-4xl font-semibold', headingFont)}>
            {t.faq.title}
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {t.faq.items.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group border-b border-line first:border-t"
            >
              <summary
                className={cn(
                  'flex items-center gap-4 py-5 cursor-pointer list-none min-h-14',
                  'text-[17px] hover:text-accent-ink transition-colors',
                  headingFont
                )}
              >
                <span className="flex-1">{item.q}</span>
                <Plus
                  size={18}
                  className="shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 -mt-1 text-ink-muted text-[15px] leading-relaxed max-w-[62ch]">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
