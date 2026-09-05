'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { ContentType } from '@/data/content';

/** Egyptian mobile: 11 digits, 010 Vodafone, 011 Etisalat, 012 Orange, 015 WE. */
const EGYPT_MOBILE = /^01[0125]\d{8}$/;

/**
 * Normalises whatever the merchant types into the local `01XXXXXXXXX` form.
 *
 * People paste their number in every shape there is: with +20, with 0020, with the
 * leading zero missing because they copied it from a form that had a country chip.
 * All of those are the same number, so all of them are accepted.
 */
export function normaliseEgyptianMobile(raw: string): string {
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('0020')) digits = digits.slice(4);
  else if (digits.startsWith('20') && digits.length > 10) digits = digits.slice(2);
  if (digits.startsWith('1')) digits = '0' + digits;
  return digits.slice(0, 11);
}

/** 01012345678 -> "010 1234 5678", which is how an Egyptian number is read aloud. */
export function formatEgyptianMobile(digits: string): string {
  const a = digits.slice(0, 3);
  const b = digits.slice(3, 7);
  const c = digits.slice(7, 11);
  return [a, b, c].filter(Boolean).join(' ');
}

export default function PhoneStep({
  t,
  headingFont,
  busy,
  onSubmit,
}: {
  t: ContentType['onboarding']['step1'];
  headingFont: string;
  busy: boolean;
  onSubmit: (phone: string) => void;
}) {
  const [phone, setPhone] = useState('');
  const [touched, setTouched] = useState(false);
  const isValid = EGYPT_MOBILE.test(phone);
  const showError = touched && phone.length > 0 && !isValid;

  return (
    <div className="flex flex-col gap-5">
      {/* Someone who lands here by accident needs a way out that is not the browser
          back button, especially on a phone where that gesture is easy to miss. */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-ink transition-colors self-start -mt-2 min-h-11"
      >
        <ArrowRight size={16} className="rtl:rotate-0 ltr:rotate-180" aria-hidden />
        {t.backToHome}
      </Link>

      <div>
        <h1 className={cn('text-2xl', headingFont)}>{t.title}</h1>
        <p className="text-sm text-ink-muted mt-2">{t.subtitle}</p>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold mb-2">
          {t.phoneLabel}
        </label>
        <div className="flex gap-2">
          <span
            className="flex items-center justify-center gap-1.5 bg-paper border border-line rounded-xl px-3.5 font-bold text-sm whitespace-nowrap"
            dir="ltr"
          >
            🇪🇬 +20
          </span>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={formatEgyptianMobile(phone)}
            onChange={(e) => setPhone(normaliseEgyptianMobile(e.target.value))}
            onBlur={() => setTouched(true)}
            placeholder={t.phonePlaceholder}
            dir="ltr"
            aria-invalid={showError}
            aria-describedby={showError ? 'phone-error' : undefined}
            className={cn(
              'flex-1 text-start bg-paper border rounded-xl px-3.5 py-3 text-[15px] tracking-wide outline-none transition-colors',
              showError ? 'border-red-500' : 'border-line focus:border-accent'
            )}
          />
        </div>
        {showError && (
          <p id="phone-error" className="text-xs text-red-600 mt-2">
            {t.phoneError}
          </p>
        )}
      </div>

      <Button
        variant="primary"
        className="w-full"
        disabled={!isValid || busy}
        onClick={() => isValid && !busy && onSubmit(phone)}
      >
        {busy ? t.sending : t.sendCodeBtn}
      </Button>
      <p className="text-xs text-ink-muted text-center">{t.terms}</p>
    </div>
  );
}
