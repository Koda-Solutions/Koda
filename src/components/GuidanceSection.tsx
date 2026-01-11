'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Compass,
  Search,
  Settings,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GuidanceSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-12 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual: Confusion vs Clarity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />

            <div className="relative grid grid-cols-2 gap-4">
              {/* Confusion Side */}
              <div className="p-4 lg:p-6 rounded-[24px] lg:rounded-[32px] bg-card border border-border-custom flex flex-col items-center text-center space-y-3 lg:space-y-4 opacity-50 grayscale">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-foreground-muted" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-16 bg-foreground/10 rounded-full mx-auto" />
                  <div className="h-2 w-24 bg-foreground/10 rounded-full mx-auto" />
                  <div className="h-2 w-20 bg-foreground/10 rounded-full mx-auto" />
                </div>
                <p className="text-[10px] font-bold text-foreground-muted uppercase tracking-widest">
                  {t.guidance.confusion}
                </p>
              </div>

              {/* Clarity Side */}
              <div className="p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] bg-primary/10 border border-primary/20 flex flex-col items-center text-center space-y-4 lg:space-y-6 shadow-[0_0_40px_rgba(255,143,80,0.1)]">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-primary flex items-center justify-center glow-orange">
                  <Compass className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <div className="h-2.5 w-20 bg-primary/40 rounded-full mx-auto" />
                  <div className="h-2.5 w-32 bg-primary/40 rounded-full mx-auto" />
                </div>
                <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">
                  {t.guidance.clarity}
                </p>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card border border-border-custom shadow-2xl"
              >
                <Search className="w-5 h-5 text-secondary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-card border border-border-custom shadow-2xl"
              >
                <Settings className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-5xl font-black mb-6 lg:mb-8 leading-tight text-foreground">
              {t.guidance.title} <br />
              <span className="text-primary">{t.guidance.titleAccent}</span>
            </h2>

            <p className="text-foreground-muted text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed">
              {t.guidance.desc}
            </p>

            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-10">
              {t.guidance.points.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3 lg:gap-4 group">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                  <span className="font-bold text-sm lg:text-base text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: isRTL ? -5 : 5 }}
              onClick={() => {
                const message = t.guidance.whatsappMessage;
                const encodedMessage = encodeURIComponent(message);
                window.open(
                  `https://wa.me/201212228091?text=${encodedMessage}`,
                  '_blank'
                );
              }}
              className="flex items-center gap-3 text-primary font-black text-lg group cursor-pointer"
            >
              {t.guidance.cta}
              <ArrowRight
                className={`w-6 h-6 group-hover:translate-x-2 transition-transform ${
                  isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''
                }`}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
