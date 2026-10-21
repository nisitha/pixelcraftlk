'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Sparkles } from 'lucide-react';
import { pricingPlans } from '@/data/homepage';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface PricingPlansSectionProps {
  className?: string;
}

/**
 * Section 7: Pricing & Plans (.section.plan)
 * Monthly/Yearly toggle switcher with discount tag + 3 tiered cards and feature checklists
 */
export const PricingPlansSection: React.FC<PricingPlansSectionProps> = ({ className }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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
        const cards = cardsRef.current.querySelectorAll('.pricing-card-item');
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
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
      id="pricing"
      aria-label="Pricing and Plans"
      className={cn(
        'section plan relative bg-[var(--dark-color)] text-white py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-white/5',
        className
      )}
    >
      {/* Giant Faint PRICING Watermark Text (1:1 Scalient Parity) */}
      <div
        aria-hidden="true"
        className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 select-none pointer-events-none text-white/[0.03] font-black text-[140px] sm:text-[220px] md:text-[280px] tracking-widest uppercase leading-none z-0"
      >
        PRICING
      </div>

      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111616] border border-[var(--primary-color)]/50 mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)] select-none">
            <span>Our Plans</span>
          </div>

          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.035em] leading-[1.08] text-white">
            Pricing and Plans <br className="hidden sm:inline" />
            Tailored to any Team
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#899698] font-normal leading-relaxed max-w-[620px]">
            We offer flexible, custom-fit plans designed to meet the unique needs and budget of your team.
          </p>

          {/* Interactive Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#111616] border border-white/10 shadow-lg relative select-none">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300',
                billingCycle === 'monthly'
                  ? 'bg-[var(--primary-color)] text-[#080d0d] shadow-md'
                  : 'text-[#899698] hover:text-white'
              )}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={cn(
                'relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300',
                billingCycle === 'yearly'
                  ? 'bg-[var(--primary-color)] text-[#080d0d] shadow-md'
                  : 'text-[#899698] hover:text-white'
              )}
            >
              <span>Yearly</span>
              <span
                className={cn(
                  'text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full transition-colors',
                  billingCycle === 'yearly'
                    ? 'bg-[#080d0d] text-[var(--primary-color)]'
                    : 'bg-[var(--primary-color)] text-[#080d0d]'
                )}
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Tier Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={plan.id}
                className={cn(
                  'pricing-card-item relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-400 shadow-2xl overflow-hidden',
                  plan.isPopular
                    ? 'bg-[#151a1a] border border-[var(--primary-color)]/50 shadow-[0_0_50px_rgba(188,234,62,0.14)] -translate-y-2 lg:-translate-y-3'
                    : 'bg-[#111616] border border-white/10 hover:border-white/20'
                )}
              >
                {/* Popular Tier Inner Bottom Ambient Lime Glow */}
                {plan.isPopular && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-48 pointer-events-none rounded-b-3xl"
                    style={{
                      background: 'radial-gradient(ellipse at 50% 100%, rgba(188, 234, 62, 0.2) 0%, transparent 75%)',
                    }}
                  />
                )}

                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--primary-color)] text-[#080d0d] text-xs font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                  </div>

                  <p className="text-sm text-[#899698] font-normal leading-relaxed min-h-[42px]">
                    {plan.description}
                  </p>

                  {/* Price Row */}
                  <div className="mt-6 mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans transition-all duration-300">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-[#899698]">
                      / per month
                    </span>
                  </div>

                  {/* Button at top of features (1:1 Scalient layout) */}
                  <div className="mb-8">
                    <Button
                      variant={plan.isPopular ? 'primary' : 'white'}
                      size="default"
                      href={plan.ctaHref}
                      className="w-full justify-center"
                    >
                      Get Started
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#6f7781] block mb-2 font-semibold">
                      Features
                    </span>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-white/90">
                        <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
