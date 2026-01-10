'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'إيه الفرق بين "باقة الصاروخ" و"باقة الإمبراطور"؟',
    answer:
      'باقة الصاروخ (منصات جاهزة) مناسبة لو عايز تبدأ بسرعة وبأقل تكلفة في الأول، بس بتدفع اشتراكات شهرية وعمولات للمنصة. أما باقة الإمبراطور (برمجة خاصة) بتدفع مرة واحدة وبتمتلك الكود والبيانات 100% بدون أي عمولات شريك.',
  },
  {
    question: 'هل الاستشارة بفلوس؟',
    answer:
      'لأ، جلسة الاستشارة "مجانية تماماً". بنقعد معاك، نفهم ميزانيتك وحجم شغلك، وبناءً عليه بنرشحلك الحل اللي يوفرلك فلوس ويحققلك أعلى عائد، سواء كان شوبيفاي، ووردبريس، أو برمجة خاصة.',
  },
  {
    question: 'بتاخدوا عمولة كام على المبيعات؟',
    answer:
      'في البرمجة الخاصة (باقة الإمبراطور) عمولتنا 0%، كل جنيه بتكسبه بيدخل جيبك. في المنصات الجاهزة (زي شوبيفاي)، المنصة نفسها هي اللي بتاخد العمولة، وإحنا دورنا نختارلك البوابة الأقل في التكلفة عشان نوفر عليك.',
  },
  {
    question: 'هعرف أربط الموقع بشركات الشحن والدفع؟',
    answer:
      'طبعاً! إحنا بنسلمك السيستم مربوط جاهز بشركات زي (Bosta, Mylerz, Aramex) وبوابات دفع زي (Fawry, Paymob, Instapay). ومش بس كده، بنعرفك أنسب تعاقد يوفر عليك مصاريف.',
  },
  {
    question: 'لو الموقع وقف أو احتاجت تعديل، هتعملوا إيه؟',
    answer:
      'إحنا مش بنسلمك ونمشي. عندنا عقود دعم فني بتضمنلك إن موقعك شغال 24/7، ولو احتجت تطوير أو ميزة جديدة، التيم الهندسي بتاعنا جاهز ينفذها فوراً.',
  },
  {
    question: 'أنا لسه ببدأ وميزانيتي محدودة، هل "كودا" مناسبة ليا؟',
    answer:
      'جداً! ده دورنا الأساسي. مش لازم تبدأ بحاجة غالية. ممكن نبدأ معاك بمتجر بسيط وتكلفة قليلة، ولما تجارتك تكبر، نكبر الموقع معاك. كلمنا وهنظبطلك خطة على قد جيبك.',
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
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 lg:py-6 flex items-center justify-between text-right gap-4 hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-base lg:text-lg font-bold group-hover:text-primary transition-colors">
          {question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'rotate-180 bg-primary border-primary text-black'
              : 'group-hover:border-primary/50 group-hover:bg-white/5'
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
            <p className="pb-6 text-sm lg:text-base text-gray-400 leading-relaxed pl-12">
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
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            أسئلة <span className="text-primary">بتدور في بالك</span> ؟
          </h2>
          <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto">
            عارفين إن عندك استفسارات كتير قبل ما تبدأ، جمعنالك أهمها هنا عشان
            تاخد القرار وأنت مطمن.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-4 lg:p-8">
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
