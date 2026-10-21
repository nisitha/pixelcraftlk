import React from 'react';
import { cn } from '@/lib/utils';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingLevel;
  accentFont?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable Typography Heading Primitive
 * Exactly implements the heading scale, line-heights, and negative letter-spacing from docs/design-tokens.md
 */
export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size,
  accentFont = false,
  className,
  children,
  ...props
}) => {
  const effectiveSize = size || Component;

  const sizeClasses: Record<HeadingLevel, string> = {
    h1: 'text-4xl sm:text-6xl md:text-7xl lg:text-[100px] leading-[1.1] tracking-[-1.5px] lg:tracking-[-4px] font-semibold text-white',
    h2: 'text-3xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.1] tracking-[-1px] lg:tracking-[-3.8px] font-semibold text-white',
    h3: 'text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.2] tracking-[-0.5px] lg:tracking-[-0.8px] font-medium text-white',
    h4: 'text-xl sm:text-2xl md:text-[28px] lg:text-[34px] leading-[1.3] tracking-[-0.34px] font-medium text-white',
    h5: 'text-lg sm:text-xl md:text-[24px] lg:text-[30px] leading-[1.3] tracking-[-0.6px] font-medium text-white',
    h6: 'text-base sm:text-lg md:text-[20px] lg:text-[24px] leading-[1.4] tracking-normal font-medium text-white',
  };

  return (
    <Component
      className={cn(
        sizeClasses[effectiveSize],
        accentFont && 'font-script font-normal tracking-normal text-[var(--primary-color)]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
