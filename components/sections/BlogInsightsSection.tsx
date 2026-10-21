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
        const cards = cardsRef.current.querySelectorAll('.blog-card-item');
        gsap.from(cards, {
          y: 40,
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
      id="blog"
      aria-label="Market Insights and Strategy"
      className={cn(
        'section blog-v1 relative bg-[var(--dark-color)] text-white py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-white/5',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Header Block */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)] select-none">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Editorial Insights</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.035em] leading-[1.08] text-white">
              Market Insights and our{' '}
              <span className="font-script font-normal text-[var(--primary-color)] text-[46px] sm:text-[62px] md:text-[72px] italic">
                strategy
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-base sm:text-lg text-[#899698] font-normal leading-relaxed max-w-[420px]">
              We fuel bold ideas, driving them forward with sharp technical architecture, design clarity, and growth intelligence.
            </p>
            <Button variant="secondary" size="default" href="/blog">
              View Blogs
            </Button>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogInsights.map((post) => (
            <article
              key={post.id}
              className="blog-card-item group rounded-3xl bg-[#111616] border border-white/10 hover:border-white/20 overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-400"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col justify-between">
                <div>
                  {/* Article Graphic Canvas */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0d1212] p-6 flex flex-col justify-between">
                    <div
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out',
                        post.gradient
                      )}
                    />

                    {/* Subtle grid pattern overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    />

                    {/* Floating Category Pill Badge */}
                    <div className="relative z-10 self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[var(--primary-color)]">
                      <span>{post.category}</span>
                    </div>

                    {/* Diagonal Action Circle */}
                    <div className="relative z-10 self-end w-9 h-9 rounded-full bg-white text-[#080d0d] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--primary-color)]">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-7">
                    <h3 className="text-xl sm:text-[22px] font-semibold text-white tracking-tight leading-snug group-hover:text-[var(--primary-color)] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#899698] font-normal leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Article Meta Footer */}
                <div className="px-7 pb-7 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#6f7781] font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-white/80">{post.author}</span>
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
