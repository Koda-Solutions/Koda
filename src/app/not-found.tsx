'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background 404 Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20rem] lg:text-[30rem] font-black text-white/[0.02] select-none">
          404
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="text-4xl lg:text-6xl font-black mb-6">طريقك تاه؟</h1>
        <p className="text-text/60 text-lg lg:text-xl mb-10 max-w-md mx-auto leading-relaxed">
          الصفحة دي مش موجودة، بس الإمبراطورية لسه مكانها.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-background px-8 py-4 rounded-xl text-lg font-black flex items-center gap-3 mx-auto glow-orange cursor-pointer"
          >
            <Home size={24} />
            رجعني للإمبراطورية
          </motion.button>
        </Link>
      </motion.div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
