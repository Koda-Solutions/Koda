'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Mic,
  Dices,
  Ruler,
  Sparkles,
  TrendingUp,
  MessageCircle,
  Monitor,
  CreditCard,
  Glasses,
  Users,
  Zap,
  Lock,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: { [key: string]: React.ReactNode } = {
  // تصغير الأيقونات للمساحات الضيقة
  Smartphone: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
  Mic: <Mic className="w-5 h-5 md:w-6 md:h-6" />,
  Dices: <Dices className="w-5 h-5 md:w-6 md:h-6" />,
  Ruler: <Ruler className="w-5 h-5 md:w-6 md:h-6" />,
  Sparkles: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
  TrendingUp: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
  MessageCircle: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />,
  Monitor: <Monitor className="w-5 h-5 md:w-6 md:h-6" />,
  CreditCard: <CreditCard className="w-5 h-5 md:w-6 md:h-6" />,
  Glasses: <Glasses className="w-5 h-5 md:w-6 md:h-6" />,
  Users: <Users className="w-5 h-5 md:w-6 md:h-6" />,
  Zap: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
};

export default function ComingSoonFeatures() {
  const { t, isRTL } = useLanguage();

  const handleJoinWaitlist = () => {
    const message = t.common.whatsappContactMessage;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  const list = t.comingSoonFeatures?.list || [];

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
            {isRTL ? 'قريباً' : 'Coming Soon'}
          </div>
          <h2 className="text-2xl md:text-5xl font-black mb-2 md:mb-4 text-foreground">
            {t.comingSoonFeatures.title}
          </h2>
          <p className="text-sm md:text-base text-foreground-muted max-w-xl mx-auto">
            {t.comingSoonFeatures.subtitle}
          </p>
        </div>

        {/* The Grid Wrapper */}
        <div className="relative">
          {/* 🔥🔥 TWEAK: grid-cols-2 from the start (mobile)
             Reduced gap to gap-3 for mobile to save space
          */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pb-20 md:pb-0">
            {list.map((feature: any, index: number) => {
              const Icon = iconMap[feature.icon] || (
                <Zap className="w-5 h-5 md:w-6 md:h-6" />
              );
              // 🔥 LOGIC: Blur everything after index 3 (The 4th item)
              const isLocked = index > 3;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    relative p-4 md:p-6 rounded-xl md:rounded-2xl border border-border-custom bg-card/30 backdrop-blur-md flex flex-col gap-3 group
                    ${
                      isLocked
                        ? 'filter blur-sm grayscale opacity-50 select-none pointer-events-none'
                        : 'hover:border-primary/50 transition-colors'
                    }
                  `}
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center ${
                      isLocked
                        ? 'bg-gray-800'
                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'
                    }`}
                  >
                    {Icon}
                  </div>
                  <div>
                    {/* Smaller text on mobile to fit 2 cols */}
                    <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-foreground truncate">
                      {isLocked ? '••••••' : feature.title}
                    </h3>
                    {/* Line clamping to prevent cards from getting too long unevenly */}
                    <p className="text-[10px] md:text-sm text-foreground-muted leading-snug line-clamp-3 md:line-clamp-none">
                      {isLocked ? '•••• •••• ••• •••' : feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 🔒 THE LOCK OVERLAY */}
          {/* Adjusted top position since grid is shorter now (2 cols instead of 1) */}
          <div className="absolute inset-x-0 bottom-0 top-[40%] md:top-[25%] z-20 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none">
            <div className="bg-[#1a1a1a] border border-primary/30 p-5 md:p-8 rounded-2xl md:rounded-3xl text-center max-w-[90%] md:max-w-md shadow-[0_0_30px_rgba(0,0,0,0.6)] md:shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden pointer-events-auto mt-8 md:mt-0">
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <Lock className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-black mb-2 text-white">
                  {isRTL ? 'باقي الفيتشرز سرية!' : 'Top Secret Features'}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
                  {isRTL
                    ? 'عشان المنافسين مياخدوش الأفكار، خبينا الباقي.'
                    : 'Classified features. Join waitlist to unlock.'}
                </p>
                <button
                  onClick={handleJoinWaitlist}
                  className="bg-primary text-white font-bold py-2.5 px-4 md:py-3 md:px-8 rounded-xl glow-orange text-xs md:text-base hover:scale-105 transition-transform w-full"
                >
                  {isRTL ? 'انضم واكشف السر' : 'Join & Unlock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
