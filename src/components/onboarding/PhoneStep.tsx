'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import type { ContentType } from '@/data/content';

export default function PhoneStep({
  t,
  headingFont,
  onSubmit,
}: {
  t: ContentType['onboarding']['step1'];
  headingFont: string;
  onSubmit: (phone: string) => void;
}) {
  const [phone, setPhone] = useState('');
  const isValid = phone.length >= 10;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className={cn('text-2xl', headingFont)}>{t.title}</h1>
        <p className="text-sm text-ink-muted mt-2">{t.subtitle}</p>
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">{t.phoneLabel}</label>
        <div className="flex gap-2">
          <span className="flex items-center justify-center gap-1.5 bg-paper border border-line rounded-xl px-3.5 font-bold text-sm whitespace-nowrap" dir="ltr">
            🇪🇬 20+
          </span>
          <input
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            placeholder={t.phonePlaceholder}
            dir="ltr"
            className="flex-1 text-end bg-paper border border-line rounded-xl px-3.5 py-3 text-[15px] outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>
      <Button
        variant="primary"
        className="w-full"
        disabled={!isValid}
        onClick={() => isValid && onSubmit(phone)}
      >
        {t.sendCodeBtn}
      </Button>
      <p className="text-xs text-ink-muted text-center">{t.terms}</p>
    </div>
  );
}
