'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { clientTestimonials } from '@/data/homepage';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TestimonialsSectionProps {
  className?: string;
}

interface TestimonialCardTheme {
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

const cardThemes: TestimonialCardTheme[] = [
  // 1. Dark Charcoal
  {
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
  // 2. Electric Lime
  {
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
  // 3. Deep Purple
  {
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
  // 4. Slate Night
  {
    bg: '#161b22',
    textColor: 'text-white',
    borderClass: 'border-white/15',
    quoteBoxBg: 'bg-white/10',
    quoteIconColor: 'fill-[#c8f53c] text-[#c8f53c]',
    starColor: 'fill-amber-400 text-amber-400',
    avatarBg: 'bg-[#ff5722]',
    avatarTextColor: 'text-white',
    metaBorderClass: 'border-white/10',
    roleTextColor: 'text-white/70',
  },
  // 5. Deep Teal / Ocean
  {
    bg: '#0c2229',
    textColor: 'text-white',
    borderClass: 'border-white/15',
    quoteBoxBg: 'bg-[#c8f53c]/15',
    quoteIconColor: 'fill-[#c8f53c] text-[#c8f53c]',
    starColor: 'fill-amber-400 text-amber-400',
    avatarBg: 'bg-[#c8f53c]',
    avatarTextColor: 'text-[#0c2229]',
    metaBorderClass: 'border-white/10',
    roleTextColor: 'text-white/75',
  },
];

const slotConfigs = [
  { zIndex: 50, rotation: 0, scale: 1, y: 0, opacity: 1 },
  { zIndex: 40, rotation: -4, scale: 0.96, y: 12, opacity: 0.94 },
  { zIndex: 30, rotation: 5, scale: 0.92, y: 22, opacity: 0.86 },
  { zIndex: 20, rotation: -2, scale: 0.88, y: 32, opacity: 0.68 },
  { zIndex: 10, rotation: 3, scale: 0.84, y: 40, opacity: 0.45 },
];

/**
 * Section 9: Real People, Real Results Feedback (.section.feedback)
 * 1:1 Parity with https://scalient.webflow.io/
 * - Centered viewport pinning with zero cutoff on all screen heights
 * - 5 verified high-ticket client reviews with avatars and unique theme colors
 * - 3D stacked card deck with interactive tilt physics, fly-off transitions, and click-to-flip
 * - Smooth ScrollTrigger pinning and bidirectional wheel scrub support
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const deckContainerRef = useRef<HTMLDivElement>(null);

  // References for all 5 cards
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);

  const total = clientTestimonials.length; // 5

  const animateCards = useCallback((nextIndex: number, direction: 'forward' | 'backward' = 'forward') => {
    const currentIdx = activeIndexRef.current;
    if (currentIdx === nextIndex) return;

    const cards = cardRefs.map((r) => r.current).filter(Boolean) as HTMLDivElement[];
    if (cards.length < total) return;

    isTransitioningRef.current = true;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    const outCard = cards[currentIdx];
    const inCard = cards[nextIndex];

    gsap.killTweensOf(cards);

    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioningRef.current = false;
      },
    });

    if (direction === 'forward') {
      // 1. Current front card flies off to the upper right and drops into the base slot
      tl.to(outCard, {
        x: 320,
        y: -50,
        rotation: 16,
        opacity: 0,
        scale: 0.9,
        duration: 0.35,
        ease: 'power2.in',
      })
        .set(outCard, {
          zIndex: 10,
          x: 0,
          y: slotConfigs[4].y,
          rotation: slotConfigs[4].rotation,
          scale: slotConfigs[4].scale,
        })
        .to(
          outCard,
          {
            opacity: slotConfigs[4].opacity,
            duration: 0.3,
            ease: 'power2.out',
          },
          '-=0.05'
        );

      // 2. Incoming card snaps to front (0deg, scale 1, y 0)
      tl.to(
        inCard,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          zIndex: 50,
          opacity: 1,
          duration: 0.55,
          ease: 'power3.out',
        },
        0.1
      );

      // 3. Shift remaining cards to their respective relative slots
      cards.forEach((card, i) => {
        if (i !== currentIdx && i !== nextIndex) {
          const slot = (i - nextIndex + total) % total;
          const config = slotConfigs[slot];
          tl.to(
            card,
            {
              x: 0,
              y: config.y,
              rotation: config.rotation,
              scale: config.scale,
              zIndex: config.zIndex,
              opacity: config.opacity,
              duration: 0.48,
              ease: 'power3.out',
            },
            0.1
          );
        }
      });
    } else {
      // Backward: incoming card zooms in from the upper left
      tl.set(inCard, {
        zIndex: 50,
        x: -320,
        y: -50,
        rotation: -16,
        opacity: 0,
        scale: 0.9,
      }).to(inCard, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
      });

      // Shift remaining cards to their respective relative slots
      cards.forEach((card, i) => {
        if (i !== nextIndex) {
          const slot = (i - nextIndex + total) % total;
          const config = slotConfigs[slot];
          tl.to(
            card,
            {
              x: 0,
              y: config.y,
              rotation: config.rotation,
              scale: config.scale,
              zIndex: config.zIndex,
              opacity: config.opacity,
              duration: 0.48,
              ease: 'power3.out',
            },
            0.08
          );
        }
      });
    }
  }, [total]);

  const handleManualSelect = useCallback(
    (newIndex: number) => {
      if (newIndex === activeIndexRef.current) return;

      if (pinTriggerRef.current) {
        const st = pinTriggerRef.current;
        const progressTarget = (newIndex + 0.5) / total;
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
    [animateCards, total]
  );

  const handlePrev = useCallback(() => {
    const prev = activeIndexRef.current > 0 ? activeIndexRef.current - 1 : total - 1;
    handleManualSelect(prev);
  }, [handleManualSelect, total]);

  const handleNext = useCallback(() => {
    const next = activeIndexRef.current < total - 1 ? activeIndexRef.current + 1 : 0;
    handleManualSelect(next);
  }, [handleManualSelect, total]);

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
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Deck container entrance
      if (deckContainerRef.current) {
        gsap.fromTo(
          deckContainerRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: deckContainerRef.current,
              start: 'top 85%',
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
          end: '+=2000',
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            // 5 zones: 0 to 0.2, 0.2 to 0.4, 0.4 to 0.6, 0.6 to 0.8, 0.8 to 1.0
            const targetIdx = Math.min(total - 1, Math.floor(p * total));
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
  }, [animateCards, total]);

  return (
    <section
      ref={sectionRef}
      id="feedback"
      aria-label="Real People, Real Results Feedback"
      className={cn(
        'section feedback relative bg-[#f4f4f6] text-[#080d0d] min-h-screen flex flex-col justify-center py-10 sm:py-12 lg:py-14 overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1290px] w-full mx-auto px-5 sm:px-8 relative z-10 flex flex-col justify-center">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-center text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          {/* Small Pill Tag: ✦ FEEDBACK */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.05] border border-black/10 mb-3 text-xs font-semibold uppercase tracking-wider text-[#080d0d] select-none">
            <span>✦ FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight leading-[1.08] text-[#080d0d]">
            Real People, Real Results Feedback
          </h2>

          <p className="mt-2 text-sm sm:text-base text-[#6f7781] font-normal leading-normal max-w-lg">
            See what visionary founders and engineering leaders accomplish with honest reviews.
          </p>

          {/* Social Proof Subtitle Bar */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <div className="flex items-center -space-x-2">
              {clientTestimonials.slice(0, 4).map((t, idx) => (
                <div
                  key={t.id}
                  className="w-7 h-7 rounded-full ring-2 ring-white font-bold text-[11px] flex items-center justify-center shadow-sm select-none"
                  style={{
                    backgroundColor: cardThemes[idx % cardThemes.length].bg,
                    color: idx % cardThemes.length === 1 ? '#080d0d' : '#ffffff',
                  }}
                >
                  {t.initials}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#080d0d]">5.0 Customer Rating</span>
              <span className="text-xs text-[#6f7781]">• (250+ Verified Reviews)</span>
            </div>
          </div>
        </div>

        {/* 3D Stacked Card Deck */}
        <div
          ref={deckContainerRef}
          className="relative w-full max-w-[740px] lg:max-w-[780px] mx-auto h-[380px] sm:h-[370px] md:h-[380px] flex items-center justify-center"
        >
          {clientTestimonials.map((testimonial, index) => {
            const theme = cardThemes[index % cardThemes.length];
            const isFront = index === 0;
            const slot = index; // Initial layout before animation
            const config = slotConfigs[slot] || slotConfigs[4];

            const initialStyle = isFront
              ? { zIndex: 50, transform: 'translateY(0px) rotate(0deg) scale(1)', opacity: 1 }
              : {
                  zIndex: config.zIndex,
                  transform: `translateY(${config.y}px) rotate(${config.rotation}deg) scale(${config.scale})`,
                  opacity: config.opacity,
                };

            const ref = cardRefs[index];

            return (
              <div
                key={testimonial.id}
                ref={ref}
                style={{
                  ...initialStyle,
                  backgroundColor: theme.bg,
                }}
                onClick={() => {
                  if (index !== activeIndexRef.current) {
                    handleManualSelect(index);
                  }
                }}
                className={cn(
                  'testimonial-card absolute inset-0 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.22)] flex flex-col justify-between border cursor-pointer select-none transition-shadow hover:shadow-[0_28px_55px_-12px_rgba(0,0,0,0.32)]',
                  theme.textColor,
                  theme.borderClass
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div
                      className={cn(
                        'w-10 sm:w-11 h-10 sm:h-11 rounded-2xl flex items-center justify-center shadow-sm',
                        theme.quoteBoxBg
                      )}
                    >
                      <Quote className={cn('w-5 h-5', theme.quoteIconColor)} />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className={cn('w-4 h-4', theme.starColor)} />
                      ))}
                    </div>
                  </div>

                  <p className="text-base sm:text-lg md:text-[19px] lg:text-[20px] font-medium leading-relaxed sm:leading-snug tracking-tight">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className={cn('flex items-center gap-3.5 pt-5 sm:pt-6 border-t', theme.metaBorderClass)}>
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-11 sm:w-12 h-11 sm:h-12 rounded-full object-cover ring-2 ring-white/20 shrink-0 select-none shadow"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={cn(
                        'w-11 sm:w-12 h-11 sm:h-12 rounded-full font-bold text-sm sm:text-base flex items-center justify-center shadow shrink-0 select-none',
                        theme.avatarBg,
                        theme.avatarTextColor
                      )}
                    >
                      {testimonial.initials}
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm sm:text-base font-bold tracking-tight">{testimonial.author}</h3>
                    <p className={cn('text-xs sm:text-sm font-normal', theme.roleTextColor)}>
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full bg-white hover:bg-[#080d0d] hover:text-white text-[#080d0d] border border-black/10 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          {/* Indicator Pills for all 5 Testimonials */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/5">
            {clientTestimonials.map((_, i) => (
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
            className="w-11 h-11 rounded-full bg-white hover:bg-[#080d0d] hover:text-white text-[#080d0d] border border-black/10 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer group"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
