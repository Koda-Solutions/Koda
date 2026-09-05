'use client';

import React from 'react';
import type { ThemePalette } from '@/data/themePreviews';

/**
 * A stand-in for a merchant's product photograph.
 *
 * These used to be flat colour tiles, and before that diagonal hatching. Both
 * read as "image missing", which is the worst possible thing to show a seller
 * who is deciding whether Koda will make their shop look expensive. A grey box
 * does not answer that question; it answers a different one, badly.
 *
 * Drawn rather than photographed for two reasons. Stock photography of clothes
 * on a landing page is its own kind of lie, and it would have to be licensed,
 * shipped and kept in sync with six palettes. This takes its colour from the
 * theme, so every theme's products look like they belong to that theme.
 *
 * The recipe is what makes it read as a photo instead of a shape: a soft studio
 * falloff behind the subject, a subject with a real silhouette, a contact shadow
 * grounding it, and a highlight suggesting a single light source. Take any one
 * of those away and it flattens back into an illustration.
 */

type Shape = 'shirt' | 'dress' | 'bag' | 'bottle' | 'shoe' | 'box';

/** Silhouettes, as fractions of a 100x100 box so they scale to any tile size. */
const SILHOUETTES: Record<Shape, string> = {
  // Short sleeves, a collar notch, a slight taper at the waist.
  shirt:
    'M30,22 L42,17 Q50,23 58,17 L70,22 L78,34 L70,40 L68,36 L68,80 Q50,84 32,80 L32,36 L30,40 L22,34 Z',
  // Narrow shoulders falling to a wide hem.
  dress:
    'M38,18 L50,14 L62,18 L58,32 L66,58 L72,84 Q50,90 28,84 L34,58 L42,32 Z',
  // A rounded body with a handle arc.
  bag: 'M32,42 L68,42 L72,84 L28,84 Z M42,42 Q42,24 50,24 Q58,24 58,42',
  // Neck, shoulder, straight body.
  bottle: 'M44,16 L56,16 L56,30 Q64,38 64,48 L64,84 L36,84 L36,48 Q36,38 44,30 Z',
  // A low profile with a raised heel and a toe curve.
  shoe: 'M22,66 Q30,62 38,62 L52,50 Q62,48 66,56 L76,66 Q78,76 68,78 L28,78 Q20,76 22,66 Z',
  // A simple carton, slightly angled.
  box: 'M28,38 L50,28 L72,38 L72,74 L50,84 L28,74 Z',
};

export default function ProductImage({
  palette,
  shape,
  tint,
  className = '',
}: {
  palette: ThemePalette;
  shape: Shape;
  /** Which of the theme's product tints this item wears. */
  tint: string;
  className?: string;
}) {
  const dark = palette.mode === 'dark';
  const id = React.useId();

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
        <defs>
          {/* The backdrop: a seamless studio sweep, brighter where the light falls. */}
          <radialGradient id={`bg-${id}`} cx="38%" cy="26%" r="86%">
            <stop
              offset="0%"
              stopColor={dark ? palette.line : palette.surface}
              stopOpacity="1"
            />
            <stop offset="100%" stopColor={tint} stopOpacity={dark ? 0.55 : 0.42} />
          </radialGradient>

          {/* The subject: lit from upper left, falling into shadow at lower right. */}
          <linearGradient id={`sub-${id}`} x1="22%" y1="8%" x2="78%" y2="96%">
            <stop offset="0%" stopColor={tint} stopOpacity={dark ? 0.95 : 1} />
            <stop
              offset="58%"
              stopColor={tint}
              stopOpacity={dark ? 0.78 : 0.86}
            />
            <stop offset="100%" stopColor={palette.ink} stopOpacity={dark ? 0.5 : 0.28} />
          </linearGradient>

          {/* The contact shadow. Without it the subject floats and the whole
              thing collapses back into a sticker. */}
          <radialGradient id={`sh-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={palette.ink} stopOpacity={dark ? 0.5 : 0.26} />
            <stop offset="100%" stopColor={palette.ink} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill={`url(#bg-${id})`} />
        <ellipse cx="50" cy="86" rx="26" ry="5" fill={`url(#sh-${id})`} />
        <path d={SILHOUETTES[shape]} fill={`url(#sub-${id})`} />

        {/* A single specular highlight along the lit edge. Small, and it does
            most of the work of suggesting a surface rather than a fill. */}
        <path
          d={SILHOUETTES[shape]}
          fill="none"
          stroke={dark ? palette.surface : '#FFFFFF'}
          strokeOpacity={dark ? 0.22 : 0.4}
          strokeWidth="1.1"
          strokeLinejoin="round"
          transform="translate(-0.7,-0.7)"
          clipPath={`inset(0 0 42% 0)`}
        />
      </svg>
    </div>
  );
}

/** Deterministic, so a theme's tiles do not reshuffle on every render. */
export const SHAPE_CYCLE: Shape[] = ['dress', 'shirt', 'bag', 'shoe', 'bottle', 'box'];
