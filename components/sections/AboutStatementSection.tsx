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
const manifestoWords = [
  { text: 'At' },
  { text: 'PixelCraft,' },
  { text: 'we' },
  { text: 'believe' },
  { text: 'digital' },
  { text: 'engineering' },
  { text: "isn't" },
  { text: 'about' },
  { text: "selling—it's" },
  { text: 'about' },
  { text: 'connecting.', isScript: true },
  { text: "We're" },
  { text: 'a' },
  { text: 'digital' },
  { text: 'engineering' },
  { text: '&' },
  { text: 'design' },
  { text: 'studio' },
  { text: 'built' },
  { text: 'to' },
  { text: 'help' },
  { text: 'ambitious' },
  { text: 'brands' },
  { text: 'scale' },
  { text: 'with' },
  { text: 'purpose' },
  { text: 'and' },
  { text: 'technical' },
  { text: 'precision.' },
  { text: 'From' },
  { text: 'crafting' },
  { text: 'bulletproof' },
  { text: 'web' },
  { text: 'platforms' },
  { text: 'to' },
  { text: 'architecting' },
  { text: 'automated' },
  { text: 'lifecycle' },
  { text: 'systems,' },
  { text: 'we' },
  { text: 'blend' },
  { text: 'strategy' },
  { text: 'and' },
  { text: 'code' },
  { text: 'to' },
  { text: 'turn' },
  { text: 'attention' },
  { text: 'into' },
  { text: 'compounding' },
  { text: 'growth.' },
];

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
      // Word-by-word scroll scrubbing color fill effect (Owner Item 1)
      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.manifesto-word');
        gsap.fromTo(
          words,
          {
            opacity: 0.25,
            color: '#b5b5be',
          },
          {
            opacity: 1,
            color: (index, target) => {
              return target.getAttribute('data-script') === 'true'
                ? '#7970ff'
                : '#080d0d';
            },
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 75%',
              end: 'bottom 45%',
              scrub: 0.8,
            },
          }
        );
      }

      // Bottom media cards entrance
      if (cardsRowRef.current) {
        gsap.fromTo(
          cardsRowRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: cardsRowRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
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
        'section about-v1 relative bg-[#f4f4f6] text-[#080d0d] py-16 sm:py-24 lg:py-36 overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Split: Label on left, Two-Tone Editorial Manifesto on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-[#6f7781] block">
              About PixelCraft
            </span>
          </div>

          <div className="lg:col-span-9">
            <h2
              ref={textRef}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-semibold tracking-tight leading-[1.2] sm:leading-[1.16] flex flex-wrap text-[#080d0d]"
            >
              {manifestoWords.map((item, idx) => {
                if (item.isScript) {
                  return (
                    <span
                      key={idx}
                      data-script="true"
                      className="manifesto-word inline-block font-script font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[72px] italic leading-none align-baseline px-1 sm:px-1.5 mr-1.5 sm:mr-2 transition-colors will-change-[color,opacity]"
                    >
                      {item.text}
                    </span>
                  );
                }

                return (
                  <span
                    key={idx}
                    className="manifesto-word inline-block mr-1.5 sm:mr-2.5 transition-colors will-change-[color,opacity]"
                  >
                    {item.text}
                  </span>
                );
              })}
            </h2>
          </div>
        </div>

        {/* Bottom Split: Two Team Media Cards + CTA on right */}
        <div ref={cardsRowRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-8 border-t border-black/10">
          <div className="md:col-span-5 rounded-3xl overflow-hidden border border-black/5 bg-white aspect-[4/3] relative group shadow-lg">
            <Image
              src="/hero/team-collab.jpg"
              alt="PixelCraft Strategic Collaboration"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-black/5 bg-white aspect-[4/3] relative group shadow-lg">
            <Image
              src="/hero/team-collab.jpg"
              alt="PixelCraft Engineering Architecture"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-500 scale-x-[-1]"
            />
          </div>

          <div className="md:col-span-3 flex flex-col items-start gap-4 p-2 sm:p-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#080d0d] tracking-tight leading-snug">
              Our Bold and <br /> Brilliant Thinkers
            </h3>
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
