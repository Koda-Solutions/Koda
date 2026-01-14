'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Zap, Crown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// 1. تعريف شكل البيانات عشان التايب سكريبت ميعترضش
interface PricingPlan {
  id: string;
  level: number;
  icon: string;
  name: string;
  tagline: string;
  pricePlaceholder: string;
  features: string[];
  buttonText: string;
  badge?: string; // اختياري
  highlighted?: boolean; // اختياري
}

// 2. خريطة الأيقونات عشان نحول النص لأيقونة
const iconMap: { [key: string]: React.ReactNode } = {
  Rocket: <Rocket className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Crown: <Crown className="w-6 h-6" />,
};

export default function Pricing() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">
            {t.pricing.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* 3. هنا التصحيح: حددنا النوع PricingPlan جوه الـ map */}
          {t.pricing.plans.map((plan: PricingPlan, index: number) => {
            const Icon = iconMap[plan.icon] || <Rocket className="w-6 h-6" />;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col h-full ${
                  plan.highlighted
                    ? 'bg-card border-primary shadow-2xl shadow-primary/20 scale-105 z-10'
                    : 'bg-card/50 border-border-custom hover:border-primary/30'
                }`}
              >
                {/* Badge for highlighted plans */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className="mb-8 text-center">
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                      plan.highlighted
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {Icon}
                  </div>
                  <h3 className="text-xl font-black mb-2">{plan.name}</h3>
                  <p className="text-foreground-muted text-sm font-medium">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price (Blurred/Locked) */}
                <div className="mb-8 text-center relative">
                  <div className="text-4xl font-black text-foreground blur-sm select-none opacity-50">
                    $999
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-foreground/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-foreground">
                      {plan.pricePlaceholder}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  disabled
                  className={`w-full py-4 rounded-xl font-bold transition-all cursor-not-allowed ${
                    plan.highlighted
                      ? 'bg-primary/20 text-primary'
                      : 'bg-foreground/5 text-foreground-muted'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
