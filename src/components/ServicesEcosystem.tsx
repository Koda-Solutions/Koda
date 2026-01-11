'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  CreditCard,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesEcosystem() {
  const { t, isRTL } = useLanguage();

  // Safety check: Ensure features exist before accessing them
  const features = t.servicesEcosystem?.features || [];

  const ecosystemFeatures = [
    {
      title: features[0]?.title || 'الربط اللوجستي',
      description: features[0]?.desc || 'إدارة الشحنات...',
      partners: features[0]?.partners || [],
      icon: <Truck className="w-6 h-6" />,
      color: 'primary',
    },
    {
      title: features[1]?.title || 'بوابات الدفع',
      description: features[1]?.desc || 'تحصيل آمن...',
      partners: features[1]?.partners || [],
      icon: <CreditCard className="w-6 h-6" />,
      color: 'secondary',
    },
    {
      title: features[2]?.title || 'لوحة التحكم',
      description: features[2]?.desc || 'إدارة شاملة...',
      icon: <LayoutDashboard className="w-6 h-6" />,
      color: 'primary',
    },
  ];

  // Safety check: Ensure points exist, default to empty array if missing
  const points = t.servicesEcosystem?.points || [];

  return (
    <section className="py-12 lg:py-32 relative overflow-hidden" id="services">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-5xl font-black mb-6 lg:mb-8 leading-tight text-foreground">
              {t.servicesEcosystem.title}{' '}
              <span className="text-primary">
                {t.servicesEcosystem.titleAccent}
              </span>
            </h2>
            <p className="text-foreground-muted text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed">
              {t.servicesEcosystem.desc}
            </p>

            <div className="space-y-6">
              {/* Fix: Added safety check (points && points.map) */}
              {points.length > 0 ? (
                points.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-foreground">{item}</span>
                  </div>
                ))
              ) : (
                // Fallback content if points are missing in translation
                <div className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-foreground">
                    حلول متكاملة لنمو تجارتك
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          <div className="flex lg:grid gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
            {ecosystemFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] bg-card border border-border-custom hover:border-primary/20 transition-all group w-[80vw] lg:w-full shrink-0 snap-center shadow-sm"
              >
                <div className="flex gap-6">
                  <div
                    className={`shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center ${
                      feature.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-3 text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    {feature.partners && (
                      <div className="flex flex-wrap gap-2">
                        {feature.partners.map((partner: string, j: number) => (
                          <span
                            key={j}
                            className="px-3 py-1 rounded-lg bg-card border border-border-custom text-[10px] font-black uppercase tracking-widest text-foreground-muted"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Value Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-6 lg:p-16 rounded-[32px] lg:rounded-[48px] bg-card border border-border-custom text-center shadow-lg"
        >
          <h3 className="text-xl md:text-4xl font-black mb-4 lg:mb-6 text-foreground">
            {t.servicesEcosystem.valueTitle} <br />
            <span className="text-primary">
              {t.servicesEcosystem.valueAccent}
            </span>
          </h3>
          <p className="text-foreground-muted text-sm lg:text-lg max-w-3xl mx-auto mb-8 lg:mb-10">
            {t.servicesEcosystem.valueDesc}
          </p>
          <motion.button
            whileHover={{ x: isRTL ? -5 : 5 }}
            onClick={() => {
              const message = t.servicesEcosystem.whatsappMessage;
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="text-primary font-black text-lg lg:text-xl flex items-center gap-3 mx-auto cursor-pointer group"
          >
            {t.servicesEcosystem.cta}
            <ArrowRight
              className={`w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform ${
                isRTL ? 'rotate-180 group-hover:-translate-x-2' : ''
              }`}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
