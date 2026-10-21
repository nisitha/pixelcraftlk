'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TestimonialsSectionProps {
  className?: string;
}

interface TestimonialCardData {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  bg: string;
  textColor: string;
  borderClass: string;
  quoteBoxBg: string;
  quoteIconColor: string;
  starColor: string;
  avatarBg: string;
  avatarTextColor: string;
  metaBorderClass: string;
  roleTextColor: string;
}

const testimonialDeck: TestimonialCardData[] = [
  {
    id: 'edward-hayes',
    quote:
      'They delivered a comprehensive strategy that immediately focused our entire team. The difference in our engagement metrics was noticeable within the first 60 days, giving us the confidence we needed to scale internationally.',
    author: 'Edward Hayes',
    role: 'Chief Operating Officer (COO)',
    company: 'Nexus Tech',
    initials: 'EH',
    bg: '#0a0d0e',
    textColor: 'text-white',
    borderClass: 'border-white/10',
    quoteBoxBg: 'bg-white/10',
    quoteIconColor: 'fill-white text-white',
    starColor: 'fill-amber-400 text-amber-400',
    avatarBg: 'bg-[#c8f53c]',
    avatarTextColor: 'text-[#080d0d]',
    metaBorderClass: 'border-white/10',
    roleTextColor: 'text-white/70',
  },
  {
    id: 'alistair-finch',
    quote:
      'Our previous campaigns felt like throwing spaghetti at the wall. The team brought incredible discipline and data analysis to our budget. They reduced our Customer Acquisition Cost by 34% while scaling our pipeline.',
    author: 'Alistair Finch',
    role: 'VP of Growth & Strategy',
    company: 'Horizon Systems',
    initials: 'AF',
    bg: '#c8f53c',
    textColor: 'text-[#080d0d]',
    borderClass: 'border-black/5',
    quoteBoxBg: 'bg-black/10',
    quoteIconColor: 'fill-[#080d0d] text-[#080d0d]',
    starColor: 'fill-[#080d0d] text-[#080d0d]',
    avatarBg: 'bg-[#080d0d]',
    avatarTextColor: 'text-[#c8f53c]',
    metaBorderClass: 'border-black/10',
    roleTextColor: 'text-[#080d0d]/75',
  },
  {
    id: 'sarah-chen',
    quote:
      'The creative execution exceeded all expectations. PixelCraft didn’t just build a brand identity; they engineered an entire digital ecosystem that converted our audience into loyal advocates across multiple markets.',
    author: 'Sarah Chen',
    role: 'VP of Digital Product',
    company: 'Veloce Capital',
    initials: 'SC',
    bg: '#7966f8',
    textColor: 'text-white',
    borderClass: 'border-white/20',
    quoteBoxBg: 'bg-white/15',
    quoteIconColor: 'fill-white text-white',
    starColor: 'fill-amber-300 text-amber-300',
    avatarBg: 'bg-white',
    avatarTextColor: 'text-[#7966f8]',
    metaBorderClass: 'border-white/15',
    roleTextColor: 'text-white/80',
  },
];

