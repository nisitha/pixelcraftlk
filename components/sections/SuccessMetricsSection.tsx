'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SuccessMetricsSectionProps {
  className?: string;
}

interface FallingPill {
  id: string;
  text: string;
  bg: string;
  textColor: string;
  borderClass: string;
  rotation: number;
  zIndex: number;
  desktopClass: string;
}

const fallingPills: FallingPill[] = [
  {
    id: 'strategic-agency',
    text: 'Strategic Agency',
    bg: '#ffffff',
    textColor: '#080d0d',
    borderClass: 'border-black/5',
    rotation: -12,
    zIndex: 10,
    desktopClass: 'lg:left-[2%] lg:top-[38%]',
  },
  {
    id: 'results-driven',
    text: 'Results- driven',
    bg: '#c8f53c',
    textColor: '#080d0d',
    borderClass: 'border-black/5',
    rotation: -24,
    zIndex: 20,
    desktopClass: 'lg:left-[17%] lg:top-[22%]',
  },
  {
    id: 'influential',
    text: 'Influential',
    bg: '#ff5722',
    textColor: '#ffffff',
    borderClass: 'border-transparent',
    rotation: -8,
    zIndex: 12,
    desktopClass: 'lg:left-[32%] lg:top-[8%]',
  },
  {
    id: 'innovation-driven',
    text: 'Innovation Driven',
    bg: '#ffffff',
    textColor: '#080d0d',
    borderClass: 'border-black/5',
    rotation: 4,
    zIndex: 16,
    desktopClass: 'lg:left-[30%] lg:top-[48%]',
  },
  {
    id: 'multidimensional',
    text: 'Multidimensional',
    bg: 'rgba(255, 255, 255, 0.12)',
    textColor: '#ffffff',
    borderClass: 'border-white/20 backdrop-blur-md',
    rotation: -32,
    zIndex: 22,
    desktopClass: 'lg:left-[43%] lg:top-[20%]',
  },
  {
    id: 'strategic-minded',
    text: 'Strategic - minded',
    bg: '#cbe836',
    textColor: '#080d0d',
    borderClass: 'border-black/5',
    rotation: -10,
    zIndex: 30,
    desktopClass: 'lg:left-[55%] lg:top-[52%]',
  },
  {
    id: 'result-oriented',
    text: 'Result oriented',
    bg: '#7966f8',
    textColor: '#ffffff',
    borderClass: 'border-transparent',
    rotation: -8,
    zIndex: 24,
    desktopClass: 'lg:left-[67%] lg:top-[22%]',
  },
];

/**
 * Section 8: The Numbers Behind Success
 * 1:1 Parity with https://scalient.webflow.io/
 * - Bold geometric section title with top-right description & lime CTA button
 * - 3 Bento Stat Cards (Lime 500K Users, White 98%, Dark Charcoal 23K) with animated counters
 * - 7 Falling colorful pill badges with staggered gravity drop physics and resting rotations
 */
