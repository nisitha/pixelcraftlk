import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'default' | 'sm';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  showIcon?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable Action Button (.primary-button)
 * Features the signature dual-layer vertical text roll hover animation and diagonal arrow translation
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  href,
  showIcon = true,
  className,
  children,
  ...props
}) => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-[var(--primary-color)] text-[var(--dark-color)] hover:brightness-105 active:scale-[0.98]',
    secondary:
      'bg-[var(--dark-field)] text-white border border-white/10 hover:border-[var(--primary-color)]/40 hover:bg-[var(--surface-elevated)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-white hover:bg-white/5 active:scale-[0.98]',
  };

  const sizeClasses: Record<ButtonSize, { wrapper: string; text: string; icon: string }> = {
    default: {
      wrapper: 'h-[52px] px-7 text-base font-semibold',
      text: 'text-base font-semibold',
      icon: 'w-4 h-4',
    },
    sm: {
      wrapper: 'h-[42px] px-5 text-sm font-medium',
      text: 'text-sm font-medium',
      icon: 'w-3.5 h-3.5',
    },
  };

  const iconElement = showIcon ? (
    <ArrowUpRight
      className={cn(
        'primary-icon shrink-0 transition-transform duration-300',
        sizeClasses[size].icon,
        variant === 'primary' ? 'text-[var(--dark-color)]' : 'text-white'
      )}
    />
  ) : null;

  const content = (
    <div
      className={cn(
        'primary-btn-wrap relative overflow-hidden inline-flex items-center justify-center rounded-full transition-all duration-300 select-none',
        variantClasses[variant],
        sizeClasses[size].wrapper,
        className
      )}
    >
      {/* Layer 1: Normal View (Slides up to -100% on hover) */}
      <div className="primary-btn-text-wrap _01 flex items-center gap-2">
        <span>{children}</span>
        {iconElement}
      </div>

      {/* Layer 2: Rolled View (Slides up from +100% to 0% on hover) */}
      <div className="primary-btn-text-wrap _02 absolute inset-0 flex items-center justify-center gap-2">
        <span>{children}</span>
        {iconElement}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group inline-flex">
        {content}
      </Link>
    );
  }

  return (
    <button
      className="group inline-flex bg-transparent border-none p-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {content}
    </button>
  );
};
