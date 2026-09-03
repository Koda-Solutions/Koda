'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'glass' | 'ghost';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-paper font-bold hover:brightness-110',
  glass: 'glass-button text-ink font-bold',
  ghost: 'text-accent-ink font-semibold hover:underline underline-offset-4',
};

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={variant !== 'ghost' ? { scale: 1.03 } : undefined}
      whileTap={variant !== 'ghost' ? { scale: 0.97 } : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] transition-colors',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
