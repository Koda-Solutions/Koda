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
import { useLanguage } from '../context/LanguageContext';

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
      className="relative p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-card border border-border-custom flex flex-col items-center text-center group hover:border-primary/20 transition-colors shadow-sm"
    >
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="mb-3 lg:mb-4 p-2 lg:p-3 rounded-lg lg:rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
        <div className="w-5 h-5 lg:w-6 lg:h-6">{icon}</div>
      </div>

      <div className="text-2xl lg:text-5xl font-black text-primary mb-1 lg:mb-2 flex items-center">
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>

      <div className="text-sm lg:text-lg font-bold mb-1 lg:mb-2 text-foreground">
        {label}
      </div>
      <p className="text-foreground-muted text-[10px] lg:text-sm leading-relaxed">
        {subtext}
      </p>
    </motion.div>
  );
};

export default function TrustStats() {
  const { t } = useLanguage();

  return (
    <section className="py-12 lg:py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <StatItem
            value={0}
            suffix="%"
            label={t.trustStats.commission.label}
            subtext={t.trustStats.commission.subtext}
            icon={<Wallet className="w-full h-full" />}
          />
          <StatItem
            value={99.9}
            suffix="%"
            label={t.trustStats.uptime.label}
            subtext={t.trustStats.uptime.subtext}
            icon={<Zap className="w-full h-full" />}
            decimals={1}
          />
          <StatItem
            value={24}
            suffix="/7"
            label={t.trustStats.support.label}
            subtext={t.trustStats.support.subtext}
            icon={<Headphones className="w-full h-full" />}
          />
          <StatItem
            value={100}
            suffix="%"
            label={t.trustStats.security.label}
            subtext={t.trustStats.security.subtext}
            icon={<ShieldCheck className="w-full h-full" />}
          />
        </div>
      </div>
    </section>
  );
}
