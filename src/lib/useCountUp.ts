'use client';

import { useEffect, useState } from 'react';

/**
 * Numbers that land rather than sit there.
 *
 * A dashboard tile showing "18.4k" is a screenshot. The same tile counting up to it is
 * the product working, and that is the whole thing the theme gallery is trying to sell.
 *
 * Every counter on the page shares one requestAnimationFrame loop. Eighteen tiles each
 * driving their own loop is eighteen callbacks fighting the scroll on a mid-range
 * Android in Cairo, which is exactly the latency this project cannot afford. The loop
 * here starts when the first counter asks for it, and stops itself the moment the last
 * one finishes, so a page at rest costs nothing.
 */

const DURATION_MS = 1000;

type Job = { start: number; step: (progress: number) => void };

const jobs = new Map<number, Job>();
let nextId = 0;
let frame = 0;

/** Fast at first, easing into the final value, the way a real total settles. */
function easeOut(p: number): number {
  return 1 - Math.pow(1 - p, 3);
}

function pump(now: number) {
  jobs.forEach((job, id) => {
    const progress = Math.min(1, (now - job.start) / DURATION_MS);
    job.step(easeOut(progress));
    if (progress === 1) {
      jobs.delete(id);
    }
  });
  frame = jobs.size > 0 ? requestAnimationFrame(pump) : 0;
}

function schedule(step: (progress: number) => void): () => void {
  const id = nextId++;
  jobs.set(id, { start: performance.now(), step });
  if (frame === 0) {
    frame = requestAnimationFrame(pump);
  }
  return () => {
    jobs.delete(id);
  };
}

/**
 * Counts from zero to `target` once `active` turns true, and again if it turns off
 * and back on. Switching the theme gallery's tab remounts the tile, which is what
 * makes the numbers run a second time when someone flips to the dashboard view.
 *
 * Returns `target` immediately when the reader has asked for reduced motion, or on
 * the server, so the markup is never wrong before hydration.
 */
export function useCountUp(target: number, active: boolean): number {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) {
      return;
    }
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(target);
      return;
    }

    setValue(0);
    return schedule((progress) => setValue(target * progress));
  }, [target, active]);

  return value;
}

/**
 * Splits a display string into the part worth animating and the part that must be
 * printed verbatim.
 *
 * "18.4k" is a number and a unit, and only the number should move. Doing this here
 * rather than restructuring the content files keeps a single readable string per stat
 * in Arabic and English, instead of three fields a translator has to keep in step.
 */
export function splitNumeric(display: string): {
  target: number;
  decimals: boolean;
  grouped: boolean;
  suffix: string;
} {
  const match = display.match(/^([\d.,]+)(.*)$/);
  if (!match) {
    return { target: NaN, decimals: false, grouped: false, suffix: display };
  }
  const [, digits, suffix] = match;
  const grouped = digits.includes(',');
  const plain = digits.replace(/,/g, '');
  return {
    target: Number(plain),
    decimals: plain.includes('.'),
    grouped,
    suffix,
  };
}

/** Renders a counted value back in the shape the content file wrote it. */
export function formatCounted(
  value: number,
  decimals: boolean,
  grouped: boolean
): string {
  if (decimals) {
    return value.toFixed(1);
  }
  const whole = Math.round(value);
  return grouped ? whole.toLocaleString('en-US') : String(whole);
}
