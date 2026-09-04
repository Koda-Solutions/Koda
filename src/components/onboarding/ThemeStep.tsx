'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import { themePreviews } from '@/data/themePreviews';
import type { ContentType } from '@/data/content';

export default function ThemeStep({
  t,
  themes,
  headingFont,
  onSubmit,
  onBack,
}: {
  t: ContentType['onboarding']['step4'];
  themes: ContentType['themes']['items'];
  headingFont: string;
  onSubmit: (themeName: string) => void;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className={cn('text-2xl', headingFont)}>{t.title}</h1>
        <p className="text-sm text-ink-muted mt-2">{t.subtitle}</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {themes.map((theme, i) => (
          <button
            key={theme.name}
            type="button"
            onClick={() => setSelected(theme.name)}
            className={cn(
              'relative rounded-xl border-2 overflow-hidden text-start transition-transform hover:-translate-y-0.5',
              selected === theme.name ? 'border-accent' : 'border-line'
            )}
          >
            {selected === theme.name && (
              <span className="absolute top-1.5 end-1.5 w-5 h-5 rounded-full bg-accent text-paper flex items-center justify-center z-10">
                <Check size={12} strokeWidth={3} />
              </span>
            )}
            <div
              className="h-16 p-2.5 flex flex-col gap-1.5"
              style={{ background: themePreviews[i].bg }}
            >
              <div
                className="h-1.5 w-1/2 rounded-full"
                style={{ background: themePreviews[i].bars[0] }}
              />
              <div className="flex gap-1 flex-1 mt-0.5">
                <div
                  className="flex-1 rounded"
                  style={{ background: themePreviews[i].blocks }}
                />
                <div
                  className="flex-1 rounded"
                  style={{ background: themePreviews[i].blocks }}
                />
              </div>
            </div>
            <div className="px-2.5 py-2 border-t border-line bg-paper text-xs font-bold text-center">
              {theme.name}
            </div>
          </button>
        ))}
      </div>
      <Button
        variant="primary"
        className="w-full"
        disabled={!selected}
        onClick={() => selected && onSubmit(selected)}
      >
        {t.nextBtn}
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
