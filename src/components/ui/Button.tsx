'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'glass' | 'ghost';

const MotionLink = motion.create(Link);

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  href?: string;
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
  href,
  onClick,
  ...props
}: ButtonProps) {
  const sharedClassName = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:brightness-100',
    variantClasses[variant],
    className
  );
  const motionProps = {
    whileHover: variant !== 'ghost' ? { scale: 1.03 } : undefined,
    whileTap: variant !== 'ghost' ? { scale: 0.97 } : undefined,
  };

  if (href) {
    return (
      <MotionLink
        href={href}
        className={sharedClassName}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        {...motionProps}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={sharedClassName}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
