'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-xl md:text-3xl font-black mb-6 lg:mb-8">
            مش عارف أنهي طريق يوفرلك أكتر؟
          </h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const message =
                'مرحباً كودا، أرغب في المساعدة لحساب التكاليف والمقارنة بين الحلول المختلفة لمشروعي.';
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="bg-primary text-background text-sm lg:text-lg font-black px-8 lg:px-9 py-3 lg:py-3.5 rounded-xl glow-orange hover:bg-secondary transition-all mb-6 cursor-pointer"
          >
            تعالي نحسبها سوا الآن
          </motion.button>
          <p className="text-text/60 font-medium text-sm lg:text-base">
            نحن نكشف لك الأرقام الحقيقية والعمولات الخفية لنضمن لك أعلى صافي
            ربح.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
