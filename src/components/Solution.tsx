'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, CreditCard, Truck, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Solution() {
  const { t } = useLanguage();

  const features = [
    { icon: <Zap className="w-full h-full" />, text: t.solution.features[0] },
    {
      icon: <CreditCard className="w-full h-full" />,
      text: t.solution.features[1],
    },
    { icon: <Truck className="w-full h-full" />, text: t.solution.features[2] },
    { icon: <Lock className="w-full h-full" />, text: t.solution.features[3] },
  ];

  return (
    <section className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card border border-border-custom rounded-[24px] lg:rounded-[32px] p-5 lg:p-10 relative overflow-hidden shadow-xl">
          {/* Top Border Gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-xl md:text-3xl font-black mb-5 leading-tight text-foreground">
                {t.solution.title} <br />
                <span className="text-primary">{t.solution.titleAccent}</span>
              </h2>
              <p className="text-sm lg:text-base mb-6 lg:mb-8 text-foreground-muted">
                {t.solution.desc}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 lg:gap-3 text-secondary font-bold text-xs lg:text-base"
                  >
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <div className="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px]">
                        {f.icon}
                      </div>
                    </div>
                    {f.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative aspect-video rounded-2xl bg-card border border-border-custom overflow-hidden shadow-2xl">
              <Image
                src="/Solution-shopping-app.png"
                alt="Koda E-commerce Solution"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Optional: Subtle Overlay for better blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
