'use client';

import React from 'react';

export const TOTAL_STEPS = 5;

export default function Stepper({
  current,
  label,
}: {
  current: number;
  label: string;
}) {
  if (current > TOTAL_STEPS) return null;

  return (
    <div className="mb-7">
      <div className="flex gap-1.5 mb-2.5">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1 rounded-full bg-line overflow-hidden"
          >
            <div
              className="h-full bg-accent transition-all duration-400 ease-out"
              style={{ width: i < current ? '100%' : '0%' }}
            />
          </div>
        ))}
      </div>
      <span className="text-xs font-bold text-ink-muted tracking-wide">
        {label}
      </span>
    </div>
  );
}
