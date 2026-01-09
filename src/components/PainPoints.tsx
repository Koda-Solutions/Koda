'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, BarChart3 } from 'lucide-react';

const points = [
  {
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
    title: 'أوردرات بتضيع منك',
    desc: 'بين الرسايل والكومنتات، الزبون بيضيع.',
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: 'خايف على الصفحة؟',
    desc: 'لو الصفحة اتقفلت، شغلك كله راح. الموقع هو أمانك.',
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-primary" />,
    title: 'مش عارف بتكسب كام',
    desc: 'التوهان في الحسابات بيخسرك فلوس.',
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            لسه بتدير شغلك بـ الورقة والقلم؟
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, borderColor: 'rgba(255, 140, 66, 0.5)' }}
              className="p-8 rounded-3xl bg-background border border-white/5 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-text/60 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
