'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/Button';
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
  const cardsRowRef = useRef<HTMLDivElement>(null);

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

      if (cardsRowRef.current) {
        tl.from(
          cardsRowRef.current.children,
          {
            y: 35,
            opacity: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
          },
          '-=0.45'
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

      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Split: Label on left, Two-Tone Editorial Manifesto on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-3">
            <span className="text-sm sm:text-base font-medium text-[#899698] tracking-tight block">
              About PixelCraft
            </span>
          </div>

          <div className="lg:col-span-9">
            <h2
              ref={textRef}
              className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-semibold tracking-[-0.035em] leading-[1.18] text-white"
            >
              <span>
                At PixelCraft, we believe digital engineering isn&apos;t about selling—it&apos;s about{' '}
                <span className="font-script font-normal text-[var(--primary-color)] text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] italic leading-none align-baseline px-1">
                  connecting.
                </span>{' '}
                We&apos;re a digital engineering &amp; design studio built to help ambitious brands scale with purpose and technical precision.{' '}
              </span>
              <span className="text-[#899698] font-normal">
                From crafting bulletproof web platforms to architecting automated lifecycle systems, we blend strategy and code to turn attention into compounding growth.
              </span>
            </h2>
          </div>
        </div>

        {/* Bottom Split: Two Team Media Cards + CTA on right */}
        <div ref={cardsRowRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-8 border-t border-white/5">
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] relative group shadow-2xl">
            <Image
              src="/hero/team-collab.jpg"
              alt="PixelCraft Strategic Collaboration"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="md:col-span-4 rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] relative group shadow-2xl">
            <Image
              src="/hero/team-collab.jpg"
              alt="PixelCraft Engineering Architecture"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 scale-x-[-1]"
            />
          </div>

          <div className="md:col-span-3 flex flex-col items-start gap-4 p-2 sm:p-4">
            <span className="text-sm font-semibold text-white tracking-tight">
              Our Bold &amp; Visionary Builders
            </span>
            <div>
              <Button variant="primary" size="default" href="/about">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
