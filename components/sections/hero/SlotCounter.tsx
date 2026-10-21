'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface SlotCounterProps {
  value: string; // e.g. "250+" or "20+"
  className?: string;
  itemHeight?: number; // default 44px
  delay?: number; // ms delay before rolling
}

/**
 * Rolling Slot Machine Counter
 * Recreates the reference .future-v3-single-number rolling digit animation
 */
export const SlotCounter: React.FC<SlotCounterProps> = ({
  value,
  className,
  itemHeight = 44,
  delay = 300,
}) => {
  const [hasStarted, setHasStarted] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const chars = value.split('');

  return (
    <div
      className={cn('inline-flex items-center select-none font-bold overflow-hidden', className)}
      style={{ height: `${itemHeight}px` }}
    >
      {chars.map((char, index) => {
        const isDigit = !isNaN(parseInt(char, 10));

        if (!isDigit) {
          return (
            <span
              key={index}
              className="inline-flex items-center justify-center font-bold px-0.5 leading-none"
              style={{ height: `${itemHeight}px`, lineHeight: `${itemHeight}px` }}
            >
              {char}
            </span>
          );
        }

        const digit = parseInt(char, 10);
        // Stagger digit roll duration slightly for organic slot-machine effect
        const transitionDuration = 1.2 + index * 0.15;

        return (
          <div
            key={index}
            className="relative overflow-hidden inline-block"
            style={{ height: `${itemHeight}px`, width: '0.62em' }}
          >
            <div
              className="transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center"
              style={{
                transform: hasStarted ? `translateY(-${digit * 10}%)` : 'translateY(0%)',
                transitionDuration: `${transitionDuration}s`,
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <span
                  key={num}
                  className="flex items-center justify-center font-bold text-center leading-none"
                  style={{ height: `${itemHeight}px`, lineHeight: `${itemHeight}px` }}
                >
                  {num}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
