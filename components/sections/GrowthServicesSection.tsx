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
  const iconClass = "w-6 h-6 text-[var(--primary-color)] group-hover:text-[#080d0d] transition-colors duration-300";
  switch (icon) {
    case 'strategy':
      return <Compass className={iconClass} />;
    case 'automation':
      return <Cpu className={iconClass} />;
    case 'design':
      return <Palette className={iconClass} />;
    case 'cloud':
      return <Activity className={iconClass} />;
    default:
      return <Compass className={iconClass} />;
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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card-item');
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
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

        {/* 4 Feature Service Cards (4-Column Layout matching Scalient) */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {growthServices.map((service, index) => (
            <div
              key={service.id}
              className="service-card-item group relative rounded-3xl bg-[#111616] text-white border border-white/10 hover:bg-white hover:text-[#080d0d] hover:border-white hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-500 ease-out p-6 sm:p-7 shadow-2xl flex flex-col justify-between cursor-pointer min-h-[380px]"
            >
              <div>
                {/* Upper Row: Icon Badge & Number Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary-color)]/15 border border-[var(--primary-color)]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#080d0d] group-hover:border-[#080d0d] transition-all duration-300 shadow-md">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#6f7781] group-hover:text-[#6f7781] transition-colors">
                    {`0${index + 1}`}
                  </span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-[var(--primary-color)] group-hover:text-[#6f7781] font-semibold transition-colors">
                  {service.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#080d0d] mt-1.5 mb-3 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-[#899698] group-hover:text-[#475354] font-normal leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Bottom Action Row */}
              <div className="mt-6 pt-5 border-t border-white/10 group-hover:border-black/10 flex items-center justify-between transition-colors">
                <Link
                  href={`/service/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white group-hover:text-[#080d0d] transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#899698] group-hover:bg-[#080d0d] group-hover:text-[var(--primary-color)] group-hover:border-[#080d0d] group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
