'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Code,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: { [key: string]: React.ReactNode } = {
  Layout: <Layout className="w-6 h-6 md:w-8 md:h-8" />,
  Code: <Code className="w-6 h-6 md:w-8 md:h-8" />,
  Zap: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
};

export default function ComparisonSection() {
  const { t, isRTL } = useLanguage();

  const handleWhatsApp = () => {
    const message = t.smartTransparency.whatsappMessage;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden bg-background"
      id="comparison"
    >
      {/* خلفية ضبابية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 blur-[60px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* Style tag to hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-0 md:px-6 relative z-10">
        {/* العناوين */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
          <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-6 text-foreground">
            {t.smartTransparency.title}{' '}
            <span className="text-primary glow-text">
              {t.smartTransparency.titleAccent}
            </span>
          </h2>
          <p className="text-sm md:text-lg text-foreground-muted">
            {t.smartTransparency.desc}
          </p>
        </div>

        {/* 🔥 FIX: Added pt-12 to ensure the absolute badge isn't clipped */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pt-12 pb-8 px-4 md:px-0 no-scrollbar items-stretch">
          {t.smartTransparency.levels.map((level: any, index: number) => {
            const isKoda = index === 1;
            const Icon = iconMap[level.icon] || <Zap className="w-6 h-6" />;

            return (
              <div
                key={index}
                // Mobile: min-w-[85vw] ensures user sees one full card + a peek of the next
                // Classes flattened to single line
                className={`relative transition-all duration-500 flex flex-col snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto ${
                  isKoda
                    ? 'z-20 md:scale-110'
                    : 'opacity-100 md:opacity-80 md:hover:opacity-100 md:scale-95 md:hover:scale-100'
                }`}
              >
                {/* ============================================== */}
                {/* Koda Effects */}
                {isKoda && (
                  <>
                    {/* Badge Position */}
                    <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-600 text-white text-xs md:text-sm font-black px-4 py-1.5 md:px-6 md:py-2 rounded-full shadow-[0_0_20px_rgba(255,140,66,0.6)] whitespace-nowrap z-40 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4 fill-white animate-pulse" />
                      {isRTL ? 'الاختيار الذكي' : 'Smart Choice'}
                    </div>

                    <div className="absolute inset-0 rounded-[24px] md:rounded-[32px] overflow-hidden z-0">
                      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(transparent_0deg,transparent_90deg,#ff8c42_180deg,transparent_270deg)] animate-[spin_4s_linear_infinite]" />
                    </div>

                    <div className="absolute inset-0 bg-primary/20 blur-[40px] -z-10" />
                  </>
                )}
                {/* ============================================== */}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  // Classes flattened to single line
                  className={`relative flex flex-col h-full rounded-[24px] md:rounded-[30px] p-6 md:p-8 overflow-hidden ${
                    isKoda
                      ? 'bg-[#121212] m-[2px]'
                      : 'bg-card/40 border border-border-custom'
                  }`}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-6 text-center">
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                          isKoda
                            ? 'bg-primary text-white shadow-lg shadow-primary/40'
                            : 'bg-gray-100 dark:bg-white/5 text-gray-500'
                        }`}
                      >
                        {Icon}
                      </div>
                      <h3
                        className={`text-xl md:text-2xl font-black mb-1 ${
                          isKoda ? 'text-white' : 'text-foreground'
                        }`}
                      >
                        {level.title}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider opacity-60">
                        {level.subtitle}
                      </p>
                    </div>

                    <p
                      className={`text-sm mb-6 text-center leading-relaxed ${
                        isKoda ? 'text-gray-300' : 'text-foreground-muted'
                      }`}
                    >
                      {level.summary}
                    </p>

                    {/* Pros */}
                    <div
                      className={`mb-6 space-y-3 p-4 rounded-xl ${
                        isKoda ? 'bg-white/5' : 'bg-background/20'
                      }`}
                    >
                      <p className="text-xs font-bold uppercase opacity-50 mb-2 text-center">
                        {isRTL ? 'المميزات' : 'Pros'}
                      </p>
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
                            className={
                              isKoda ? 'text-white' : 'text-foreground'
                            }
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Cons */}
                    <div className="mt-auto space-y-3 pt-6 border-t border-dashed border-gray-700/30">
                      <p className="text-xs font-bold uppercase opacity-50 mb-2 text-center">
                        {isRTL ? 'العيوب' : 'Cons'}
                      </p>
                      {level.limitations.map((item: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-sm text-foreground-muted"
                        >
                          <XCircle
                            size={18}
                            className="text-red-400 shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-20 text-center px-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="bg-primary text-white text-base md:text-lg font-black px-10 py-4 md:px-12 md:py-5 rounded-2xl glow-orange inline-flex items-center gap-3 shadow-xl cursor-pointer w-full md:w-auto justify-center"
          >
            {t.smartTransparency.ctaButton}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
