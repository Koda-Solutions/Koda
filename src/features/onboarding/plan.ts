'use client';

import { useSyncExternalStore } from 'react';

/**
 * The plan a merchant clicked on the pricing table, carried into the wizard.
 *
 * It arrives as `?plan=pro` on /onboarding rather than in storage, so the choice
 * survives a shared link and a reload, and so the CTA a merchant pressed is visible
 * in the URL when they ask why their trial says Pro.
 *
 * The server re-derives everything from this value: sending PRO here is a *request*
 * for a trial, and koda-store-backend decides whether one starts. Nothing about the
 * merchant's entitlements is trusted from the browser.
 */

export const PLANS = ['FREE', 'PRO', 'MAX'] as const;
export type Plan = (typeof PLANS)[number];

export function isPlan(value: string): value is Plan {
  return (PLANS as readonly string[]).includes(value);
}

/**
 * Reads the plan out of the current URL.
 *
 * Deliberately `window.location` rather than `useSearchParams`: this page is
 * statically prerendered, and that hook would force the whole wizard into a Suspense
 * boundary to keep it that way, for a value not needed until the last step.
 * Anything unrecognised falls back to FREE, which starts no trial and charges nothing.
 */
export function planFromLocation(): Plan {
  if (typeof window === 'undefined') {
    return 'FREE';
  }
  const raw = new URLSearchParams(window.location.search).get('plan');
  const upper = (raw ?? '').trim().toUpperCase();
  return isPlan(upper) ? upper : 'FREE';
}

/**
 * The plan, as a hook.
 *
 * `useSyncExternalStore` rather than state plus an effect. The URL genuinely is an
 * external system that the server cannot see, which is the exact case this hook
 * exists for: it hands React a server snapshot and a client snapshot and lets React
 * reconcile them, with no cascading render and no hydration mismatch to paper over.
 *
 * Nothing subscribes, because the wizard never navigates within itself. If it ever
 * does, this is where a popstate listener goes.
 */
const noChanges = () => () => {};

export function usePlan(): Plan {
  return useSyncExternalStore(noChanges, planFromLocation, () => 'FREE' as Plan);
}
