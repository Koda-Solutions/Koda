'use client';

import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { ContentType } from '@/data/content';

const accentOptions = [
  '#146B64',
  '#9A5B22',
  '#2E5C8A',
  '#7B4B8A',
  '#262117',
];

export default function BrandingStep({
  t,
  headingFont,
  busy,
  onSubmit,
  onBack,
}: {
  t: ContentType['onboarding']['step5'];
  headingFont: string;
  busy: boolean;
  onSubmit: (color: string, bio: string) => void;
  onBack: () => void;
}) {
  const [color, setColor] = useState(accentOptions[0]);
  const [bio, setBio] = useState('');

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className={cn('text-2xl', headingFont)}>{t.title}</h1>
        <p className="text-sm text-ink-muted mt-2">{t.subtitle}</p>
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">{t.logoLabel}</label>
        <div className="border border-dashed border-line rounded-xl p-5 text-center bg-paper hover:border-accent transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-accent-soft text-accent-ink flex items-center justify-center mx-auto mb-2.5">
            <Plus size={18} strokeWidth={2.5} />
          </div>
          <p className="text-sm font-bold">{t.dropzoneText}</p>
          <p className="text-xs text-ink-muted mt-0.5">{t.dropzoneHint}</p>
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">{t.colorLabel}</label>
        <div className="flex gap-2.5 flex-wrap">
          {accentOptions.map((hex) => (
            <button
              key={hex}
              type="button"
              onClick={() => setColor(hex)}
              style={{ background: hex }}
              className={cn(
                'w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110',
                color === hex ? 'ring-2 ring-offset-2 ring-ink ring-offset-paper-raised' : ''
              )}
            >
              {color === hex && <Check size={14} strokeWidth={3} />}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">{t.bioLabel}</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder={t.bioPlaceholder}
          rows={3}
          className="w-full bg-paper border border-line rounded-xl px-3.5 py-3 text-sm outline-none focus:border-accent transition-colors resize-y"
        />
      </div>
      <Button
        variant="primary"
        className="w-full"
        onClick={() => onSubmit(color, bio)}
      >
        {t.finishBtn}
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
