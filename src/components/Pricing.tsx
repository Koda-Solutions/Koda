'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Pricing() {
  const { t, isRTL } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  const plans = t.pricing.plans.map(
    (
      plan: {
        name: string;
        tagline: string;
        pricePlaceholder: string;
        features: string[];
        buttonText: string;
        whatsappMessage: string;
        badge?: string;
      },
      index: number
    ) => ({
      ...plan,
      id: `plan-${index}`,
      highlighted: index === 1,
      premium: index === 2,
    })
  );

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
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

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map(
            (plan: {
              id: string;
              name: string;
              tagline: string;
              pricePlaceholder: string;
              features: string[];
              buttonText: string;
              whatsappMessage: string;
              badge?: string;
              highlighted: boolean;
              premium: boolean;
            }) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-[32px] border transition-all duration-300 shadow-md ${
                  plan.highlighted
                    ? 'bg-card border-primary scale-105 z-20 shadow-[0_0_40px_rgba(255,140,66,0.15)]'
                    : plan.premium
                    ? 'bg-gradient-to-b from-card to-background border-border-custom'
                    : 'bg-card border-border-custom'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-black mb-2 text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="text-2xl font-black text-primary/90">
                    {plan.pricePlaceholder}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className={
                          plan.highlighted ? 'text-primary' : 'text-secondary'
                        }
                      />
                      <span
                        className={
                          (plan.name === t.pricing.plans[1].name &&
                            (feature.includes('0%') ||
                              feature.includes('0%'))) ||
                          (plan.name === t.pricing.plans[2].name &&
                            (feature.includes('تطبيق موبايل') ||
                              feature.includes('Mobile App')))
                            ? 'font-bold text-primary'
                            : 'text-foreground'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsApp(plan.whatsappMessage)}
                  className={`w-full py-4 rounded-xl font-black transition-all cursor-pointer ${
                    plan.highlighted
                      ? 'bg-primary text-white glow-orange hover:bg-secondary'
                      : 'bg-card text-foreground hover:bg-foreground/5 border border-border-custom'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