export const SuccessMetricsSection: React.FC<SuccessMetricsSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const pillsContainerRef = useRef<HTMLDivElement>(null);

  const [hasAnimated, setHasAnimated] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasAnimated(true);
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Activate number counters
      ScrollTrigger.create({
        trigger: cardsRef.current || sectionRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => setHasAnimated(true),
      });

      // 2. Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
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

      // 3. Staggered Bento Cards entrance
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.metric-bento-card');
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 4. Staggered Gravity Drop Animation for the 7 Falling Badges
      if (pillsContainerRef.current) {
        const labels = pillsContainerRef.current.querySelectorAll<HTMLElement>('.falling-label-pill');
        if (labels && labels.length > 0) {
          gsap.fromTo(
            labels,
            {
              y: -160,
              opacity: 0,
              rotation: (index: number) => {
                const resting = fallingPills[index]?.rotation ?? 0;
                return resting - 15;
              },
            },
            {
              y: 0,
              opacity: 1,
              rotation: (index: number) => fallingPills[index]?.rotation ?? 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'back.out(1.8)',
              clearProps: 'opacity',
              scrollTrigger: {
                trigger: pillsContainerRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="metrics"
      aria-label="The Numbers Behind Success"
      className={cn(
        'section number relative bg-[#080d0d] text-white py-14 sm:py-24 lg:py-36 overflow-hidden border-t border-white/5',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16 lg:mb-20"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.04] text-white">
              The Numbers
              <br />
              Behind Success
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8">
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-[340px] leading-relaxed font-normal">
              Strategy, creativity, and growth - the engine for every bold idea.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#c8f53c] hover:bg-[#b8e52c] text-[#080d0d] font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,245,60,0.4)] group shrink-0 w-full sm:w-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 3 Bento Stat Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20 lg:mb-24"
        >
          {/* Card 1: Lime Accent (#c8f53c) */}
          <div className="metric-bento-card rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] bg-[#c8f53c] p-6 sm:p-8 lg:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] shadow-2xl transition-transform duration-300 hover:-translate-y-1.5">
            <div className="flex items-start whitespace-nowrap">
              <span className="text-[48px] sm:text-[68px] lg:text-[84px] xl:text-[96px] font-bold tracking-tight leading-none text-[#080d0d]">
                <AnimatedCounter
                  numericTarget={500}
                  suffix="K"
                  fallbackValue="500K"
                  shouldStart={hasAnimated}
                  duration={1800}
                />
              </span>
              <span className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#080d0d] ml-1.5 sm:ml-2 mt-1 whitespace-nowrap">
                Users
              </span>
            </div>
            <p className="text-xs sm:text-base md:text-[17px] font-normal leading-relaxed text-[#080d0d]/85 pt-6 sm:pt-8 mt-auto">
              We offer flexible, custom-fit plans designed to meet the unique needs and budget of your team
            </p>
          </div>

          {/* Card 2: Pure White (#ffffff) */}
          <div className="metric-bento-card rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] shadow-2xl transition-transform duration-300 hover:-translate-y-1.5">
            <div className="flex items-start whitespace-nowrap">
              <span className="text-[48px] sm:text-[68px] lg:text-[84px] xl:text-[96px] font-bold tracking-tight leading-none text-[#080d0d]">
                <AnimatedCounter
                  numericTarget={98}
                  suffix=""
                  fallbackValue="98"
                  shouldStart={hasAnimated}
                  duration={1800}
                />
              </span>
              <span className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#080d0d] ml-1 mt-1 whitespace-nowrap">
                %
              </span>
            </div>
            <p className="text-xs sm:text-base md:text-[17px] font-normal leading-relaxed text-[#555e61] pt-6 sm:pt-8 mt-auto">
              Our commitment to quality shines through near 98.05%
            </p>
          </div>

          {/* Card 3: Dark Charcoal/Black (#101316) */}
          <div className="metric-bento-card rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] bg-[#101316] border border-white/10 p-6 sm:p-8 lg:p-12 flex flex-col justify-between min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] shadow-2xl transition-transform duration-300 hover:-translate-y-1.5">
            <div className="flex items-start whitespace-nowrap">
              <span className="text-[48px] sm:text-[68px] lg:text-[84px] xl:text-[96px] font-bold tracking-tight leading-none text-white">
                <AnimatedCounter
                  numericTarget={23}
                  suffix=""
                  fallbackValue="23"
                  shouldStart={hasAnimated}
                  duration={1800}
                />
              </span>
              <span className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white ml-1 mt-1 whitespace-nowrap">
                K
              </span>
            </div>
            <p className="text-xs sm:text-base md:text-[17px] font-normal leading-relaxed text-[#899698] pt-6 sm:pt-8 mt-auto">
              Organic growth brings in twenty-three thousand signups
            </p>
          </div>
        </div>

        {/* Falling / Dropping Colorful Labels Cluster */}
        <div className="relative mt-6 sm:mt-12 lg:mt-16 w-full max-w-full overflow-hidden">
          {/* Subtle ambient diffuse glow */}
          <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
            <div className="w-[300px] sm:w-[600px] lg:w-[800px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(200,245,60,0.08)_0%,transparent_70%)] blur-3xl" />
          </div>

          <div
            ref={pillsContainerRef}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 lg:block relative min-h-[140px] sm:min-h-[180px] lg:min-h-[260px] w-full max-w-[1240px] mx-auto px-1 sm:px-4"
          >
            {fallingPills.map((pill) => (
              <div
                key={pill.id}
                data-rotation={pill.rotation}
                style={{
                  backgroundColor: pill.bg,
                  color: pill.textColor,
                  zIndex: pill.zIndex,
                  transform: `rotate(${pill.rotation}deg)`,
                }}
                className={cn(
                  'falling-label-pill relative lg:absolute px-4 sm:px-7 lg:px-10 py-2 sm:py-3.5 lg:py-4 rounded-full font-semibold text-xs sm:text-base lg:text-[19px] whitespace-nowrap shadow-xl border cursor-default select-none transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-lg:rotate-[-3deg] max-lg:even:rotate-[3deg]',
                  pill.borderClass,
                  pill.desktopClass
                )}
              >
                {pill.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
