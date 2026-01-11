'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Crown,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ComparisonSection() {
  const { t, isRTL } = useLanguage();

  const paths = [
    {
      id: 'fast-start',
      title: t.smartTransparency.paths[0].title,
      subtitle: t.smartTransparency.paths[0].subtitle,
      icon: <Rocket className="w-8 h-8" />,
      color: 'secondary',
      pros: t.smartTransparency.paths[0].pros,
      cons: t.smartTransparency.paths[0].cons,
      bestFor: t.smartTransparency.paths[0].bestFor,
      tag: t.smartTransparency.paths[0].tag,
      whatsappMessage: isRTL
        ? 'مرحباً كودا، أنا مهتم بباقة الصاروخ (المنصات الجاهزة).'
        : 'Hello, I am interested in the Rocket Launch Package.',
    },
    {
      id: 'empire-builder',
      title: t.smartTransparency.paths[1].title,
      subtitle: t.smartTransparency.paths[1].subtitle,
      icon: <Crown className="w-8 h-8" />,
      color: 'primary',
      pros: t.smartTransparency.paths[1].pros,
      cons: t.smartTransparency.paths[1].cons,
      bestFor: t.smartTransparency.paths[1].bestFor,
      tag: t.smartTransparency.paths[1].tag,
      whatsappMessage: isRTL
        ? 'مرحباً كودا، أنا مهتم بباقة الإمبراطور (البرمجة الخاصة).'
        : 'Hello, I am interested in the Emperor Package.',
    },
  ];

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  return (
    <section
      className="py-12 lg:py-32 relative overflow-hidden"
      id="comparison"
    >
      {/* Background Blobs for Glass Effect Visibility */}
      <div className="blob -top-20 -left-20 opacity-50" />
      <div className="blob top-1/2 -right-20 opacity-30" />
      <div className="blob -bottom-20 left-1/2 opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-black mb-4 lg:mb-6 leading-tight text-foreground"
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
            className="text-foreground-muted text-base lg:text-lg"
          >
            {t.smartTransparency.desc}
          </motion.p>
        </div>

        <div className="flex lg:grid lg:grid-cols-2 gap-6 lg:gap-12 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pt-6 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{
                opacity: 0,
                x: isRTL ? (index === 0 ? 20 : -20) : index === 0 ? -20 : 20,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative p-8 lg:p-12 transition-all duration-500 group w-[85vw] lg:w-full shrink-0 snap-center glass-panel ${
                path.color === 'primary' ? 'border-primary/30' : ''
              }`}
            >
              <div
                className={`absolute -top-3 lg:-top-4 ${
                  isRTL ? 'left-6 lg:left-12' : 'right-6 lg:right-12'
                } px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest shadow-xl z-20 ${
                  path.color === 'primary'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-white'
                }`}
              >
                {path.tag}
              </div>

              <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-10">
                <div
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center ${
                    path.color === 'primary'
                      ? 'bg-primary text-white glow-orange'
                      : 'bg-secondary text-white'
                  }`}
                >
                  {path.icon}
                </div>
                <div>
                  <p className="text-foreground-muted text-xs lg:text-sm font-black uppercase tracking-wider mb-1">
                    {path.subtitle}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-black text-foreground">
                    {path.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-10">
                {/* Pros */}
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground-muted mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {isRTL ? 'المميزات (الأرباح)' : 'Pros (Profits)'}
                  </h4>
                  <ul className="space-y-3">
                    {path.pros.map((pro, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground font-bold"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Points to Consider */}
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground-muted mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    {isRTL ? 'نقاط يجب مراعاتها' : 'Points to Consider'}
                  </h4>
                  <ul className="space-y-3">
                    {path.cons.map((con, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground-muted text-sm font-medium"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="pt-8 border-t border-border-custom">
                  <p className="text-foreground text-sm leading-relaxed italic mb-8">
                    <span className="font-black text-foreground not-italic">
                      {isRTL ? 'لمن هذا؟ ' : 'Best for? '}
                    </span>
                    {path.bestFor}
                  </p>

                  {/* WhatsApp Action Button */}
                  <button
                    onClick={() => handleWhatsApp(path.whatsappMessage)}
                    className={`w-full py-4 rounded-2xl font-black transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg ${
                      path.color === 'primary'
                        ? 'bg-primary text-white glow-orange hover:bg-primary/90'
                        : 'bg-foreground text-background hover:opacity-90'
                    }`}
                  >
                    {isRTL ? 'ابدأ بهذه الباقة' : 'Start with this'}
                    <ArrowRight
                      className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultative Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 p-8 lg:p-12 glass-panel text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <h3 className="text-xl md:text-3xl font-black mb-4 lg:mb-6 text-foreground">
            {t.smartTransparency.ctaTitle} <br />
            <span className="text-primary">
              {t.smartTransparency.ctaAccent}
            </span>
          </h3>
          <p className="text-foreground-muted text-sm lg:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto">
            {t.smartTransparency.ctaDesc}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message = t.smartTransparency.whatsappMessage;
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="bg-primary text-white font-black px-10 py-4 rounded-2xl glow-orange hover:bg-primary/90 transition-all cursor-pointer inline-flex items-center gap-3 shadow-xl"
          >
            {t.smartTransparency.ctaButton}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
