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
        'section cta relative bg-[#f4f4f6] py-10 sm:py-16 md:py-24 overflow-hidden select-none',
        className
      )}
    >
      <Link href="/contact" className="block relative w-full h-[120px] sm:h-[180px] md:h-[220px] flex items-center justify-center">
        {/* Ribbon 1: Electric Lime Banner (Tilted +1.5/2.5 deg, background) */}
        <div className="absolute inset-x-[-10%] bg-[var(--primary-color)] text-[#080d0d] py-2.5 sm:py-4 md:py-5 rotate-[1.8deg] sm:rotate-[2.5deg] shadow-lg overflow-hidden flex items-center">
          <div className="flex animate-marquee items-center gap-6 sm:gap-12 whitespace-nowrap">
            {items.map((idx) => (
              <div key={`lime-${idx}`} className="inline-flex items-center gap-4 sm:gap-8 shrink-0">
                <span className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-[#080d0d]">
                  Let&apos;s Get Started
                </span>
                <span className="text-lg sm:text-2xl md:text-3xl text-[#080d0d] font-bold">
                  ✳
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Dark Charcoal Banner (Tilted -1.8/-2.5 deg, foreground crossing over) */}
        <div className="absolute inset-x-[-10%] bg-[#080d0d] text-white py-2.5 sm:py-4 md:py-5 -rotate-[1.8deg] sm:-rotate-[2.5deg] shadow-2xl overflow-hidden flex items-center z-10 border-y border-white/10">
          <div
            className="flex animate-marquee items-center gap-6 sm:gap-12 whitespace-nowrap"
            style={{ animationDirection: 'reverse', animationDuration: '24s' }}
          >
            {items.map((idx) => (
              <div key={`dark-${idx}`} className="inline-flex items-center gap-4 sm:gap-8 shrink-0">
                <span className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                  Let&apos;s Get Started
                </span>
                <span className="text-lg sm:text-2xl md:text-3xl text-[var(--primary-color)] font-bold">
                  ✳
                </span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-[var(--primary-color)]">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
};
