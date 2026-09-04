'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import Stepper, { TOTAL_STEPS } from './Stepper';
import PhoneStep from './PhoneStep';
import OtpStep from './OtpStep';
import StoreInfoStep from './StoreInfoStep';
import ThemeStep from './ThemeStep';
import BrandingStep from './BrandingStep';
import SuccessStep from './SuccessStep';

function slugify(name: string) {
  const latinOnly = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return latinOnly || 'my-store';
}

export default function OnboardingWizard() {
  const { t, language } = useLanguage();
  const headingFont =
    language === 'en' ? 'font-fraunces font-semibold' : 'font-thmanyah-display font-black';
  const o = t.onboarding;

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [storeName, setStoreName] = useState('');

  const stepLabel = o.stepLabel
    .replace('{current}', String(Math.min(step, TOTAL_STEPS)))
    .replace('{total}', String(TOTAL_STEPS));

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center px-5 py-12 relative overflow-hidden">
      <div className="absolute w-[620px] h-[620px] rounded-full bg-accent-soft blur-3xl opacity-60 -top-56 -start-40 pointer-events-none" />
      <div className="absolute w-[520px] h-[520px] rounded-full bg-accent-soft blur-3xl opacity-60 -bottom-56 -end-40 pointer-events-none" />

      <div className="relative w-full max-w-[480px]">
        <div className="flex items-center justify-center gap-2.5 mb-7">
          <span className={cn('text-lg', headingFont)}>{t.nav.logo}</span>
          <Image
            src="/logo-mark.png"
            alt=""
            width={28}
            height={28}
            className="rounded-lg"
          />
        </div>

        <Stepper current={step} label={stepLabel} />

        <div className="bg-paper-raised border border-line rounded-[20px] p-8 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {step === 1 && (
                <PhoneStep
                  t={o.step1}
                  headingFont={headingFont}
                  onSubmit={(value) => {
                    setPhone(value);
                    setStep(2);
                  }}
                />
              )}
              {step === 2 && (
                <OtpStep
                  t={o.step2}
                  headingFont={headingFont}
                  phone={'0' + phone}
                  onVerify={() => setStep(3)}
                  onBack={() => setStep(1)}
                />
              )}
              {step === 3 && (
                <StoreInfoStep
                  t={o.step3}
                  headingFont={headingFont}
                  initialName={storeName}
                  onSubmit={(name) => {
                    setStoreName(name);
                    setStep(4);
                  }}
                  onBack={() => setStep(2)}
                />
              )}
              {step === 4 && (
                <ThemeStep
                  t={o.step4}
                  themes={t.themes.items}
                  headingFont={headingFont}
                  onSubmit={() => setStep(5)}
                  onBack={() => setStep(3)}
                />
              )}
              {step === 5 && (
                <BrandingStep
                  t={o.step5}
                  headingFont={headingFont}
                  onSubmit={() => setStep(6)}
                  onBack={() => setStep(4)}
                />
              )}
              {step === 6 && (
                <SuccessStep
                  t={o.step6}
                  headingFont={headingFont}
                  storeSlug={slugify(storeName)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
