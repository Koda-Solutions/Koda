'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { ContentType } from '@/data/content';

export default function OtpStep({
  t,
  headingFont,
  phone,
  busy,
  onVerify,
  onResend,
  onBack,
}: {
  t: ContentType['onboarding']['step2'];
  headingFont: string;
  phone: string;
  busy: boolean;
  onVerify: (code: string) => void;
  onResend: () => void;
  onBack: () => void;
}) {
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [resent, setResent] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const isComplete = digits.every((d) => d.length === 1);

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    if (digit && index < digits.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setResent(true);
    onResend();
    setTimeout(() => setResent(false), 2000);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className={cn('text-2xl', headingFont)}>{t.title}</h1>
        <p className="text-sm text-ink-muted mt-2">
          {t.subtitle.replace('{phone}', phone)}
        </p>
      </div>
      <div className="flex gap-2" dir="ltr">
        {digits.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-full text-center text-xl font-bold bg-paper border border-line rounded-xl py-3 outline-none focus:border-accent transition-colors"
          />
        ))}
      </div>
      <p className="text-sm text-ink-muted text-center">
        {t.resendQuestion}{' '}
        <button
          type="button"
          onClick={handleResend}
          className="font-bold text-accent-ink"
        >
          {resent ? t.resendSentLabel : t.resendBtn}
        </button>
      </p>
      <Button
        variant="primary"
        className="w-full"
        disabled={!isComplete || busy}
        onClick={() => isComplete && !busy && onVerify(digits.join(''))}
      >
        {busy ? t.verifying : t.verifyBtn}
      </Button>
      <button
        type="button"
        onClick={onBack}
        className="text-sm text-ink-muted text-center hover:text-ink"
      >
        {t.backBtn}
      </button>
    </div>
  );
}
