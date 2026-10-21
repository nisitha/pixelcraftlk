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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="feedback"
      aria-label="Real People, Real Results Feedback"
      className={cn(
        'section feedback relative bg-[var(--dark-color)] text-white py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-white/5',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Header with Navigation Arrows */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)] select-none">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Partner Validation</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.035em] leading-[1.08] text-white">
              Real People, Real Results{' '}
              <span className="font-script font-normal text-[var(--primary-color)] text-[46px] sm:text-[62px] md:text-[72px] italic">
                feedback
              </span>
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <p className="text-base sm:text-lg text-[#899698] font-normal leading-relaxed max-w-[420px] hidden lg:block">
              See what our visionary enterprise partners are accomplishing with honest, project-based reviews.
            </p>

            {/* Slider Controls */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-colors active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-colors active:scale-95"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Slider Track */}
        <div ref={sliderRef} className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / 1)}%)`,
            }}
          >
            {clientTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="h-full rounded-3xl bg-[#111616] border border-white/10 hover:border-white/20 p-8 sm:p-9 flex flex-col justify-between shadow-2xl transition-all duration-300">
                  <div>
                    {/* Upper Row: 5 Stars + Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1 text-[var(--primary-color)]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[var(--primary-color)]" />
                        ))}
                      </div>

                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#6f7781]">
                        <Quote className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Quote text */}
                    <p className="text-base sm:text-[17px] text-white/95 font-normal leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author profile row */}
                  <div className="pt-6 border-t border-white/5 flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1c2424] to-[#080d0d] border border-white/10 flex items-center justify-center text-sm font-bold text-[var(--primary-color)] shadow-md shrink-0">
                      {testimonial.initials}
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-white tracking-tight">
                        {testimonial.author}
                      </h4>
                      <p className="text-xs text-[#899698] font-medium leading-snug">
                        {testimonial.role} — <span className="text-white/80">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {clientTestimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                currentIndex === i
                  ? 'w-8 bg-[var(--primary-color)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
