import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'standard' | 'wide' | 'narrow';
  children: React.ReactNode;
}

/**
 * Reusable Container Primitive
 * Standard: 1200px max width
 * Wide: 1390px max width (matching Scalient desktop container)
 * Narrow: 960px max width (editorial/text layouts)
 */
export const Container: React.FC<ContainerProps> = ({
  size = 'wide',
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    standard: 'max-w-[1200px]',
    wide: 'max-w-[1390px]',
    narrow: 'max-w-[960px]',
  };

  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
