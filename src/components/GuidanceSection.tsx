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
} from 'lucide-react';

export default function GuidanceSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual: Confusion vs Clarity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />

            <div className="relative grid grid-cols-2 gap-4">
              {/* Confusion Side */}
              <div className="p-6 rounded-[32px] bg-card/40 border border-white/5 flex flex-col items-center text-center space-y-4 opacity-50 grayscale">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-text/40" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-16 bg-white/10 rounded-full mx-auto" />
                  <div className="h-2 w-24 bg-white/10 rounded-full mx-auto" />
                  <div className="h-2 w-20 bg-white/10 rounded-full mx-auto" />
                </div>
                <p className="text-[10px] font-bold text-text/30 uppercase tracking-widest">
                  تشتت الخيارات
                </p>
              </div>

              {/* Clarity Side */}
              <div className="p-8 rounded-[32px] bg-primary/10 border border-primary/20 flex flex-col items-center text-center space-y-6 shadow-[0_0_40px_rgba(255,140,66,0.1)]">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center glow-orange">
                  <Compass className="w-8 h-8 text-background" />
                </div>
                <div className="space-y-3">
                  <div className="h-2.5 w-20 bg-primary/40 rounded-full mx-auto" />
                  <div className="h-2.5 w-32 bg-primary/40 rounded-full mx-auto" />
                </div>
                <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">
                  وضوح مع كودا
                </p>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card border border-white/10 shadow-2xl"
              >
                <Search className="w-5 h-5 text-secondary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-card border border-white/10 shadow-2xl"
              >
                <Settings className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              تائه وسط مئات الخيارات؟ <br />
              <span className="text-primary">نحن نرشدك للطريق.</span>
            </h2>

            <p className="text-text/60 text-lg mb-10 leading-relaxed">
              بدء مشروعك يتطلب اتخاذ مئات القرارات (شركات الشحن، بوابات الدفع،
              الاستضافة، المنصات). هناك خيارات لا حصر لها، لكن القليل منها فقط
              هو ما يناسبك.
            </p>

            <div className="space-y-6 mb-10">
              {[
                'لا نقوم بالبناء فقط، بل ننصحك بالأفضل لعملك.',
                'نختار لك شركاء الشحن والدفع حسب حجم مبيعاتك.',
                'نضمن لك عدم دفع مبالغ إضافية في ميزات لا تحتاجها.',
                'نتولى التفاصيل التقنية لتتفرغ أنت لإدارة تجارتك.',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-text/80">{item}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => {
                const message =
                  'مرحباً كودا، أحتاج لمساعدة في اختيار أفضل الحلول والشركاء لمشروعي الجديد.';
                const encodedMessage = encodeURIComponent(message);
                window.open(
                  `https://wa.me/201212228091?text=${encodedMessage}`,
                  '_blank'
                );
              }}
              className="flex items-center gap-3 text-primary font-black text-lg group cursor-pointer"
            >
              ابدأ التخطيط لمشروعك الآن
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
