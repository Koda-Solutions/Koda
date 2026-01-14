'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  CreditCard,
  LayoutDashboard,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Server,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: { [key: string]: React.ReactNode } = {
  Truck: <Truck className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
};

// Define the Marquee Animation in Tailwind config style or Framer Motion
const marqueeVariants = {
  animate: {
    x: [0, -500], // Adjust based on content width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    },
  },
};

export default function ServicesEcosystem() {
  const { t, isRTL } = useLanguage();
  const features = t.servicesEcosystem.features;

  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side: The Cards (Visuals) */}
          {/* Mobile: Order 2 (Bottom), Desktop: Order 1 (Left) */}
          <div className="flex flex-col gap-4 md:gap-6 relative z-10 order-2 lg:order-1">
            {features.map(
              (
                feature: {
                  title: string;
                  desc: string;
                  icon: string;
                  partners: string[];
                },
                index: number
              ) => {
                const Icon = iconMap[feature.icon] || <Zap />;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-card/40 border border-border-custom p-5 md:p-6 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4 mb-4 md:mb-6 relative z-10">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                        {Icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs md:text-sm text-foreground-muted leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>

                    {/* Infinite Marquee Section */}
                    <div className="relative w-full overflow-hidden py-2 border-t border-border-custom/50">
                      <div className="absolute left-0 top-0 bottom-0 w-6 md:w-8 bg-gradient-to-r from-card to-transparent z-10" />
                      <div className="absolute right-0 top-0 bottom-0 w-6 md:w-8 bg-gradient-to-l from-card to-transparent z-10" />

                      <motion.div
                        className="flex gap-3 md:gap-4 whitespace-nowrap w-max"
                        // Duplicate the list to ensure seamless loop
                        animate={{ x: isRTL ? [0, 500] : [0, -500] }}
                        transition={{
                          repeat: Infinity,
                          duration: 25,
                          ease: 'linear',
                        }}
                      >
                        {[
                          ...feature.partners,
                          ...feature.partners,
                          ...feature.partners,
                        ].map((partner: string, i: number) => (
                          <span
                            key={i}
                            className="text-[10px] md:text-xs font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-background/50 border border-border-custom text-foreground-muted/80 whitespace-nowrap"
                          >
                            {partner}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>

          {/* Right Side: Text & Content */}
          {/* Mobile: Order 1 (Top), Desktop: Order 2 (Right) */}
          <div className="relative z-10 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 md:mb-6">
              <Server className="w-4 h-4" />
              <span>{isRTL ? 'بنية تحتية' : 'Infrastructure'}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-foreground mb-4 md:mb-6 leading-tight">
              {t.servicesEcosystem.title}{' '}
              <span className="text-primary block md:inline">
                {t.servicesEcosystem.titleAccent}
              </span>
            </h2>

            <p className="text-base md:text-lg text-foreground-muted mb-8 md:mb-10 leading-relaxed">
              {t.servicesEcosystem.desc}
            </p>

            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {t.servicesEcosystem.points.map((point: string, i: number) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  </div>
                  <span className="text-base md:text-lg font-medium text-foreground">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-card to-background border border-border-custom">
              <div className="flex items-center gap-4 mb-2">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-foreground">
                    {t.servicesEcosystem.valueTitle}
                  </h4>
                  <p className="text-xs text-foreground-muted">
                    {t.servicesEcosystem.valueDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
