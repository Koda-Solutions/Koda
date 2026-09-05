'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

/**
 * The pricing table.
 *
 * Built against what the research actually says converts, rather than what looks
 * tidy:
 *
 * The billing toggle sits between the heading and the cards, because that is
 * where someone looks for it, and yearly is the default. Yearly is not hidden
 * pressure here: it shows the *lower* monthly number (249 rather than 299), and
 * the toggle is the most obvious control in the section. Hiding monthly would be
 * the pressure; leading with the better price is not.
 *
 * Savings are shown in pounds per year, not as a percentage. "You keep 598 EGP a
 * year" is a number a seller can picture. "Save 17%" is arithmetic homework.
 *
 * The call to action names the thing that happens next. "Try 14 days free" beats
 * "Get started", which promises nothing and asks the reader to guess whether a
 * card is about to be required.
 *
 * The middle card is the one most people take, so it is the one drawn largest,
 * tilted the other way, and given the coral shadow. Every other card is quieter
 * on purpose.
 */
export default function Pricing() {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const headingFont = isArabic ? 'font-thmanyah-display font-black' : 'font-hand';

  // Yearly first. See the note above on why that is not a dark pattern here.
  const [yearly, setYearly] = useState(true);
  const b = t.pricing.billing;

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-ink-muted">
            {t.pricing.eyebrow}
          </span>
          <h2 className={cn('mt-3 text-3xl md:text-5xl', headingFont)}>
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-ink-muted">{t.pricing.subtitle}</p>
        </div>

        {/* The toggle: drawn as one pill with the active side filled in ink. */}
        <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
          <div className="sketch inline-flex p-1 bg-paper-raised" role="group">
            {([
              ['monthly', false],
              ['annual', true],
            ] as const).map(([key, value]) => (
              <button
                key={key}
                type="button"
                onClick={() => setYearly(value)}
                aria-pressed={yearly === value}
                className={cn(
                  'px-5 py-2 text-sm font-bold rounded-full transition-colors',
                  yearly === value
                    ? 'bg-accent text-on-accent'
                    : 'text-ink-muted hover:text-ink'
                )}
              >
                {b[key]}
              </button>
            ))}
          </div>

          {/* Handwritten, angled, pointing at the yearly side. The one place on
              the page where a note in the margin does more than a label. */}
          <span
            className={cn(
              'font-hand text-lg text-[var(--marker-coral)] tilt-r-2 select-none',
              !yearly && 'opacity-45'
            )}
          >
            {b.saveBadge}
          </span>
        </div>

        <p className="text-center text-sm text-ink-muted mb-12">{t.pricing.note}</p>

        <div className="grid md:grid-cols-3 gap-7 items-start">
          {t.pricing.plans.map((plan, i) => {
            const price = plan.free
              ? null
              : yearly
                ? plan.priceAnnual
                : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                className={cn(
                  'p-7 flex flex-col gap-4 h-full bg-paper-raised relative',
                  plan.featured
                    ? 'sketch-2 sketch-shadow-color tilt-r md:-mt-4 md:mb-4'
                    : 'sketch sketch-shadow-sm',
                  !plan.featured && (i === 0 ? 'tilt-l' : 'tilt-r-2')
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 start-6 bg-[var(--marker-coral)] text-white text-xs font-bold px-3 py-1 sketch-3 border-ink">
                    {plan.badge}
                  </span>
                )}

                <div className={cn('text-2xl', headingFont)}>{plan.name}</div>

                {/* The number, and directly under it what is actually charged.
                    Someone comparing plans should never have to do the
                    multiplication themselves. */}
                <div>
                  {plan.free ? (
                    <div className={cn('text-4xl', headingFont)}>{b.freeForever}</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span
                          className="text-5xl font-bold tabular-nums"
                          style={{ fontVariantNumeric: 'tabular-nums' }}
                        >
                          {price}
                        </span>
                        <span className="text-sm font-semibold text-ink-muted">
                          {b.perMonth}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-ink-muted">
                        {yearly
                          ? b.billedAnnually.replace('{total}', plan.annualTotal)
                          : b.billedMonthly}
                      </p>
                      {yearly && (
                        <p className="mt-1 text-sm font-bold text-[var(--marker-mint)]">
                          {b.saves.replace('{amount}', plan.annualSaving)}
                        </p>
                      )}
                    </>
                  )}
                </div>

                <p className="text-sm text-ink-muted">{plan.desc}</p>

                <ul className="flex flex-col gap-2.5 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={17}
                        strokeWidth={2.6}
                        className="mt-0.5 shrink-0 text-[var(--marker-mint)]"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/onboarding"
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="w-full mt-auto"
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
