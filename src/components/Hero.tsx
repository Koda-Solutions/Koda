'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents - إضاءات الخلفية */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content - جزء الكلام */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right z-10"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold mb-6">
            🚀 مش مجرد موقع.. ده سيستم بيع
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            حول تجارتك من دكان... <br />
            <span className="text-primary glow-text">لإمبراطورية.</span>
          </h1>
          <p className="text-xl text-text/80 mb-10 max-w-xl ml-auto">
            أنت بتخسر فلوس كل يوم بسبب &quot;تم الرد خاص&quot;. احصل على
            &quot;ماكينة مبيعات&quot; شغالة 24 ساعة.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-background text-xl font-black px-10 py-4 rounded-xl glow-orange hover:bg-secondary transition-all"
          >
            ابدأ إمبراطوريتك الآن
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-50" />

          <motion.div
            animate={{ y: [0, -25, 0] }} // حركة طيران ناعمة
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            {/* الصورة نفسها */}
            <img
              src="/Hero-Photo.png"
              alt="Koda Mobile Store Application"
              className="w-[90%] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
