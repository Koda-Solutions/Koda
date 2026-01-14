'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with subtle glow */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Title: Bigger on mobile for impact */}
          <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-foreground leading-tight">
            {t.cta.title}
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = t.cta.whatsappMessage;
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            // Button: Taller and easier to tap on mobile
            className="bg-primary text-white text-base md:text-lg font-black px-10 py-4 md:px-12 md:py-5 rounded-2xl glow-orange hover:bg-primary/90 transition-all mb-6 cursor-pointer shadow-lg shadow-primary/20"
          >
            {t.cta.button}
          </motion.button>

          <p className="text-foreground-muted font-medium text-xs md:text-base opacity-80">
            {t.cta.desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
