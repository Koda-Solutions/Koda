'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-black mb-8">مش عارف تبدأ منين؟</h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const message =
                'مرحباً كودا، أحتاج لاستشارة بخصوص أفضل حل تقني لمشروعي بناءً على ميزانيتي وأهدافي.';
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="bg-primary text-background text-base lg:text-lg font-black px-9 py-3.5 rounded-xl glow-orange hover:bg-secondary transition-all mb-6 cursor-pointer"
          >
            تحدث مع خبير تقني الآن
          </motion.button>
          <p className="text-text/60 font-medium text-base">
            دعنا نساعدك في اختيار الحل الأمثل لمشروعك بناءً على ميزانيتك
            وأهدافك.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
