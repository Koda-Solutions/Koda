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
  // Use exactly 2 sets for a perfect 50% loop logic
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-12 bg-background border-y border-border-custom overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-foreground-muted text-xs font-bold uppercase tracking-[0.3em]">
          {t.integrations.title}
        </p>
      </div>

      <div className="relative flex overflow-hidden group" dir="ltr">
        {/* Using dir="ltr" on the marquee container to ensure consistent 
            animation behavior regardless of global RTL. The content 
            will still look correct as it's just a horizontal list. */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 80,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-12 lg:gap-24 items-center"
        >
          {duplicatedIntegrations.map((item, i) => (
            <div
              key={i}
              className="text-xl lg:text-2xl font-black text-foreground-muted hover:text-[var(--brand-color)] transition-all duration-500 cursor-default select-none grayscale hover:grayscale-0 opacity-40 hover:opacity-100"
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
