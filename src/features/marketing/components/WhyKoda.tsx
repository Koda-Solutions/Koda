'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { SketchUnderline } from '@/components/ui/SketchUnderline';
import { cn } from '@/lib/utils';

/**
 * "Why Koda", as a Belle Epoque advertising poster.
 *
 * The reference is Cappiello and Toulouse-Lautrec: the hand-illustrated
 * commercial posters of 1890s Paris, which are the direct ancestor of every
 * landing page on the internet. Borrowing that language does two things at once.
 * It is unmistakably drawn by a person, which is the whole point of this
 * redesign, and it is a joke a young founder gets immediately: the oldest form
 * of advertising there is, selling the newest thing.
 *
 * Everything here is CSS and one inline SVG. No image to license, no photograph
 * to download on a phone, and it recolours itself in dark mode like the rest of
 * the page.
 */
export default function WhyKoda() {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const headingFont = isArabic ? 'font-thmanyah-display font-black' : 'font-hand';
  const w = t.whyKoda;

  return (
    <section id="why" className="py-24">
      <div className="container">
        <div className="max-w-[880px] mx-auto aged-paper poster-rule p-8 md:p-14 tilt-l">
          {/* Poster masthead: tiny caps, a rule, the establishment line. Every
              poster of the period opened this way. */}
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.42em] uppercase text-ink-muted">
              {w.kicker}
            </p>

            <div className="flex items-center justify-center gap-3 my-4" aria-hidden>
              <span className="h-px w-16 bg-ink/40" />
              <span className="text-[var(--marker-coral)] text-lg">&#10022;</span>
              <span className="h-px w-16 bg-ink/40" />
            </div>

            <h2 className={cn('text-5xl md:text-7xl leading-[0.95]', headingFont)}>
              <span className="relative inline-block">
                {w.title}
                <SketchUnderline
                  color="var(--marker-sun)"
                  className="absolute -bottom-2 start-0"
                />
              </span>
            </h2>

            <p className="mt-4 text-ink-muted max-w-lg mx-auto">{w.subtitle}</p>
          </div>

          {/* The centrepiece. A shopfront, drawn in one colour on paper the way a
              poster was printed from a single stone. */}
          <div className="my-10 flex justify-center">
            <svg
              viewBox="0 0 320 190"
              className="w-full max-w-[420px] h-auto"
              role="img"
              aria-label={w.illustrationAlt}
            >
              <g
                fill="none"
                stroke="var(--ink)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Awning, the one thing every shopfront has. */}
                <path d="M40 62 L160 34 L280 62" />
                <path d="M40 62 q30 20 40 0 q30 20 40 0 q30 20 40 0 q30 20 40 0 q30 20 40 0 q30 20 40 0" fill="var(--marker-coral)" fillOpacity="0.16" />

                {/* The shop itself. */}
                <path d="M52 84 L52 172 L268 172 L268 84" />
                <path d="M36 172 L284 172" strokeWidth="3.2" />

                {/* Window, with two garments hanging in it. */}
                <rect x="70" y="98" width="86" height="58" rx="3" />
                <path d="M92 112 l8 -5 6 5 6 -5 8 5 5 8 -5 3 v22 h-24 v-22 l-5 -3 z" fill="var(--marker-sun)" fillOpacity="0.3" />
                <path d="M132 110 l6 -4 6 4 -3 9 4 20 h-14 l4 -20 z" fill="var(--marker-mint)" fillOpacity="0.28" />

                {/* Door, standing open, because the shop is trading. */}
                <path d="M182 172 L182 104 L240 104 L240 172" />
                <circle cx="192" cy="140" r="2.6" fill="var(--ink)" />

                {/* Hanging sign. The K is the only lettering, so it reads at any size. */}
                <path d="M160 34 L160 18" />
                <rect x="132" y="2" width="56" height="18" rx="3" fill="var(--marker-coral)" fillOpacity="0.2" />
                <text
                  x="160"
                  y="16"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="var(--ink)"
                  stroke="none"
                  fontFamily="var(--font-hand)"
                >
                  KODA
                </text>

                {/* A customer arriving, mid-stride. The poster needs a person in
                    it or it is an architectural drawing. */}
                <circle cx="292" cy="126" r="8" />
                <path d="M292 134 L292 154 M292 140 l-10 8 M292 140 l10 6 M292 154 l-7 16 M292 154 l7 16" />
              </g>
            </svg>
          </div>

          {/* Three reasons, set as poster copy rather than feature cards. */}
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {w.reasons.map((r, i) => (
              <div key={r.title}>
                <span
                  className="font-hand text-3xl block mb-1"
                  style={{
                    color: [
                      'var(--marker-coral)',
                      'var(--marker-mint)',
                      'var(--marker-sky)',
                    ][i],
                  }}
                >
                  {i + 1}
                </span>
                <h3 className={cn('text-lg mb-1', headingFont)}>{r.title}</h3>
                <p className="text-sm text-ink-muted">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-10 mb-6" aria-hidden>
            <span className="h-px w-24 bg-ink/40" />
            <span className="text-[var(--marker-coral)]">&#10022;</span>
            <span className="h-px w-24 bg-ink/40" />
          </div>

          <div className="text-center">
            <Button href="/onboarding">{w.cta}</Button>
            {/* The small print at the foot of a poster, which is where the
                printer's mark went. */}
            <p className="mt-5 text-[11px] tracking-[0.3em] uppercase text-ink-muted">
              {w.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
