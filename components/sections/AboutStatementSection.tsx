'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/Button';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AboutStatementSectionProps {
  className?: string;
}

/**
 * Section 3: Editorial About Statement (.section.about-v1)
 * High-contrast oversized editorial typography statement + "Learn More" CTA
 */
export const AboutStatementSection: React.FC<AboutStatementSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const detailRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      if (textRef.current) {
        tl.from(textRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      }

      if (detailRef.current) {
        tl.from(
          detailRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.5'
        );
      }

      if (buttonRef.current) {
        tl.from(
          buttonRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-statement"
      aria-label="About Statement"
      className={cn(
        'section about-v1 relative bg-[var(--dark-color)] text-white py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-white/5',
        className
      )}
    >
      {/* Ambient background soft glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(188, 234, 62, 0.12) 0%, rgba(121, 112, 255, 0.04) 50%, transparent 70%)',
        }}
      />

      {/* Decorative vertical guide lines */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10 flex justify-between max-w-[1290px] mx-auto px-5 sm:px-8">
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20 hidden md:block" />
        <div className="w-[1px] h-full bg-white/20" />
      </div>

      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-8 sm:mb-10 text-xs sm:text-sm font-medium text-white/80 select-none">
          <Sparkles className="w-3.5 h-3.5 text-[var(--primary-color)]" />
          <span>Agency Manifesto</span>
        </div>

        {/* High-contrast oversized editorial typography statement */}
        <h2
          ref={textRef}
          className="text-[32px] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[76px] font-semibold tracking-[-0.035em] leading-[1.12] text-white max-w-[1100px]"
        >
          At PixelCraft, we believe digital engineering isn&apos;t about selling—it&apos;s about{' '}
          <span className="font-script font-normal text-[var(--primary-color)] text-[44px] sm:text-[62px] md:text-[76px] lg:text-[88px] xl:text-[98px] italic leading-none align-baseline px-1">
            connecting
          </span>{' '}
          purpose with high-velocity execution and enduring design.
        </h2>

        {/* Paragraph detail */}
        <p
          ref={detailRef}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-[19px] text-[#899698] font-normal leading-relaxed max-w-[680px]"
        >
          We reject superficial templates. Every digital system we architect is engineered from the ground up for measurable compounding growth, extreme performance, and enduring brand prestige.
        </p>

        {/* Action button */}
        <div ref={buttonRef} className="mt-8 sm:mt-10">
          <Button variant="secondary" size="default" href="/about">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
