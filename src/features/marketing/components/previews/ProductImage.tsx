'use client';

import React from 'react';
import type { ThemePalette } from '@/data/themePreviews';
import { luminance, mix } from '@/lib/color';

/**
 * A stand-in for a merchant's product photograph.
 *
 * This has been through three attempts. Flat colour tiles read as "image
 * missing". Diagonal hatching read as "image failed to load". Soft gradient
 * silhouettes, the version before this one, were worse than either: a wallet,
 * a pair of headphones and a gift box all came out as the same rounded blob,
 * because the shape vocabulary had six entries and the catalogue needed
 * thirteen. A seller looking at that sees mush and concludes their own products
 * will look like mush.
 *
 * So this is line art now. Every product is drawn as itself, with an outline
 * heavy enough to survive a 90px tile, a soft tint from the theme, and one
 * contact shadow to sit it on the surface. Outlines beat gradients at small
 * sizes for the same reason road signs are line art: the edge carries the
 * information, and a gradient at 90px is just a smudge.
 *
 * Drawn rather than photographed because stock photos of clothes would have to
 * be licensed, would be the only raster assets on the page, and would have to
 * stay in sync with six palettes. These take their colour from the theme, so
 * each theme's products belong to that theme.
 */

export type Shape =
  | 'dress'
  | 'shirt'
  | 'abaya'
  | 'hoodie'
  | 'sneaker'
  | 'watch'
  | 'wallet'
  | 'headphones'
  | 'serum'
  | 'jar'
  | 'perfume'
  | 'giftbox'
  | 'duffel';

/**
 * Guarantees the product is visible against the surface behind it.
 *
 * The Faham theme showed this up: its shirt tint is #2A2A28 sitting on a #1E1E1E
 * surface, twelve points of brightness apart, so the garment simply vanished
 * while every other theme looked fine. Hand-picking that one palette would have
 * left the same trap for the next dark theme anyone adds.
 */
const MIN_SEPARATION = 30;

function separate(tint: string, behind: string, dark: boolean): string {
  const gap = Math.abs(luminance(tint) - luminance(behind));
  if (gap >= MIN_SEPARATION) {
    return tint;
  }
  const target = dark ? '#FFFFFF' : '#000000';
  const amount = Math.min(0.5, (MIN_SEPARATION - gap) / 255 + 0.16);
  return mix(tint, target, amount);
}

/**
 * The drawings.
 *
 * Each is a list of paths on a 100x100 grid, roughly filling y 14 to 86 so
 * every product sits on the same baseline and the tiles look like one set.
 * `fill` marks the paths that take the product's colour; the rest are detail
 * lines drawn on top in the outline colour.
 */
type Part = { d: string; fill?: boolean };

