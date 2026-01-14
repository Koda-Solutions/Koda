'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Crown,
  History,
  Code,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: { [key: string]: React.ReactNode } = {
  Rocket: <Rocket className="w-8 h-8" />,
  Crown: <Crown className="w-8 h-8" />,
  History: <History className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
};

export default function SmartTransparency() {
  const { t, isRTL } = useLanguage();

  const handleWhatsApp = () => {
    const message = t.smartTransparency.whatsappMessage;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden bg-background"
      id="comparison"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.smartTransparency.titleAccent}</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black mb-6 text-foreground leading-tight">
            {t.smartTransparency.title}
          </h2>
          <p className="text-foreground-muted text-lg lg:text-xl max-w-2xl mx-auto">
            {t.smartTransparency.desc}
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {t.smartTransparency.levels.map(
            (
              level: {
                title: string;
                subtitle: string;
                icon: string;
                summary: string;
                pros: string[];
                limitations: string[];
                bestFor: string;
              },
              index: number
            ) => {
              // 🔥 FORCE KODA (INDEX 1) TO BE THE HERO
              const isKoda = index === 1;
              const Icon = iconMap[level.icon] || <Zap className="w-8 h-8" />;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-6 lg:p-8 rounded-[32px] border flex flex-col h-full transition-all duration-500
                  ${
                    isKoda
                      ? 'bg-[#1a1a1a] border-primary shadow-[0_0_60px_rgba(255,140,66,0.3)] z-20 scale-105 lg:scale-110 order-first lg:order-none ring-1 ring-primary/50'
                      : 'bg-card/50 border-border-custom hover:border-gray-500/30 opacity-80 hover:opacity-100 scale-95 lg:scale-100 grayscale-[0.5] hover:grayscale-0'
                  }
                `}
                >
                  {/* Glowing Aura for Koda */}
                  {isKoda && (
                    <div className="absolute -inset-[1px] rounded-[33px] bg-gradient-to-b from-primary/50 via-transparent to-primary/50 blur-sm -z-10 animate-pulse" />
                  )}

                  {/* Badge */}
                  {isKoda && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-600 text-white text-sm font-black px-6 py-2 rounded-full shadow-lg glow-orange whitespace-nowrap z-30 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 fill-white" />
                      {isRTL ? 'الاختيار الذكي' : 'Smart Choice'}
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="mb-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                        isKoda
                          ? 'bg-primary text-white shadow-lg shadow-primary/30'
                          : 'bg-gray-100 dark:bg-white/5 text-gray-500'
                      }`}
                    >
                      {Icon}
                    </div>
                    <h3
                      className={`text-2xl font-black mb-1 ${
                        isKoda ? 'text-white' : 'text-foreground'
                      }`}
                    >
                      {level.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                      {level.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p
                    className={`text-sm text-center mb-8 leading-relaxed ${
                      isKoda ? 'text-gray-300' : 'text-foreground-muted'
                    }`}
                  >
                    {level.summary}
                  </p>

                  {/* Pros */}
                  <div className="space-y-4 mb-8 bg-background/30 p-4 rounded-xl">
                    {level.pros.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm font-bold"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-green-500 shrink-0 mt-0.5"
                        />
                        <span
                          className={isKoda ? 'text-white' : 'text-foreground'}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Cons */}
                  <div className="mt-auto space-y-3 pt-6 border-t border-dashed border-gray-700/20">
                    {level.limitations.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground-muted/80"
                      >
                        <XCircle
                          size={18}
                          className="text-red-400 shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Logic */}
                  <div
                    className={`mt-6 text-center text-xs font-bold uppercase tracking-wider ${
                      isKoda ? 'text-primary' : 'text-foreground-muted'
                    }`}
                  >
                    {isRTL ? 'مثالي لـ: ' : 'Best For: '}
                    <span className={isKoda ? 'text-white' : ''}>
                      {level.bestFor}
                    </span>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="bg-primary text-white text-lg font-black px-12 py-5 rounded-2xl glow-orange inline-flex items-center gap-3 shadow-xl"
          >
            {t.smartTransparency.ctaButton}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
