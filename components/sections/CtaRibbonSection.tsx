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
        'section cta relative bg-[var(--primary-color)] text-[#080d0d] py-6 sm:py-8 overflow-hidden select-none border-y border-[var(--primary-color)] transition-colors group cursor-pointer',
        className
      )}
    >
      <Link href="/contact" className="block w-full">
        <div className="flex animate-marquee items-center gap-8 sm:gap-12 whitespace-nowrap">
          {items.map((idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-6 sm:gap-8 shrink-0 group-hover:opacity-90 transition-opacity"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#080d0d]">
                Let&apos;s Get Started
              </span>

              <span className="text-2xl sm:text-3xl text-[#080d0d]/80 animate-spin-slow">
                ✦
              </span>

              <div className="w-10 h-10 rounded-full bg-[#080d0d] text-[var(--primary-color)] hidden sm:flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
};
