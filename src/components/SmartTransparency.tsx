'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Crown,
  Diamond,
  CheckCircle2,
  Info,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SmartTransparency() {
  const { t, isRTL } = useLanguage();

  const paths = [
    {
      id: 'rocket',
      title: t.smartTransparency.paths[0].title,
      subtitle: t.smartTransparency.paths[0].subtitle,
      icon: Rocket,
      color: 'secondary',
      pros: t.smartTransparency.paths[0].pros,
      cons: t.smartTransparency.paths[0].cons,
      bestFor: t.smartTransparency.paths[0].bestFor,
      tag: t.smartTransparency.paths[0].tag,
      highlighted: false,
      whatsappMessage: t.smartTransparency.paths[0].whatsappMessage,
    },
    {
      id: 'koda',
      title: t.smartTransparency.paths[1].title,
      subtitle: t.smartTransparency.paths[1].subtitle,
      icon: Diamond,
      color: 'primary',
      pros: t.smartTransparency.paths[1].pros,
      cons: t.smartTransparency.paths[1].cons,
      bestFor: t.smartTransparency.paths[1].bestFor,
      tag: t.smartTransparency.paths[1].tag,
      highlighted: true,
      whatsappMessage: t.smartTransparency.paths[1].whatsappMessage,
    },
    {
      id: 'emperor',
      title: t.smartTransparency.paths[2].title,
      subtitle: t.smartTransparency.paths[2].subtitle,
      icon: Crown,
      color: 'secondary',
      pros: t.smartTransparency.paths[2].pros,
      cons: t.smartTransparency.paths[2].cons,
      bestFor: t.smartTransparency.paths[2].bestFor,
      tag: t.smartTransparency.paths[2].tag,
      highlighted: false,
      whatsappMessage: t.smartTransparency.paths[2].whatsappMessage,
    },
  ];

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  return (
    <section
      className="py-12 lg:py-32 relative overflow-hidden bg-background"
      id="comparison"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {isRTL ? 'الشفافية الذكية' : 'Smart Transparency'}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black mb-4 lg:mb-8 tracking-tight leading-[1.1] text-foreground"
          >
            {t.smartTransparency.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
              {t.smartTransparency.titleAccent}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground-muted text-base lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {t.smartTransparency.desc}
          </motion.p>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-10 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pt-10 pb-12 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide items-stretch">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={`relative p-5 lg:p-7 rounded-[32px] transition-all duration-500 group w-[85vw] lg:w-full shrink-0 snap-center flex flex-col backdrop-blur-xl border ${
                path.highlighted
                  ? 'bg-card/90 border-primary shadow-[0_20px_60px_rgba(255,140,66,0.15)] z-20 ring-1 ring-primary/50'
                  : 'bg-card/40 border-border-custom hover:border-primary/40 hover:bg-card/60 shadow-lg'
              }`}
            >
              {/* Premium Tag */}
              <div
                className={`absolute -top-4 ${
                  isRTL ? 'left-8' : 'right-8'
                } px-5 py-2 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl z-30 transform group-hover:scale-110 transition-transform ${
                  path.highlighted
                    ? 'bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient text-white'
                    : 'bg-foreground text-background'
                }`}
              >
                {path.tag}
              </div>

              {/* Header Section */}
              <div className="flex items-center gap-4 lg:gap-5 mb-4">
                <div
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center relative group-hover:rotate-6 transition-transform duration-500 ${
                    path.highlighted
                      ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-[0_10px_30px_rgba(255,140,66,0.3)]'
                      : 'bg-secondary/10 text-secondary border border-secondary/20'
                  }`}
                >
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform">
                    <path.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                  </div>
                  {path.highlighted && (
                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse" />
                  )}
                </div>
                <div>
                  <p className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-1 opacity-80">
                    {path.subtitle}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-black text-foreground tracking-tight">
                    {path.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-4 flex-grow">
                {/* Pros Section */}
                <div className="relative">
                  <h4 className="text-base font-black uppercase tracking-[0.2em] text-foreground-muted mb-2 flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                    </div>
                    {t.smartTransparency.prosLabel}
                  </h4>
                  <ul className="space-y-2">
                    {path.pros.map((pro, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-foreground font-bold text-base leading-snug group/item"
                      >
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 group-hover/item:scale-150 transition-transform" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Investment Style Section */}
                <div className="relative">
                  <div className="absolute -left-4 -right-4 h-px bg-gradient-to-r from-transparent via-border-custom to-transparent opacity-50 mb-6" />
                  <h4 className="text-base font-black uppercase tracking-[0.2em] text-foreground-muted mb-2 mt-4 flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Info className="w-3 h-3 text-primary" />
                    </div>
                    {t.smartTransparency.investmentLabel}
                  </h4>
                  <ul className="space-y-2">
                    {path.cons.map((con, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-foreground-muted text-base font-medium leading-relaxed group/item"
                      >
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 group-hover/item:scale-150 transition-transform" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Section */}
              <div className="pt-4 mt-4 border-t border-border-custom/50">
                <div className="bg-foreground/5 rounded-2xl p-4 mb-6 group-hover:bg-foreground/10 transition-colors">
                  <p className="text-foreground text-sm font-medium leading-relaxed italic">
                    <span className="font-black text-primary not-italic block mb-1 uppercase tracking-wider text-sm">
                      {isRTL ? 'لمن هذا؟ ' : 'Best for? '}
                    </span>
                    {path.bestFor}
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <button
                  onClick={() => handleWhatsApp(path.whatsappMessage)}
                  className={`w-full py-4 rounded-xl font-black transition-all cursor-pointer flex items-center justify-center gap-3 shadow-xl relative overflow-hidden group/btn ${
                    path.highlighted
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-foreground text-background hover:bg-foreground/90'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2 text-base lg:text-lg">
                    {isRTL ? 'ابدأ بهذه الباقة' : 'Start with this'}
                    <ArrowRight
                      className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover/btn:translate-x-1 ${
                        isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : ''
                      }`}
                    />
                  </span>
                  {path.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultative Hook */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 p-10 lg:p-16 rounded-[50px] bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 text-center relative overflow-hidden backdrop-blur-2xl shadow-2xl group"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black mb-6 lg:mb-8 text-foreground tracking-tight leading-tight">
              {t.smartTransparency.ctaTitle} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t.smartTransparency.ctaAccent}
              </span>
            </h3>
            <p className="text-foreground-muted text-base lg:text-xl mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.smartTransparency.ctaDesc}
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = t.smartTransparency.whatsappMessage;
                const encodedMessage = encodeURIComponent(message);
                window.open(
                  `https://wa.me/201212228091?text=${encodedMessage}`,
                  '_blank'
                );
              }}
              className="bg-primary text-white font-black px-12 py-5 rounded-2xl glow-orange hover:bg-primary/90 transition-all cursor-pointer inline-flex items-center gap-3 shadow-[0_20px_40px_rgba(255,140,66,0.3)] relative overflow-hidden group/cta"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.smartTransparency.ctaButton}
                <ArrowRight
                  className={`w-6 h-6 transition-transform group-hover/cta:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover/cta:-translate-x-1' : ''
                  }`}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:animate-shimmer" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
