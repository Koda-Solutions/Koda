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
 * Deliberately `window.location` in an effect rather than `useSearchParams`: this
 * page is statically prerendered, and the hook would force the whole wizard into a
 * Suspense boundary to keep that. The plan is not needed until the last step.
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
