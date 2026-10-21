'use client';

import React, { useEffect, useState, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/utils';

export interface AnimatedCounterProps {
  numericTarget: number;
  suffix?: string;
  decimals?: number;
  fallbackValue?: string;
  duration?: number; // in milliseconds, default 1800ms
  shouldStart: boolean;
  className?: string;
}

/**
 * High-performance 60fps numerical counter with easeOutExpo interpolation.
 * Respects prefers-reduced-motion and formats fractional values smoothly.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  numericTarget,
  suffix = '',
  decimals = 0,
  fallbackValue,
  duration = 1800,
  shouldStart,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (typeof window !== 'undefined' && prefersReducedMotion()) {
      return fallbackValue || `${numericTarget}${suffix}`;
    }
    return decimals > 0 ? (0).toFixed(decimals) + suffix : `0${suffix}`;
  });

  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) return;

    if (prefersReducedMotion()) {
      return;
    }

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentNumber = easedProgress * numericTarget;
      const formattedNumber =
        decimals > 0
          ? currentNumber.toFixed(decimals)
          : Math.floor(currentNumber).toLocaleString();

      setDisplayValue(`${formattedNumber}${suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(fallbackValue || `${numericTarget}${suffix}`);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [shouldStart, numericTarget, suffix, decimals, duration, fallbackValue]);

  return <span className={className}>{displayValue}</span>;
};
