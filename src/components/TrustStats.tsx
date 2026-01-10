'use client';

import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from 'framer-motion';
import { Wallet, Zap, Headphones, ShieldCheck } from 'lucide-react';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
  decimals?: number;
}

const StatItem = ({
  value,
  suffix,
  label,
  subtext,
  icon,
  decimals = 0,
}: StatProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: 'easeOut' });
    }
  }, [isInView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-background/50 border border-white/5 flex flex-col items-center text-center group hover:border-primary/20 transition-colors"
    >
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="mb-3 lg:mb-4 p-2 lg:p-3 rounded-lg lg:rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
        <div className="w-5 h-5 lg:w-6 lg:h-6">{icon}</div>
      </div>

      <div className="text-2xl lg:text-5xl font-black text-primary mb-1 lg:mb-2 flex items-center">
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>

      <div className="text-sm lg:text-lg font-bold mb-1 lg:mb-2">{label}</div>
      <p className="text-text/60 text-[10px] lg:text-sm leading-relaxed">
        {subtext}
      </p>
    </motion.div>
  );
};

export default function TrustStats() {
  return (
    <section className="py-12 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <StatItem
            value={0}
            suffix="%"
            label="عمولة على المبيعات"
            subtext="مكسبك كله ليك، مش بنشاركك في تعبك."
            icon={<Wallet className="w-full h-full" />}
          />
          <StatItem
            value={99.9}
            suffix="%"
            label="سيستم مبيقعش"
            subtext="شغال وقت العروض والضغط العالي."
            icon={<Zap className="w-full h-full" />}
            decimals={1}
          />
          <StatItem
            value={24}
            suffix="/7"
            label="دعم فني في ضهرك"
            subtext="فريق كامل بيحل مشاكلك في لحظتها."
            icon={<Headphones className="w-full h-full" />}
          />
          <StatItem
            value={100}
            suffix="%"
            label="بياناتك في أمان"
            subtext="محدش بيشوف داتا عملائك غيرك."
            icon={<ShieldCheck className="w-full h-full" />}
          />
        </div>
      </div>
    </section>
  );
}
