'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Diamond, Crown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Rocket: Rocket,
  Diamond: Diamond,
  Crown: Crown,
};

export default function Pricing() {
  const { t, isRTL } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  const plans = t.pricing.plans.map((plan, index) => ({
    ...plan,
    id: `plan-${index}`,
    Icon: iconMap[plan.icon as keyof typeof iconMap] || Diamond,
  }));

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="blob top-0 left-0 opacity-20" />
      <div className="blob bottom-0 right-0 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-black mb-6 text-foreground">{t.pricing.title}</h2>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-bold ${
                billingCycle === 'monthly'
                  ? 'text-primary'
                  : 'text-foreground-muted'
              }`}
            >
              {t.pricing.monthly}
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === 'monthly' ? 'yearly' : 'monthly'
                )
              }
              className="w-14 h-7 bg-card border border-border-custom rounded-full p-1 relative transition-colors cursor-pointer"
            >
              <motion.div
                animate={{
                  x: billingCycle === 'monthly' ? 0 : isRTL ? -28 : 28,
                }}
                className="w-5 h-5 bg-primary rounded-full"
              />
            </button>
            <span
              className={`text-sm font-bold ${
                billingCycle === 'yearly'
                  ? 'text-primary'
                  : 'text-foreground-muted'
              }`}
            >
              {t.pricing.yearly}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[32px] border transition-all duration-500 flex flex-col glass-panel ${
                plan.highlighted
                  ? 'border-primary scale-105 z-20 shadow-[0_0_50px_rgba(255,140,66,0.25)] ring-1 ring-primary/50'
                  : 'border-border-custom hover:border-primary/30'
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-card border border-border-custom text-foreground-muted'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-colors ${
                    plan.highlighted
                      ? 'bg-primary/10 text-primary'
                      : 'bg-foreground/5 text-foreground-muted'
                  }`}
                >
                  <plan.Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black mb-2 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-foreground-muted text-sm font-medium">
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-8 text-center">
                <div className="text-xl font-black text-primary">
                  {plan.priceModel}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      className={`shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-primary' : 'text-primary/60'
                      }`}
                    />
                    <span
                      className={`font-medium ${
                        plan.highlighted
                          ? 'text-foreground'
                          : 'text-foreground/80'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="text-[10px] text-foreground-muted text-center mb-4 leading-tight opacity-70">
                  {plan.note}
                </p>
              )}

              <button
                onClick={() => handleWhatsApp(plan.whatsappMessage)}
                className={`w-full py-4 rounded-2xl font-black transition-all duration-300 cursor-pointer text-base ${
                  plan.buttonStyle === 'solid'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white glow-orange hover:shadow-primary/40'
                    : 'bg-transparent text-foreground border-2 border-border-custom hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
