'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { cn, handFont } from '@/lib/utils';
import { railClass, railItem, SwipeHint } from '@/components/ui/Rail';
import { themePalettes, withAccent, type ThemePalette } from '@/data/themePreviews';
import StorefrontPreview from './previews/StorefrontPreview';
import DashboardPreview from './previews/DashboardPreview';

type Surface = 'storefront' | 'dashboard';

/** The shape of one entry in `t.themes.items`. */
type ThemeCopy = (ReturnType<typeof useLanguage>['t'])['themes']['items'][number];
type PreviewCopy = (ReturnType<typeof useLanguage>['t'])['themes']['preview'];

/**
 * One theme card: a live preview, and the accent swatches that repaint it.
 *
 * The swatches are the point of the section. Six static screenshots answer "which of
 * these six do I want"; swatches that repaint the shop under the reader's cursor answer
 * the question they actually have, which is "can it look like *mine*". Every colour
 * offered here writes to `stores.accent_color`, a real column the onboarding wizard
 * already sets, so nothing on this card promises something the product cannot do.
 *
 * Hover previews, click commits. Hover alone would leave the whole thing inert on a
 * phone, which is most of the audience.
 */
function ThemeCard({
  palette,
  theme,
  preview,
  surface,
  tilt,
  delay,
  labels,
}: {
  palette: ThemePalette;
  theme: ThemeCopy;
  preview: PreviewCopy;
  surface: Surface;
  tilt: string;
  delay: number;
  labels: { accentHint: string; accentLabel: string; hintClass: string };
}) {
  const [picked, setPicked] = useState(palette.accents[0]);
  const [hovered, setHovered] = useState<string | null>(null);
  // Set once the card scrolls in, so the dashboard's numbers count up in view rather
  // than having already finished by the time anyone looks. Uses the viewport callback
  // on the reveal animation below, so this costs no second observer.
  const [seen, setSeen] = useState(false);

  const shown = withAccent(palette, hovered ?? picked);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setSeen(true)}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        'bg-paper-raised overflow-hidden flex flex-col sketch-shadow-sm',
        tilt,
        railItem('sm')
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
            palette={shown}
            heightClass="h-[330px]"
            copy={{
              // Each theme sells something different. Six cards showing the same shop
              // in six colours is what made this section read as one screenshot
              // recoloured.
              storeName: theme.shop.storeName,
              heroTitle: theme.shop.heroTitle,
              heroSub: theme.shop.heroSub,
              categories: theme.shop.categories as [string, string, string],
              products: theme.shop.products,
              shapes: theme.shop.shapes,
              saleBadge: preview.saleBadge,
              cta: theme.shop.cta,
              currency: preview.currency,
            }}
          />
        ) : (
          <DashboardPreview
            palette={shown}
            heightClass="h-[330px]"
            animateStats={seen}
            copy={{
              // Per theme, like the storefront beside it. This read preview.storeName,
              // so all six dashboards were labelled "Nour" whatever card they sat on.
              storeName: theme.shop.storeName,
              nav: preview.nav,
              stats: preview.stats,
              ordersTitle: preview.ordersTitle,
              orders: preview.orders,
              confirm: preview.confirm,
              currency: preview.currency,
            }}
          />
        )}
      </motion.div>

      <div className="p-4 border-t border-line">
        <div className="flex items-center gap-1 mb-2.5">
          {palette.accents.map((colour, i) => {
            const active = picked === colour;
            return (
              <button
                key={colour}
                type="button"
                aria-label={labels.accentLabel.replace('{n}', String(i + 1))}
                aria-pressed={active}
                onClick={() => setPicked(colour)}
                onMouseEnter={() => setHovered(colour)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(colour)}
                onBlur={() => setHovered(null)}
                className="w-9 h-9 flex items-center justify-center rounded-full shrink-0"
              >
                <span
                  className={cn(
                    'block w-[22px] h-[22px] rounded-full transition-transform duration-150',
                    active
                      ? 'ring-2 ring-offset-2 ring-ink ring-offset-[var(--paper-raised)] scale-110'
                      : 'border border-line hover:scale-115'
                  )}
                  style={{ background: colour }}
                />
              </button>
            );
          })}
          <span
            className={cn(
              'text-ink-muted ms-1.5 leading-none select-none',
              labels.hintClass
            )}
          >
            {labels.accentHint}
          </span>
        </div>

        <div className="font-bold text-base">{theme.name}</div>
        <div className="text-sm text-ink-muted mt-0.5">{theme.desc}</div>
      </div>
    </motion.div>
  );
}

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

  const labels = {
    accentHint: t.themes.accentHint,
    accentLabel: t.themes.accentLabel,
    hintClass: handFont(language),
  };

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
            {group.mode === 'light' && (
              <SwipeHint text={t.common.swipe} stop="sm" className={handFont(language)} />
            )}

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-wide text-ink-muted">
                {group.label}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <div className={railClass('sm', 'gap-5 sm:grid-cols-2 lg:grid-cols-3')}>
              {themePalettes
                .map((palette, i) => ({ palette, theme: t.themes.items[i] }))
                .filter(({ palette }) => palette.mode === group.mode)
                .map(({ palette, theme }, i) => (
                  <ThemeCard
                    key={palette.key}
                    palette={palette}
                    theme={theme}
                    preview={p}
                    surface={surface}
                    delay={i * 0.07}
                    labels={labels}
                    tilt={
                      i % 3 === 0
                        ? 'sketch-frame tilt-l'
                        : i % 3 === 1
                          ? 'sketch-frame-2'
                          : 'sketch-frame tilt-r'
                    }
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
