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
 * High-Contrast Dark Telemetry Dashboard Mockup Components (Requirement 5)
 */
const GrowthEngineMockup: React.FC = () => (
  <div className="w-full aspect-[16/10] rounded-xl bg-[#080d0d]/90 backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between select-none">
    {/* Window Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-[#899698] tracking-widest uppercase">
          NEXUS TELEMETRY CORE
        </span>
        <span className="text-[10px] font-mono text-[var(--primary-color)] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)] animate-ping" />
          99.99% UPTIME
        </span>
      </div>
    </div>

    {/* Visual Telemetry Chart */}
    <div className="my-2 h-[80px] sm:h-[100px] w-full relative flex items-end">
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bcea3e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#bcea3e" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {/* Background Grid Lines */}
        <line x1="0" y1="25" x2="300" y2="25" stroke="white" strokeOpacity="0.06" strokeDasharray="3 3" />
        <line x1="0" y1="60" x2="300" y2="60" stroke="white" strokeOpacity="0.06" strokeDasharray="3 3" />
        <line x1="0" y1="90" x2="300" y2="90" stroke="white" strokeOpacity="0.06" strokeDasharray="3 3" />
        {/* Gradient Area */}
        <path
          d="M0 80 Q 50 65, 90 70 T 170 40 T 230 35 T 300 15 L 300 100 L 0 100 Z"
          fill="url(#growthGrad)"
        />
        {/* Neon Line */}
        <path
          d="M0 80 Q 50 65, 90 70 T 170 40 T 230 35 T 300 15"
          stroke="#bcea3e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="300" cy="15" r="4" fill="#bcea3e" />
        <circle cx="300" cy="15" r="8" fill="#bcea3e" fillOpacity="0.3" />
      </svg>
    </div>

    {/* Metric Strip */}
    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] sm:text-[11px] font-mono">
      <div className="flex items-center gap-1.5">
        <span className="text-[#899698]">INGESTION:</span>
        <span className="font-bold text-white">4.2B events/day</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[#899698]">LATENCY:</span>
        <span className="font-bold text-[var(--primary-color)]">28ms p99</span>
      </div>
      <div className="hidden sm:flex items-center gap-1.5">
        <span className="text-[#899698]">VELOCITY:</span>
        <span className="font-bold text-white">+148%</span>
      </div>
    </div>
  </div>
);

const MarketMagnetMockup: React.FC = () => (
  <div className="w-full aspect-[16/10] rounded-xl bg-[#080d0d]/90 backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between select-none">
    {/* Window Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-[#899698] tracking-widest uppercase">
          CHECKOUT ENGINE
        </span>
        <span className="text-[10px] font-mono text-[var(--primary-color)]">
          ● CONVERSION ACTIVE
        </span>
      </div>
    </div>

    {/* Conversion Funnel Bar Grid */}
    <div className="my-2 h-[80px] sm:h-[100px] w-full flex items-end justify-between gap-2 px-2">
      {[
        { label: 'VISITORS', height: '90%', val: '1.4M' },
        { label: 'CATALOG', height: '74%', val: '980K' },
        { label: 'CART', height: '52%', val: '420K' },
        { label: 'CHECKOUT', height: '40%', val: '280K' },
        { label: 'REVENUE', height: '82%', val: '$2.48M', highlight: true },
      ].map((bar, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
          <span className="text-[9px] font-mono text-white/70">{bar.val}</span>
          <div
            className={cn(
              'w-full rounded-t-sm transition-all duration-500',
              bar.highlight
                ? 'bg-[var(--primary-color)] shadow-[0_0_12px_rgba(188,234,62,0.6)]'
                : 'bg-white/15'
            )}
            style={{ height: bar.height }}
          />
          <span className="text-[8px] font-mono text-[#899698] truncate w-full text-center">
            {bar.label}
          </span>
        </div>
      ))}
    </div>

    {/* Metric Strip */}
    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] sm:text-[11px] font-mono">
      <div className="flex items-center gap-1.5">
        <span className="text-[#899698]">CONVERSION:</span>
        <span className="font-bold text-[var(--primary-color)]">4.92% (+142%)</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[#899698]">REVENUE:</span>
        <span className="font-bold text-white">$2,480,900</span>
      </div>
    </div>
  </div>
);

