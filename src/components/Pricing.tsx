'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'dokan',
    name: 'دكان',
    tagline: 'لسه بتقول يا هادي',
    pricePlaceholder: 'تواصل لمعرفة العرض',
    features: [
      'متجر إلكتروني كامل باسمك.',
      'ارفع لحد 50 منتج.',
      'استقبل الطلبات على الواتساب.',
      'لوحة تحكم سهلة (مش محتاجة خبير).',
    ],
    buttonText: 'ابدأ تجربتك المجانية',
    whatsappMessage:
      "مرحباً كودا، أنا لسه ببدأ ومهتم بباقة 'دكان'. ممكن تفاصيل السعر؟",
    highlighted: false,
  },
  {
    id: 'brand',
    name: 'براند',
    tagline: 'عايز تكبر وتنتشر في السوق',
    pricePlaceholder: 'تواصل لمعرفة العرض',
    badge: '🔥 الأكثر طلباً',
    features: [
      '0% عمولة على المبيعات',
      'عدد لا نهائي من المنتجات.',
      'تقارير مبيعات مفصلة (اعرف اللي ليك واللي عليك).',
      'ربط مع فيسبوك بيكسل (عشان الإعلانات).',
      'كوبونات خصم وعروض للعملاء.',
    ],
    buttonText: 'كبر شغلك دلوقتي',
    whatsappMessage:
      "مرحباً كودا، أنا عندي شغل شغال وعايز أكبر بباقة 'براند'. محتاج أعرف العرض.",
    highlighted: true,
  },
  {
    id: 'empire',
    name: 'إمبراطورية',
    tagline: 'للحيتان اللي واكلين السوق',
    pricePlaceholder: 'سعر خاص للشركات',
    features: [
      'تطبيق موبايل (Android & iOS) خاص بيك.',
      'مدير حساب خاص ليك (VIP Support).',
      'ربط مع شركات الشحن والدفع أوتوماتيك.',
      'سيستم مخازن متطور (Multi-inventory).',
    ],
    buttonText: 'تواصل مع المبيعات',
    whatsappMessage:
      "مرحباً كودا، أنا مهتم بالحل المتكامل (App + System) باقة 'الإمبراطورية'. محتاج عرض سعر.",
    highlighted: false,
    premium: true,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-black mb-6">اختار خطة نموك</h2>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-bold ${
                billingCycle === 'monthly' ? 'text-primary' : 'text-text/50'
              }`}
            >
              شهرياً
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === 'monthly' ? 'yearly' : 'monthly'
                )
              }
              className="w-14 h-7 bg-card border border-white/10 rounded-full p-1 relative transition-colors cursor-pointer"
            >
              <motion.div
                animate={{ x: billingCycle === 'monthly' ? 0 : -28 }}
                className="w-5 h-5 bg-primary rounded-full"
              />
            </button>
            <span
              className={`text-sm font-bold ${
                billingCycle === 'yearly' ? 'text-primary' : 'text-text/50'
              }`}
            >
              سنوياً (توفير ٢٠٪)
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[32px] border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-card border-primary scale-105 z-20 shadow-[0_0_40px_rgba(255,140,66,0.15)]'
                  : plan.premium
                  ? 'bg-gradient-to-b from-card to-background border-white/10'
                  : 'bg-card/50 border-white/5'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p className="text-text/60 text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-8">
                <div className="text-2xl font-black text-primary/90">
                  {plan.pricePlaceholder}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      className={
                        plan.highlighted ? 'text-primary' : 'text-secondary'
                      }
                    />
                    <span
                      className={
                        (plan.id === 'brand' && feature.includes('0%')) ||
                        (plan.id === 'empire' &&
                          feature.includes('تطبيق موبايل'))
                          ? 'font-bold text-primary'
                          : 'text-text/80'
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
                    ? 'bg-primary text-background glow-orange hover:bg-secondary'
                    : 'bg-white/5 text-text hover:bg-white/10 border border-white/10'
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
