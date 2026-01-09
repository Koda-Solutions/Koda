'use client';

import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  'Vodafone Cash',
  'e& Egypt | e& money',
  'InstaPay',
  'Fawry',
  'Bosta',
  'Mylerz',
  'Facebook',
  'Instagram',
  'TikTok',
];

export default function Integrations() {
  // Triple the list to ensure it fills the screen and loops seamlessly
  const duplicatedIntegrations = [
    ...integrations,
    ...integrations,
    ...integrations,
  ];

  return (
    <section className="py-8 bg-background/30 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-4">
        <p className="text-center text-text/30 text-xs font-bold uppercase tracking-[0.2em]">
          متكامل مع خدماتك المفضلة
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{
            x: ['0%', '-33.33%'],
          }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-8 lg:gap-12 items-center"
        >
          {duplicatedIntegrations.map((item, i) => (
            <div
              key={i}
              className="text-lg lg:text-xl font-black text-text/15 hover:text-primary transition-all duration-300 cursor-default select-none grayscale hover:grayscale-0"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
