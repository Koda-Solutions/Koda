'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { themePalettes, FREE_THEME } from '@/data/themePreviews';
import StorefrontPreview from '@/features/marketing/components/previews/StorefrontPreview';
import type { ContentType } from '@/data/content';

export default function ThemeStep({
  t,
  themes,
  headingFont,
  preview,
  onSubmit,
  onBack,
}: {
  t: ContentType['onboarding']['step4'];
  themes: ContentType['themes']['items'];
  headingFont: string;
  preview: React.ComponentProps<typeof StorefrontPreview>['copy'];
  onSubmit: (themeKey: string) => void;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(FREE_THEME);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className={cn('text-3xl', headingFont)}>{t.title}</h1>
        <p className="text-sm text-ink-muted mt-2">{t.subtitle}</p>
      </div>
      <p className="text-xs text-ink-muted -mt-2">{t.freeNote}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {themes.map((theme, i) => (
          <button
            key={theme.name}
            type="button"
            disabled={themePalettes[i].key !== FREE_THEME}
            onClick={() => setSelected(themePalettes[i].key)}
            className={cn(
              'relative rounded-xl border-2 overflow-hidden text-start transition-transform',
              themePalettes[i].key === FREE_THEME
                ? 'hover:-translate-y-0.5'
                : 'opacity-55 cursor-not-allowed',
              selected === themePalettes[i].key ? 'border-accent' : 'border-line'
            )}
          >
            {selected === themePalettes[i].key && (
              <span className="absolute top-1.5 end-1.5 w-5 h-5 rounded-full bg-accent text-paper flex items-center justify-center z-10">
                <Check size={12} strokeWidth={3} />
              </span>
            )}
            {/* The same preview the landing page sells, so what a merchant chose
                and what they were shown are provably the same thing. */}
            <div className="[&>div]:h-[164px]">
              <StorefrontPreview palette={themePalettes[i]} copy={preview} />
            </div>
            <div className="px-2.5 py-2 border-t border-line bg-paper text-xs font-bold text-center flex items-center justify-center gap-1.5">
              {theme.name}
              {themePalettes[i].key !== FREE_THEME && (
                <span className="text-[10px] font-bold text-ink-muted">{t.proBadge}</span>
              )}
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
