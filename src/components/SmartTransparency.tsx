'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CreditCard,
  Truck,
  Coins,
  Calendar,
  Target,
  CheckCircle2,
} from 'lucide-react';

const paymentModels = [
  { name: 'شهري', icon: <Calendar className="w-5 h-5" /> },
  { name: 'سنوي', icon: <Calendar className="w-5 h-5" /> },
  { name: 'حسب المرحلة (Milestone)', icon: <Target className="w-5 h-5" /> },
];

const partners = [
  { name: 'Paymob', type: 'payment' },
  { name: 'Fawry', type: 'payment' },
  { name: 'Instapay', type: 'payment' },
  { name: 'Bosta', type: 'shipping' },
  { name: 'Aramex', type: 'shipping' },
];

export default function SmartTransparency() {
  return (
    <section className="py-20 lg:py-32 bg-card/30 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Ownership & Commissions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
              شفافية ذكية في{' '}
              <span className="text-secondary">التعامل والملكية</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 p-6 rounded-3xl bg-background border border-white/5 hover:border-primary/20 transition-colors">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">
                    المواقع المخصصة (Custom)
                  </h4>
                  <p className="text-text/60 text-sm leading-relaxed">
                    ملكية كاملة 100% للكود والبيانات. تدفع تكلفة التطوير مرة
                    واحدة فقط، مع{' '}
                    <span className="text-primary font-bold">0% عمولة</span> على
                    مبيعاتك للأبد.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-3xl bg-background border border-white/5 hover:border-secondary/20 transition-colors">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">
                    منصات إدارة المحتوى (CMS)
                  </h4>
                  <p className="text-text/60 text-sm leading-relaxed">
                    بداية اقتصادية وسريعة عبر Shopify أو WordPress. نوفر لك
                    الإعداد الاحترافي مع توضيح كامل لرسوم المنصات الخارجية
                    لتختار ما يناسب ميزانيتك.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Payment & Logistics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Payment Models */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                <CreditCard className="text-primary" />
                مرونة في الدفع
              </h4>
              <div className="flex flex-wrap gap-4">
                {paymentModels.map((model, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold"
                  >
                    <span className="text-primary">{model.icon}</span>
                    {model.name}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-text/40 text-xs italic">
                * يتم تخصيص هيكل الدفع بناءً على نوع المشروع والميزانية المحددة.
              </p>
            </div>

            {/* Logistics & Partners */}
            <div className="p-8 rounded-[32px] bg-gradient-to-br from-background to-card border border-white/10">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Truck className="text-secondary" />
                الربط اللوجستي والمالي
              </h4>
              <p className="text-text/60 text-sm mb-8 leading-relaxed">
                نحن لا نقوم بالربط البرمجي فقط، بل{' '}
                <span className="text-text font-bold">نوجهك لأفضل الشركاء</span>{' '}
                الذين يقدمون أقل عمولات وأسرع تحصيل بناءً على حجم عملك.
              </p>

              <div className="flex flex-wrap gap-3">
                {partners.map((partner, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-background border border-white/5 text-xs font-bold text-text/70 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3 h-3 text-secondary" />
                    {partner.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
