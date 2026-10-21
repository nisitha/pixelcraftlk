'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { successMetrics, strategicPills } from '@/data/homepage';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface SuccessMetricsSectionProps {
  className?: string;
}

/**
 * Section 8: Metrics & Success Numbers (.section.number)
 * H2 "The Numbers Behind Success" + scroll-triggered numeric counters + strategic trait pills
 */
export const SuccessMetricsSection: React.FC<SuccessMetricsSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const metricsGridRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  const [hasAnimated, setHasAnimated] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. ScrollTrigger to activate smooth number counters
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => setHasAnimated(true),
      });

      // 2. Header reveal
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      // 3. Staggered Metric Cards entrance
      if (metricsGridRef.current) {
        const cards = metricsGridRef.current.querySelectorAll('.metric-card-item');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: metricsGridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // 4. Staggered Strategic Badges entrance
      if (pillsRef.current) {
        const pills = pillsRef.current.children;
        gsap.from(pills, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillsRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
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
        'section number relative bg-[#090e0e] text-white py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-white/5',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)] select-none">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Performance</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.035em] leading-[1.08] text-white">
              The Numbers Behind{' '}
              <span className="font-script font-normal text-[var(--primary-color)] text-[46px] sm:text-[62px] md:text-[72px] italic">
                success
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-base sm:text-lg text-[#899698] font-normal leading-relaxed max-w-[420px]">
              Strategy, creativity, and engineering—the engine powering every bold digital idea.
            </p>
            <Button variant="primary" size="default" href="/contact">
              Get Started
            </Button>
          </div>
        </div>

        {/* 4 Animated Metric Cards Grid */}
        <div ref={metricsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {successMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="metric-card-item rounded-3xl bg-[#111616] border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all duration-300 group"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#6f7781] block mb-4">
                  METRIC // 0{index + 1}
                </span>

                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                  <AnimatedCounter
                    numericTarget={metric.numericTarget ?? 0}
                    suffix={metric.suffix ?? ''}
                    decimals={metric.decimals ?? 0}
                    fallbackValue={metric.value}
                    shouldStart={hasAnimated}
                  />
                </div>

                <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                  {metric.label}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#899698] font-normal leading-relaxed mt-4 pt-4 border-t border-white/5">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Trait Badges Row */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-xs font-mono uppercase tracking-widest text-[#6f7781] text-center mb-6">
            CORE AGENCY CAPABILITIES
          </div>

          <div ref={pillsRef} className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {strategicPills.map((pill) => (
              <div
                key={pill}
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[var(--primary-color)]/30 hover:bg-white/[0.07] text-xs sm:text-sm font-medium text-white/90 transition-all duration-300 select-none cursor-default"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
