'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
        <div className="text-2xl lg:text-3xl font-black tracking-tighter text-primary">
          كودا
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const message = 'السلام عليكم، عندي استفسار بخصوص خدمات كودا.';
            const encodedMessage = encodeURIComponent(message);
            window.open(
              `https://wa.me/201212228091?text=${encodedMessage}`,
              '_blank'
            );
          }}
          className="bg-primary text-background text-sm lg:text-base font-bold px-5 py-2 rounded-full glow-orange transition-all hover:bg-secondary cursor-pointer"
        >
          تواصل معنا
        </motion.button>
      </div>
    </nav>
  );
}
