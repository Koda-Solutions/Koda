'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { ArrowCurve, Sparkle, Zip } from '@/components/ui/Doodles';
import { cn } from '@/lib/utils';

/**
 * The joke section.
 *
 * A marble bust holding a phone, buried in the same message it has been getting
 * for two thousand years. The reference is the classical-sculpture-with-a-modern-
 * gesture genre: a Greek head with a cigarette, a Roman emperor with AirPods. It
 * works because the gap between the two registers is funny, and because marble
 * reads as "serious art" before the punchline lands.
 *
 * It is doing real marketing work rather than being a gag. Koda's actual pitch
 * is that sellers waste their day answering "how much?" in DMs, and that is a
 * hard thing to make anyone feel from a bullet point. A statue that has been
 * answering it since antiquity makes the point in one image.
 *
 * Drawn rather than photographed on purpose. A real photograph of a sculpture
 * would need licensing and would be the only raster asset on the page, and line
 * art keeps it in the same hand as everything else.
 */
export default function ClassicalJoke() {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const headingFont = isArabic ? 'font-thmanyah-display font-black' : 'font-display font-extrabold';
  const c = t.classical;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="sketch-frame sketch-shadow bg-paper-raised grid md:grid-cols-2 gap-10 items-center p-8 md:p-12 tilt-r">
          {/* The bust. */}
          <div className="relative flex justify-center order-2 md:order-1">
            <svg
              viewBox="0 0 260 300"
              className="w-full max-w-[290px] h-auto"
              role="img"
              aria-label={c.illustrationAlt}
            >
              <defs>
                {/* Marble: a cool light stone with the light coming from the
                    left, so the profile has a lit edge and a shaded jaw. */}
                <linearGradient id="marble" x1="20%" y1="0%" x2="90%" y2="100%">
                  <stop offset="0%" stopColor="var(--paper)" />
                  <stop offset="55%" stopColor="var(--paper-sunk)" />
                  <stop offset="100%" stopColor="var(--line)" />
                </linearGradient>
              </defs>

              {/* Plinth. Every bust stands on one, and it grounds the drawing. */}
              <path
                d="M62 268 L198 268 L206 292 L54 292 Z"
                fill="var(--paper-sunk)"
                stroke="var(--ink)"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path d="M74 268 L74 292 M186 268 L186 292" stroke="var(--ink)" strokeWidth="1.4" opacity="0.5" />

              {/* Neck and shoulders. The neck has to be narrower than the jaw,
                  or its two edges show as posts either side of the chin. */}
              <path
                d="M112 200 L110 240 Q130 250 150 240 L148 200"
                fill="url(#marble)"
                stroke="var(--ink)"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M72 244 Q130 232 188 244 L198 268 L62 268 Z"
                fill="url(#marble)"
                stroke="var(--ink)"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />

              {/* The head, in three-quarter profile facing the phone. */}
              <path
                d="M86 118 Q84 60 130 52 Q178 46 184 104 Q188 140 176 168 Q168 196 148 210 Q128 222 112 208 Q94 190 88 156 Q84 136 86 118 Z"
                fill="url(#marble)"
                stroke="var(--ink)"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />

              {/* Classical curls, the detail that says antiquity rather than
                  simply "a face". */}
              <g stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round">
                <path d="M88 104 q10 -18 26 -18 q16 0 22 -12" />
                <path d="M96 84 q12 -16 30 -14" />
                <path d="M118 60 q18 -6 32 6" />
                <path d="M150 54 q20 4 26 26" />
                <circle cx="102" cy="96" r="7" />
                <circle cx="122" cy="76" r="7" />
                <circle cx="146" cy="66" r="7" />
                <circle cx="168" cy="84" r="7" />
              </g>

              {/* The features. Blank pupils, as carved. */}
              <g stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round">
                <path d="M104 128 q10 -6 20 -1" />
                <path d="M146 126 q10 -5 18 2" />
                <path d="M106 140 q9 -7 18 -1 q-9 7 -18 1 Z" />
                <path d="M148 139 q9 -6 17 0 q-8 7 -17 0 Z" />
                {/* The straight bridge that says Greek rather than generic. */}
                <path d="M133 122 L126 168 q8 7 17 2" strokeWidth="2.2" />
                <path d="M130 180 q4 2 9 0" strokeWidth="1.8" />
                {/* Mouth set flat, eyebrows level. It is not enjoying this. */}
                <path d="M117 194 q15 4 30 -2" strokeWidth="2.2" />
                <path d="M150 206 q-6 5 -14 4" strokeWidth="1.6" opacity="0.7" />
              </g>

              {/* The arm and hand, coming in from the lower right.

                  The phone sits beside the face, not over it. The first attempt
                  put it across the nose and mouth, which hid the whole reason
                  the drawing is funny: you have to be able to read the
                  expression to see that it is unimpressed. */}
              <g stroke="var(--ink)" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
                {/* Forearm, as one closed shape rising out of the shoulder.
                    Drawn as two open strokes it read as a floating outline
                    rather than a limb the bust owns. */}
                <path
                  d="M176 262 Q186 226 196 208 L216 216 Q206 240 202 268 Z"
                  fill="url(#marble)"
                />

                {/* Palm, and four fingers curling round the far edge of the
                    phone so it reads as held rather than floating. */}
                <path
                  d="M194 188 q-11 5 -9 19 q2 13 15 15 l13 2 q9 0 9 -9 l0 -17 q0 -9 -9 -9 Z"
                  fill="var(--paper-raised)"
                />
                <path d="M193 194 q10 -3 15 1" fill="none" strokeWidth="1.8" />
                <path d="M192 203 q11 -3 16 1" fill="none" strokeWidth="1.8" />
                <path d="M193 212 q10 -3 15 1" fill="none" strokeWidth="1.8" />
              </g>

              {/* The phone, beside the cheek and tipped towards the face. */}
              <g transform="rotate(-9 196 176)">
                <rect
                  x="172"
                  y="130"
                  width="48"
                  height="80"
                  rx="8"
                  fill="var(--ink)"
                  stroke="var(--ink)"
                  strokeWidth="2.4"
                />
                <rect x="177" y="137" width="38" height="66" rx="3" fill="var(--paper-raised)" />
                {/* The same question, arriving and arriving. */}
                <rect x="181" y="144" width="23" height="7" rx="3.5" fill="var(--line)" />
                <rect x="181" y="156" width="29" height="7" rx="3.5" fill="var(--line)" />
                <rect x="181" y="168" width="20" height="7" rx="3.5" fill="var(--line)" />
                <rect x="181" y="180" width="26" height="7" rx="3.5" fill="var(--line)" />
                <circle cx="213" cy="136" r="7" fill="var(--marker-coral)" />
                <text
                  x="213"
                  y="139.5"
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight="700"
                  fill="#fff"
                >
                  9+
                </text>
              </g>

            </svg>

            <Zip className="absolute top-6 end-0 w-12 h-8 text-[var(--marker-coral)] opacity-70" aria-hidden />
            <Sparkle className="absolute bottom-10 start-2 w-6 h-6 text-[var(--marker-sun)]" aria-hidden />
          </div>

          {/* The punchline and the pivot to the product. */}
          <div className="order-1 md:order-2">
            {/* The repeated question, as three stacked chat bubbles. Three,
                because two is a coincidence and four is a wall. */}
            <div className="flex flex-col gap-2 items-start mb-7">
              {c.messages.map((m, i) => (
                <span
                  key={m}
                  className={cn(
                    'sketch-frame-2 bg-paper px-3.5 py-2 text-sm',
                    i === 1 && 'ms-6',
                    i === 2 && 'ms-3 opacity-70'
                  )}
                >
                  {m}
                </span>
              ))}
            </div>

            <h2 className={cn('text-4xl md:text-5xl leading-[1.05]', headingFont)}>
              {c.title}
            </h2>

            <p className="mt-4 text-ink-muted">{c.body}</p>

            <p className="font-hand text-2xl text-[var(--marker-coral)] mt-5 tilt-l">
              {c.note}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <Button href="/onboarding">{c.cta}</Button>
              <ArrowCurve
                className="w-16 h-10 text-ink opacity-45 hidden sm:block rtl:-scale-x-100"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
