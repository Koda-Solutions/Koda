'use client';

import React from 'react';

/**
 * A pen stroke under a word, drawn when it scrolls into view.
 *
 * The whole effect is one path and one CSS animation on stroke-dashoffset: the
 * line is dashed with a single dash as long as the path itself, offset out of
 * sight, then the offset animates to zero and the stroke appears to be drawn.
 *
 * No JavaScript and no animation library. An IntersectionObserver would be the
 * obvious way to trigger it, and thirty observers on a landing page is thirty
 * callbacks competing with scrolling on a mid-range phone. `animation-timeline:
 * view()` hands the same thing to the compositor, and the browsers that do not
 * support it simply show the finished line, which is the correct fallback.
 */
export function SketchUnderline({
  color = 'var(--marker-coral)',
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={`sketch-underline block w-full h-[0.4em] ${className}`}
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      {/* Not a straight line and not a smooth curve: the wobble is what stops it
          reading as a border-bottom. */}
      <path
        d="M3 8.5 C 32 4, 58 10, 88 6.5 S 146 3.5, 197 7"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * The same idea as a circle drawn round something, for the one word on the page
 * that deserves it. Two loops, because nobody circles a word exactly once.
 */
export function SketchCircle({
  color = 'var(--marker-coral)',
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={`sketch-underline absolute inset-[-14%_-6%] w-[112%] h-[128%] pointer-events-none ${className}`}
      viewBox="0 0 200 60"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path
        d="M100 4 C 40 4, 6 16, 6 30 C 6 45, 52 56, 104 56 C 156 56, 194 45, 194 30 C 194 16, 150 5, 96 6 C 44 7, 14 18, 16 31"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
