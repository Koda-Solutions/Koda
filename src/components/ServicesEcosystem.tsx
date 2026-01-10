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

const ecosystemFeatures = [
  {
    title: 'الربط اللوجستي المتكامل',
    description:
      'إدارة طلباتك وتتبع الشحنات مباشرة من لوحة تحكم واحدة دون الحاجة للتنقل بين تطبيقات شركات الشحن.',
    partners: ['بوسطة', 'مايلرز', 'أرامكس'],
    icon: <Truck className="w-6 h-6" />,
    color: 'primary',
  },
  {
    title: 'بوابات الدفع المحلية',
    description:
      'تحصيل أموالك بأمان وسرعة. لا نكتفي بالربط، بل نساعدك في اختيار البوابة الأقل عمولة لحجم عملك.',
    partners: ['فوري', 'بيموب', 'إنستاباي'],
    icon: <CreditCard className="w-6 h-6" />,
    color: 'secondary',
  },
  {
    title: 'لوحة تحكم ذكية',
    description:
      'نظام إدارة مخزون ومبيعات متطور يمنحك رؤية كاملة لكل تفاصيل عملك في مكان واحد.',
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: 'primary',
  },
];

export default function ServicesEcosystem() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="services">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              بنية تحتية <span className="text-primary">تفهم السوق المصري</span>
            </h2>
            <p className="text-text/60 text-lg mb-10 leading-relaxed">
              نحن لا نبني مجرد مواقع، بل نربط تجارتك بأقوى مقدمي الخدمات في مصر
              لضمان دورة عمل آلية بالكامل من الطلب وحتى التحصيل.
            </p>

            <div className="space-y-6">
              {[
                'توفير في عمولات شركات الدفع والشحن.',
                'أتمتة كاملة لعمليات الشحن وتحديث الحالات.',
                'دعم فني محلي يفهم تحديات السوق.',
                'تقارير ذكية تساعدك في اتخاذ قرارات مالية صحيحة.',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-text/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {ecosystemFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[32px] bg-card border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="flex gap-6">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                      feature.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-3">{feature.title}</h4>
                    <p className="text-text/60 text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    {feature.partners && (
                      <div className="flex flex-wrap gap-2">
                        {feature.partners.map((partner, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 rounded-lg bg-background border border-white/5 text-[10px] font-black uppercase tracking-widest text-text/40"
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
          className="p-10 lg:p-16 rounded-[48px] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-black mb-6">
            نحن لا نثبت برمجيات فقط.. <br />
            <span className="text-primary">نحن نحمي هوامش ربحك.</span>
          </h3>
          <p className="text-text/60 text-lg max-w-3xl mx-auto mb-10">
            اختيار بوابة الدفع الخاطئة قد يكلفك آلاف الجنيهات شهرياً في العمولات
            الضائعة. نحن نوجهك للأفضل بناءً على أرقامك الحقيقية.
          </p>
          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => {
              const message =
                'مرحباً كودا، أحتاج لاستشارة بخصوص اختيار أفضل بوابات الدفع وشركات الشحن لمشروعي لتقليل التكاليف.';
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="text-primary font-black text-xl flex items-center gap-3 mx-auto cursor-pointer group"
          >
            ناقش خياراتك مع خبير مالي وتقني
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
