'use client';

import React from 'react';
import Image from 'next/image';
import { SlotCounter } from './SlotCounter';
import { Lock, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface HeroCardsProps {
  className?: string;
  cardsRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * 5 Hero Showcase Cards
 * 1:1 Parity with https://scalient.webflow.io/
 * Cleanly separated:
 * - Desktop (>= 1024px): Stepped shelf with exact Scalient geometry and alignment
 * - Mobile (< 1024px): Horizontal snap carousel
 */
export const HeroCards: React.FC<HeroCardsProps> = ({ className, cardsRef }) => {
  return (
    <div className={cn('w-full relative mt-8 sm:mt-10 lg:mt-12 overflow-visible', className)}>
      {/* =========================================================================
          DESKTOP SHELF LAYOUT (lg: / >= 1024px)
          Stepped shelf alignment with exact Scalient card heights, widths & styling
          ========================================================================= */}
      <div
        ref={cardsRef}
        className="hidden lg:flex items-end justify-center gap-4 xl:gap-5 w-full mx-auto relative z-10"
      >
        {/* DESKTOP CARD 1: Grayscale Team Photo + Floating Marketing Team Badge */}
        <div className="hero-card-item relative shrink-0 w-[310px] overflow-visible group">
          <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden shadow-2xl bg-[#111616] border border-white/10">
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

          {/* Floating Pill Badge: Positioned overlapping photo top right with vertical float bobbing animation */}
          <div className="absolute top-4 -right-4 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black shadow-xl select-none animate-float-bobbing">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#080d0d] shrink-0" />
            <span className="text-sm font-semibold text-[#080d0d] tracking-tight whitespace-nowrap">
              Marketing Team
            </span>
          </div>
        </div>

        {/* DESKTOP CARD 2: Partner & Client Stats Card (Solid White) */}
        <div className="hero-card-item shrink-0 w-[190px] h-[258px] rounded-[28px] bg-white text-[#080d0d] p-6 flex flex-col items-center justify-center text-center shadow-2xl transition-transform duration-500 hover:-translate-y-1">
          <div className="text-5xl font-bold tracking-tight text-[#080d0d] flex items-center justify-center">
            <SlotCounter value="200+" itemHeight={48} delay={600} />
          </div>
          <p className="mt-3 text-sm font-medium text-[#5f696a] leading-snug max-w-[130px]">
            Our Esteemed Clients and Partners
          </p>
        </div>

        {/* DESKTOP CARD 3: Dark Card with 3D Lock / "Trusted & Transparent Growth" */}
        <div className="hero-card-item shrink-0 w-[200px] h-[220px] rounded-[28px] bg-[#111616] border border-white/10 p-5 flex flex-col justify-between shadow-2xl transition-transform duration-500 hover:-translate-y-1">
          <h3 className="text-white text-lg font-semibold leading-snug max-w-[140px]">
            Trusted &amp; Transparent Growth
          </h3>
          {/* 3D Glossy Lock Badge */}
          <div className="self-end w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c8f53c] to-[#9ed322] shadow-[0_4px_18px_rgba(200,245,60,0.35)] flex items-center justify-center text-[#080d0d]">
            <Lock className="w-6 h-6 stroke-[2.3]" />
          </div>
        </div>

        {/* DESKTOP CARD 4: Dark Card with Lime Bar Chart Graphic */}
        <div className="hero-card-item shrink-0 w-[205px] h-[258px] rounded-[28px] bg-[#111616] border border-white/10 p-5 flex flex-col justify-between shadow-2xl transition-transform duration-500 hover:-translate-y-1">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs uppercase tracking-wider text-[#899698] font-medium">
                Conversion
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--primary-color)] bg-[var(--primary-color)]/15 px-2 py-0.5 rounded-full">
                <TrendingUp className="w-3 h-3" /> +148%
              </span>
            </div>
            <h3 className="text-white text-lg font-semibold leading-snug">
              Performance Velocity
            </h3>
          </div>

          {/* Dynamic Lime Bar Chart Graphic */}
          <div className="w-full h-[100px] relative mt-2 flex items-end justify-between gap-2 px-1">
            <div className="w-full h-[35%] rounded-t-md bg-[#c8f53c]/35 transition-all hover:bg-[#c8f53c]" />
            <div className="w-full h-[55%] rounded-t-md bg-[#c8f53c]/50 transition-all hover:bg-[#c8f53c]" />
            <div className="w-full h-[75%] rounded-t-md bg-[#c8f53c]/70 transition-all hover:bg-[#c8f53c]" />
            <div className="w-full h-[45%] rounded-t-md bg-[#c8f53c]/45 transition-all hover:bg-[#c8f53c]" />
            <div className="w-full h-[85%] rounded-t-md bg-[#c8f53c]/85 transition-all hover:bg-[#c8f53c]" />
            <div className="w-full h-[100%] rounded-t-md bg-[#c8f53c] shadow-[0_0_15px_rgba(200,245,60,0.5)]" />
          </div>
        </div>

        {/* DESKTOP CARD 5: Solid White Card with 20+ Global Enterprise, country badges, and half-globe */}
        <div className="hero-card-item shrink-0 w-[270px] h-[338px] rounded-[28px] bg-white text-[#080d0d] p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-transform duration-500 hover:-translate-y-1">
          <div className="relative z-10">
            <div className="text-5xl font-bold tracking-tight text-[#080d0d] flex items-center">
              <SlotCounter value="20+" itemHeight={48} delay={700} />
            </div>
            <p className="mt-2 text-sm font-medium text-[#5f696a] leading-snug">
              Global Enterprise drives innovation
            </p>

            {/* Country Badges: Mexico, Australia */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3.5 py-1.5 rounded-full bg-[#080d0d] text-[#c8f53c] text-xs font-semibold tracking-wide">
                Mexico
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#080d0d] text-[#c8f53c] text-xs font-semibold tracking-wide">
                Australia
              </span>
            </div>
          </div>

          {/* 3D Wireframe Half-Globe Graphic at Bottom */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[220px] h-[130px] pointer-events-none opacity-85">
            <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <radialGradient id="globeGradDesk" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#1e262c" />
                  <stop offset="60%" stopColor="#0c1214" />
                  <stop offset="100%" stopColor="#040607" />
                </radialGradient>
                <linearGradient id="globeRimDesk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c8f53c" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#c8f53c" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M10 110 C 10 40, 190 40, 190 110 Z" fill="url(#globeGradDesk)" stroke="url(#globeRimDesk)" strokeWidth="1.5" />
              <ellipse cx="100" cy="90" rx="80" ry="18" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="100" cy="70" rx="65" ry="14" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="100" cy="52" rx="42" ry="9" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M100 45 C 100 45, 60 70, 60 110" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
              <path d="M100 45 C 100 45, 140 70, 140 110" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
              <path d="M100 45 L 100 110" stroke="#c8f53c" strokeWidth="1.5" strokeOpacity="0.6" />
            </svg>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET CAROUSEL LAYOUT (< 1024px)
          Touch-optimized horizontal snap carousel with proportional dimensions
          ========================================================================= */}
      <div className="flex lg:hidden overflow-x-auto scrollbar-none items-end gap-3.5 px-4 sm:px-6 pb-4 pt-3 w-full max-w-full snap-x snap-mandatory touch-pan-x">
        {/* MOBILE CARD 1 */}
        <div className="hero-card-item relative shrink-0 w-[240px] sm:w-[270px] overflow-visible group snap-center">
          <div className="relative aspect-[4/5] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl bg-[#111616] border border-white/10">
            <Image
              src="/hero/team-collab.jpg"
              alt="PixelCraft Studios team collaborating on digital products"
              width={270}
              height={338}
              priority
              className="w-full h-full object-cover grayscale contrast-115 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="absolute top-3 -right-2 sm:-right-4 z-20 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black shadow-xl select-none animate-float-bobbing">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[2px] bg-[#080d0d] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#080d0d] tracking-tight whitespace-nowrap">
              Marketing Team
            </span>
          </div>
        </div>

        {/* MOBILE CARD 2 */}
        <div className="hero-card-item shrink-0 w-[155px] sm:w-[175px] h-[230px] sm:h-[258px] rounded-[24px] sm:rounded-[28px] bg-white text-[#080d0d] p-5 sm:p-6 flex flex-col items-center justify-center text-center shadow-2xl snap-center">
          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080d0d] flex items-center justify-center">
            <SlotCounter value="200+" itemHeight={48} delay={600} />
          </div>
          <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs font-medium text-[#5f696a] leading-snug max-w-[130px]">
            Our Esteemed Clients and Partners
          </p>
        </div>

        {/* MOBILE CARD 3 */}
        <div className="hero-card-item shrink-0 w-[165px] sm:w-[185px] h-[200px] sm:h-[220px] rounded-[24px] sm:rounded-[28px] bg-[#111616] border border-white/10 p-4 sm:p-5 flex flex-col justify-between shadow-2xl snap-center">
          <h3 className="text-white text-sm sm:text-base font-semibold leading-snug max-w-[140px]">
            Trusted &amp; Transparent Growth
          </h3>
          <div className="self-end w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#c8f53c] to-[#9ed322] shadow-[0_4px_18px_rgba(200,245,60,0.35)] flex items-center justify-center text-[#080d0d]">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.3]" />
          </div>
        </div>

        {/* MOBILE CARD 4 */}
        <div className="hero-card-item shrink-0 w-[165px] sm:w-[185px] h-[230px] sm:h-[258px] rounded-[24px] sm:rounded-[28px] bg-[#111616] border border-white/10 p-4 sm:p-5 flex flex-col justify-between shadow-2xl snap-center">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#899698] font-medium">
                Conversion
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[var(--primary-color)] bg-[var(--primary-color)]/15 px-1.5 sm:px-2 py-0.5 rounded-full">
                <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> +148%
              </span>
            </div>
            <h3 className="text-white text-sm sm:text-base font-semibold leading-snug">
              Performance Velocity
            </h3>
          </div>

          <div className="w-full h-[85px] sm:h-[100px] relative mt-2 flex items-end justify-between gap-1.5 sm:gap-2 px-1">
            <div className="w-full h-[35%] rounded-t-md bg-[#c8f53c]/35" />
            <div className="w-full h-[55%] rounded-t-md bg-[#c8f53c]/50" />
            <div className="w-full h-[75%] rounded-t-md bg-[#c8f53c]/70" />
            <div className="w-full h-[45%] rounded-t-md bg-[#c8f53c]/45" />
            <div className="w-full h-[85%] rounded-t-md bg-[#c8f53c]/85" />
            <div className="w-full h-[100%] rounded-t-md bg-[#c8f53c] shadow-[0_0_15px_rgba(200,245,60,0.5)]" />
          </div>
        </div>

        {/* MOBILE CARD 5 */}
        <div className="hero-card-item shrink-0 w-[230px] sm:w-[260px] h-[300px] sm:h-[338px] rounded-[24px] sm:rounded-[28px] bg-white text-[#080d0d] p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden snap-center">
          <div className="relative z-10">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080d0d] flex items-center">
              <SlotCounter value="20+" itemHeight={48} delay={700} />
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-[#5f696a] leading-snug">
              Global Enterprise drives innovation
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#080d0d] text-[#c8f53c] text-[11px] sm:text-xs font-semibold tracking-wide">
                Mexico
              </span>
              <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#080d0d] text-[#c8f53c] text-[11px] sm:text-xs font-semibold tracking-wide">
                Australia
              </span>
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] sm:w-[220px] h-[120px] sm:h-[130px] pointer-events-none opacity-85">
            <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <radialGradient id="globeGradMob" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#1e262c" />
                  <stop offset="60%" stopColor="#0c1214" />
                  <stop offset="100%" stopColor="#040607" />
                </radialGradient>
                <linearGradient id="globeRimMob" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c8f53c" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#c8f53c" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M10 110 C 10 40, 190 40, 190 110 Z" fill="url(#globeGradMob)" stroke="url(#globeRimMob)" strokeWidth="1.5" />
              <ellipse cx="100" cy="90" rx="80" ry="18" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="100" cy="70" rx="65" ry="14" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="100" cy="52" rx="42" ry="9" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M100 45 C 100 45, 60 70, 60 110" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
              <path d="M100 45 C 100 45, 140 70, 140 110" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
              <path d="M100 45 L 100 110" stroke="#c8f53c" strokeWidth="1.5" strokeOpacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
