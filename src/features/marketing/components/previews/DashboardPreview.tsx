'use client';

import React from 'react';
import type { ThemePalette } from '@/data/themePreviews';
import { useCountUp, splitNumeric, formatCounted } from '@/lib/useCountUp';

export interface DashboardCopy {
  storeName: string;
  nav: [string, string, string, string];
  stats: { label: string; value: string }[];
  ordersTitle: string;
  orders: { name: string; total: string; status: string; pending: boolean }[];
  confirm: string;
  currency: string;
}

/**
 * One stat tile.
 *
 * Its own component only so the count-up hook is not called inside a `.map`, which is
 * the rule-of-hooks trap that works right up until somebody makes the stat list
 * variable length.
 */
function StatTile({
  palette,
  label,
  display,
  emphasis,
  animate,
}: {
  palette: ThemePalette;
  label: string;
  display: string;
  emphasis: boolean;
  animate: boolean;
}) {
  const { target, decimals, grouped, suffix } = splitNumeric(display);
  const countable = Number.isFinite(target);
  const value = useCountUp(countable ? target : 0, animate && countable);

  return (
    <div
      className="rounded-lg p-1.5 flex flex-col gap-1 border"
      style={{ background: palette.surface, borderColor: palette.line }}
    >
      <span className="truncate text-[6.5px]" style={{ color: palette.muted }}>
        {label}
      </span>
      <span
        className="font-black text-[12px] tabular-nums"
        style={{
          color: emphasis ? palette.highlight : palette.ink,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {countable ? formatCounted(value, decimals, grouped) + suffix : display}
      </span>
    </div>
  );
}

/**
 * A miniature of the merchant dashboard carrying this theme's accent.
 *
 * The dashboard chrome stays Koda's own off-white system in the real product; what a
 * merchant's theme changes is the accent running through it. Shown at real density,
 * with the WhatsApp confirm button visible, because that button is the reason the
 * dashboard exists for our target seller.
 */
export default function DashboardPreview({
  palette,
  copy,
  /** Matches StorefrontPreview so switching tabs does not resize the card. */
  heightClass = 'h-[290px]',
  /** Set by the parent once the card is on screen, so the stats count up in view. */
  animateStats = false,
}: {
  palette: ThemePalette;
  copy: DashboardCopy;
  heightClass?: string;
  animateStats?: boolean;
}) {
  return (
    <div
      className={`${heightClass} flex text-[8px] leading-tight select-none overflow-hidden`}
      style={{ background: palette.bg, color: palette.ink }}
      aria-hidden
    >
      {/* sidebar */}
      <div
        className="w-[78px] shrink-0 p-2 flex flex-col gap-[3px] border-e flex flex-col"
        style={{ background: palette.surface, borderColor: palette.line }}
      >
        <div className="flex items-center gap-1 mb-1.5">
          <span
            className="w-3.5 h-3.5 rounded-[4px] shrink-0 flex items-center justify-center text-[7px] font-black"
            style={{ background: palette.accent, color: palette.onAccent }}
          >
            {copy.storeName.slice(0, 1)}
          </span>
          <span className="truncate font-bold text-[7px]">{copy.storeName}</span>
        </div>
        {copy.nav.map((item, i) => (
          <span
            key={item}
            className="rounded-[5px] px-1.5 py-1 font-semibold whitespace-nowrap"
            style={{
              background: i === 1 ? palette.accent : 'transparent',
              color: i === 1 ? palette.onAccent : palette.muted,
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex-1 p-2 flex flex-col gap-2 min-w-0">
        {/* stat tiles */}
        <div className="grid grid-cols-3 gap-1.5">
          {copy.stats.map((s, i) => (
            <StatTile
              key={s.label}
              palette={palette}
              label={s.label}
              display={s.value}
              emphasis={i === 2}
              animate={animateStats}
            />
          ))}
        </div>

        {/* orders table */}
        <div
          className="flex-1 rounded-lg border overflow-hidden flex flex-col min-h-0"
          style={{ background: palette.surface, borderColor: palette.line }}
        >
          <div
            className="px-2 py-1.5 border-b font-bold"
            style={{ borderColor: palette.line }}
          >
            {copy.ordersTitle}
          </div>
          {copy.orders.map((o, i) => (
            <div
              key={o.name}
              className="flex items-center gap-1.5 px-2 py-[7px] border-b last:border-b-0"
              style={{ borderColor: palette.line }}
            >
              <span
                className="w-4 h-4 rounded-[4px] shrink-0"
                style={{ background: palette.tiles[i % 4] }}
              />
              <span className="flex-1 min-w-0">
                <span className="block truncate font-semibold">{o.name}</span>
                <span className="block text-[6.5px]" style={{ color: palette.muted }}>
                  {o.total} {copy.currency}
                </span>
              </span>
              {o.pending ? (
                <span
                  className="rounded-full px-1.5 py-[3px] font-bold text-[6.5px] whitespace-nowrap"
                  style={{ background: palette.accent, color: palette.onAccent }}
                >
                  {copy.confirm}
                </span>
              ) : (
                <span
                  className="rounded-full px-1.5 py-[3px] font-semibold text-[6.5px] whitespace-nowrap border"
                  style={{ borderColor: palette.line, color: palette.muted }}
                >
                  {o.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
