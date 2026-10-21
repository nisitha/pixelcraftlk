'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Compass, Cpu, Palette, Activity, CheckCircle2 } from 'lucide-react';
import { growthServices, ServiceItem } from '@/data/homepage';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface GrowthServicesSectionProps {
  className?: string;
}

const getServiceIcon = (icon: ServiceItem['icon']) => {
  switch (icon) {
    case 'strategy':
      return <Compass className="w-6 h-6 text-[var(--primary-color)]" />;
    case 'automation':
      return <Cpu className="w-6 h-6 text-[var(--primary-color)]" />;
    case 'design':
      return <Palette className="w-6 h-6 text-[var(--primary-color)]" />;
    case 'cloud':
      return <Activity className="w-6 h-6 text-[var(--primary-color)]" />;
    default:
      return <Compass className="w-6 h-6 text-[var(--primary-color)]" />;
  }
};

/**
 * Section 6: Growth Solutions / Services (.section.growth)
 * H2 "Solutions Tailored for Your Growth" + 4 feature cards with vector iconography, deliverables, and hover elevation
 */
export const GrowthServicesSection: React.FC<GrowthServicesSectionProps> = ({ className }) => {
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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card-item');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
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
      id="services"
      aria-label="Solutions Tailored for Your Growth"
      className={cn(
        'section growth relative bg-[var(--dark-color)] text-white py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-white/5',
        className
      )}
    >
      {/* Ambient background soft glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-[500px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(188, 234, 62, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Header Block */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)] select-none">
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.035em] leading-[1.08] text-white max-w-[680px]">
              Solutions Tailored for Your{' '}
              <span className="font-script font-normal text-[var(--primary-color)] text-[46px] sm:text-[62px] md:text-[72px] italic">
                growth
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-base sm:text-lg text-[#899698] font-normal leading-relaxed max-w-[420px]">
              We fuel bold ideas, driving them forward with sharp strategy, design excellence, and scalable engineering.
            </p>
            <Button variant="primary" size="default" href="/contact">
              Get Started
            </Button>
          </div>
        </div>

        {/* 4 Feature Service Cards (2x2 Grid) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {growthServices.map((service, index) => (
            <div
              key={service.id}
              className="service-card-item group relative rounded-3xl bg-[#111616] border border-white/10 hover:border-[var(--primary-color)]/30 hover:bg-[#151a1a] transition-all duration-400 p-7 sm:p-9 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Upper Row: Icon Badge & Number Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/25 flex items-center justify-center group-hover:scale-105 group-hover:bg-[var(--primary-color)]/15 transition-all duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#6f7781]">
                    {`0${index + 1} //`}
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-[var(--primary-color)] font-medium">
                  {service.category}
                </span>

                <h3 className="text-2xl sm:text-[26px] font-semibold text-white tracking-tight mt-1 mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-base text-[#899698] font-normal leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary-color)] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/service/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[var(--primary-color)] transition-colors"
                >
                  <span>Explore Service Architecture</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#899698] group-hover:bg-[var(--primary-color)] group-hover:text-[#080d0d] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
