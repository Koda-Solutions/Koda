'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, BarChart3 } from 'lucide-react';

const points = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    title: 'الزبون مبيستناش الرد',
    desc: (
      <>
        كل دقيقة تأخير في الرد = زبون راح للمنافس.
        <br className="mb-2 block" /> {/* سطر جديد مع مسافة صغيرة */}
        السيستم بيبيع للعميل ويحاسبه أوتوماتيك 24 ساعة.
      </>
    ),
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'باني بيتك على أرض غيرك',
    desc: (
      <>
        صفحات السوشيال ميديا ممكن تتقفل في ثانية.
        <br className="mb-2 block" />
        موقعك هو ملكك، وداتا عملائك في جيبك أنت بس.
      </>
    ),
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: 'فلوسك سايحة في البضاعة؟',
    desc: (
      <>
        متبقاش شغال عشان تدفع للموردين وبس.
        <br className="mb-2 block" />
        اعرف كسبت كام وصرفت كام بالجنيه بضغطة زرار.
      </>
    ),
  },
];

export default function PainPoints() {
  return (
    <section className="py-12 lg:py-16 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-black mb-4">
            التجارة كبرت.. <span className="text-primary">والورقة والقلم</span>{' '}
            مابقوش يأكلوا عيش.
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255, 140, 66, 0.3)' }}
              className="p-5 lg:p-6 rounded-2xl bg-background border border-white/5 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{point.title}</h3>
              <p className="text-text/60 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
