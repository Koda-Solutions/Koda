'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { ContentType } from '@/data/content';

export default function StoreInfoStep({
  t,
  headingFont,
  initialName,
  onSubmit,
  onBack,
}: {
  t: ContentType['onboarding']['step3'];
  headingFont: string;
  initialName: string;
  onSubmit: (name: string, category: string) => void;
  onBack: () => void;
}) {
  const [name, setName] = useState(initialName);
  const [category, setCategory] = useState('');
  const isValid = name.trim().length > 1 && category.length > 0;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className={cn('text-2xl', headingFont)}>{t.title}</h1>
        <p className="text-sm text-ink-muted mt-2">{t.subtitle}</p>
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">{t.nameLabel}</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.namePlaceholder}
          className="w-full bg-paper border border-line rounded-xl px-3.5 py-3 text-[15px] outline-none focus:border-accent transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">
          {t.categoryLabel}
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-paper border border-line rounded-xl px-3.5 py-3 text-[15px] outline-none focus:border-accent transition-colors"
        >
          <option value="">{t.categoryPlaceholder}</option>
          {t.categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <Button
        variant="primary"
        className="w-full"
        disabled={!isValid}
        onClick={() => isValid && onSubmit(name, category)}
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