const DRAWINGS: Record<Shape, Part[]> = {
  dress: [
    { d: 'M40 21 L50 16 L60 21 L57 35 Q69 57 73 83 Q50 89 27 83 Q31 57 43 35 Z', fill: true },
    { d: 'M43 21 q7 7 14 0' },
    { d: 'M41 47 q9 4 18 0' },
  ],
  shirt: [
    {
      d: 'M37 23 L45 18 q5 6 10 0 L63 23 L76 33 L68 42 L65 38 L65 83 Q50 87 35 83 L35 38 L32 42 L24 33 Z',
      fill: true,
    },
    { d: 'M45 18 q5 8 10 0' },
    { d: 'M35 38 L35 83 M65 38 L65 83' },
  ],
  abaya: [
    { d: 'M38 21 L50 17 L62 21 L66 36 L69 85 Q50 89 31 85 L34 36 Z', fill: true },
    { d: 'M50 22 L50 85' },
    { d: 'M43 21 q7 6 14 0' },
  ],
  hoodie: [
    // The hood is drawn first and sits proud of the shoulders. Tucked into the
    // neckline it read as a t-shirt with a pocket, which is what the previous
    // version looked like.
    { d: 'M37 31 q1 -19 13 -19 q12 0 13 19 q-13 7 -26 0 z', fill: true },
    {
      d: 'M35 30 L44 26 q6 6 12 0 L65 30 L79 41 L70 49 L67 45 L67 81 Q50 85 33 81 L33 45 L30 49 L21 41 Z',
      fill: true,
    },
    { d: 'M37 31 q1 -19 13 -19 q12 0 13 19 q-13 7 -26 0 z' },
    { d: 'M40 61 h20 v12 h-20 z' },
    { d: 'M45 32 v9 M55 32 v9' },
  ],
  sneaker: [
    {
      d: 'M19 63 q7 -4 13 -5 l11 -11 q6 -4 11 1 l6 9 q11 4 17 10 q4 4 3 9 l-58 0 q-5 -7 -3 -13 z',
      fill: true,
    },
    { d: 'M17 76 h63' },
    { d: 'M40 57 l7 5 M46 51 l7 5 M52 46 l6 5' },
  ],
  watch: [
    { d: 'M42 15 h16 v20 h-16 z', fill: true },
    { d: 'M42 65 h16 v20 h-16 z', fill: true },
    { d: 'M50 50 m-19 0 a19 19 0 1 0 38 0 a19 19 0 1 0 -38 0', fill: true },
    { d: 'M50 50 m-13 0 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0' },
    { d: 'M50 50 L50 41 M50 50 L57 54' },
  ],
  wallet: [
    { d: 'M22 34 h50 q6 0 6 6 v26 q0 6 -6 6 h-50 q-6 0 -6 -6 v-26 q0 -6 6 -6 z', fill: true },
    { d: 'M54 44 h30 v16 h-30 q-8 0 -8 -8 q0 -8 8 -8 z', fill: true },
    { d: 'M60 52 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0' },
  ],
  headphones: [
    { d: 'M23 58 v-9 q0 -24 27 -24 q27 0 27 24 v9', fill: false },
    { d: 'M16 56 h13 q3 0 3 3 v18 q0 3 -3 3 h-13 q-3 0 -3 -3 v-18 q0 -3 3 -3 z', fill: true },
    { d: 'M71 56 h13 q3 0 3 3 v18 q0 3 -3 3 h-13 q-3 0 -3 -3 v-18 q0 -3 3 -3 z', fill: true },
  ],
  serum: [
    { d: 'M43 13 h14 v11 h-14 z', fill: true },
    { d: 'M46 24 h8 v7 h-8 z' },
    { d: 'M37 31 h26 q4 0 4 4 v44 q0 4 -4 4 h-26 q-4 0 -4 -4 v-44 q0 -4 4 -4 z', fill: true },
    { d: 'M41 47 h18 v20 h-18 z' },
  ],
  jar: [
    { d: 'M31 25 h38 v11 h-38 z', fill: true },
    { d: 'M34 36 h32 q5 0 5 5 v33 q0 5 -5 5 h-32 q-5 0 -5 -5 v-33 q0 -5 5 -5 z', fill: true },
    { d: 'M40 52 h20' },
  ],
  perfume: [
    { d: 'M44 12 h12 v12 h-12 z', fill: true },
    { d: 'M46 24 h8 v7 h-8 z' },
    { d: 'M34 31 q16 -5 32 0 v39 q0 9 -9 9 h-14 q-9 0 -9 -9 z', fill: true },
    { d: 'M42 46 h16 v16 h-16 z' },
  ],
  giftbox: [
    { d: 'M24 41 h52 v38 h-52 z', fill: true },
    { d: 'M19 29 h62 v12 h-62 z', fill: true },
    { d: 'M50 29 v50' },
    { d: 'M50 29 q-11 -13 -17 -4 q-2 6 17 4 q19 2 17 -4 q-6 -9 -17 4' },
  ],
  duffel: [
    { d: 'M19 45 q31 -9 62 0 v26 q-31 9 -62 0 z', fill: true },
    { d: 'M38 45 q0 -11 12 -11 q12 0 12 11' },
    { d: 'M19 58 h62' },
  ],
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
  const parts = DRAWINGS[shape] ?? DRAWINGS.shirt;

  // The product has to read against the card it sits on, whatever the theme.
  const subject = separate(tint, dark ? palette.line : palette.surface, dark);
  // The outline is the theme's ink, pulled back so it draws rather than shouts.
  const outline = dark ? mix(palette.ink, '#FFFFFF', 0.55) : mix(palette.ink, '#FFFFFF', 0.12);

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
        <defs>
          {/* A quiet studio sweep. Flat enough that the outline stays the
              loudest thing in the tile, which is the whole point. */}
          <linearGradient id={`bg-${id}`} x1="22%" y1="0%" x2="82%" y2="100%">
            <stop offset="0%" stopColor={dark ? palette.line : palette.surface} />
            <stop offset="100%" stopColor={tint} stopOpacity={dark ? 0.34 : 0.3} />
          </linearGradient>

          <radialGradient id={`sh-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={palette.ink} stopOpacity={dark ? 0.44 : 0.2} />
            <stop offset="100%" stopColor={palette.ink} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill={`url(#bg-${id})`} />
        <ellipse cx="50" cy="89" rx="27" ry="4.5" fill={`url(#sh-${id})`} />

        {/* Colour first, then every line on top, so no fill ever covers an
            outline and the drawing keeps its edges whatever the palette. */}
        {parts.map((part, i) =>
          part.fill ? (
            <path key={`f${i}`} d={part.d} fill={subject} fillOpacity={dark ? 0.9 : 0.82} />
          ) : null
        )}
        {parts.map((part, i) => (
          <path
            key={`s${i}`}
            d={part.d}
            fill="none"
            stroke={outline}
            strokeWidth="2.4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}

/** Deterministic, so a theme's tiles do not reshuffle on every render. */
export const SHAPE_CYCLE: Shape[] = ['dress', 'shirt', 'jar', 'sneaker', 'perfume', 'giftbox'];
