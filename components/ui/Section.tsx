import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'normal' | 'compact' | 'large' | 'none';
  children: React.ReactNode;
}

/**
 * Reusable Section Primitive
 * Standard padding scale: 120px desktop, 80px tablet, 60px mobile
 */
export const Section: React.FC<SectionProps> = ({
  spacing = 'normal',
  className,
  children,
  ...props
}) => {
  const spacingClasses = {
    none: 'py-0',
    compact: 'py-12 sm:py-16 md:py-20',
    normal: 'py-16 sm:py-24 md:py-32', // Matches --_gap---gap-7xll (120px)
    large: 'py-24 sm:py-32 md:py-40',
  };

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
