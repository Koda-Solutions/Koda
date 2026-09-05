'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

/**
 * A button drawn with a pen.
 *
 * Three deliberate departures from the previous version:
 *
 * The border is a wobbly border-radius rather than an even one, and the shadow
 * is a hard offset instead of a blur, so it reads as a shape someone drew and
 * then outlined. Blurred shadows on evenly rounded rectangles are most of what
 * made the old page look generated.
 *
 * Press moves the element into its own shadow rather than scaling it. Scaling is
 * what software does; paper does not get smaller when you push it.
 *
 * Framer Motion is gone from here. It was pulling the animation runtime into
 * every button on the page to do a hover scale that CSS does in one line, and
 * this component renders a dozen times on the landing page alone. The whole
 * effect is now transform and box-shadow, composited on the GPU, with no
 * JavaScript on the interaction path at all.
 */
const variantClasses: Record<ButtonVariant, string> = {
  // Filled ink on paper. The most confident thing on the page.
  primary: 'sketch sketch-shadow sketch-press bg-accent text-on-accent font-bold',
  // Drawn outline, unfilled. For the second choice, which should still look drawn.
  outline: 'sketch sketch-shadow-sm sketch-press bg-paper-raised text-ink font-bold',
  // No box at all, for tertiary actions.
  ghost: 'text-ink font-semibold underline decoration-2 underline-offset-4 decoration-[var(--marker-coral)] hover:decoration-[3px]',
};

export function Button({
  variant = 'primary',
  className,
  children,
  href,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px]',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
