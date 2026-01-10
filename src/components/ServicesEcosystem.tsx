'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  ShoppingBag,
  Layout,
  Lightbulb,
  Link2,
  Cpu,
  Globe,
  Zap,
} from 'lucide-react';

const services = [
  {
    title: 'تطوير تطبيقات الويب المخصصة',
    description:
      'حلول برمجية مصممة خصيصاً لتلبية احتياجات عملك الفريدة باستخدام أحدث التقنيات.',
    icon: <Code2 className="w-8 h-8 text-primary" />,
    tech: ['Laravel', 'React', 'Node.js'],
  },
  {
    title: 'تأسيس المتاجر الإلكترونية',
    description:
      'بناء متاجر احترافية على أشهر المنصات العالمية لضمان تجربة تسوق سلسة.',
    icon: <ShoppingBag className="w-8 h-8 text-secondary" />,
    tech: ['Shopify', 'WooCommerce'],
  },
  {
    title: 'صفحات الهبوط والبورفوليو',
    description: 'تصميم واجهات جذابة تحول الزوار إلى عملاء وتبرز هوية مشروعك.',
    icon: <Layout className="w-8 h-8 text-primary" />,
    tech: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'الاستشارات التقنية والأعمال',
    description:
      'نحلل ميزانيتك ومتطلباتك لنرشح لك أفضل الحلول التقنية التي تحقق أهدافك.',
    icon: <Lightbulb className="w-8 h-8 text-secondary" />,
    tech: ['Business Analysis', 'Tech Stack Strategy'],
  },
  {
    title: 'ربط الخدمات الخارجية',
    description:
      'دمج بوابات الدفع وشركات الشحن وأنظمة الـ CRM لتمتة عملياتك بالكامل.',
    icon: <Link2 className="w-8 h-8 text-primary" />,
    tech: ['Payment Gateways', 'Shipping APIs'],
  },
  {
    title: 'تطوير الأنظمة الداخلية',
    description:
      'بناء لوحات تحكم وأنظمة إدارة موارد (ERP) مخصصة لإدارة عملك بكفاءة.',
    icon: <Cpu className="w-8 h-8 text-secondary" />,
    tech: ['Custom Dashboards', 'API Integration'],
  },
];

const techStack = [
  { name: 'Shopify', icon: <Globe className="w-5 h-5" /> },
  { name: 'WordPress', icon: <Zap className="w-5 h-5" /> },
  { name: 'Laravel', icon: <Code2 className="w-5 h-5" /> },
  { name: 'React', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Node.js', icon: <Code2 className="w-5 h-5" /> },
];

export default function ServicesEcosystem() {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            منظومة خدمات <span className="text-primary">كودا</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text/60 max-w-2xl mx-auto text-lg"
          >
            نحن لسنا مجرد مبرمجين، نحن شركاء نجاحك. نقدم حلولاً تقنية متكاملة
            تبدأ من الاستشارة وتنتهي بنمو أعمالك.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[32px] bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,140,66,0.05)]"
            >
              <div className="mb-6 p-4 w-fit rounded-2xl bg-background border border-white/5 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-white/5 text-text/40 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 lg:p-12 rounded-[40px] bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 text-center"
        >
          <h4 className="text-xl font-bold mb-8">خبراتنا التقنية تشمل</h4>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-background/50 border border-white/5 backdrop-blur-sm"
              >
                <span className="text-primary">{tech.icon}</span>
                <span className="font-bold text-sm lg:text-base">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
