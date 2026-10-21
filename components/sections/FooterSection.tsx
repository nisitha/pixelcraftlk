'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PixelCraftLogo } from '@/components/navigation/PixelCraftLogo';
import { CheckCircle2, Send, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FooterSectionProps {
  className?: string;
}

/**
 * Section 12: Global Footer (.section.footer)
 * Newsletter capture form + 4-column structured navigation + social links & legal copyright bar
 */
export const FooterSection: React.FC<FooterSectionProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const footerRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (newsletterRef.current) {
        gsap.fromTo(
          newsletterRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: newsletterRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: watermarkRef.current,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer
      ref={footerRef}
      id="footer"
      aria-label="Site Footer"
      className={cn(
        'section footer relative bg-[#060a0a] text-white pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden border-t border-white/10',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Main Footer Row: Newsletter on Left, 4 Columns on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10 items-start">
          {/* Left Column: Newsletter capture */}
          <div ref={newsletterRef} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.12] mb-6">
                Sign up for our <br />
                newsletter today.
              </h2>

              {isSubmitted ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 text-[var(--primary-color)] text-sm font-semibold max-w-md">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you for subscribing! Check your inbox for confirmation.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center rounded-full bg-[#111616] border border-white/10 p-1.5 max-w-md shadow-lg focus-within:border-[var(--primary-color)] transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    aria-label="Email address for newsletter"
                    className="w-full bg-transparent px-4 text-sm text-white placeholder-[#6f7781] outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 h-[44px] px-6 rounded-full bg-[var(--primary-color)] hover:brightness-105 active:scale-95 text-[#080d0d] text-sm font-bold transition-all flex items-center justify-center cursor-pointer shadow-md"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="mt-3 text-xs sm:text-sm text-[#6f7781] font-normal">
                No spam, Just valued update.
              </p>
            </div>
          </div>

          {/* Right Columns: 4 Nav Columns (Main, Inner, Utility, Social) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Main Pages */}
            <div>
              <span className="text-sm font-semibold text-white block mb-4">
                Main Pages
              </span>
              <ul className="space-y-2.5 text-sm text-[#899698]">
                <li><Link href="/" className="hover:text-[var(--primary-color)] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[var(--primary-color)] transition-colors">Company</Link></li>
                <li><Link href="/work" className="hover:text-[var(--primary-color)] transition-colors">Works</Link></li>
                <li><Link href="/service" className="hover:text-[var(--primary-color)] transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="hover:text-[var(--primary-color)] transition-colors">Pricing</Link></li>
                <li><Link href="/career" className="hover:text-[var(--primary-color)] transition-colors">Career</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--primary-color)] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2: Inner Pages */}
            <div>
              <span className="text-sm font-semibold text-white block mb-4">
                Inner Pages
              </span>
              <ul className="space-y-2.5 text-sm text-[#899698]">
                <li><Link href="/work/growth-engine" className="hover:text-[var(--primary-color)] transition-colors">Works Details</Link></li>
                <li><Link href="/product/professional" className="hover:text-[var(--primary-color)] transition-colors">Pricing Details</Link></li>
                <li><Link href="/service/marketing-automation" className="hover:text-[var(--primary-color)] transition-colors">Service Details</Link></li>
                <li><Link href="/career/seo-specialist" className="hover:text-[var(--primary-color)] transition-colors">Career Details</Link></li>
                <li><Link href="/terms-condition" className="hover:text-[var(--primary-color)] transition-colors">Terms &amp; Condition</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-[var(--primary-color)] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Column 3: Utility Pages */}
            <div>
              <span className="text-sm font-semibold text-white block mb-4">
                Utility Pages
              </span>
              <ul className="space-y-2.5 text-sm text-[#899698]">
                <li><Link href="/license" className="hover:text-[var(--primary-color)] transition-colors">License</Link></li>
                <li><Link href="/changelog" className="hover:text-[var(--primary-color)] transition-colors">Change Log</Link></li>
                <li><Link href="/style-guide" className="hover:text-[var(--primary-color)] transition-colors">Style Guide</Link></li>
                <li><Link href="/401" className="hover:text-[var(--primary-color)] transition-colors">Password</Link></li>
                <li><Link href="/coming-soon" className="hover:text-[var(--primary-color)] transition-colors">Coming Soon</Link></li>
                <li><Link href="/request-a-demo" className="hover:text-[var(--primary-color)] transition-colors">Request a Demo</Link></li>
                <li><Link href="/404" className="hover:text-[var(--primary-color)] transition-colors">404</Link></li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div>
              <span className="text-sm font-semibold text-white block mb-4">
                Social Media
              </span>
              <ul className="space-y-3 text-sm text-[#899698]">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    <span>X</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar (1:1 Scalient Parity) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f7781]">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy policy
          </Link>

          <div className="text-center">
            <span>© Copyright 2026 | Design &amp; Developed By </span>
            <span className="font-semibold text-white">PixelCraft Studios</span>
            <span> - </span>
            <Link href="/license" className="hover:text-white transition-colors">License</Link>
          </div>

          <Link href="/terms-condition" className="hover:text-white transition-colors">
            Terms of Use
          </Link>
        </div>

        {/* Giant Watermark Brand Signature matching reference */}
        <div
          ref={watermarkRef}
          aria-hidden="true"
          className="w-full select-none pointer-events-none text-center overflow-hidden pt-10 sm:pt-16 -mb-6 sm:-mb-10"
        >
          <span className="text-[64px] xs:text-[90px] sm:text-[140px] md:text-[190px] lg:text-[230px] font-black tracking-[-0.04em] text-white/[0.04] leading-none inline-block font-sans uppercase">
            PixelCraft
          </span>
        </div>
      </div>
    </footer>
  );
};
