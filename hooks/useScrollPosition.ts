'use client';

import { useSyncExternalStore } from 'react';

/**
 * Tracks scroll position and threshold using useSyncExternalStore
 */
export function useScrollPosition(threshold: number = 40): {
  scrollY: number;
  isScrolled: boolean;
} {
  const subscribe = (callback: () => void) => {
    window.addEventListener('scroll', callback, { passive: true });
    return () => window.removeEventListener('scroll', callback);
  };

  const getSnapshot = () => {
    return window.scrollY;
  };

  const getServerSnapshot = () => {
    return 0;
  };

  const scrollY = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    scrollY,
    isScrolled: scrollY > threshold,
  };
}
