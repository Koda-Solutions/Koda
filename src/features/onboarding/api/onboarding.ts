import {
  IDENTITY_URL,
  STORE_URL,
  request,
  writeToken,
} from '@/lib/api/client';

/** Mirrors SessionResponseDTO in koda-identity-backend. */
export interface Session {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  merchantId: number;
  mobile: string;
  name: string | null;
  hasStore: boolean;
  storeId: number | null;
  storeSlug: string | null;
}

export interface SentOtp {
  channel: string;
  expiresIn: number;
  /** Only populated while the log channel is exposing codes, which is dev only. */
  devCode: string | null;
}

export interface SlugAvailability {
  slug: string;
  available: boolean;
  suggestion: string | null;
  reason: string | null;
}

export interface Store {
  id: number;
  name: string;
  slug: string;
  storeUrl: string;
  themeKey: string;
  accentColor: string | null;
}

/**
 * Local stand-ins used only when the backend is unreachable.
 *
 * They keep the deployed marketing site's wizard clickable before the API exists.
 * `FALLBACK_CODE` is deliberately fixed and obvious: nobody should mistake a simulated
 * signup for a real one.
 */
const FALLBACK_CODE = '123456';

function fallbackSlug(name: string): string {
  const latin = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return latin || `store-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function sendOtp(mobile: string): Promise<SentOtp> {
  return request<SentOtp>(IDENTITY_URL, '/auth/sendOtp', {
    method: 'POST',
    body: { mobile },
    fallback: () => ({ channel: 'demo', expiresIn: 600, devCode: FALLBACK_CODE }),
  });
}

export async function verifyOtp(mobile: string, code: string): Promise<Session> {
  const session = await request<Session>(IDENTITY_URL, '/auth/verifyOtp', {
    method: 'POST',
    body: { mobile, code },
    fallback: () => {
      if (code !== FALLBACK_CODE) {
        // Mirror the real failure so the wrong-code path is still exercised offline.
        throw new Error('OTP_INVALID');
      }
      return {
        accessToken: 'demo-token',
        refreshToken: 'demo-refresh',
        expiresIn: 900,
        merchantId: 0,
        mobile,
        name: null,
        hasStore: false,
        storeId: null,
        storeSlug: null,
      } satisfies Session;
    },
  });

  writeToken(session.accessToken);
  return session;
}

export async function checkSlug(slug: string): Promise<SlugAvailability> {
  return request<SlugAvailability>(
    STORE_URL,
    `/stores/slugAvailable?slug=${encodeURIComponent(slug)}`,
    {
      fallback: () => ({ slug, available: true, suggestion: null, reason: null }),
    }
  );
}

export interface CreateStoreInput {
  name: string;
  category?: string;
  /** FREE, PRO or MAX. PRO and MAX start a 14-day trial with no card. */
  plan?: string;
  themeKey?: string;
  accentColor?: string;
  bio?: string;
}

export async function createStore(input: CreateStoreInput): Promise<Store> {
  return request<Store>(STORE_URL, '/stores', {
    method: 'POST',
    body: input,
    auth: true,
    fallback: () => {
      const slug = fallbackSlug(input.name);
      return {
        id: 0,
        name: input.name,
        slug,
        storeUrl: `https://${slug}.kodasolutions.net`,
        themeKey: input.themeKey ?? 'nour',
        accentColor: input.accentColor ?? null,
      } satisfies Store;
    },
  });
}
