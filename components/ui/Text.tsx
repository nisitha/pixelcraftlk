import React from 'react';
import { cn } from '@/lib/utils';

export type TextSize = 'xl' | 'l' | 'm' | 's';
export type TextColor = 'primary' | 'muted' | 'subtle' | 'accent';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div';
  size?: TextSize;
  color?: TextColor;
  children: React.ReactNode;
}

/**
 * Reusable Paragraph & Body Text Primitive
 * Matches the inspected typography scale from docs/design-tokens.md
 */
export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'm',
  color = 'muted',
  className,
  children,
  ...props
}) => {
  const sizeClasses: Record<TextSize, string> = {
    xl: 'text-lg md:text-[18px] leading-[1.5] tracking-[-0.2px]',
    l: 'text-base md:text-[18px] leading-[1.4] tracking-normal',
    m: 'text-[15px] md:text-[16px] leading-[1.4] tracking-normal',
    s: 'text-[13px] md:text-[14px] leading-[1.4] tracking-normal',
  };

  const colorClasses: Record<TextColor, string> = {
    primary: 'text-white',
    muted: 'text-[var(--light-gray)]',
    subtle: 'text-[var(--dark-gray)]',
    accent: 'text-[var(--primary-color)]',
  };

  return (
    <Component
      className={cn(sizeClasses[size], colorClasses[color], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
