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
          <h2 className="font-black mb-8">جاهز تمتلك السوق؟</h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const message =
                'مساء الخير، شوفت صور الأبلكيشن والنظام وعايز أجرب نسخة تجريبية (Demo) للتطبيق.';
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="bg-primary text-background text-lg lg:text-xl font-black px-10 py-4 rounded-xl glow-orange hover:bg-secondary transition-all mb-6"
          >
            اطلب نسختك التجريبية مجاناً
          </motion.button>
          <p className="text-secondary font-bold text-lg animate-pulse">
            عرض محدود لأول 5 عملاء فقط
          </p>
        </motion.div>
      </div>
    </section>
  );
}
