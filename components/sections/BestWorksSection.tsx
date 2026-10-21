'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Layers } from 'lucide-react';
import { featuredProjects } from '@/data/homepage';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface BestWorksSectionProps {
  className?: string;
}

/**
 * High-Contrast Dark Telemetry Dashboard Mockups
 */
const GrowthEngineMockup: React.FC = () => (
  <div className="w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl bg-[#111616] border border-white/15 p-4 sm:p-6 shadow-2xl flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
        <span className="text-xs font-mono text-white/80 font-semibold ml-2">NEXUS TELEMETRY CORE</span>
      </div>
      <span className="text-[11px] font-mono text-[var(--primary-color)] flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-ping" />
        99.99% UPTIME
      </span>
    </div>

    <div className="my-2 h-[100px] sm:h-[130px] w-full relative flex items-end">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" fill="none">
        <defs>
          <linearGradient id="growthEngineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bcea3e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#bcea3e" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="30" x2="400" y2="30" stroke="white" strokeOpacity="0.06" strokeDasharray="3 3" />
        <line x1="0" y1="70" x2="400" y2="70" stroke="white" strokeOpacity="0.06" strokeDasharray="3 3" />
        <line x1="0" y1="110" x2="400" y2="110" stroke="white" strokeOpacity="0.06" strokeDasharray="3 3" />
        <path d="M0 95 Q 60 75, 120 85 T 220 50 T 320 40 T 400 18 L 400 120 L 0 120 Z" fill="url(#growthEngineGrad)" />
        <path d="M0 95 Q 60 75, 120 85 T 220 50 T 320 40 T 400 18" stroke="#bcea3e" strokeWidth="3" strokeLinecap="round" />
        <circle cx="400" cy="18" r="5" fill="#bcea3e" />
        <circle cx="400" cy="18" r="9" fill="#bcea3e" fillOpacity="0.3" />
      </svg>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
      <div className="flex items-center gap-2">
        <span className="text-[#899698]">INGESTION:</span>
        <span className="font-bold text-white">4.2B events/day</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[#899698]">LATENCY:</span>
        <span className="font-bold text-[var(--primary-color)]">28ms p99</span>
      </div>
      <div className="hidden sm:flex items-center gap-2">
        <span className="text-[#899698]">VELOCITY:</span>
        <span className="font-bold text-white">+148%</span>
      </div>
    </div>
  </div>
);

const MarketMagnetMockup: React.FC = () => (
  <div className="w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl bg-[#111616] border border-white/15 p-4 sm:p-6 shadow-2xl flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
        <span className="text-xs font-mono text-white/80 font-semibold ml-2">CHECKOUT ENGINE ARCHITECTURE</span>
      </div>
      <span className="text-[11px] font-mono text-[var(--primary-color)]">● LIVE CONVERSION ACTIVE</span>
    </div>

    <div className="my-2 h-[100px] sm:h-[130px] w-full flex items-end justify-between gap-3 px-3">
      {[
        { label: 'VISITORS', height: '88%', val: '1.42M' },
        { label: 'CATALOG', height: '72%', val: '980K' },
        { label: 'CART ADDS', height: '54%', val: '430K' },
        { label: 'CHECKOUT', height: '42%', val: '290K' },
        { label: 'REVENUE', height: '85%', val: '$2.48M', highlight: true },
      ].map((bar, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
          <span className="text-[10px] font-mono text-white/80">{bar.val}</span>
          <div
            className={cn(
              'w-full rounded-t-md transition-all duration-500',
              bar.highlight
                ? 'bg-[var(--primary-color)] shadow-[0_0_16px_rgba(188,234,62,0.6)]'
                : 'bg-white/15'
            )}
            style={{ height: bar.height }}
          />
          <span className="text-[9px] font-mono text-[#899698] truncate w-full text-center">
            {bar.label}
          </span>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
      <div className="flex items-center gap-2">
        <span className="text-[#899698]">CONVERSION:</span>
        <span className="font-bold text-[var(--primary-color)]">4.92% (+142%)</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[#899698]">NET REVENUE:</span>
        <span className="font-bold text-white">$2,480,900</span>
      </div>
    </div>
  </div>
);

const MarketMotionMockup: React.FC = () => (
  <div className="w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl bg-[#111616] border border-white/15 p-4 sm:p-6 shadow-2xl flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
        <span className="text-xs font-mono text-white/80 font-semibold ml-2">KINETIX SHADER &amp; MOTION</span>
      </div>
      <span className="text-[11px] font-mono text-[var(--primary-color)]">● 60 FPS WEBGL 2.0</span>
    </div>

    <div className="my-2 h-[100px] sm:h-[130px] w-full flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 340 90" fill="none">
        <path
          d="M0 45 Q 40 10, 85 45 T 170 45 T 255 45 T 340 45"
          stroke="#7970ff"
          strokeWidth="2.5"
          strokeDasharray="6 3"
        />
        <path
          d="M0 45 Q 40 80, 85 45 T 170 45 T 255 45 T 340 45"
          stroke="#bcea3e"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
      <span className="text-[#899698]">12 DRAW CALLS</span>
      <span className="font-bold text-white">HARDWARE ACCELERATED</span>
      <span className="font-bold text-[var(--primary-color)]">2.1ms RENDER</span>
    </div>
  </div>
);

const TidalStrategyMockup: React.FC = () => (
  <div className="w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl bg-[#111616] border border-white/15 p-4 sm:p-6 shadow-2xl flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
        <span className="text-xs font-mono text-white/80 font-semibold ml-2">TIDAL CAPITAL LIQUIDITY</span>
      </div>
      <span className="text-[11px] font-mono text-[var(--primary-color)]">● SOC2 TYPE II COMPLIANT</span>
    </div>

    <div className="my-2 h-[100px] sm:h-[130px] w-full flex items-end justify-around px-2">
      {[40, 60, 48, 76, 62, 88, 80, 100].map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end">
          <div className="w-[1px] h-4 bg-white/40" />
          <div
            className={cn(
              'w-3 rounded-xs',
              i >= 5 ? 'bg-[var(--primary-color)] shadow-[0_0_12px_rgba(188,234,62,0.4)]' : 'bg-white/20'
            )}
            style={{ height: `${h * 0.65}%` }}
          />
          <div className="w-[1px] h-3 bg-white/40" />
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
      <span className="text-[#899698]">COLLATERAL: <strong className="text-white">$84.2M</strong></span>
      <span className="font-bold text-[var(--primary-color)]">&lt; 12ms SETTLEMENT</span>
      <span className="text-[#899698]">ZERO SLIPPAGE</span>
    </div>
  </div>
);

const TrendBeaconMockup: React.FC = () => (
  <div className="w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl bg-[#111616] border border-white/15 p-4 sm:p-6 shadow-2xl flex flex-col justify-between select-none">
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
        <span className="text-xs font-mono text-white/80 font-semibold ml-2">BEACON NEURAL MATRIX</span>
      </div>
      <span className="text-[11px] font-mono text-[var(--primary-color)]">● VECTOR STREAM INGESTION</span>
    </div>

    <div className="my-2 h-[100px] sm:h-[130px] w-full relative flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 280 100" fill="none">
        <line x1="50" y1="50" x2="140" y2="50" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
        <line x1="140" y1="50" x2="230" y2="25" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
        <line x1="140" y1="50" x2="230" y2="75" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="7" fill="white" fillOpacity="0.4" />
        <circle cx="140" cy="50" r="10" fill="#bcea3e" />
        <circle cx="140" cy="50" r="18" fill="#bcea3e" fillOpacity="0.2" />
        <circle cx="230" cy="25" r="7" fill="white" fillOpacity="0.6" />
        <circle cx="230" cy="75" r="7" fill="white" fillOpacity="0.6" />
      </svg>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
      <span className="text-[#899698]">PRECISION: <strong className="text-white">99.4%</strong></span>
      <span className="font-bold text-[var(--primary-color)]">200+ CHANNELS</span>
      <span className="text-[#899698]">14ms LATENCY</span>
    </div>
  </div>
);

const getProjectMockup = (id: string) => {
  switch (id) {
    case 'growth-engine':
      return <GrowthEngineMockup />;
    case 'market-magnet':
      return <MarketMagnetMockup />;
    case 'market-motion':
      return <MarketMotionMockup />;
    case 'tidal-strategy':
      return <TidalStrategyMockup />;
    case 'trend-beacon':
      return <TrendBeaconMockup />;
    default:
      return <GrowthEngineMockup />;
  }
};

/**
 * Section 4: Best Works Showcase (.section.work)
 * 1:1 Parity Sticky Card Stack / Layering Interaction with Scalient:
 * 1. Pinned header & stage using GSAP ScrollTrigger (pin: true, scrub: 1, anticipatePin: 1)
 * 2. Scrub-expanded capsule pill between "WOR" and "KS"
 * 3. Sticky card stacking: cards slide up from bottom and stack over previous cards with subtle scale/tilt easing
 * 4. Micro-interactions: scale(1.03) on hover, diagonal arrow translation, and bottom meta strip
 */
export const BestWorksSection: React.FC<BestWorksSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headlineBoxRef = useRef<HTMLSpanElement>(null);
  const accentSquareRef = useRef<HTMLSpanElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (min-width: 1024px): Pinned Card Stacking Scrub Timeline
      mm.add('(min-width: 1024px)', () => {
        if (!deckRef.current || !sectionRef.current) return;

        const cards = deckRef.current.querySelectorAll<HTMLElement>('.stacked-card');
        if (!cards.length) return;

        const totalCards = cards.length;

        // Pinned scrub timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80px',
            end: () => `+=${(totalCards - 1) * 750}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Scrub-tied Expanding Capsule Pill between "WOR" and "KS"
        if (headlineBoxRef.current) {
          tl.fromTo(
            headlineBoxRef.current,
            { width: 50 },
            { width: 140, ease: 'none' },
            0
          );
        }

        if (accentSquareRef.current) {
          tl.fromTo(
            accentSquareRef.current,
            { rotation: -45, scale: 0.8 },
            { rotation: 45, scale: 1.15, ease: 'none' },
            0
          );
        }

        // Initially position cards 1 through 4 below the viewport frame
        for (let i = 1; i < totalCards; i++) {
          gsap.set(cards[i], {
            yPercent: 110,
            scale: 1,
            opacity: 1,
          });
        }

        // 2. Sequential Card Stacking / Layering:
        // Each card slides in from the bottom and stacks cleanly over previous cards
        for (let i = 1; i < totalCards; i++) {
          const currentCard = cards[i];
          const time = (i - 1) * 1;

          // Slide current card up into place
          tl.to(
            currentCard,
            {
              yPercent: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: 'power2.inOut',
            },
            time
          );

          // Subtle scale-down and dimming of all previous cards underneath
          for (let prevIdx = 0; prevIdx < i; prevIdx++) {
            const depth = i - prevIdx;
            tl.to(
              cards[prevIdx],
              {
                scale: Math.max(0.9, 1 - depth * 0.04),
                y: -depth * 14,
                opacity: Math.max(0.7, 1 - depth * 0.12),
                duration: 1,
                ease: 'power2.inOut',
              },
              time
            );
          }
        }
      });

      // Mobile / Compact Viewports (< 1024px): Smooth Vertical Curtain Entrance
      mm.add('(max-width: 1023px)', () => {
        if (!deckRef.current) return;
        const cards = deckRef.current.querySelectorAll<HTMLElement>('.stacked-card');

        gsap.fromTo(
          cards,
          { clipPath: 'inset(100% 0% 0% 0%)', y: 35, opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: deckRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        if (headlineBoxRef.current && headerRef.current) {
          gsap.fromTo(
            headlineBoxRef.current,
            { width: 50 },
            {
              width: 110,
              ease: 'none',
              scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 85%',
                end: 'top 40%',
                scrub: 0.8,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="works"
      aria-label="Our Best Works"
      className={cn(
        'section work relative bg-[#f4f4f6] text-[#080d0d] py-14 sm:py-20 lg:py-24 overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col justify-between">
        {/* Section Header with Expanding Pill */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/10 mb-3 text-xs font-semibold uppercase tracking-wider text-[#080d0d] select-none">
              <Layers className="w-3.5 h-3.5 text-[#080d0d]" />
              <span>Selected Portfolio</span>
            </div>

            <h2 className="text-[38px] sm:text-[54px] md:text-[72px] lg:text-[84px] font-black tracking-tight leading-[0.96] text-[#080d0d] uppercase flex flex-col select-none">
              <span>OUR BEST</span>
              <span className="inline-flex items-center gap-2 sm:gap-3 flex-wrap">
                <span>WOR</span>
                <span
                  ref={headlineBoxRef}
                  className="inline-flex items-center justify-center h-[28px] sm:h-[40px] md:h-[52px] lg:h-[60px] rounded-full bg-[#080d0d] border border-black/10 overflow-hidden relative align-middle shadow-md will-change-[width]"
                  style={{ width: '50px' }}
                >
                  <span
                    ref={accentSquareRef}
                    className="w-3 sm:w-4 sm:h-4 rounded-xs bg-[var(--primary-color)] shadow-[0_0_12px_rgba(188,234,62,0.85)] will-change-transform"
                  />
                </span>
                <span>KS</span>
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6f7781] font-normal leading-relaxed max-w-[440px]">
            Selected case studies showcasing enterprise SaaS architectures, conversion-engineered digital platforms, and kinetic brand systems.
          </p>
        </div>

        {/* Sticky Card Stacking Deck Container */}
        {/* On desktop: Pinned absolute stack (height ~540px) | On mobile: Vertical flex flow */}
        <div
          ref={deckRef}
          className="relative w-full h-[500px] sm:h-[520px] lg:h-[550px] max-lg:flex max-lg:flex-col max-lg:gap-8"
        >
          {featuredProjects.map((project, index) => {
            const zIndexStyle = { zIndex: (index + 1) * 10 };

            return (
              <div
                key={project.id}
                style={zIndexStyle}
                className={cn(
                  'stacked-card group relative w-full h-full lg:absolute lg:inset-0 will-change-transform'
                )}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block h-full rounded-[24px] sm:rounded-[28px] bg-white border border-black/10 hover:border-black/20 transition-all duration-500 overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.12)] flex flex-col justify-between"
                >
                  {/* Card Visual Canvas (Fills remaining height) */}
                  <div className="relative w-full flex-1 min-h-[300px] overflow-hidden bg-[#0c0f12] flex items-center justify-center p-5 sm:p-8">
                    {/* Background Ambient Project Gradient */}
                    <div
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none',
                        project.gradient
                      )}
                    />

                    {/* Subtle Grid Texture */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />

                    {/* Category Pill Badge on Top-Left */}
                    <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#080d0d]/80 backdrop-blur-md border border-white/15 text-xs font-semibold text-white/90 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] shadow-[0_0_8px_rgba(188,234,62,0.8)]" />
                      <span>{project.category}</span>
                    </div>

                    {/* Circular Arrow Button on Top-Right */}
                    <div className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:bg-[var(--primary-color)] group-hover:text-[#080d0d] group-hover:border-[var(--primary-color)] group-hover:scale-105">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    {/* Inner Dashboard Mockup with scale(1.03) on Hover */}
                    <div className="relative z-10 w-full max-w-[560px] transition-transform duration-500 ease-out group-hover:scale-[1.03] will-change-transform">
                      {getProjectMockup(project.id)}
                    </div>
                  </div>

                  {/* Bottom Meta Strip */}
                  <div className="shrink-0 h-[76px] sm:h-[84px] px-6 sm:px-8 flex items-center justify-between bg-white border-t border-black/5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#080d0d] tracking-tight group-hover:text-[var(--primary-color)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-[#6f7781] font-medium">
                        {project.category} — {project.year}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#080d0d] group-hover:text-[var(--primary-color)] transition-colors">
                      <span className="underline underline-offset-4 decoration-black/20 group-hover:decoration-[var(--primary-color)]">
                        View Project
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div ref={bottomCtaRef} className="mt-8 sm:mt-10 flex justify-center">
          <Button variant="primary" size="default" href="/work">
            View Works
          </Button>
        </div>
      </div>
    </section>
  );
};
