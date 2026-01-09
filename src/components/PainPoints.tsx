'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, BarChart3 } from 'lucide-react';

const points = [
  {
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    title: 'أوردرات بتضيع منك',
    desc: 'بين الرسايل والكومنتات، الزبون بيضيع.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'خايف على الصفحة؟',
    desc: 'لو الصفحة اتقفلت، شغلك كله راح. الموقع هو أمانك.',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: 'مش عارف بتكسب كام',
    desc: 'التوهان في الحسابات بيخسرك فلوس.',
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 lg:py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-black mb-4">لسه بتدير شغلك بـ الورقة والقلم؟</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255, 140, 66, 0.3)' }}
              className="p-6 lg:p-8 rounded-2xl bg-background border border-white/5 transition-all duration-300 group"
            >
              <div className="mb-5 group-hover:scale-105 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-text/60 text-sm lg:text-base leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
