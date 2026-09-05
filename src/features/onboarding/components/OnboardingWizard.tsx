'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Hatch, Sparkle } from '@/components/ui/Doodles';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { ApiError } from '@/lib/api/client';
import {
  createStore,
  sendOtp,
  verifyOtp,
  type Session,
} from '@/features/onboarding/api/onboarding';
import { usePlan } from '@/features/onboarding/plan';
import Stepper, { TOTAL_STEPS } from './Stepper';
import PhoneStep from './PhoneStep';
import OtpStep from './OtpStep';
import StoreInfoStep from './StoreInfoStep';
import ThemeStep from './ThemeStep';
import BrandingStep from './BrandingStep';
import SuccessStep from './SuccessStep';

export default function OnboardingWizard() {
  const { t, language } = useLanguage();
  const headingFont =
    language === 'en' ? 'font-display font-semibold' : 'font-thmanyah-display font-black';
  const o = t.onboarding;

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [storeName, setStoreName] = useState('');
  const [category, setCategory] = useState('');
  const [themeKey, setThemeKey] = useState<string>('nour');
  const [, setSession] = useState<Session | null>(null);
  const [storeSlug, setStoreSlug] = useState('');

  // Which plan the merchant pressed on the pricing table. The server cannot see the
  // URL's query string for a prerendered page, so this reads FREE on the server and
  // the real value on the client, and React reconciles the two. See plan.ts.
  const plan = usePlan();

  const onTrial = plan !== 'FREE';
  const planLabel = o.trial.planNames[plan];

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const stepLabel = o.stepLabel
    .replace('{current}', String(Math.min(step, TOTAL_STEPS)))
    .replace('{total}', String(TOTAL_STEPS));

  /**
   * One place turns a failure into a message.
   *
   * A wrong OTP and an unreachable server are different problems and get different
   * words. Anything unrecognised falls back to the server's own message, which is
   * already written for a merchant rather than for a developer.
   */
  function describe(err: unknown): string {
    if (err instanceof ApiError) {
      if (err.errorCode === 'OTP_INVALID') return o.step2.errorInvalid;
      if (err.errorCode === 'OTP_EXPIRED') return o.step2.errorExpired;
      if (err.errorCode === 'OTP_TOO_MANY_ATTEMPTS') return o.step2.errorLocked;
      if (err.errorCode === 'RATE_LIMITED') return o.step1.errorRateLimited;
      return err.message;
    }
    if (err instanceof Error && err.message === 'OTP_INVALID') {
      return o.step2.errorInvalid;
    }
    return o.common.errorGeneric;
  }

  async function handleSendOtp(value: string) {
    setBusy(true);
    setError(null);
    try {
      await sendOtp(value);
      setPhone(value);
      setStep(2);
    } catch (err) {
      setError(describe(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleVerifyOtp(code: string) {
    setBusy(true);
    setError(null);
    try {
      const result = await verifyOtp(phone, code);
      setSession(result);
      // A merchant who already has a store must not be walked through creating a
      // second one. Phase 2 sends them to the dashboard; for now the wizard ends.
      if (result.hasStore && result.storeSlug) {
        setStoreSlug(result.storeSlug);
        setStep(6);
        return;
      }
      setStep(3);
    } catch (err) {
      setError(describe(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleFinish(accentColor: string, bio: string) {
    setBusy(true);
    setError(null);
    try {
      const store = await createStore({
        name: storeName,
        category,
        // A request for a trial, not a grant of one. koda-store-backend decides.
        plan,
        themeKey,
        accentColor,
        bio,
      });
      setStoreSlug(store.slug);
      setStep(6);
    } catch (err) {
      setError(describe(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    // Two 600px blurred blobs used to sit behind this. They are the single most
    // generated-looking thing in a UI, they cost a full-viewport filter on every
    // paint, and they belonged to the design this project replaced.
    <div className="min-h-screen bg-paper flex items-center justify-center px-5 py-12 relative overflow-hidden">
      <Hatch
        className="hidden sm:block absolute top-16 start-10 w-24 h-24 text-line pointer-events-none"
        aria-hidden
      />
      <Sparkle
        className="hidden sm:block absolute bottom-20 end-14 w-7 h-7 text-[var(--marker-sun)] pointer-events-none"
        aria-hidden
      />

      <div className="relative w-full max-w-[480px]">
        <div className="flex items-center justify-center gap-2.5 mb-7">
          <span className={cn('text-2xl', headingFont)}>{t.nav.logo}</span>
          <Image src="/logo-mark.png" alt="" width={28} height={28} className="rounded-lg" />
        </div>

        <Stepper current={step} label={stepLabel} />

        <div className="bg-paper-raised sketch-frame sketch-shadow p-7 sm:p-8 overflow-hidden">
          {error && (
            <div
              role="alert"
              className="mb-5 sketch-frame-2 bg-paper-sunk px-4 py-3 text-sm"
              style={{ borderColor: 'var(--marker-coral)', color: 'var(--marker-coral)' }}
            >
              {error}
            </div>
          )}

          {/* The trial, said once and plainly, on every step before the store exists.
              Someone who clicked "Try 14 days free" must never have to wonder whether
              it actually started, and must never be surprised by a charge. */}
          {onTrial && step < 6 && (
            <div className="mb-6 flex flex-col gap-1.5">
              <span
                className="self-start sketch-3 px-3 py-1 text-xs font-bold"
                style={{ borderColor: 'var(--marker-coral)', color: 'var(--marker-coral)' }}
              >
                {o.trial.badge.replace('{plan}', planLabel)}
              </span>
              <p className="text-xs text-ink-muted leading-relaxed">{o.trial.note}</p>
            </div>
          )}


          {/*
            Deliberately not AnimatePresence. With framer-motion 12 on React 19, the
            exit-complete callback of `mode="wait"` can be dropped under concurrent
            rendering, and the outgoing step then never unmounts, so the incoming one
            never mounts: the wizard freezes on a step it has already left. The enter
            animation is the part anyone notices, and a keyed motion.div gives that
            with no way to strand the user mid-flow.
          */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
              {step === 1 && (
                <PhoneStep
                  t={o.step1}
                  headingFont={headingFont}
                  busy={busy}
                  onSubmit={handleSendOtp}
                />
              )}
              {step === 2 && (
                <OtpStep
                  t={o.step2}
                  headingFont={headingFont}
                  phone={phone}
                  busy={busy}
                  onVerify={handleVerifyOtp}
                  onResend={() => handleSendOtp(phone)}
                  onBack={() => {
                    setError(null);
                    setStep(1);
                  }}
                />
              )}
              {step === 3 && (
                <StoreInfoStep
                  t={o.step3}
                  headingFont={headingFont}
                  initialName={storeName}
                  onSubmit={(name, cat) => {
                    setStoreName(name);
                    setCategory(cat);
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
                  preview={t.themes.preview}
                  onTrial={onTrial}
                  onSubmit={(key) => {
                    setThemeKey(key);
                    setStep(5);
                  }}
                  onBack={() => setStep(3)}
                />
              )}
              {step === 5 && (
                <BrandingStep
                  t={o.step5}
                  headingFont={headingFont}
                  busy={busy}
                  onSubmit={handleFinish}
                  onBack={() => setStep(4)}
                />
              )}
              {step === 6 && (
                <SuccessStep t={o.step6} headingFont={headingFont} storeSlug={storeSlug} />
              )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
