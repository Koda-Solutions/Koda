'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[16rem] lg:text-[24rem] font-display font-semibold text-ink/[0.04] select-none">
          404
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="font-thmanyah text-3xl lg:text-5xl font-black mb-5">
          الصفحة دي مش موجودة
        </h1>
        <p className="text-ink-muted text-base lg:text-lg mb-10 max-w-md mx-auto">
          جرب ترجع للصفحة الرئيسية وابدأ من هناك.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-accent text-paper px-7 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 mx-auto"
          >
            <Home size={20} />
            ارجع للرئيسية
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
