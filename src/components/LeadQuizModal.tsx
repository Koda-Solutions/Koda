'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  History,
  Code,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = {
  History: <History size={24} />,
  Rocket: <Rocket size={24} />,
  Code: <Code size={24} />,
};

export default function SmartTransparency() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6 text-foreground"
          >
            {t.smartTransparency.title}{' '}
            <span className="text-primary">
              {t.smartTransparency.titleAccent}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground-muted text-base md:text-xl leading-relaxed"
          >
            {t.smartTransparency.desc}
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-8 items-start">
          {t.smartTransparency.levels.map((level: any, index: number) => {
            const isKoda = index === 1; // الكارت اللي في النص هو كودا

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative p-6 lg:p-8 rounded-3xl border transition-all duration-300 group ${
                  isKoda
                    ? 'bg-card border-primary shadow-2xl shadow-primary/20 scale-100 lg:scale-110 z-10'
                    : 'bg-card/50 border-border-custom hover:border-primary/30 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Recommended Badge for Koda */}
                {isKoda && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                    {isRTL ? 'الخيار الأذكى' : 'Recommended'}
                  </div>
                )}

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                      isKoda
                        ? 'bg-primary text-white shadow-lg shadow-primary/40'
                        : 'bg-foreground/5 text-foreground-muted'
                    }`}
                  >
                    {icons[level.icon as keyof typeof icons]}
                  </div>
                  <h3 className="text-xl font-black mb-1">{level.title}</h3>
                  <span
                    className={`text-sm font-bold ${
                      isKoda ? 'text-primary' : 'text-foreground-muted'
                    }`}
                  >
                    {level.subtitle}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-center text-foreground-muted text-sm leading-relaxed mb-8 min-h-[60px]">
                  {level.summary}
                </p>

                <div className="w-full h-px bg-border-custom mb-8" />

                {/* Features Lists */}
                <div className="space-y-6">
                  {/* Pros */}
                  <div>
                    {level.pros.map((pro: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 mb-3 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-foreground/90 font-medium">
                          {pro}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  <div>
                    {level.limitations.map((limit: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 mb-3 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                          <X size={12} strokeWidth={3} />
                        </div>
                        <span className="text-foreground-muted">{limit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For Footer */}
                <div
                  className={`mt-8 pt-6 border-t ${
                    isKoda ? 'border-primary/20' : 'border-border-custom'
                  } text-center`}
                >
                  <p className="text-xs text-foreground-muted uppercase font-bold tracking-wider mb-2">
                    {isRTL ? 'مناسب لـ' : 'Best For'}
                  </p>
                  <p className="font-bold text-foreground text-sm">
                    {level.bestFor}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-card to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px]" />

            <h3 className="text-2xl md:text-3xl font-black mb-3">
              {t.smartTransparency.ctaTitle}{' '}
              <span className="text-primary">
                {t.smartTransparency.ctaAccent}
              </span>
            </h3>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              {t.smartTransparency.ctaDesc}
            </p>

            <button
              onClick={() => {
                const message = t.smartTransparency.whatsappMessage;
                window.open(
                  `https://wa.me/201212228091?text=${encodeURIComponent(
                    message
                  )}`,
                  '_blank'
                );
              }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              {t.smartTransparency.ctaButton}
              {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
