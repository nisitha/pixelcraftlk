import React from 'react';
import { cn } from '@/lib/utils';

export type CardVariant = 'default' | 'elevated' | 'highlight';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverEffect?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable Surface Card Primitive
 * Implements level-1 and level-2 dark elevation containers with subtle borders
 */
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = true,
  className,
  children,
  ...props
}) => {
  const variantClasses: Record<CardVariant, string> = {
    default:
      'bg-[var(--dark-field)] border border-white/[0.08]',
    elevated:
      'bg-[var(--surface-elevated)] border border-white/[0.1] shadow-card',
    highlight:
      'bg-[var(--surface-elevated)] border border-[var(--primary-color)]/60 shadow-elevated',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8 transition-all duration-300',
        variantClasses[variant],
        hoverEffect &&
          'hover:border-white/20 hover:-translate-y-1 hover:shadow-card',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
