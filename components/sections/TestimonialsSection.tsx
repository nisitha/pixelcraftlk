'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Star, Quote, MessageSquare } from 'lucide-react';
import { clientTestimonials } from '@/data/homepage';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TestimonialsSectionProps {
  className?: string;
}

/**
 * Section 9: Feedback & Testimonials (.section.feedback)
 * H2 "Real People, Real Results Feedback" + interactive multi-card testimonial carousel with ratings and controls
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const total = clientTestimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

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

      if (sliderRef.current) {
        gsap.fromTo(
          sliderRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: sliderRef.current,
              start: 'top 82%',
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
      id="feedback"
      aria-label="Real People, Real Results Feedback"
      className={cn(
        'section feedback relative bg-[#f4f4f6] text-[#080d0d] py-20 sm:py-28 lg:py-32 overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold tracking-tight leading-[1.08] text-[#080d0d]">
            Real People, Real <br />
            Results Feedback
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6f7781] font-normal leading-relaxed">
            See what our users are truly accomplishing with honest, and project-based reviews.
          </p>
        </div>

        {/* 3D Stacked Card Deck (1:1 Scalient Parity) */}
        <div ref={sliderRef} className="relative max-w-xl mx-auto h-[440px] sm:h-[420px] flex items-center justify-center">
          {/* Card 1: Dark Card (Back) */}
          <div
            className={cn(
              'absolute inset-0 rounded-3xl p-8 sm:p-10 bg-[#080d0d] text-white shadow-2xl flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer',
              currentIndex % 3 === 2
                ? 'z-30 scale-100 rotate-0 translate-y-0 opacity-100'
                : currentIndex % 3 === 1
                ? 'z-10 scale-95 rotate-3 -translate-y-4 opacity-75'
                : 'z-10 scale-95 -rotate-3 -translate-y-4 opacity-75'
            )}
            onClick={handleNext}
          >
            <div>
              <div className="text-3xl text-[var(--primary-color)] font-serif mb-4">❝</div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-white/95">
                {clientTestimonials[0]?.quote}
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-6 border-t border-white/10">
              <div className="w-11 h-11 rounded-full bg-[var(--primary-color)] text-[#080d0d] font-bold flex items-center justify-center text-sm shadow">
                {clientTestimonials[0]?.initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{clientTestimonials[0]?.author}</h4>
                <p className="text-xs text-[#899698]">{clientTestimonials[0]?.role} — {clientTestimonials[0]?.company}</p>
              </div>
            </div>
          </div>

          {/* Card 2: Purple Card (Middle) */}
          <div
            className={cn(
              'absolute inset-0 rounded-3xl p-8 sm:p-10 bg-[#7970ff] text-white shadow-2xl flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer',
              currentIndex % 3 === 1
                ? 'z-30 scale-100 rotate-0 translate-y-0 opacity-100'
                : currentIndex % 3 === 0
                ? 'z-20 scale-98 rotate-2 -translate-y-2 opacity-90'
                : 'z-10 scale-95 -rotate-2 -translate-y-4 opacity-75'
            )}
            onClick={handleNext}
          >
            <div>
              <div className="text-3xl text-white font-serif mb-4">❝</div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-white">
                {clientTestimonials[1]?.quote}
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-6 border-t border-white/20">
              <div className="w-11 h-11 rounded-full bg-white text-[#7970ff] font-bold flex items-center justify-center text-sm shadow">
                {clientTestimonials[1]?.initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{clientTestimonials[1]?.author}</h4>
                <p className="text-xs text-white/80">{clientTestimonials[1]?.role} — {clientTestimonials[1]?.company}</p>
              </div>
            </div>
          </div>

          {/* Card 3: Electric Lime Card (Front) */}
          <div
            className={cn(
              'absolute inset-0 rounded-3xl p-8 sm:p-10 bg-[var(--primary-color)] text-[#080d0d] shadow-2xl flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer',
              currentIndex % 3 === 0
                ? 'z-30 scale-100 rotate-0 translate-y-0 opacity-100'
                : currentIndex % 3 === 2
                ? 'z-20 scale-98 rotate-3 -translate-y-2 opacity-90'
                : 'z-10 scale-95 -rotate-3 -translate-y-4 opacity-75'
            )}
            onClick={handleNext}
          >
            <div>
              <div className="text-3xl text-[#080d0d] font-serif mb-4">❝</div>
              <p className="text-lg sm:text-xl font-bold leading-relaxed text-[#080d0d]">
                {clientTestimonials[2]?.quote}
              </p>
            </div>
            <div className="flex items-center gap-3.5 pt-6 border-t border-black/10">
              <div className="w-11 h-11 rounded-full bg-[#080d0d] text-[var(--primary-color)] font-bold flex items-center justify-center text-sm shadow">
                {clientTestimonials[2]?.initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-[#080d0d]">{clientTestimonials[2]?.author}</h4>
                <p className="text-xs text-[#080d0d]/80">{clientTestimonials[2]?.role} — {clientTestimonials[2]?.company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deck Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full bg-white hover:bg-black hover:text-white text-[#080d0d] border border-black/10 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300 cursor-pointer',
                  currentIndex % 3 === i
                    ? 'w-7 bg-[#080d0d]'
                    : 'w-2.5 bg-black/20 hover:bg-black/40'
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full bg-white hover:bg-black hover:text-white text-[#080d0d] border border-black/10 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
