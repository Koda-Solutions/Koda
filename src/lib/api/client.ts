/**
 * The one place the frontend talks to the backend.
 *
 * Every Koda endpoint answers with the same envelope, so unwrapping it belongs here
 * rather than in every caller:
 *
 *   { message, status, data, errorCode }
 *
 * `status: false` is an expected business outcome (slug taken, seat limit reached), not
 * a crash. It becomes an ApiError carrying `errorCode`, which is what callers switch on.
 * Never switch on `message`: it is prose and it is translated.
 */

export interface ReturnObject<T> {
  message: string;
  status: boolean;
  data: T | null;
  errorCode: string | null;
}

export class ApiError extends Error {
  readonly errorCode: string | null;
  /** True when the backend could not be reached at all, as opposed to refusing. */
  readonly offline: boolean;

  constructor(message: string, errorCode: string | null, offline = false) {
    super(message);
    this.name = 'ApiError';
    this.errorCode = errorCode;
    this.offline = offline;
  }
}

export const IDENTITY_URL =
  process.env.NEXT_PUBLIC_IDENTITY_URL ?? 'http://localhost:8081';
export const STORE_URL =
  process.env.NEXT_PUBLIC_STORE_URL ?? 'http://localhost:8082';

/**
 * Until the backend is deployed, the landing site has no API to talk to.
 *
 * Rather than showing a broken wizard to anyone who visits kodasolutions.net, an
 * unreachable backend falls back to a local simulation of the same flow. It is off the
 * moment a real API answers, and it is a stopgap with an end date: delete the fallbacks
 * once the services are on AWS.
 */
export const FALLBACK_ENABLED =
  (process.env.NEXT_PUBLIC_API_FALLBACK ?? 'true') === 'true';

const TOKEN_KEY = 'koda.accessToken';

export function readToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(TOKEN_KEY);
  } catch {
    // Private mode, or site data blocked. Not being able to remember a session is
    // survivable; throwing here would break the page.
    return null;
  }
}

export function writeToken(token: string | null) {
  if (typeof window === 'undefined') return;
  try {
    if (token) window.localStorage.setItem(TOKEN_KEY, token);
    else window.localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* see readToken */
  }
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: unknown;
  auth?: boolean;
  /** Used only when the backend is unreachable and FALLBACK_ENABLED. */
  fallback?: () => unknown;
  signal?: AbortSignal;
}

export async function request<T>(
  baseUrl: string,
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = 'GET', body, auth = false, fallback, signal } = options;

  const headers: Record<string, string> = {};
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (auth) {
    const token = readToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let response: Response;
  try {
    response = await fetch(`${baseUrl}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal,
    });
  } catch (networkFailure) {
    // A genuine "cannot reach the server", not a refusal from it.
    if (signal?.aborted) throw networkFailure;
    if (FALLBACK_ENABLED && fallback) {
      return fallback() as T;
    }
    throw new ApiError(
      'We could not reach Koda. Check your connection and try again.',
      'NETWORK_UNREACHABLE',
      true
    );
  }

  let envelope: ReturnObject<T>;
  try {
    envelope = (await response.json()) as ReturnObject<T>;
  } catch {
    throw new ApiError('Something went wrong. Try again.', 'BAD_RESPONSE');
  }

  if (!response.ok || !envelope.status) {
    throw new ApiError(
      envelope.message || 'Something went wrong. Try again.',
      envelope.errorCode
    );
  }

  return envelope.data as T;
}
