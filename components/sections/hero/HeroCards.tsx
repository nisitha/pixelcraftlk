'use client';

import React from 'react';
import Image from 'next/image';
import { SlotCounter } from './SlotCounter';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface HeroCardsProps {
  className?: string;
  cardsRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * 5 Hero Showcase Cards
 * Recreates the observable shelf of visual cards:
 * 1. Grayscale team collaboration photo with floating "Strategy & Design" pill
 * 2. Solid white stats counter card ("250+ Visionary Clients & Partners")
 * 3. Glassmorphic trust card ("Trusted & Transparent Engineering")
 * 4. Glassmorphic growth chart card ("High-Performance Growth" + sparkline)
 * 5. Solid white global enterprise card ("20+ Global Enterprise Deployments" + country pills + world map)
 */
export const HeroCards: React.FC<HeroCardsProps> = ({ className, cardsRef }) => {
  const cards = (
    <>
      {/* CARD 1: Grayscale Collaboration Photo + Floating Badge */}
      <div className="hero-card-item relative shrink-0 w-[270px] sm:w-[290px] md:w-[310px] rounded-2xl overflow-hidden shadow-2xl bg-[#111616] border border-white/10 group">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/hero/team-collab.jpg"
            alt="PixelCraft Studios team collaborating on digital products"
            width={310}
            height={390}
            priority
            className="w-full h-full object-cover grayscale contrast-115 transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Pill Badge: Positioned overlapping photo top right */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white text-[#080d0d] shadow-[0_12px_24px_rgba(0,0,0,0.5)] border border-black/5 animate-pulse-gentle">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#080d0d]" />
          <span className="text-xs font-semibold tracking-tight text-[#080d0d]">
            Strategy &amp; Design
          </span>
        </div>
      </div>

      {/* CARD 2: Partner & Client Stats Card (Solid White) */}
      <div className="hero-card-item shrink-0 w-[170px] sm:w-[190px] h-[258px] rounded-2xl bg-white text-[#080d0d] p-6 flex flex-col items-center justify-center text-center shadow-2xl transition-transform duration-500 hover:-translate-y-1">
        <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#080d0d] flex items-center justify-center">
          <SlotCounter value="250+" itemHeight={48} delay={600} />
        </div>
        <p className="mt-3 text-xs sm:text-sm font-medium text-[#5f696a] leading-snug max-w-[130px]">
          Visionary Clients &amp; Global Partners
        </p>
      </div>

      {/* CARD 3: Glassmorphism Trust Card */}
      <div className="hero-card-item shrink-0 w-[180px] sm:w-[200px] h-[211px] rounded-2xl bg-white/[0.08] backdrop-blur-[25px] border border-white/10 p-5 flex flex-col justify-between shadow-2xl transition-transform duration-500 hover:-translate-y-1">
        <h3 className="text-white text-base sm:text-lg font-semibold leading-snug max-w-[130px]">
          Trusted &amp; Transparent Engineering
        </h3>
        <div className="self-end p-2.5 rounded-xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 text-[var(--primary-color)]">
          <ShieldCheck className="w-6 h-6" />
        </div>
      </div>

      {/* CARD 4: Glassmorphic Performance Chart Card */}
      <div className="hero-card-item shrink-0 w-[180px] sm:w-[205px] h-[258px] rounded-2xl bg-white/[0.08] backdrop-blur-[25px] border border-white/10 p-5 flex flex-col justify-between shadow-2xl transition-transform duration-500 hover:-translate-y-1">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs uppercase tracking-wider text-[#899698] font-medium">
              Conversion
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--primary-color)] bg-[var(--primary-color)]/15 px-2 py-0.5 rounded-full">
              <TrendingUp className="w-3 h-3" /> +148%
            </span>
          </div>
          <h3 className="text-white text-base sm:text-lg font-semibold leading-snug">
            Performance Velocity
          </h3>
        </div>

        {/* Dynamic Sparkline SVG Graph */}
        <div className="w-full h-[110px] relative mt-2">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 160 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bcea3e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#bcea3e" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Background Grid Lines */}
            <line x1="0" y1="20" x2="160" y2="20" stroke="white" strokeOpacity="0.05" strokeDasharray="3 3" />
            <line x1="0" y1="45" x2="160" y2="45" stroke="white" strokeOpacity="0.05" strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="160" y2="70" stroke="white" strokeOpacity="0.05" strokeDasharray="3 3" />

            {/* Area Fill */}
            <path
              d="M0 65 Q 25 55, 45 60 T 90 35 T 130 30 T 160 12 L 160 80 L 0 80 Z"
              fill="url(#chartGlow)"
            />

            {/* Neon Sparkline Stroke */}
            <path
              d="M0 65 Q 25 55, 45 60 T 90 35 T 130 30 T 160 12"
              stroke="#bcea3e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* End Point Glow Indicator */}
            <circle cx="160" cy="12" r="4" fill="#bcea3e" />
            <circle cx="160" cy="12" r="7" fill="#bcea3e" fillOpacity="0.3" />
          </svg>
        </div>
      </div>

      {/* CARD 5: Global Enterprise Card (Solid White) */}
      <div className="hero-card-item shrink-0 w-[240px] sm:w-[270px] h-[338px] rounded-3xl bg-white text-[#080d0d] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-1">
        <div className="relative z-10">
          <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#080d0d] flex items-center">
            <SlotCounter value="20+" itemHeight={48} delay={700} />
          </div>
          <p className="mt-2 text-xs sm:text-sm font-medium text-[#5f696a] leading-snug">
            Global Enterprise drives digital innovation
          </p>

          {/* Region Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3.5 py-1.5 rounded-full bg-[#080d0d] text-[var(--primary-color)] text-xs font-semibold tracking-wide">
              London
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#080d0d] text-[var(--primary-color)] text-xs font-semibold tracking-wide">
              New York
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#080d0d] text-[var(--primary-color)] text-xs font-semibold tracking-wide">
              Singapore
            </span>
          </div>
        </div>

        {/* Faint Dotted World Map Graphic at Bottom */}
        <div className="absolute -bottom-2 -right-4 w-[240px] h-[130px] pointer-events-none opacity-40">
          <Image
            src="/hero/world-map.svg"
            alt="Global deployment map"
            width={240}
            height={130}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );

  return (
    <div className={cn('w-full relative mt-8 sm:mt-10 lg:mt-11', className)}>
      {/* Desktop Layout: Stepped horizontal row aligned at bottom */}
      <div
        ref={cardsRef}
        className="hidden lg:flex items-end justify-center gap-4 xl:gap-5 w-full mx-auto"
      >
        {cards}
      </div>

      {/* Tablet & Mobile Layout: Smooth horizontal scrollable carousel track */}
      <div className="flex lg:hidden overflow-x-auto scrollbar-none items-end gap-4 px-4 sm:px-8 pb-4 pt-2 -mx-4 sm:-mx-8 snap-x snap-mandatory">
        {cards}
      </div>
    </div>
  );
};
