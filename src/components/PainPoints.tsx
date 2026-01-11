'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PainPoints() {
  const { t, isRTL } = useLanguage();

  const points = [
    {
      icon: <ShoppingCart className="w-full h-full" />,
      title: t.painPoints.points[0].title,
      desc: t.painPoints.points[0].desc,
    },
    {
      icon: <ShieldCheck className="w-full h-full" />,
      title: t.painPoints.points[1].title,
      desc: t.painPoints.points[1].desc,
    },
    {
      icon: <BarChart3 className="w-full h-full" />,
      title: t.painPoints.points[2].title,
      desc: t.painPoints.points[2].desc,
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-3xl font-black mb-4 text-foreground">
            {t.painPoints.title}{' '}
            <span className="text-primary">{t.painPoints.titleAccent}</span>{' '}
            {t.painPoints.titleSuffix}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255, 143, 80, 0.3)' }}
              className={`p-5 lg:p-8 rounded-2xl bg-card border border-border-custom transition-all duration-300 group shadow-sm ${
                index === 2
                  ? 'col-span-2 md:col-span-2 flex flex-col items-center text-center max-w-md mx-auto w-full'
                  : ''
              }`}
            >
              <div
                className={`mb-4 group-hover:scale-105 transition-transform duration-300 text-primary ${
                  index === 2
                    ? 'w-12 h-12 lg:w-16 lg:h-16'
                    : 'w-8 h-8 lg:w-10 lg:h-10'
                }`}
              >
                {point.icon}
              </div>
              <h3
                className={`font-bold mb-3 text-foreground ${
                  index === 2 ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
                }`}
              >
                {point.title}
              </h3>
              <p
                className={`text-foreground-muted leading-relaxed ${
                  index === 2
                    ? 'text-sm lg:text-base max-w-md'
                    : 'text-xs lg:text-sm'
                }`}
              >
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
