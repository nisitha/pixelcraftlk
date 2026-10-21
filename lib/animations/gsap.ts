import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isBrowser, prefersReducedMotion } from '@/lib/utils';

let registered = false;

/**
 * Safely registers GSAP plugins on the client-side.
 */
export function registerGsap(): typeof gsap | null {
  if (!isBrowser) return null;

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }

  return gsap;
}

/**
 * Creates a standard staggered fade-in reveal with ScrollTrigger.
 */
export function createStaggerReveal(
  elements: string | Element | Element[] | NodeListOf<Element>,
  options: {
    trigger?: string | Element;
    start?: string;
    yOffset?: number;
    stagger?: number;
    duration?: number;
  } = {}
) {
  if (!isBrowser || prefersReducedMotion()) return;

  const instance = registerGsap();
  if (!instance) return;

  const {
    trigger,
    start = 'top 85%',
    yOffset = 30,
    stagger = 0.08,
    duration = 0.8,
  } = options;

  instance.fromTo(
    elements,
    {
      y: yOffset,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions: 'play none none none',
          }
        : undefined,
    }
  );
}

export { gsap, ScrollTrigger };
