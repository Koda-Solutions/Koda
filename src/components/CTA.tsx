'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-xl md:text-3xl font-black mb-6 lg:mb-8 text-foreground">
            {t.cta.title}
          </h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const message = t.cta.whatsappMessage;
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="bg-primary text-white text-sm lg:text-lg font-black px-8 lg:px-9 py-3 lg:py-3.5 rounded-xl glow-orange hover:bg-primary/90 transition-all mb-6 cursor-pointer"
          >
            {t.cta.button}
          </motion.button>
          <p className="text-foreground-muted font-medium text-sm lg:text-base">
            {t.cta.desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
