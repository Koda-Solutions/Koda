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
  XCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GuidanceSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-16 lg:py-32 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ================= VISUAL SIDE (The Story) ================= */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[80px] rounded-full -z-10" />

            <div className="relative grid grid-cols-2 gap-4 lg:gap-6 items-center">
              {/* 1. Confusion Card (Bad Market) */}
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="p-6 rounded-[2rem] bg-card/50 border border-border-custom/50 flex flex-col items-center text-center space-y-4 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 relative top-8"
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-foreground-muted" />
                </div>
                <div className="space-y-2 w-full flex flex-col items-center">
                  <div className="h-1.5 w-16 bg-foreground/10 rounded-full" />
                  <div className="h-1.5 w-10 bg-foreground/10 rounded-full" />
                </div>
                <p className="text-[10px] lg:text-xs font-bold text-foreground-muted uppercase tracking-widest">
                  {t.guidance.confusion}
                </p>
                {/* Cross Icon indicating 'Wrong Way' */}
                <div className="absolute -top-3 -right-3 text-red-500/50">
                  <XCircle
                    size={24}
                    fill="currentColor"
                    className="text-card"
                  />
                </div>
              </motion.div>

              {/* 2. Clarity Card (Koda Solution) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 lg:p-10 rounded-[2rem] bg-gradient-to-br from-card to-primary/5 border border-primary/20 flex flex-col items-center text-center space-y-5 shadow-2xl shadow-primary/10 relative z-10"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Compass className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="space-y-2 w-full flex flex-col items-center">
                  {/* Lines representing structured data */}
                  <div className="h-2 w-20 bg-primary/20 rounded-full" />
                  <div className="h-2 w-24 bg-primary/40 rounded-full" />
                  <div className="h-2 w-16 bg-primary/20 rounded-full" />
                </div>
                <p className="text-xs lg:text-sm font-black text-primary uppercase tracking-[0.2em]">
                  {t.guidance.clarity}
                </p>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-8 left-10 p-3 rounded-2xl bg-card border border-border-custom shadow-lg z-0"
              >
                <Search className="w-5 h-5 text-foreground-muted" />
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-4 right-10 p-3 rounded-2xl bg-card border border-border-custom shadow-lg z-20"
              >
                <Settings className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* ================= CONTENT SIDE ================= */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-foreground">
                {t.guidance.title} <br className="hidden lg:block" />
                <span className="text-primary relative inline-block">
                  {t.guidance.titleAccent}
                  {/* Underline decoration */}
                  <svg
                    className="absolute w-full h-3 -bottom-1 right-0 text-primary/20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-foreground-muted text-base lg:text-lg mb-8 leading-relaxed max-w-lg">
                {t.guidance.desc}
              </p>

              <div className="space-y-4 mb-10">
                {t.guidance.points.map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group p-2 hover:bg-card/50 rounded-xl transition-colors cursor-default"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-bold text-sm lg:text-base text-foreground group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ x: isRTL ? -10 : 10 }}
                onClick={() => {
                  const message = t.guidance.whatsappMessage;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(
                    `https://wa.me/201212228091?text=${encodedMessage}`,
                    '_blank'
                  );
                }}
                className="flex items-center gap-4 text-foreground font-black text-lg group cursor-pointer border-b-2 border-primary/20 pb-1 hover:border-primary transition-all"
              >
                {t.guidance.cta}
                <div
                  className={`w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 ${
                    isRTL ? 'rotate-180' : ''
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
