'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
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

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full animate-pulse" />
          <div className="relative z-10 w-full h-full bg-card border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ShoppingCart
                size={200}
                className="text-primary/50 group-hover:text-primary transition-colors duration-500"
              />
            </motion.div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background font-bold">
                  3D
                </div>
                <div>
                  <div className="font-bold">نظام ذكي متكامل</div>
                  <div className="text-sm text-text/60">
                    تجربة مستخدم تفاعلية
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