const MarketMotionMockup: React.FC = () => (
  <div className="w-full aspect-[16/10] rounded-xl bg-[#080d0d]/90 backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between select-none">
    {/* Window Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
      </div>
      <span className="text-[10px] font-mono text-[var(--primary-color)]">
        ● 60 FPS WEBGL
      </span>
    </div>

    {/* Waveform Visualization */}
    <div className="my-2 h-[75px] sm:h-[90px] w-full flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 240 70" fill="none">
        <path
          d="M0 35 Q 30 10, 60 35 T 120 35 T 180 35 T 240 35"
          stroke="#7970ff"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        <path
          d="M0 35 Q 30 55, 60 35 T 120 35 T 180 35 T 240 35"
          stroke="#bcea3e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* Metric Strip */}
    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] font-mono">
      <span className="text-[#899698]">12 DRAW CALLS</span>
      <span className="font-bold text-[var(--primary-color)]">2.1ms RENDER</span>
    </div>
  </div>
);

const TidalStrategyMockup: React.FC = () => (
  <div className="w-full aspect-[16/10] rounded-xl bg-[#080d0d]/90 backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between select-none">
    {/* Window Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
      </div>
      <span className="text-[10px] font-mono text-[var(--primary-color)]">
        ● SOC2 COMPLIANT
      </span>
    </div>

    {/* Financial Candlestick / Settlement Graph */}
    <div className="my-2 h-[75px] sm:h-[90px] w-full flex items-end justify-around px-1">
      {[35, 50, 42, 68, 55, 80, 72, 95].map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
          <div className="w-[1px] h-3 bg-white/30" />
          <div
            className={cn(
              'w-2 rounded-xs',
              i >= 5 ? 'bg-[var(--primary-color)]' : 'bg-white/20'
            )}
            style={{ height: `${h * 0.6}%` }}
          />
          <div className="w-[1px] h-2 bg-white/30" />
        </div>
      ))}
    </div>

    {/* Metric Strip */}
    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] font-mono">
      <span className="text-[#899698]">COLLATERAL:</span>
      <span className="font-bold text-white">$84.2M</span>
      <span className="font-bold text-[var(--primary-color)]">&lt; 12ms SETTLE</span>
    </div>
  </div>
);

