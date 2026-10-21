'use client';

import React from 'react';
import { partnerBrands } from '@/data/homepage';
import { cn } from '@/lib/utils';

export interface TrustedMarqueeSectionProps {
  className?: string;
}

/**
 * Section 5: Trusted Brands Infinite Marquee (.section.trusted)
 * Continuous hardware-composited horizontal ticker featuring 12+ partner brand SVGs
 */
export const TrustedMarqueeSection: React.FC<TrustedMarqueeSectionProps> = ({ className }) => {
  // Double array for seamless 0% -> -50% looping
  const marqueeList = [...partnerBrands, ...partnerBrands];

  return (
    <section
      id="trusted-brands"
      aria-label="Trusted by Leading Brands"
      className={cn(
        'section trusted relative bg-[#080d0d] border-t border-white/5 py-12 sm:py-16 overflow-hidden select-none',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 mb-8 text-center flex justify-center">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-tight text-[#899698]">
          <span className="w-2 h-2 rounded-xs bg-[var(--primary-color)] shadow-[0_0_8px_rgba(188,234,62,0.6)]" />
          <span>Trusted by Leading Brands</span>
        </div>
      </div>

      {/* Marquee Track Container with Edge Gradient Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Gradient Fade */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-[#080d0d] via-[#080d0d]/80 to-transparent"
        />

        {/* Right Edge Gradient Fade */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#080d0d] via-[#080d0d]/80 to-transparent"
        />

        {/* Hardware-Accelerated Marquee Track */}
        <div className="flex animate-marquee items-center gap-10 sm:gap-16 whitespace-nowrap">
          {marqueeList.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="inline-flex items-center gap-3 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5 group-hover:border-[var(--primary-color)]/40 transition-colors">
                <svg
                  className="w-full h-full fill-white group-hover:fill-[var(--primary-color)] transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={brand.svgPath} />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-base font-semibold text-white tracking-tight group-hover:text-[var(--primary-color)] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] font-mono text-[#6f7781] uppercase tracking-wider">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
