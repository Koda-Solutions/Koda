'use client';

import Image from 'next/image';
import { Zap, CreditCard, Truck, Lock } from 'lucide-react';

const features = [
  { icon: <Zap size={18} />, text: 'سرعة صاروخية' },
  { icon: <CreditCard size={18} />, text: 'دفع إلكتروني' },
  { icon: <Truck size={18} />, text: 'ربط شحن' },
  { icon: <Lock size={18} />, text: 'تأمين كامل' },
];

export default function Solution() {
  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-card border border-white/10 rounded-[32px] p-8 lg:p-12 relative overflow-hidden">
          {/* Top Border Gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-black mb-5 leading-tight">
                إحنا بنبني{' '}
                <span className="text-primary italic">Architects</span> <br />
                مش مجرد مبرمجين
              </h2>
              <p className="text-lg text-text/70 mb-8 leading-relaxed">
                سواء بتبدأ بـ Shopify أو عايز سيستم كامل (Laravel & Next.js)..
                إحنا بنفصلك البدلة اللي تليق على حجم بيزنسك.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-secondary font-bold text-sm lg:text-base"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      {f.icon}
                    </div>
                    {f.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative aspect-video rounded-2xl bg-background border border-white/5 overflow-hidden shadow-2xl">
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
