'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Crown, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const paths = [
  {
    id: 'fast-start',
    title: 'باقة الصاروخ: انطلاقة سريعة',
    subtitle: 'المنصات الجاهزة',
    icon: <Rocket className="w-8 h-8" />,
    color: 'secondary',
    pros: [
      'سرعة في الإطلاق (أيام قليلة)',
      'تكلفة مبدئية منخفضة',
      'سهولة في الإدارة للمبتدئين',
    ],
    cons: [
      'اشتراكات شهرية مستمرة',
      'عمولات على كل عملية بيع (%)',
      'تحكم محدود في الكود والبيانات',
    ],
    bestFor: 'مثالي لتجربة منتج جديد أو البدء بميزانية محدودة.',
    tag: 'بداية ذكية',
  },
  {
    id: 'empire-builder',
    title: 'باقة الإمبراطور: ملكية كاملة',
    subtitle: 'البرمجة الخاصة',
    icon: <Crown className="w-8 h-8" />,
    color: 'primary',
    pros: [
      '0% عمولة (أرباحك لك بالكامل)',
      'دفع لمرة واحدة (بدون إيجار شهري)',
      'ملكية كاملة 100% للكود والبيانات',
      'نظام مفصل تماماً على احتياجاتك',
    ],
    cons: ['استثمار مبدئي أعلى', 'وقت أطول قليلاً في التطوير'],
    bestFor: 'مثالي للعلامات التجارية المستقرة ومن يرفض وجود «شريك» في جيبه.',
    tag: 'استثمار طويل الأمد',
  },
];

export default function SmartTransparency() {
  return (
    <section
      className="py-12 lg:py-32 bg-card/30 border-y border-white/5 relative overflow-hidden"
      id="comparison"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-black mb-4 lg:mb-6 leading-tight"
          >
            قرار تقني أم <span className="text-primary">قرار استثماري؟</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text/60 text-base lg:text-lg"
          >
            نحن لا نبيعك «كود»، بل نوضح لك كيف تؤثر خياراتك التقنية على هوامش
            ربحك. إليك المسارين المتاحين في السوق المصري:
          </motion.p>
        </div>

        <div className="flex lg:grid lg:grid-cols-2 gap-6 lg:gap-12 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pt-6 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative p-6 lg:p-12 rounded-[32px] lg:rounded-[40px] border transition-all duration-500 group w-[85vw] lg:w-full shrink-0 snap-center ${
                path.color === 'primary'
                  ? 'bg-primary/5 border-primary/20 hover:border-primary/40'
                  : 'bg-white/5 border-white/10 hover:border-secondary/40'
              }`}
            >
              <div
                className={`absolute -top-3 lg:-top-4 right-6 lg:right-12 px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest shadow-xl z-20 ${
                  path.color === 'primary'
                    ? 'bg-primary text-background'
                    : 'bg-secondary text-background'
                }`}
              >
                {path.tag}
              </div>

              <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-10">
                <div
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center ${
                    path.color === 'primary'
                      ? 'bg-primary text-background glow-orange'
                      : 'bg-secondary text-background glow-blue'
                  }`}
                >
                  {path.icon}
                </div>
                <div>
                  <p className="text-gray-900 text-xs lg:text-sm font-black uppercase tracking-wider mb-1">
                    {path.subtitle}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-black">
                    {path.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-10">
                {/* Pros */}
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-text/30 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    المميزات (الأرباح)
                  </h4>
                  <ul className="space-y-3">
                    {path.pros.map((pro, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-text/80 font-bold"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-text/30 mb-4 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    التحديات (التكاليف)
                  </h4>
                  <ul className="space-y-3">
                    {path.cons.map((con, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-text/60 text-sm font-medium"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="pt-8 border-t border-white/5">
                  <p className="text-text/80 text-sm leading-relaxed italic">
                    <span className="font-black text-text not-italic">
                      لمن هذا؟{' '}
                    </span>
                    {path.bestFor}
                  </p>
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
          className="mt-16 lg:mt-24 p-8 lg:p-12 rounded-[40px] bg-gradient-to-br from-background to-card border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <h3 className="text-xl md:text-3xl font-black mb-4 lg:mb-6">
            مش عارف أنهي طريق يوفرلك أكتر؟ <br />
            <span className="text-primary">تعالي نحسبها سوا.</span>
          </h3>
          <p className="text-text/60 text-sm lg:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto">
            نحن نكشف لك ما يخفيه الآخرون عن الرسوم والعمولات. سنقوم بتحليل حجم
            مبيعاتك المتوقع لنخبرك أيهما سيعطيك أعلى صافي ربح.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const message =
                'مرحباً كودا، أريد المساعدة في حساب التكاليف والمقارنة بين البرمجة الخاصة والمنصات الجاهزة لمشروعي.';
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/201212228091?text=${encodedMessage}`,
                '_blank'
              );
            }}
            className="bg-primary text-background font-black px-10 py-4 rounded-2xl glow-orange hover:bg-secondary transition-all cursor-pointer inline-flex items-center gap-3"
          >
            احسب أرباحك مع خبير
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
