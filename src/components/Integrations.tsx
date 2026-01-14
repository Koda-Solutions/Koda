'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const integrations = [
  { name: 'Vodafone Cash', brandColor: '#E60000' },
  { name: 'InstaPay', brandColor: '#6B21A8' },
  { name: 'Fawry', brandColor: '#FACC15' },
  { name: 'Bosta', brandColor: '#FF4D00' },
  { name: 'Mylerz', brandColor: '#000000' },
  { name: 'Facebook', brandColor: '#1877F2' },
  { name: 'Instagram', brandColor: '#E4405F' },
  { name: 'TikTok', brandColor: '#000000' },
];

export default function Integrations() {
  const { t } = useLanguage();
  // 3 sets ensures smooth loop even on ultra-wide screens
  const duplicatedIntegrations = [
    ...integrations,
    ...integrations,
    ...integrations,
  ];

  return (
    <section className="py-8 lg:py-12 bg-background border-y border-border-custom overflow-hidden">
      <div className="container mx-auto px-6 mb-6 lg:mb-8">
        <p className="text-center text-foreground-muted text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em]">
          {t.integrations.title}
        </p>
      </div>

      {/* 1. dir="ltr" is crucial for consistent marquee direction.
          2. Added Mask Image: This creates the fade effect on edges.
      */}
      <div
        className="relative flex overflow-hidden group"
        dir="ltr"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: ['0%', '-33.33%'], // Adjusted for 3 sets (100/3)
          }}
          transition={{
            duration: 60, // Slightly faster for better mobile feel
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-8 lg:gap-24 items-center pl-4"
        >
          {duplicatedIntegrations.map((item, i) => (
            <div
              key={i}
              className="text-lg lg:text-2xl font-black text-foreground-muted hover:text-[var(--brand-color)] transition-all duration-300 cursor-default select-none grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
              style={
                { '--brand-color': item.brandColor } as React.CSSProperties
              }
            >
              {item.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
