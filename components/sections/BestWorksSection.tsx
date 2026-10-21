'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';
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
 * Section 4: Best Works Showcase (.section.work)
 * Segmented typography header + 5 interactive project showcase cards with hover zoom and "View Project" action
 */
export const BestWorksSection: React.FC<BestWorksSectionProps> = ({ className }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 35,
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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.work-card-item');
        gsap.from(cards, {
          y: 45,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
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
      id="works"
      aria-label="Our Best Works"
      className={cn(
        'section work relative bg-[var(--dark-color)] text-white py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-white/5',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)] select-none">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>

            {/* Segmented Typography Header matching reference */}
            <h2 className="text-[44px] sm:text-[68px] md:text-[96px] lg:text-[120px] font-black tracking-tight leading-[0.94] text-white uppercase flex flex-col">
              <span>OUR BEST</span>
              <span className="inline-flex items-center gap-2 sm:gap-3 flex-wrap">
                <span>WOR</span>
                <span className="inline-flex items-center justify-center w-[54px] sm:w-[80px] md:w-[108px] h-[32px] sm:h-[48px] md:h-[64px] rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 overflow-hidden relative align-middle shadow-inner">
                  <span className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-md bg-[var(--primary-color)] shadow-[0_0_12px_rgba(188,234,62,0.6)]" />
                </span>
                <span>KS</span>
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#899698] font-normal leading-relaxed max-w-[480px]">
            Selected case studies showcasing enterprise SaaS architectures, conversion-engineered digital platforms, and kinetic brand systems.
          </p>
        </div>

        {/* 5 Project Cards Grid (Audited Asymmetric Composition) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => {
            // First two cards are wide 6-column, 3rd is full width or 7-column, 4th & 5th are 5 & 7 column
            const spanClass =
              index === 0
                ? 'lg:col-span-7'
                : index === 1
                ? 'lg:col-span-5'
                : index === 2
                ? 'lg:col-span-4'
                : index === 3
                ? 'lg:col-span-4'
                : 'lg:col-span-4';

            return (
              <div
                key={project.id}
                className={cn('work-card-item group relative', spanClass)}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block h-full rounded-3xl bg-[#111616] border border-white/10 hover:border-[var(--primary-color)]/40 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between"
                >
                  {/* Card Visual Canvas */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0d1212] flex items-center justify-center p-6 sm:p-8">
                    {/* Abstract ambient backdrop with project gradient */}
                    <div
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out',
                        project.gradient
                      )}
                    />

                    {/* Subtle grid texture overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />

                    {/* Central 3D / Architectural Telemetry UI Graphic */}
                    <div className="relative z-10 w-full max-w-[340px] aspect-[16/10] rounded-xl bg-[#080d0d]/80 backdrop-blur-md border border-white/15 p-4 shadow-2xl flex flex-col justify-between transform transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ff5d2b]" />
                          <span className="w-2 h-2 rounded-full bg-[#f0c242]" />
                          <span className="w-2 h-2 rounded-full bg-[#bcea3e]" />
                        </div>
                        <span className="text-[10px] font-mono text-[#899698] tracking-widest uppercase">
                          {project.client}
                        </span>
                      </div>

                      <div className="py-2">
                        <span className="text-xs font-semibold text-white tracking-tight">
                          {project.title}
                        </span>
                        <p className="text-[11px] text-[#899698] line-clamp-2 mt-1 leading-snug">
                          {project.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-[#899698]">
                        <span className="font-mono text-[var(--primary-color)]">● ACTIVE PRODUCTION</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Floating Category Pill Badge */}
                    <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-white shadow-lg">
                      <Sparkles className="w-3 h-3 text-[var(--primary-color)]" />
                      <span>{project.category}</span>
                    </div>

                    {/* Floating "View Project" Pill Action on Hover */}
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white text-[#080d0d] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:bg-[var(--primary-color)] group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#111616]">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--primary-color)]">
                          {project.category}
                        </span>
                        <span className="text-xs text-[#6f7781] font-mono">{project.year}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-[var(--primary-color)] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-[#899698] font-normal leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[11px] font-medium text-[#899698]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <Button variant="secondary" size="default" href="/work">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};
