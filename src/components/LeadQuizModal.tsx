'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';

interface LeadQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    title: 'بتبيع فين حالياً؟',
    options: ['فيسبوك/انستجرام', 'محل تجاري', 'عندي موقع وعايز أطوره'],
  },
  {
    id: 2,
    title: 'متوسط عدد الطلبات اليومي؟',
    options: ['لسه ببدأ', 'من 10 لـ 50', 'أكثر من 50'],
  },
  {
    id: 3,
    title: 'إيه أكبر تحدي بيقابلك؟',
    options: ['الرد على الرسايل', 'إدارة المخزون', 'شركات الشحن'],
  },
];

const WHATSAPP_NUMBER = '201212228091';

export default function LeadQuizModal({ isOpen, onClose }: LeadQuizModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handleFinish = () => {
    const message = `مرحباً كودا، أنا جاوبت على الأسئلة: ببيع في ${answers[0]}، حجمي ${answers[1]}، ومشكلتي ${answers[2]}. محتاج الحل المناسب.`;
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
          className="relative w-full max-w-lg bg-card border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
              className="h-full bg-primary"
            />
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 left-6 text-text/40 hover:text-text transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mt-8">
            <div className="text-sm text-primary font-bold mb-2">
              سؤال {step + 1} من {questions.length}
            </div>
            <h3 className="text-2xl font-black mb-8">
              {questions[step].title}
            </h3>

            <div className="space-y-4">
              {questions[step].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(255, 140, 66, 0.5)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-5 rounded-2xl border text-right font-bold transition-all ${
                    answers[step] === option
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-white/5 bg-background/50 hover:bg-background'
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center justify-between mt-12">
              <button
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-text/40 hover:text-text disabled:opacity-0 transition-all font-bold"
              >
                <ChevronRight size={20} />
                السابق
              </button>

              {step === questions.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFinish}
                  disabled={!answers[step]}
                  className="bg-primary text-background px-8 py-4 rounded-xl font-black flex items-center gap-2 glow-orange disabled:opacity-50"
                >
                  <MessageCircle size={20} />
                  شوف الحل المناسب ليك واتساب
                </motion.button>
              ) : (
                <button
                  disabled={!answers[step]}
                  onClick={() => setStep(step + 1)}
                  className="flex items-center gap-2 text-primary hover:text-secondary disabled:opacity-30 transition-all font-bold"
                >
                  التالي
                  <ChevronLeft size={20} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
