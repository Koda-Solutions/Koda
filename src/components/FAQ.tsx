'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-border-custom last:border-0">
      <button
        onClick={onClick}
        className="w-full py-4 lg:py-6 flex items-center justify-between gap-4 hover:text-primary transition-colors cursor-pointer group text-start"
      >
        <span className="text-base lg:text-lg font-bold group-hover:text-primary transition-colors text-foreground flex-1">
          {question}
        </span>

        <div
          className={`shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-border-custom flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'rotate-180 bg-primary border-primary text-white'
              : 'group-hover:border-primary/50 group-hover:bg-card'
          }`}
        >
          {isOpen ? (
            <Minus size={16} className="lg:w-5 lg:h-5" />
          ) : (
            <Plus size={16} className="lg:w-5 lg:h-5" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm lg:text-base text-foreground-muted leading-relaxed ps-0 pe-0 lg:pe-14 opacity-90">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-60 h-60 lg:w-72 lg:h-72 bg-primary/5 rounded-full blur-[80px] lg:blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-60 h-60 lg:w-72 lg:h-72 bg-blue-500/5 rounded-full blur-[80px] lg:blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4 text-foreground">
            {t.faq.title}{' '}
            <span className="text-primary">{t.faq.titleAccent}</span> ؟
          </h2>
          <p className="text-sm md:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border-custom rounded-2xl lg:rounded-3xl p-5 lg:p-8 shadow-sm">
          {/* هنا كان التصحيح */}
          {t.faq.items.map(
            (faq: { question: string; answer: string }, index: number) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
