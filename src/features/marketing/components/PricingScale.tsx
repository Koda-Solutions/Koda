'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn, handFont } from '@/lib/utils';

/**
 * The pricing drawing: a merchant weighing the paid plans against the free one.
 *
 * Coins on one pan, a single feather on the other, and the feather side rides high.
 * The joke is that the free pan being light is the selling point rather than the
 * apology, which is the thing a pricing table cannot say on its own.
 *
 * The feather is not generic classical furniture. Weighing a heart against the feather
 * of Ma'at is the Egyptian judgement scene, so the one drawing on the pricing section
 * belongs to this product's own country rather than being borrowed Greek marble. That
 * is worth more here than another bust: the audience is Egyptian sellers, and they
 * will read it immediately.
 *
 * Labels are HTML positioned over the SVG rather than <text> inside it, so they take
 * the real Arabic and Latin faces and stay translatable. The drawing itself is not
 * mirrored in RTL: a balance has no reading direction, and flipping it would put the
 * figure where the layout does not expect it.
 */
export default function PricingScale() {
  const { t, language } = useLanguage();
  const s = t.pricing.scale;

  const noteFont = handFont(language);

  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 select-none">
      <svg
        viewBox="0 0 440 310"
        className="w-full h-auto"
        role="img"
        aria-label={s.alt}
      >
        <defs>
          {/* The same cool stone as the bust in the problem section, lit from the
              left, so the two drawings read as one hand. */}
          <linearGradient id="scale-marble" x1="15%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="var(--paper)" />
            <stop offset="55%" stopColor="var(--paper-sunk)" />
            <stop offset="100%" stopColor="var(--line)" />
          </linearGradient>
        </defs>

        <g stroke="var(--ink)" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
          {/* ---- the merchant ------------------------------------------------ */}
          <path d="M28 268 L142 268 L150 294 L20 294 Z" fill="var(--paper-sunk)" />
          <path d="M40 268 L40 294 M130 268 L130 294" strokeWidth="1.4" opacity="0.45" />

          {/* Drapery, widening toward the plinth the way carved cloth does. */}
          <path d="M44 268 L54 190 Q60 172 86 168 Q112 172 118 190 L128 268 Z" fill="url(#scale-marble)" />
          <path d="M70 198 L64 262 M90 194 L92 262 M108 204 L114 260" strokeWidth="1.6" opacity="0.55" />

          {/* Neck, kept narrower than the jaw. Wider, and its two edges read as
              posts standing either side of the chin. */}
          <path d="M76 148 L75 172 Q88 179 101 172 L99 148" fill="url(#scale-marble)" />

          {/* Head in three-quarter profile, turned toward the scales. */}
          <path
            d="M60 116 Q58 80 88 74 Q116 78 118 110 Q120 136 109 152 Q97 165 83 158 Q66 148 62 130 Q60 124 60 116 Z"
            fill="url(#scale-marble)"
          />

          <g strokeWidth="2" fill="none">
            <path d="M62 104 q9 -16 24 -16 q14 0 20 -10" />
            <path d="M70 86 q11 -13 26 -12" />
            <circle cx="74" cy="96" r="6" />
            <circle cx="92" cy="80" r="6" />
            <circle cx="110" cy="92" r="6" />
          </g>

          <g strokeWidth="1.9" fill="none">
            <path d="M92 108 q9 -5 16 1" />
            <path d="M94 118 q8 -6 15 0 q-8 6 -15 0 Z" />
            {/* Straight bridge, level brow: appraising, not amused. */}
            <path d="M106 106 L102 138 q7 5 14 1" strokeWidth="2.1" />
            <path d="M98 150 q11 3 18 -3" strokeWidth="2" />
          </g>

          {/* ---- the balance ------------------------------------------------- */}
          <path d="M264 280 L336 280 L346 296 L254 296 Z" fill="var(--paper-sunk)" />
          <path d="M300 280 L300 106" strokeWidth="4.5" />
          <circle cx="300" cy="102" r="6" fill="var(--paper-raised)" />

          {/* Beam. Its midpoint is the column top, so the tilt is a real pivot and
              not two arms drawn at a guess. Coins down, feather up. */}
          <path d="M206 126 L394 82" strokeWidth="3.6" />
          <path d="M206 126 L206 170" strokeWidth="1.8" />
          <path d="M394 82 L394 126" strokeWidth="1.8" />

          {/* Loaded pan. */}
          <path d="M176 170 Q206 198 236 170 Z" fill="url(#scale-marble)" />
          <g strokeWidth="1.9">
            <ellipse cx="206" cy="164" rx="19" ry="5.5" fill="var(--paper-raised)" />
            <ellipse cx="204" cy="155" rx="16" ry="5" fill="var(--paper-raised)" />
            <ellipse cx="208" cy="146" rx="13" ry="4.5" fill="var(--paper-raised)" />
          </g>

          {/* Empty pan, riding high. */}
          <path d="M364 126 Q394 154 424 126 Z" fill="url(#scale-marble)" />
        </g>

        {/* The feather of Ma'at, leaning clear of the chain so the two do not merge
            into one shape. Coral, because it is the one thing here worth pointing at. */}
        <g
          stroke="var(--marker-coral)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path
            d="M394 126 Q382 100 412 78 Q418 106 394 126 Z"
            fill="color-mix(in srgb, var(--marker-coral) 14%, transparent)"
          />
          <path d="M394 126 L412 78" strokeWidth="1.7" />
          <path
            d="M398 114 l-6 3 M401 105 l-7 3 M404 96 l-6 3 M407 88 l-6 3"
            strokeWidth="1.4"
            opacity="0.8"
          />
        </g>
      </svg>

      {/* Positioned with physical left/top on purpose: these pin to points in the
          drawing, and logical properties would send them to the other side in Arabic
          while the drawing stayed put. Centred on the pan they name, so a long Arabic
          label does not drift into the figure on one side or off the edge on the
          other. */}
      <span
        className={cn('absolute text-ink-muted leading-none whitespace-nowrap', noteFont)}
        style={{ left: '47%', top: '67%', transform: 'translateX(-50%)' }}
      >
        {s.paidNote}
      </span>
      <span
        className={cn(
          'absolute text-[var(--marker-coral)] leading-none whitespace-nowrap',
          noteFont
        )}
        style={{ left: '90%', top: '11%', transform: 'translateX(-50%)' }}
      >
        {s.freeNote}
      </span>
    </div>
  );
}
