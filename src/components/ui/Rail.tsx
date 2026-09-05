'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowCurve } from './Doodles';

/**
 * Cards that swipe sideways on a phone and become a grid on a wider screen.
 *
 * Six feature cards stacked vertically is six screens of scrolling to learn one idea,
 * and by the third the reader has stopped reading. Swiping is what this audience does
 * all day in Instagram, and it keeps a section roughly one screen tall.
 *
 * Built on CSS scroll snap, not a carousel library. No JavaScript runs while the
 * reader drags: the browser scrolls on the compositor, momentum and all, which is the
 * difference between "native" and "a website pretending" on a mid-range Android. It
 * also degrades honestly, because a scroll container without snap support is still a
 * scroll container.
 *
 * Exported as classes rather than a wrapper component on purpose. Sections here render
 * their own semantics, including an <ol> of <li> steps, and a wrapper element would
 * either nest an <li> inside an <li> or add a layer that the desktop grid then has to
 * be taught to ignore. Applying two class strings changes no markup at all, so every
 * desktop layout stays exactly what it was.
 *
 * Usage: `railClass('md', 'gap-6 md:grid-cols-3')` on the container, `railItem('md')`
 * on each card. Keep the gap unprefixed, since it has to apply to the flex rail too.
 */

const RAIL =
  'flex overflow-x-auto snap-x snap-mandatory no-scrollbar ' +
  // Bleed past .container's px-4 so a card is cut off at the screen edge. That cut is
  // the only reliable signal that there is more to the side.
  '-mx-4 px-4 scroll-px-4 pt-2 pb-4';

const UNRAIL = {
  sm: 'sm:grid sm:overflow-visible sm:mx-0 sm:px-0 sm:pt-0 sm:pb-0',
  md: 'md:grid md:overflow-visible md:mx-0 md:px-0 md:pt-0 md:pb-0',
} as const;

const ITEM = {
  sm: 'snap-center shrink-0 w-[84%] max-w-[340px] sm:w-auto sm:max-w-none sm:shrink',
  md: 'snap-center shrink-0 w-[84%] max-w-[340px] md:w-auto md:max-w-none md:shrink',
} as const;

const HIDE = {
  sm: 'sm:hidden',
  md: 'md:hidden',
} as const;

export type RailStop = 'sm' | 'md';

export function railClass(stop: RailStop, gridClass: string, extra?: string): string {
  return cn(RAIL, UNRAIL[stop], gridClass, extra);
}

export function railItem(stop: RailStop, extra?: string): string {
  return cn(ITEM[stop], extra);
}

/**
 * A handwritten nudge, shown only while the rail is still a rail.
 *
 * The bled card edge already says "there is more"; this says it in words for anyone
 * who has not met the pattern. It disappears the moment the cards become a grid,
 * because at that point it would be a lie.
 */
export function SwipeHint({
  text,
  stop = 'md',
  className,
}: {
  text: string;
  stop?: RailStop;
  /** The caller passes the font, since Caveat has no Arabic glyphs. */
  className?: string;
}) {
  return (
    <div
      className={cn('flex items-center gap-2 justify-end text-ink-muted -mt-2 mb-2', HIDE[stop])}
      aria-hidden
    >
      <span className={cn('leading-none select-none', className)}>{text}</span>
      <ArrowCurve className="w-10 h-6 opacity-60 rtl:-scale-x-100" />
    </div>
  );
}
