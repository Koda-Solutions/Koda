'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LeadQuizModal from './LeadQuizModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 lg:pt-24 overflow-hidden">
      {/* Background Accents - إضاءات الخلفية */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text Content - جزء الكلام */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-right z-10"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-5">
            🚀 مش مجرد موقع.. ده سيستم بيع
          </div>
          <h1 className="font-black mb-5 leading-tight">
            حول تجارتك من دكان... <br />
            <span className="text-primary glow-text">لإمبراطورية.</span>
          </h1>
          <p className="text-lg text-text/70 mb-8 max-w-lg ml-auto leading-relaxed">
            أنت بتخسر فلوس كل يوم بسبب &quot;تم الرد خاص&quot;. احصل على
            &quot;ماكينة مبيعات&quot; شغالة 24 ساعة.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-background text-lg font-black px-8 py-3.5 rounded-xl glow-orange hover:bg-secondary transition-all"
          >
            ابدأ إمبراطوريتك الآن
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl opacity-40" />

          <motion.div
            animate={{ y: [0, -15, 0] }} // حركة طيران ناعمة ومخففة
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            {/* الصورة نفسها */}
            <div className="relative w-[85%] h-[85%]">
              <Image
                src="/Hero-Photo.png"
                alt="Koda Mobile Store Application"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <LeadQuizModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
