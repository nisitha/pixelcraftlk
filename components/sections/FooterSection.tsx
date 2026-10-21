'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PixelCraftLogo } from '@/components/navigation/PixelCraftLogo';
import { CheckCircle2, Send, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer
      id="footer"
      aria-label="Site Footer"
      className={cn(
        'section footer relative bg-[#060a0a] text-white pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden border-t border-white/10',
        className
      )}
    >
      <div className="max-w-[1290px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Newsletter Subscription Row */}
        <div className="rounded-3xl bg-[#0f1414] border border-white/10 p-8 sm:p-12 mb-16 sm:mb-20 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(188, 234, 62, 0.15) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary-color)] block mb-2 font-semibold">
              STAY INFORMED //
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
              Sign up for our newsletter today.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#899698] font-normal leading-relaxed">
              Get exclusive engineering breakdowns, architectural insights, and design teardowns delivered directly to your inbox.
            </p>
          </div>

          <div className="relative z-10 w-full lg:max-w-md">
            {isSubmitted ? (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 text-[var(--primary-color)] text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you for subscribing! Check your inbox for confirmation.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    required
                    aria-label="Email address for newsletter"
                    className="w-full h-[52px] px-5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] text-sm text-white placeholder-[#6f7781] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 h-[52px] px-7 rounded-full bg-[var(--primary-color)] hover:brightness-105 active:scale-95 text-[#080d0d] text-sm font-semibold transition-all flex items-center justify-center gap-2 select-none shadow-lg"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Structured Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-block mb-6">
                <PixelCraftLogo />
              </div>

              <p className="text-sm sm:text-base text-[#899698] font-normal leading-relaxed max-w-sm mb-6">
                PixelCraft Studios engineers world-class web applications, bespoke design systems, and high-velocity digital architectures for visionary modern brands.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-[#899698]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--primary-color)] shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--primary-color)] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--primary-color)] shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-5 font-semibold">
              COMPANY
            </span>
            <ul className="space-y-3 text-sm text-[#899698]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[10px] font-semibold bg-[var(--primary-color)] text-[#080d0d] px-1.5 py-0.2 rounded-full">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links (3 cols on lg) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-5 font-semibold">
              GROWTH SOLUTIONS
            </span>
            <ul className="space-y-3 text-sm text-[#899698]">
              <li>
                <Link href="/service/content-marketing" className="hover:text-white transition-colors">
                  Content Marketing &amp; Strategy
                </Link>
              </li>
              <li>
                <Link href="/service/marketing-automation" className="hover:text-white transition-colors">
                  Marketing Automation &amp; CDP
                </Link>
              </li>
              <li>
                <Link href="/service/influencer-marketing" className="hover:text-white transition-colors">
                  Influencer Brand Systems
                </Link>
              </li>
              <li>
                <Link href="/service/email-marketing" className="hover:text-white transition-colors">
                  Lifecycle &amp; Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/request-a-demo" className="hover:text-white transition-colors text-[var(--primary-color)]">
                  Request a Custom Demo →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Legal (2 cols on lg) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-5 font-semibold">
              RESOURCES &amp; LEGAL
            </span>
            <ul className="space-y-3 text-sm text-[#899698]">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/style-guide" className="hover:text-white transition-colors">
                  Design Tokens
                </Link>
              </li>
              <li>
                <Link href="/terms-condition" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-white transition-colors">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f7781]">
          <div className="flex items-center gap-2">
            <span>© {siteConfig.foundingYear} {siteConfig.name}. All rights reserved.</span>
          </div>

          {/* System status indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/80">
            <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse" />
            <span className="font-mono text-[11px]">All Systems Operational</span>
          </div>

          {/* Back to top control */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#899698] hover:text-white transition-colors text-xs font-medium cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--primary-color)]" />
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PixelCraft on X / Twitter"
              className="text-[#899698] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PixelCraft on LinkedIn"
              className="text-[#899698] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PixelCraft on GitHub"
              className="text-[#899698] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Giant Watermark Brand Signature matching reference */}
        <div
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