/**
 * Section 9: Real People, Real Results Feedback (.section.feedback)
 * 1:1 Parity with https://scalient.webflow.io/
 * - Clean light background (#f4f4f6) for alternating contrast
 * - Geometric header with ✦ FEEDBACK badge, star ratings, and client avatars
 * - 3D Stacked Card Deck (Dark #0a0d0e, Lime #c8f53c, Purple #7966f8)
 * - Layered transforms: Front 0deg/scale 1, Second -4deg/scale 0.96, Third 6deg/scale 0.92
 * - Interactive fly-away shuffle physics + Click-to-flip on background cards
 * - GSAP ScrollTrigger pin & scrub support
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const deckContainerRef = useRef<HTMLDivElement>(null);

  const cardRef0 = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);

  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);

  const animateCards = useCallback((nextIndex: number, direction: 'forward' | 'backward' = 'forward') => {
    const currentIdx = activeIndexRef.current;
    if (currentIdx === nextIndex) return;

    const cards = [cardRef0.current, cardRef1.current, cardRef2.current].filter(Boolean) as HTMLDivElement[];
    if (cards.length < 3) return;

    isTransitioningRef.current = true;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    const outCard = cards[currentIdx];
    const inCard = cards[nextIndex];
    const otherIdx = [0, 1, 2].find((i) => i !== currentIdx && i !== nextIndex)!;
    const otherCard = cards[otherIdx];

    gsap.killTweensOf(cards);

    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioningRef.current = false;
      },
    });

    if (direction === 'forward') {
      // 1. Current front card flies off to the upper-right and drops behind
      tl.to(outCard, {
        x: 340,
        y: -60,
        rotation: 16,
        opacity: 0,
        scale: 0.92,
        duration: 0.38,
        ease: 'power2.in',
      })
        .set(outCard, {
          zIndex: 10,
          x: 0,
          y: 28,
          rotation: 6,
          scale: 0.92,
        })
        .to(
          outCard,
          {
            opacity: 0.82,
            duration: 0.32,
            ease: 'power2.out',
          },
          '-=0.04'
        );

      // 2. Incoming card snaps to front (0deg, scale 1, y 0) with spring easing
      tl.to(
        inCard,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          zIndex: 30,
          opacity: 1,
          duration: 0.55,
          ease: 'power3.out',
        },
        0.12
      );

      // 3. Other card shifts into middle slot (zIndex 20, rotate -4deg)
      tl.to(
        otherCard,
        {
          x: 0,
          y: 14,
          rotation: -4,
          scale: 0.96,
          zIndex: 20,
          opacity: 0.92,
          duration: 0.48,
          ease: 'power3.out',
        },
        0.12
      );
    } else {
      // Backward: incoming card zooms in from the left to front
      tl.set(inCard, {
        zIndex: 30,
        x: -340,
        y: -60,
        rotation: -16,
        opacity: 0,
        scale: 0.92,
      }).to(inCard, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
      });

      // Former front card steps back into middle slot
      tl.to(
        outCard,
        {
          x: 0,
          y: 14,
          rotation: -4,
          scale: 0.96,
          zIndex: 20,
          opacity: 0.92,
          duration: 0.48,
          ease: 'power3.out',
        },
        0.08
      );

      // Other card moves to back slot
      tl.to(
        otherCard,
        {
          x: 0,
          y: 28,
          rotation: 6,
          scale: 0.92,
          zIndex: 10,
          opacity: 0.82,
          duration: 0.48,
          ease: 'power3.out',
        },
        0.08
      );
    }
  }, []);

  const handleManualSelect = useCallback(
    (newIndex: number) => {
      if (newIndex === activeIndexRef.current) return;

      if (pinTriggerRef.current) {
        const st = pinTriggerRef.current;
        const progressTarget = newIndex === 0 ? 0.15 : newIndex === 1 ? 0.5 : 0.85;
        const targetScroll = st.start + progressTarget * (st.end - st.start);
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });
      } else {
        const dir = newIndex > activeIndexRef.current ? 'forward' : 'backward';
        animateCards(newIndex, dir);
      }
    },
    [animateCards]
  );

  const handlePrev = useCallback(() => {
    const prev = activeIndexRef.current > 0 ? activeIndexRef.current - 1 : 2;
    handleManualSelect(prev);
  }, [handleManualSelect]);

  const handleNext = useCallback(() => {
    const next = activeIndexRef.current < 2 ? activeIndexRef.current + 1 : 0;
    handleManualSelect(next);
  }, [handleManualSelect]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
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

      // 2. Deck container entrance
      if (deckContainerRef.current) {
        gsap.fromTo(
          deckContainerRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: deckContainerRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 3. Desktop ScrollTrigger Pinning & Scrubbing
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        if (!sectionRef.current) return;

        const pin = ScrollTrigger.create({
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: '+=1300',
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            const targetIdx = p < 0.33 ? 0 : p < 0.67 ? 1 : 2;
            if (targetIdx !== activeIndexRef.current && !isTransitioningRef.current) {
              const dir = targetIdx > activeIndexRef.current ? 'forward' : 'backward';
              animateCards(targetIdx, dir);
            }
          },
        });

        pinTriggerRef.current = pin;

        return () => {
          pin.kill();
          pinTriggerRef.current = null;
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [animateCards]);

  return (
    <section
      ref={sectionRef}
      id="feedback"
      aria-label="Real People, Real Results Feedback"
      className={cn(
        'section feedback relative bg-[#f4f4f6] text-[#080d0d] py-24 sm:py-32 lg:py-36 overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          {/* Small Pill Tag: ✦ FEEDBACK */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/10 mb-5 text-xs font-semibold uppercase tracking-wider text-[#080d0d] select-none">
            <span>✦ FEEDBACK</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.06] text-[#080d0d]">
            Real People, Real
            <br />
            Results Feedback
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6f7781] font-normal leading-relaxed max-w-xl">
            See what our users are truly accomplishing with honest, and project-based reviews.
          </p>

          {/* Social Proof Subtitle Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center -space-x-2.5">
              <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#0a0d0e] text-[#c8f53c] font-bold text-xs flex items-center justify-center shadow-sm">
                EH
              </div>
              <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#c8f53c] text-[#080d0d] font-bold text-xs flex items-center justify-center shadow-sm">
                AF
              </div>
              <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#7966f8] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                SC
              </div>
              <div className="w-8 h-8 rounded-full ring-2 ring-white bg-[#ff5722] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                JO
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#080d0d]">5.0 Customer Rating</span>
              <span className="text-xs text-[#6f7781]">• (250+ Verified Reviews)</span>
            </div>
          </div>
        </div>

        {/* 3D Stacked Card Deck */}
        <div
          ref={deckContainerRef}
          className="relative w-full max-w-[760px] lg:max-w-[820px] mx-auto h-[460px] sm:h-[440px] md:h-[450px] flex items-center justify-center"
        >
          {testimonialDeck.map((card, index) => {
            // Initial positioning before GSAP takes over or SSR fallback
            const isFront = index === 0;
            const isMiddle = index === 1;

            const initialStyle = isFront
              ? { zIndex: 30, transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: 1 }
              : isMiddle
              ? { zIndex: 20, transform: 'translateY(14px) rotate(-4deg) scale(0.96)', opacity: 0.92 }
              : { zIndex: 10, transform: 'translateY(28px) rotate(6deg) scale(0.92)', opacity: 0.82 };

            const ref = index === 0 ? cardRef0 : index === 1 ? cardRef1 : cardRef2;

            return (
              <div
                key={card.id}
                ref={ref}
                style={{
                  ...initialStyle,
                  backgroundColor: card.bg,
                }}
                onClick={() => {
                  if (index !== activeIndexRef.current) {
                    handleManualSelect(index);
                  }
                }}
                className={cn(
                  'testimonial-card absolute inset-0 rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 md:p-12 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col justify-between border cursor-pointer select-none transition-shadow hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.35)]',
                  card.textColor,
                  card.borderClass
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm',
                        card.quoteBoxBg
                      )}
                    >
                      <Quote className={cn('w-6 h-6', card.quoteIconColor)} />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn('w-4 h-4', card.starColor)} />
                      ))}
                    </div>
                  </div>

                  <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-medium leading-relaxed sm:leading-snug tracking-tight">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>

                <div className={cn('flex items-center gap-4 pt-6 sm:pt-8 border-t', card.metaBorderClass)}>
                  <div
                    className={cn(
                      'w-12 sm:w-14 h-12 sm:h-14 rounded-full font-bold text-base sm:text-lg flex items-center justify-center shadow shrink-0 select-none',
                      card.avatarBg,
                      card.avatarTextColor
                    )}
                  >
                    {card.initials}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight">{card.author}</h3>
                    <p className={cn('text-xs sm:text-sm font-normal', card.roleTextColor)}>
                      {card.role} — {card.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-12 sm:mt-16">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full bg-white hover:bg-[#080d0d] hover:text-white text-[#080d0d] border border-black/10 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          {/* Indicator Pills */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/5">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleManualSelect(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-400 cursor-pointer',
                  activeIndex === i ? 'w-8 bg-[#080d0d]' : 'w-2 bg-black/20 hover:bg-black/40'
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full bg-white hover:bg-[#080d0d] hover:text-white text-[#080d0d] border border-black/10 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer group"
          >
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
