'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingWhatsApp() {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent(t.common.whatsappGeneric);
    window.open(
      `https://wa.me/${t.common.whatsappNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 end-6 lg:bottom-9 lg:end-9 z-[999] flex flex-col items-end gap-2">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="hidden lg:block glass rounded-lg px-3 py-1.5 text-xs font-bold whitespace-nowrap"
          >
            {language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
        className="w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center relative"
      >
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <MessageCircle size={28} className="relative z-10" fill="currentColor" stroke="none" />
      </motion.button>
    </div>
  );
}
