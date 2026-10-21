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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16 border-b border-white/10 items-start">
          {/* Left Column: Newsletter capture */}
          <div ref={newsletterRef} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.12] mb-4 sm:mb-6">
                Sign up for our <br className="hidden sm:inline" />
                newsletter today.
              </h2>

              {isSubmitted ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 text-[var(--primary-color)] text-sm font-semibold max-w-md">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you for subscribing! Check your inbox for confirmation.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl sm:rounded-full bg-[#111616] border border-white/10 p-1.5 max-w-md shadow-lg focus-within:border-[var(--primary-color)] transition-colors gap-2 sm:gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    aria-label="Email address for newsletter"
                    className="w-full bg-transparent px-4 py-2 sm:py-0 text-sm text-white placeholder-[#6f7781] outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 h-[44px] px-6 rounded-xl sm:rounded-full bg-[var(--primary-color)] hover:brightness-105 active:scale-95 text-[#080d0d] text-sm font-bold transition-all flex items-center justify-center cursor-pointer shadow-md w-full sm:w-auto"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="mt-3 text-xs sm:text-sm text-[#6f7781] font-normal">
                No spam, Just valued update.
              </p>

              {/* Direct Inquiries & WhatsApp Contact Bar */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#899698]">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-[var(--primary-color)] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[var(--primary-color)] shrink-0 transition-transform group-hover:scale-110" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[var(--primary-color)] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[var(--primary-color)] shrink-0 transition-transform group-hover:scale-110" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns: 4 Nav Columns (Main, Inner, Utility, Social) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
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
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    <span>X</span>
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
          className="w-full select-none pointer-events-none text-center overflow-hidden pt-8 sm:pt-16 -mb-4 sm:-mb-10 max-w-full"
        >
          <span className="text-[44px] xs:text-[68px] sm:text-[120px] md:text-[180px] lg:text-[230px] font-black tracking-[-0.04em] text-white/[0.04] leading-none inline-block font-sans uppercase">
            PixelCraft
          </span>
        </div>
      </div>
    </footer>
  );
};
