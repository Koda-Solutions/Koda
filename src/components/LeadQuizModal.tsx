'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LeadQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = '201212228091';

export default function LeadQuizModal({ isOpen, onClose }: LeadQuizModalProps) {
  const { t, isRTL } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = t.leadQuiz.questions;

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handleFinish = () => {
    const message = t.leadQuiz.whatsappMessage(answers);
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      '_blank'
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-card border border-border-custom rounded-[32px] p-6 shadow-2xl overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-border-custom">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
              className="h-full bg-primary"
            />
          </div>

          <button
            onClick={onClose}
            className={`absolute top-5 ${
              isRTL ? 'left-5' : 'right-5'
            } text-foreground-muted hover:text-foreground transition-colors cursor-pointer`}
          >
            <X size={20} />
          </button>

          <div className="mt-6">
            <div className="text-xs text-primary font-bold mb-1">
              {t.leadQuiz.questionLabel} {step + 1} {t.leadQuiz.ofLabel}{' '}
              {questions.length}
            </div>
            <h3 className="text-xl font-black mb-6 text-foreground">
              {questions[step].title}
            </h3>

            <div className="space-y-3">
              {questions[step].options.map((option: string, index: number) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.01,
                    borderColor: 'rgba(255, 140, 66, 0.4)',
                  }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 rounded-xl border ${
                    isRTL ? 'text-right' : 'text-left'
                  } text-sm font-bold transition-all cursor-pointer ${
                    answers[step] === option
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border-custom bg-card hover:bg-background text-foreground'
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-foreground-muted hover:text-foreground disabled:opacity-0 transition-all text-sm font-bold cursor-pointer"
              >
                {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                {t.leadQuiz.prev}
              </button>

              {step === questions.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleFinish}
                  disabled={!answers[step]}
                  className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-black flex items-center gap-2 glow-orange disabled:opacity-50 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  {t.leadQuiz.finish}
                </motion.button>
              ) : (
                <button
                  disabled={!answers[step]}
                  onClick={() => setStep(step + 1)}
                  className="flex items-center gap-2 text-primary hover:text-secondary disabled:opacity-30 transition-all text-sm font-bold cursor-pointer"
                >
                  {t.leadQuiz.next}
                  {isRTL ? (
                    <ChevronLeft size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