const TrendBeaconMockup: React.FC = () => (
  <div className="w-full aspect-[16/10] rounded-xl bg-[#080d0d]/90 backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between select-none">
    {/* Window Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d2b]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f0c242]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#bcea3e]" />
      </div>
      <span className="text-[10px] font-mono text-[var(--primary-color)]">
        ● VECTOR INGESTION
      </span>
    </div>

    {/* Neural Cluster Graph */}
    <div className="my-2 h-[75px] sm:h-[90px] w-full relative flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 200 80" fill="none">
        <line x1="40" y1="40" x2="100" y2="40" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
        <line x1="100" y1="40" x2="160" y2="20" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
        <line x1="100" y1="40" x2="160" y2="60" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="40" cy="40" r="5" fill="white" fillOpacity="0.3" />
        <circle cx="100" cy="40" r="8" fill="#bcea3e" />
        <circle cx="100" cy="40" r="14" fill="#bcea3e" fillOpacity="0.25" />
        <circle cx="160" cy="20" r="5" fill="white" fillOpacity="0.5" />
        <circle cx="160" cy="60" r="5" fill="white" fillOpacity="0.5" />
      </svg>
    </div>

    {/* Metric Strip */}
    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] font-mono">
      <span className="text-[#899698]">PRECISION: 99.4%</span>
      <span className="font-bold text-[var(--primary-color)]">200+ CHANNELS</span>
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
 * 1:1 Parity Rebuild with Scalient:
 * 1. Expanding capsule pill between "WOR" and "KS" with scrubbed scroll-trigger
 * 2. Card Scroll Curtain Reveal Animation with clipPath: inset(100% 0% 0% 0%) to inset(0% 0% 0% 0%)
 * 3. Exact 2-Row Layout: Row 1 has 2 large cards, Row 2 has 3 cards on light canvas (#f4f4f6)
 * 4. Micro-interactions: scale(1.04) on hover, diagonal arrow translation, and bottom metadata strip
 */
export const BestWorksSection: React.FC<BestWorksSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headlineBoxRef = useRef<HTMLSpanElement>(null);
  const accentSquareRef = useRef<HTMLSpanElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Header Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Requirement 1: Headline "OUR BEST WORKS" expanding pill scrubbed with ScrollTrigger (from 50px to 130px)
      if (headlineBoxRef.current && headerRef.current) {
        gsap.fromTo(
          headlineBoxRef.current,
          { width: 50 },
          {
            width: 130,
            ease: 'none',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 0.8,
            },
          }
        );
      }

      // Inner glowing lime square indicator
      if (accentSquareRef.current && headerRef.current) {
        gsap.fromTo(
          accentSquareRef.current,
          { rotation: -45, scale: 0.8 },
          {
            rotation: 45,
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 0.8,
            },
          }
        );
      }

      // Requirement 2: Card Scroll Curtain Reveal Animation
      // from: { clipPath: "inset(100% 0% 0% 0%)", y: 40, opacity: 0 }
      // to: { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1, duration: 1.1, ease: "power3.out", stagger: 0.18, clearProps: "all" }
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.work-card-item');
        gsap.fromTo(
          cards,
          {
            clipPath: 'inset(100% 0% 0% 0%)',
            y: 40,
            opacity: 0,
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.18,
            clearProps: 'all',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 3. Bottom CTA reveal
      if (bottomCtaRef.current) {
        gsap.fromTo(
          bottomCtaRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: bottomCtaRef.current,
              start: 'top 92%',
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
      id="works"
      aria-label="Our Best Works"
      className={cn(
        'section work relative bg-[#f4f4f6] text-[#080d0d] py-20 sm:py-28 lg:py-32 overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/10 mb-4 text-xs font-semibold uppercase tracking-wider text-[#080d0d] select-none">
              <Layers className="w-3.5 h-3.5 text-[#080d0d]" />
              <span>Selected Portfolio</span>
            </div>

            {/* Segmented Typography Header with Expanding Pill Capsule */}
            <h2 className="text-[44px] sm:text-[68px] md:text-[96px] lg:text-[120px] font-black tracking-tight leading-[0.94] text-[#080d0d] uppercase flex flex-col select-none">
              <span>OUR BEST</span>
              <span className="inline-flex items-center gap-2 sm:gap-3.5 flex-wrap">
                <span>WOR</span>
                <span
                  ref={headlineBoxRef}
                  className="inline-flex items-center justify-center h-[34px] sm:h-[50px] md:h-[68px] lg:h-[76px] rounded-full bg-[#080d0d] border border-black/10 overflow-hidden relative align-middle shadow-md will-change-[width]"
                  style={{ width: '50px' }}
                >
                  <span
                    ref={accentSquareRef}
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-md bg-[var(--primary-color)] shadow-[0_0_14px_rgba(188,234,62,0.85)] will-change-transform"
                  />
                </span>
                <span>KS</span>
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#6f7781] font-normal leading-relaxed max-w-[480px]">
            Selected case studies showcasing enterprise SaaS architectures, conversion-engineered digital platforms, and kinetic brand systems.
          </p>
        </div>

        {/* Exact 2-Row Project Cards Grid (Requirement 3) */}
        {/* Row 1: 2 large cards (lg:col-span-6) | Row 2: 3 cards (lg:col-span-4) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => {
            const isRow1 = index < 2;
            const spanClass = isRow1
              ? 'lg:col-span-6 col-span-12'
              : 'lg:col-span-4 md:col-span-6 col-span-12';

            return (
              <div
                key={project.id}
                className={cn('work-card-item group relative', spanClass)}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block h-full rounded-3xl bg-white border border-black/10 hover:border-black/20 transition-all duration-500 overflow-hidden shadow-md hover:shadow-2xl flex flex-col justify-between"
                >
                  {/* Inner Card Visual Canvas (Dark theme #0c0f12) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0f12] flex items-center justify-center p-6 sm:p-8">
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

                    {/* Circular Arrow Button on Top-Right (Requirement 4) */}
                    <div className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:bg-[var(--primary-color)] group-hover:text-[#080d0d] group-hover:border-[var(--primary-color)] group-hover:scale-105">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    {/* Inner Dashboard Mockup with scale(1.04) on Hover (Requirement 4 & 5) */}
                    <div className="relative z-10 w-full max-w-[440px] transition-transform duration-500 ease-out group-hover:scale-[1.04] will-change-transform">
                      {getProjectMockup(project.id)}
                    </div>
                  </div>

                  {/* Bottom Meta Strip (Requirement 3) */}
                  <div className="p-6 sm:p-7 flex items-center justify-between bg-white border-t border-black/5">
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
        <div ref={bottomCtaRef} className="mt-14 sm:mt-16 flex justify-center">
          <Button variant="primary" size="default" href="/work">
            View Works
          </Button>
        </div>
      </div>
    </section>
  );
};
