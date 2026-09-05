import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * The face for handwritten marginalia, per language.
 *
 * Caveat has no Arabic glyphs. Left on Arabic text it falls back to whatever the
 * system offers, which is the silent substitution that once rendered the logo
 * wordmark in a stock sans without anyone noticing. Arabic annotations are Thmanyah
 * Sans instead, small and bold so they still read as a note rather than body copy.
 *
 * One helper rather than the same ternary in six components, because the day a
 * seventh forgets it is the day the bug comes back.
 */
export function handFont(language: string): string {
  return language === 'en' ? 'font-hand text-base' : 'font-thmanyah font-bold text-[13px]';
}
