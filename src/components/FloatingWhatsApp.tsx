'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // رقم التليفون يفضل يكون من غير 00 أو + في اللينك المباشر، بس الكود الدولي 20 مظبوط
    const phoneNumber = '201212228091';
    const message =
      t.common?.whatsappContactMessage || 'Hello, I have an inquiry'; // Fallback text
    const encodedMessage = encodeURIComponent(message);

    // فتح الواتساب في تاب جديد
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[999] flex flex-col items-end gap-2">
      {/* Tooltip text (Visible on Hover only) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-foreground text-background text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg mb-1 whitespace-nowrap hidden lg:block"
          >
            تواصل معنا عبر واتساب
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
        className="w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center cursor-pointer relative group border-2 border-white/20"
      >
        {/* Pulse Effect Layers */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000 delay-100"></span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000"></span>

        {/* Icon */}
        <MessageCircle
          size={32}
          className="relative z-10 lg:w-9 lg:h-9"
          fill="currentColor"
          stroke="none"
        />
      </motion.button>
    </div>
  );
}
