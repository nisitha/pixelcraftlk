'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { VideoModal } from '@/components/ui/VideoModal';
import { HeroBackground } from './hero/HeroBackground';
import { HeroCards } from './hero/HeroCards';
import { cn } from '@/lib/utils';

// Ensure GSAP plugins are registered safely on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HeroSectionProps {
  className?: string;
}

/**
 * Homepage Hero Section
 * Recreates the verified Scalient reference layout with PixelCraft Studios branding:
 * - Upper centered column with Pill Badge, Display Headline, Paragraph, Dual Action CTAs
 * - Lower stepped shelf of 5 showcase visual cards with interactive rolling counters and photo
 * - Deterministic GSAP page-load entrance timeline with full prefers-reduced-motion respect
 * - Interactive Video Demo Lightbox modal
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Animation DOM refs
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animation, elements remain in their default visible state
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // 1. Badge reveals
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.1, clearProps: 'transform,opacity' }
        );
      }

      // 2. Headline reveals with upward slide
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, clearProps: 'transform,opacity' },
          '-=0.35'
        );
      }

      // 3. Subtitle paragraph reveals
      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: 'transform,opacity' },
          '-=0.5'
        );
      }

      // 4. Dual CTA buttons reveal
      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: 'transform,opacity' },
          '-=0.4'
        );
      }

      // 5. Showcase cards stagger up into position
      if (cardsRef.current && cardsRef.current.children.length > 0) {
        tl.fromTo(
          cardsRef.current.children,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, clearProps: 'transform,opacity' },
          '-=0.35'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        aria-label="Introduction &amp; Overview"
        className={cn(
          'section hero relative min-h-[850px] lg:h-screen lg:max-h-[920px] bg-[var(--dark-color)] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-[112px] pb-6 sm:pb-8',
          className
        )}
      >
        {/* Background Concentric Rings & Radial Glows */}
        <HeroBackground />

        {/* Central Content Container */}
        <div className="w-full max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col items-center flex-1 justify-between">
          {/* Upper Content Cluster */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Pill Badge */}
            <div
              ref={badgeRef}
              className="sub-title-wrap inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-white/[0.06] border border-white/10 hover:border-white/20 transition-colors shadow-sm select-none"
            >
              <span className="new-text rounded-full bg-[var(--primary-color)] text-[#080d0d] text-xs font-bold px-2.5 py-1 tracking-tight flex items-center gap-1">
                <span>✦</span> New
              </span>
              <span className="inner-sub-title text-xs sm:text-sm font-medium text-white/90">
                High-Performance Digital Engineering
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white/60 ml-0.5" />
            </div>

            {/* Display Headline */}
            <h1
              ref={headlineRef}
              className="inner-title mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.08] text-white text-center max-w-[840px]"
            >
              Fueling the Next{' '}
              <br className="hidden sm:inline" />
              Generation of{' '}
              <span className="font-script font-normal text-[var(--primary-color)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl italic leading-none align-baseline inline-block">
                Brands
              </span>
            </h1>

            {/* Sub-headline Paragraph */}
            <p
              ref={paragraphRef}
              className="inner-details mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-[#899698] font-normal leading-relaxed text-center max-w-[620px] px-2"
            >
              Powering bold ideas with strategy, creativity, and scalable digital engineering.
            </p>

            {/* Action CTA Button Cluster */}
            <div
              ref={buttonsRef}
              className="inner-button-wrap flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-5 w-full max-w-xs sm:max-w-none"
            >
              {/* Primary CTA with signature vertical text roll and arrow */}
              <Button
                variant="primary"
                size="default"
                href="/contact"
                className="w-full sm:w-auto justify-center shadow-[0_8px_24px_rgba(188,234,62,0.22)]"
              >
                Get Started
              </Button>

              {/* Secondary CTA: Watch Demo Lightbox Trigger */}
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Watch video demonstration"
                className="watch-button group relative overflow-hidden inline-flex items-center justify-center gap-2.5 h-[48px] sm:h-[52px] px-6 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-sm sm:text-base transition-all duration-300 active:scale-[0.98] select-none w-full sm:w-auto"
              >
                {/* Blue Accent Slide Hover Background */}
                <span
                  aria-hidden="true"
                  className="watch-btn-bg absolute inset-0 bg-[var(--blue-color)]/25 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                />

                <span className="watch-btn-wrap relative z-10 inline-flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-3 h-3 fill-white text-white translate-x-0.5" />
                  </span>
                  <span className="watch-btn-text tracking-tight">Watch Demo</span>
                </span>
              </button>
            </div>
          </div>

          {/* Lower Visual Showcase Shelf (5 Cards) */}
          <HeroCards cardsRef={cardsRef} />
        </div>
      </section>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/TAWlLFCqF1k?autoplay=1&rel=0"
        title="PixelCraft Studios Reel"
      />
    </>
  );
};
