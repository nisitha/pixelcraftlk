'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { blogInsights } from '@/data/homepage';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface BlogInsightsSectionProps {
  className?: string;
}

/**
 * Section 10: Insights & Strategy / Blog (.section.blog-v1)
 * H2 "Market Insights and our Strategy" + 3 featured editorial articles with meta tags and "View Blogs" CTA
 */
export const BlogInsightsSection: React.FC<BlogInsightsSectionProps> = ({ className }) => {
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
        const cards = cardsRef.current.querySelectorAll('.blog-card-item');
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
      id="blog"
      aria-label="Market Insights and Strategy"
      className={cn(
        'section blog-v1 relative bg-[#f4f4f6] text-[#080d0d] py-14 sm:py-24 lg:py-32 overflow-hidden',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Header Block */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.08] text-[#080d0d]">
              Market Insights <br />
              and our Strategy
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <p className="text-sm sm:text-base md:text-lg text-[#6f7781] font-normal leading-relaxed max-w-[420px]">
              We fuel bold ideas, driving them forward with sharp strategy, design excellence, and scalable engineering.
            </p>
            <Button variant="primary" size="default" href="/blog" className="w-full sm:w-auto justify-center">
              View Blogs
            </Button>
          </div>
        </div>

        {/* 3 Editorial Cards Grid (1:1 Scalient Parity) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {blogInsights.map((post) => (
            <article
              key={post.id}
              className="blog-card-item group rounded-3xl bg-white border border-black/10 hover:border-black/20 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between transition-all duration-400"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col justify-between">
                <div>
                  {/* Article Graphic Canvas */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8e8ed] p-6 flex flex-col justify-between">
                    <div
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br opacity-85 group-hover:scale-105 transition-all duration-700 ease-out',
                        post.gradient
                      )}
                    />

                    {/* Floating Category Pill Badge */}
                    <div className="relative z-10 self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-[#080d0d] shadow-sm">
                      <span>{post.category}</span>
                    </div>

                    {/* Diagonal Action Circle */}
                    <div className="relative z-10 self-end w-9 h-9 rounded-full bg-white text-[#080d0d] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--primary-color)]">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-7">
                    <h3 className="text-xl sm:text-[22px] font-bold text-[#080d0d] tracking-tight leading-snug group-hover:text-[var(--primary-color)] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#6f7781] font-normal leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Article Meta Footer */}
                <div className="px-7 pb-7 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#6f7781] font-medium">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#080d0d]">{post.author}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
