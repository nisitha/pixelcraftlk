'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CtaRibbonSectionProps {
  className?: string;
}

/**
 * Section 11: Infinite CTA Ribbon (.section.cta)
 * High-velocity infinite ticker marquee banner "Let's Get Started ✦" running above the footer
 */
export const CtaRibbonSection: React.FC<CtaRibbonSectionProps> = ({ className }) => {
  const items = Array.from({ length: 12 }, (_, i) => i);

  return (
    <section
      id="cta-ribbon"
      aria-label="Let's Get Started Call To Action"
      className={cn(
        'section cta relative bg-[#f4f4f6] py-16 sm:py-24 overflow-hidden select-none',
        className
      )}
    >
      <Link href="/contact" className="block relative w-full h-[180px] sm:h-[220px] flex items-center justify-center">
        {/* Ribbon 1: Electric Lime Banner (Tilted +2 deg, background) */}
        <div className="absolute inset-x-[-10%] bg-[var(--primary-color)] text-[#080d0d] py-4 sm:py-5 rotate-[2.5deg] shadow-lg overflow-hidden flex items-center">
          <div className="flex animate-marquee items-center gap-8 sm:gap-12 whitespace-nowrap">
            {items.map((idx) => (
              <div key={`lime-${idx}`} className="inline-flex items-center gap-6 sm:gap-8 shrink-0">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#080d0d]">
                  Let&apos;s Get Started
                </span>
                <span className="text-2xl sm:text-3xl text-[#080d0d] font-bold">
                  ✳
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Dark Charcoal Banner (Tilted -2.5 deg, foreground crossing over) */}
        <div className="absolute inset-x-[-10%] bg-[#080d0d] text-white py-4 sm:py-5 -rotate-[2.5deg] shadow-2xl overflow-hidden flex items-center z-10 border-y border-white/10">
          <div
            className="flex animate-marquee items-center gap-8 sm:gap-12 whitespace-nowrap"
            style={{ animationDirection: 'reverse', animationDuration: '24s' }}
          >
            {items.map((idx) => (
              <div key={`dark-${idx}`} className="inline-flex items-center gap-6 sm:gap-8 shrink-0">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                  Let&apos;s Get Started
                </span>
                <span className="text-2xl sm:text-3xl text-[var(--primary-color)] font-bold">
                  ✳
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[var(--primary-color)]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
};
