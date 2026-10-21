import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixelcraftlk.com';
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/work`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/service`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/pricing`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/career`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/request-a-demo`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/checkout`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/style-guide`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/changelog`, priority: 0.6, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/coming-soon`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/terms-condition`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/license`, priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  // Dynamic Case Studies
  const caseStudies = [
    'growth-engine',
    'market-magnet',
    'market-motion',
    'tidal-strategy',
    'trend-beacon',
  ].map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
    lastModified: currentDate,
  }));

  // Dynamic Services
  const services = [
    'content-marketing',
    'marketing-automation',
    'influencer-marketing',
    'email-marketing',
  ].map((slug) => ({
    url: `${baseUrl}/service/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: currentDate,
  }));

  // Dynamic Careers
  const careers = [
    'seo-specialist',
    'frontend-architect',
    'ui-ux-designer',
  ].map((slug) => ({
    url: `${baseUrl}/career/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: currentDate,
  }));

  // Dynamic Blog Articles
  const blogPosts = [
    'fatal-flaw-in-growth-strategy',
    'lookalike-audiences-that-convert',
    'vanity-metrics-hidden-cost',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: currentDate,
  }));

  // Dynamic Pricing Packages
  const products = [
    'beginners',
    'professional',
    'enterprise',
  ].map((slug) => ({
    url: `${baseUrl}/product/${slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified: currentDate,
  }));

  return [
    ...staticRoutes.map((r) => ({ ...r, lastModified: currentDate })),
    ...caseStudies,
    ...services,
    ...careers,
    ...blogPosts,
    ...products,
  ];
}
