'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'هل السيستم صعب في الاستخدام؟',
    answer:
      'أسهل من الفيسبوك. لو بتعرف تبعت رسايل على الواتساب، هتعرف تدير متجرك باحترافية من غير ما تحتاج مبرمج.',
  },
  {
    question: 'إيه اللي يخليني أسيب Shopify وأجيلكم؟',
    answer:
      'إحنا بنوفرلك سيستم متفصل على السوق المصري، ربط شحن محلي، دفع عند الاستلام، والأهم من ده كله 0% عمولة.. شوبيفاي بياخد منك نسبة على كل بيعة غير الاشتراك الشهري.',
  },
  {
    question: 'الموقع بيشتغل على الموبايل؟',
    answer:
      'طبعاً، متجرك هيكون "Responsive" يعني بيفتح كأنه تطبيق على موبايل العميل، سريع وخفيف وبيشجع الزبون يشتري بضغطة زرار.',
  },
  {
    question: 'لو واجهت مشكلة، أكلم مين؟',
    answer:
      'عندنا دعم فني مصري 24/7 معاك على الواتساب والتليفون، مش هنسيبك غير والمشكلة محلولة لأننا شركاء في نجاحك.',
  },
];

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
    <div className="border-b border-white/5">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-right gap-4 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-base lg:text-lg font-bold">{question}</span>
        <div
          className={`shrink-0 w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 bg-primary/10 border-primary/20 text-primary'
              : ''
          }`}
        >
          {isOpen ? (
            <Minus size={14} className="lg:w-[18px] lg:h-[18px]" />
          ) : (
            <Plus size={14} className="lg:w-[18px] lg:h-[18px]" />
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
            <p className="pb-6 text-sm lg:text-base text-text/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 lg:py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-xl md:text-3xl font-black mb-4">
            أسئلة بتدور في بالك
          </h2>
          <p className="text-sm lg:text-base text-text/60">
            كل اللي محتاج تعرفه عشان تبدأ إمبراطوريتك صح.
          </p>
        </div>

        <div className="bg-card/30 border border-white/5 rounded-[24px] lg:rounded-[32px] p-5 lg:p-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
