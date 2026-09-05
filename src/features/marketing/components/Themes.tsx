'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { themePalettes } from '@/data/themePreviews';
import StorefrontPreview from './previews/StorefrontPreview';
import DashboardPreview from './previews/DashboardPreview';

type Surface = 'storefront' | 'dashboard';

export default function Themes() {
  const { t, language } = useLanguage();
  const [surface, setSurface] = useState<Surface>('storefront');
  const headingFont = language === 'en' ? 'font-display' : 'font-thmanyah-display font-black';
  const p = t.themes.preview;

  const tabs: { id: Surface; label: string }[] = [
    { id: 'storefront', label: t.themes.tabs.storefront },
    { id: 'dashboard', label: t.themes.tabs.dashboard },
  ];

  const groups: { mode: 'light' | 'dark'; label: string }[] = [
    { mode: 'light', label: t.themes.groups.light },
    { mode: 'dark', label: t.themes.groups.dark },
  ];

  return (
    <section id="themes" className="py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wide uppercase text-accent-ink">
              {t.themes.eyebrow}
            </span>
            <h2 className={cn('mt-3 text-3xl md:text-5xl', headingFont)}>
              {t.themes.title}
            </h2>
            <p className="mt-4 text-ink-muted">{t.themes.subtitle}</p>
          </div>

          {/* Storefront and dashboard are two halves of one purchase, so they share a
              control rather than doubling the length of the section. */}
          <div
            role="tablist"
            aria-label={t.themes.tabs.ariaLabel}
            className="lg:ms-auto shrink-0 inline-flex gap-1 p-1 rounded-xl border border-line bg-paper-raised self-start"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={surface === tab.id}
                onClick={() => setSurface(tab.id)}
                className={cn(
                  'px-4 py-2.5 rounded-lg text-sm transition-colors min-h-11',
                  language === 'en' ? 'font-semibold' : 'font-bold',
                  surface === tab.id
                    ? 'bg-accent text-paper'
                    : 'text-ink-muted hover:text-ink'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {groups.map((group) => (
          <div key={group.mode} className="mb-12 last:mb-0">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-wide text-ink-muted">
                {group.label}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {themePalettes
                .map((palette, i) => ({ palette, theme: t.themes.items[i] }))
                .filter(({ palette }) => palette.mode === group.mode)
                .map(({ palette, theme }, i) => (
                  <motion.div
                    key={palette.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className={cn(
                      'bg-paper-raised overflow-hidden flex flex-col sketch-shadow-sm',
                      i % 3 === 0 ? 'sketch-frame tilt-l' : i % 3 === 1 ? 'sketch-frame-2' : 'sketch-frame tilt-r'
                    )}
                  >
                    <motion.div
                      key={surface}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      {surface === 'storefront' ? (
                        <StorefrontPreview
                          palette={palette}
                          heightClass="h-[330px]"
                          copy={{
                            // Each theme sells something different. Six cards
                            // showing the same shop in six colours is what made
                            // this section read as one screenshot recoloured.
                            storeName: theme.shop.storeName,
                            heroTitle: theme.shop.heroTitle,
                            heroSub: theme.shop.heroSub,
                            categories: theme.shop.categories as [string, string, string],
                            products: theme.shop.products,
                            shapes: theme.shop.shapes,
                            saleBadge: p.saleBadge,
                            cta: theme.shop.cta,
                            currency: p.currency,
                          }}
                        />
                      ) : (
                        <DashboardPreview
                          palette={palette}
                          heightClass="h-[330px]"
                          copy={{
                            storeName: p.storeName,
                            nav: p.nav,
                            stats: p.stats,
                            ordersTitle: p.ordersTitle,
                            orders: p.orders,
                            confirm: p.confirm,
                            currency: p.currency,
                          }}
                        />
                      )}
                    </motion.div>

                    <div className="p-4 border-t border-line flex items-start gap-3">
                      <span
                        className="w-5 h-5 rounded-full shrink-0 mt-0.5 border border-line"
                        style={{ background: palette.accent }}
                        aria-hidden
                      />
                      <div>
                        <div className="font-bold text-base">
                          {theme.name}
                        </div>
                        <div className="text-sm text-ink-muted mt-0.5">{theme.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
