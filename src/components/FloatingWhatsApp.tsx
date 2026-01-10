'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = 'مرحباً كودا، أرغب في استشارة بخصوص مشروعي.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201212228091?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-[999] w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
    >
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />

      <MessageCircle size={32} className="relative z-10" />
    </motion.button>
  );
}
