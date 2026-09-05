'use client';

import React from 'react';

/**
 * The marginalia.
 *
 * A sketchbook page is not a clean layout with a handwriting font applied. It is
 * a strong composition with things drawn in the space around it: arrows pointing
 * at what matters, a star next to the good bit, a scribble where someone was
 * thinking. Those marks are what make it read as a page somebody worked on
 * rather than a template with a filter.
 *
 * All of these are stroked paths on `currentColor`, so a parent sets the colour
 * and they inherit. None of them is decorative-only in the accessibility sense
 * being purely presentational, so every one is aria-hidden.
 *
 * They are also deliberately cheap: no filters, no gradients, no animation
 * unless the caller asks. A dozen of these on a page costs less than one
 * drop-shadow.
 */

type DoodleProps = {
  className?: string;
  strokeWidth?: number;
};

/** A long curving arrow, for pointing at the thing you want looked at. */
export function ArrowCurve({ className = '', strokeWidth = 2.2 }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" className={className} aria-hidden>
      <path
        d="M4 10 C 30 4, 74 8, 96 42"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M84 34 L98 46 L84 52"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The four-point sparkle. The most useful mark there is: it says "this bit". */
export function Sparkle({ className = '', strokeWidth = 2 }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 2 C 21 14, 26 19, 38 20 C 26 21, 21 26, 20 38 C 19 26, 14 21, 2 20 C 14 19, 19 14, 20 2 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A five-point star drawn in one stroke, corners slightly off. */
export function Star({ className = '', strokeWidth = 2 }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 3 L25 15 L38 16 L28 24 L31 37 L20 30 L9 37 L12 24 L2 16 L15 15 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A thinking scribble. Loops, not a wave, because a wave looks like a chart. */
export function Scribble({ className = '', strokeWidth = 2 }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 40" fill="none" className={className} aria-hidden>
      <path
        d="M4 28 C 12 6, 22 6, 26 22 C 30 38, 40 38, 44 20 C 48 4, 58 6, 62 22 C 66 36, 78 32, 86 14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Speed lines. Three strokes that make a static thing feel like it moved. */
export function Zip({ className = '', strokeWidth = 2 }: DoodleProps) {
  return (
    <svg viewBox="0 0 50 34" fill="none" className={className} aria-hidden>
      <path
        d="M2 6 H30 M8 17 H44 M2 28 H26"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Cross-hatching, for weight in a corner without adding another object. */
export function Hatch({ className = '', strokeWidth = 1.6 }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden>
      <path
        d="M2 40 L22 20 M10 50 L38 22 M22 56 L52 26 M38 58 L58 38"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A hand-drawn check, for a list that should not look like a form. */
export function Tick({ className = '', strokeWidth = 2.6 }: DoodleProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" className={className} aria-hidden>
      <path
        d="M3 14 L10 21 L23 4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * A label in a drawn box, the way the reference tags things.
 *
 * A span rather than an SVG, because the text inside has to be selectable and
 * translatable. The box is the wobbly border-radius the rest of the page uses.
 */
export function DoodleTag({
  children,
  color = 'var(--marker-coral)',
  className = '',
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`sketch-frame-2 font-hand text-lg leading-none px-3 py-1.5 inline-block whitespace-nowrap ${className}`}
      style={{ borderColor: color, color }}
    >
      {children}
    </span>
  );
}
