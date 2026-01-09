'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            جاهز تمتلك السوق؟
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message =
                'مساء الخير، شوفت صور الأبلكيشن والنظام وعايز أجرب نسخة تجريبية (Demo) للتطبيق.';
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="bg-primary text-background text-2xl font-black px-12 py-6 rounded-2xl glow-orange hover:bg-secondary transition-all mb-6"
          >
            اطلب نسختك التجريبية مجاناً
          </motion.button>
          <p className="text-secondary font-bold text-xl animate-pulse">
            عرض محدود لأول 5 عملاء فقط
          </p>
        </motion.div>
      </div>
    </section>
  );
}
