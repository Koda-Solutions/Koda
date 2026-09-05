'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { ContentType } from '@/data/content';

export default function SuccessStep({
  t,
  headingFont,
  storeSlug,
}: {
  t: ContentType['onboarding']['step6'];
  headingFont: string;
  storeSlug: string;
}) {
  return (
    <div className="flex flex-col gap-5 items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#E3F7EA] text-[#25D366] flex items-center justify-center">
        <Check size={30} strokeWidth={3} />
      </div>
      <div>
        <h1 className={cn('text-2xl', headingFont)}>{t.title}</h1>
        <p className="text-sm text-ink-muted mt-2">{t.subtitle}</p>
      </div>
      <div
        className="w-full bg-accent-soft text-accent-ink rounded-xl px-4 py-3.5 font-bold text-[15px]"
        dir="ltr"
      >
        {t.urlPrefix}
        {storeSlug}
      </div>
      <div className="w-full flex flex-col gap-2.5">
        <Button variant="primary" className="w-full" href="/">
          {t.dashboardBtn}
        </Button>
        <Button variant="outline" className="w-full" href="/">
          {t.viewStoreBtn}
        </Button>
      </div>
      <p className="text-xs text-ink-muted">{t.shareHint}</p>
    </div>
  );
}
