'use client';

import React from 'react';
import type { ThemePalette } from '@/data/themePreviews';

export interface StorefrontCopy {
  storeName: string;
  heroTitle: string;
  heroSub: string;
  categories: [string, string, string];
  products: { name: string; price: string; was?: string }[];
  saleBadge: string;
  cta: string;
  currency: string;
}

/**
 * A miniature of what a customer sees on a storefront built with this theme.
 *
 * Drawn from the palette rather than screenshotted, so it restyles itself and can never
 * go stale against the real product. Detailed on purpose: a merchant choosing a theme is
 * really asking "will my shop look expensive", and coloured bars do not answer that.
 * Product images are colour tiles; on a real store those are the merchant's own photos.
 */
export default function StorefrontPreview({
  palette,
  copy,
}: {
  palette: ThemePalette;
  copy: StorefrontCopy;
}) {
  return (
    <div
      className="h-[290px] flex flex-col text-[8px] leading-tight select-none overflow-hidden"
      style={{ background: palette.bg, color: palette.ink }}
      aria-hidden
    >
      {/* header: logo, store name, search, cart */}
      <div
        className="flex items-center gap-1.5 px-2.5 py-2 border-b"
        style={{ background: palette.surface, borderColor: palette.line }}
      >
        <span
          className="w-4 h-4 rounded-[4px] shrink-0 flex items-center justify-center text-[7px] font-black"
          style={{ background: palette.accent, color: palette.onAccent }}
        >
          {copy.storeName.slice(0, 1)}
        </span>
        <span className="font-bold text-[9px]">{copy.storeName}</span>
        <span
          className="ms-auto h-3.5 flex-1 max-w-[62px] rounded-full border flex items-center px-1.5"
          style={{ borderColor: palette.line, background: palette.bg }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full border"
            style={{ borderColor: palette.muted }}
          />
        </span>
        <span
          className="w-4 h-4 rounded-[4px] border relative shrink-0"
          style={{ borderColor: palette.line, background: palette.bg }}
        >
          <span
            className="absolute -top-1 -start-1 w-2.5 h-2.5 rounded-full text-[6px] font-bold flex items-center justify-center"
            style={{ background: palette.highlight, color: palette.onAccent }}
          >
            2
          </span>
        </span>
      </div>

      <div className="flex-1 p-2.5 flex flex-col gap-2 min-h-0">
        {/* hero */}
        <div
          className="rounded-lg p-2.5 flex flex-col gap-1 relative overflow-hidden"
          style={{ background: palette.accent, color: palette.onAccent }}
        >
          <span
            className="absolute -end-4 -top-4 w-14 h-14 rounded-full opacity-25"
            style={{ background: palette.highlight }}
          />
          <span className="font-black text-[11px] relative">{copy.heroTitle}</span>
          <span className="opacity-80 relative">{copy.heroSub}</span>
          <span
            className="mt-1 self-start rounded-full px-2 py-[3px] font-bold text-[7px] relative"
            style={{ background: palette.onAccent, color: palette.accent }}
          >
            {copy.cta}
          </span>
        </div>

        {/* categories */}
        <div className="flex gap-1">
          {copy.categories.map((c, i) => (
            <span
              key={c}
              className="rounded-full px-2 py-1 font-semibold whitespace-nowrap"
              style={{
                background: i === 0 ? palette.accent : palette.surface,
                color: i === 0 ? palette.onAccent : palette.muted,
                border: `1px solid ${i === 0 ? palette.accent : palette.line}`,
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* product grid */}
        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          {copy.products.slice(0, 2).map((p, i) => (
            <div
              key={p.name}
              className="rounded-lg overflow-hidden flex flex-col border"
              style={{ background: palette.surface, borderColor: palette.line }}
            >
              <div
                className="flex-1 relative min-h-0"
                style={{ background: palette.tiles[i] }}
              >
                {p.was && (
                  <span
                    className="absolute top-1 start-1 rounded px-1 py-[2px] text-[6px] font-bold"
                    style={{ background: palette.highlight, color: palette.onAccent }}
                  >
                    {copy.saleBadge}
                  </span>
                )}
              </div>
              <div className="p-1.5 flex flex-col gap-[3px]">
                <span className="truncate font-semibold">{p.name}</span>
                <span className="flex items-baseline gap-1">
                  <b className="font-black text-[9px]">
                    {p.price} {copy.currency}
                  </b>
                  {p.was && (
                    <s className="opacity-60" style={{ color: palette.muted }}>
                      {p.was}
                    </s>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
