import React from 'react';
import {
  HeroSection,
  AboutStatementSection,
  BestWorksSection,
  TrustedMarqueeSection,
  GrowthServicesSection,
  PricingPlansSection,
  SuccessMetricsSection,
  TestimonialsSection,
  BlogInsightsSection,
  CtaRibbonSection,
} from '@/components/sections';

export const metadata = {
  title: 'PixelCraft Studios — Fueling Next-Generation Digital Brands',
  description:
    'PixelCraft Studios engineers world-class web applications, bespoke design systems, and high-velocity digital platforms for modern enterprises.',
};

export default function Home() {
  return (
    <main className="pages-wrapper min-h-screen bg-[var(--dark-color)] text-white">
      {/* SECTION 2: Verified Homepage Hero Section */}
      <HeroSection />

      {/* SECTION 3: Editorial About Statement */}
      <AboutStatementSection />

      {/* SECTION 4: Best Works Showcase */}
      <BestWorksSection />

      {/* SECTION 5: Trusted Brands Infinite Marquee */}
      <TrustedMarqueeSection />

      {/* SECTION 6: Growth Solutions & Services */}
      <GrowthServicesSection />

      {/* SECTION 7: Pricing & Plans */}
      <PricingPlansSection />

      {/* SECTION 8: Metrics & Success Numbers */}
      <SuccessMetricsSection />

      {/* SECTION 9: Feedback & Testimonials */}
      <TestimonialsSection />

      {/* SECTION 10: Market Insights & Strategy (Blog) */}
      <BlogInsightsSection />

      {/* SECTION 11: Infinite CTA Ribbon Marquee */}
      <CtaRibbonSection />
    </main>
  );
}
