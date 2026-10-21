export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  tags: string[];
  gradient: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  icon: 'strategy' | 'automation' | 'design' | 'cloud';
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface MetricItem {
  value: string;
  numericTarget: number;
  suffix: string;
  decimals?: number;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  initials: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  gradient: string;
}

export interface PartnerBrand {
  name: string;
  category: string;
  svgPath: string;
}

// 1. Five Verified Featured Projects
export const featuredProjects: ProjectItem[] = [
  {
    id: 'growth-engine',
    slug: 'growth-engine',
    title: 'Growth Engine',
    subtitle: 'Enterprise Telemetry & Analytics Core',
    category: 'SaaS Platform',
    client: 'Nexus Data Technologies',
    year: '2026',
    summary:
      'High-throughput telemetry ingestion platform processing 4.2B events daily with sub-50ms query latency and bespoke visualization dashboards.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'ClickHouse', 'Apache Kafka'],
    gradient: 'from-[#11241f] via-[#0d1817] to-[#080d0d]',
  },
  {
    id: 'market-magnet',
    slug: 'market-magnet',
    title: 'Market Magnet',
    subtitle: 'AI-Powered Consumer Commerce Architecture',
    category: 'eCommerce & Growth',
    client: 'Magnet Global Retail',
    year: '2026',
    summary:
      'Modular headless storefront engine with personalized dynamic pricing, predictive checkout funnels, and 99.99% conversion reliability.',
    tags: ['React 19', 'Stripe', 'Edge Middleware', 'Turbopack', 'GraphQL'],
    gradient: 'from-[#191e2b] via-[#10141e] to-[#080d0d]',
  },
  {
    id: 'market-motion',
    slug: 'market-motion',
    title: 'Market Motion',
    subtitle: 'Kinetic Web Experience & Motion Brand',
    category: 'Brand Experience',
    client: 'Kinetix Media Group',
    year: '2025',
    summary:
      'Immersive interactive digital identity featuring 3D hardware-accelerated shaders, fluid scroll timelines, and micro-interactions.',
    tags: ['GSAP Flip', 'Three.js', 'WebGL', 'Tailwind CSS', 'Figma Tokens'],
    gradient: 'from-[#22172b] via-[#150f1c] to-[#080d0d]',
  },
  {
    id: 'tidal-strategy',
    slug: 'tidal-strategy',
    title: 'Tidal Strategy',
    subtitle: 'Institutional Liquidity & Asset Management',
    category: 'Fintech Portal',
    client: 'Tidal Capital Holdings',
    year: '2025',
    summary:
      'Real-time algorithmic settlement and collateral portal built with military-grade SOC2 compliance and zero-layout-shift financial charts.',
    tags: ['Next.js App Router', 'Zustand', 'Highcharts', 'WebSocket', 'Node.js'],
    gradient: 'from-[#132228] via-[#0e171b] to-[#080d0d]',
  },
  {
    id: 'trend-beacon',
    slug: 'trend-beacon',
    title: 'Trend Beacon',
    subtitle: 'Predictive Consumer Intelligence Platform',
    category: 'AI & Data Science',
    client: 'Beacon Intelligence',
    year: '2025',
    summary:
      'Neural intelligence platform aggregating sentiment data across 200+ consumer channels to forecast cultural and demand trends.',
    tags: ['Python / FastAPI', 'Next.js', 'Vector DB', 'PyTorch', 'Radix UI'],
    gradient: 'from-[#261f12] via-[#17130b] to-[#080d0d]',
  },
];

// 2. Verified Partner Brands for Infinite Marquee
export const partnerBrands: PartnerBrand[] = [
  { name: 'Next.js', category: 'Framework', svgPath: 'M18.665 21.854 8.788 9.07H6v13.86h2.47V12.18l8.995 11.66c.394-.64.73-1.306 1.2-1.986Z' },
  { name: 'React', category: 'Library', svgPath: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-6c4.97 0 9 2.686 9 6s-4.03 6-9 6-9-2.686-9-6 4.03-6 9-6Z' },
  { name: 'TypeScript', category: 'Language', svgPath: 'M3 3h18v18H3V3Zm8.5 13.5v-7h-2v1.5h.5V16.5h1.5Zm5.5-2.5c0-.8-.5-1.3-1.5-1.5l-1-.2c-.5-.1-.7-.3-.7-.6 0-.3.3-.5.8-.5.5 0 .9.2 1 .5h1.4c-.1-.9-.8-1.5-2.2-1.5-1.3 0-2.3.7-2.3 1.9 0 .8.5 1.3 1.5 1.5l1 .2c.5.1.7.3.7.6 0 .4-.3.6-.9.6-.6 0-1.1-.3-1.2-.7H13c.1 1.1 1 1.7 2.6 1.7 1.4 0 2.4-.6 2.4-1.9Z' },
  { name: 'Tailwind CSS', category: 'Styling', svgPath: 'M12 6c-3.5 0-5.5 1.75-6 5.25 1.5-1.75 3.25-2.25 5.25-1.5.875.328 1.5 1.125 2.188 1.969C14.563 13.094 16.219 15 20 15c3.5 0 5.5-1.75 6-5.25-1.5 1.75-3.25 2.25-5.25 1.5-.875-.328-1.5-1.125-2.188-1.969C17.438 7.906 15.781 6 12 6Z' },
  { name: 'Vercel', category: 'Deployment', svgPath: 'm12 1 11 19H1L12 1Z' },
  { name: 'Stripe', category: 'Payments', svgPath: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.52.5 6.666.5 2.7 3.633 2.7 8.8c0 5.26 4.344 6.786 8.354 8.243 2.617.95 3.518 1.678 3.518 2.724 0 1.05-.985 1.549-2.42 1.549-2.28 0-5.35-.992-7.36-2.115l-.946 5.578C5.818 25.688 8.91 26.5 12.088 26.5c6.19 0 10.354-3.084 10.354-8.47 0-5.207-4.148-6.906-8.466-8.88Z' },
  { name: 'Supabase', category: 'Database', svgPath: 'M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.308 13.914a.792.792 0 0 0 .616 1.282H10.2v8.958a.396.396 0 0 0 .716.233l10.976-13.751a.792.792 0 0 0-.616-1.282h.086Z' },
  { name: 'Figma', category: 'Design', svgPath: 'M8 24a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4Zm0-16a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1 0-8Zm8 0h4a4 4 0 0 1 0 8h-4V8Zm0 8h4a4 4 0 0 1 0 8h-4v-8Zm-8 0a4 4 0 0 1 4 4v4H8a4 4 0 0 1-4-4 4 4 0 0 1 4-4Z' },
  { name: 'Linear', category: 'Workflow', svgPath: 'M1.5 12a10.5 10.5 0 1 1 21 0 10.5 10.5 0 0 1-21 0Zm12.5-5.5h-5v11h2.5v-6h2.5a2.5 2.5 0 0 0 0-5Zm-2.5 2.5h-2.5v-1h2.5a1.5 1.5 0 0 1 0 3h-2.5Z' },
  { name: 'AWS Cloud', category: 'Infrastructure', svgPath: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-2 14.5-4-4 1.4-1.4 2.6 2.6 6.6-6.6 1.4 1.4Z' },
  { name: 'Cloudflare', category: 'Edge Network', svgPath: 'M18.8 12.3a4.7 4.7 0 0 0-4.6-3.8 4.9 4.9 0 0 0-4.6 3.2 3.6 3.6 0 0 0-3.6 3.5c0 1.9 1.6 3.5 3.5 3.5h9.3a4.3 4.3 0 0 0 4.3-4.3c0-1.2-.6-2.3-1.6-2.9l-2.7.8Z' },
  { name: 'Prisma', category: 'ORM', svgPath: 'M12 2 3 19.5h18L12 2Zm0 4.5 5.5 11h-11L12 6.5Z' },
];

// 3. Four Verified Growth Services
export const growthServices: ServiceItem[] = [
  {
    id: 'digital-strategy',
    slug: 'content-marketing',
    title: 'Content Marketing & Strategy',
    category: 'Brand Architecture',
    description:
      'We craft authoritative digital content engines, high-impact brand narratives, and multi-channel editorial systems that command market mindshare and convert visitors into lifelong advocates.',
    deliverables: [
      'Editorial Strategy & Playbooks',
      'High-Conversion Technical Copy',
      'SEO & Authority Architecture',
      'Compounding Organic Funnels',
    ],
    icon: 'strategy',
  },
  {
    id: 'marketing-automation',
    slug: 'marketing-automation',
    title: 'Marketing Automation & Telemetry',
    category: 'Full-Stack Engineering',
    description:
      'Streamline user acquisition workflows, synchronize customer data platforms (CDPs), and trigger personalized, context-aware omnichannel journeys that compound revenue at scale.',
    deliverables: [
      'Customer Data Platform (CDP) Sync',
      'Behavioral Trigger Sequences',
      'Automated Lead Scoring Engines',
      'CRM & Revenue Pipeline Integration',
    ],
    icon: 'automation',
  },
  {
    id: 'influencer-brand',
    slug: 'influencer-marketing',
    title: 'Influencer Marketing & Co-Creation',
    category: 'Cultural Distribution',
    description:
      'Partner with verified industry voices, tech luminaries, and creative tastemakers to generate authentic co-branded advocacy, reach targeted micro-audiences, and establish undeniable cultural authority.',
    deliverables: [
      'Vetted Creator Relationship Match',
      'Authentic Co-Branded Activations',
      'Attribution & ROI Telemetry Tracking',
      'Whitelisted High-Performing Ads',
    ],
    icon: 'design',
  },
  {
    id: 'email-retention',
    slug: 'email-marketing',
    title: 'Lifecycle & Email Marketing',
    category: 'Retention Systems',
    description:
      'Turn one-time customers into enduring brand champions through hyper-personalized email architectures, dynamic inbox design, and predictive retention campaigns backed by data.',
    deliverables: [
      'Sub-Second Delivery Infrastructure',
      'Dynamic HTML Email Design Systems',
      'Predictive Churn Interventions',
      'A/B Split Testing & Conversion Optimization',
    ],
    icon: 'cloud',
  },
];

// 4. Three Verified Pricing Plans
export const pricingPlans: PricingTier[] = [
  {
    id: 'beginners',
    name: 'Beginners',
    monthlyPrice: 799,
    yearlyPrice: 639, // 20% discount
    description: 'Start your journey with foundational digital architecture and expert guidance.',
    features: [
      'Foundational digital strategy & roadmap',
      'Responsive core web design system',
      'Monthly performance & analytics report',
      'Bi-weekly strategic alignment call',
      'Standard email support (48hr SLA)',
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact?plan=beginners',
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Most Popular',
    isPopular: true,
    monthlyPrice: 999,
    yearlyPrice: 799, // 20% discount
    description: 'Scale your marketing and engineering with advanced systems and dedicated sprint support.',
    features: [
      'Comprehensive multi-channel strategy',
      'Advanced kinetic design token system',
      'Custom 5 high-conversion landing pages',
      'Priority 24/7 dedicated engineering support',
      'Weekly telemetry & deep analytics audit',
      'Automated lead routing & CRM integration',
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact?plan=professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 1035,
    yearlyPrice: 828, // 20% discount
    description: 'Bespoke enterprise engineering and multi-market deployment built for visionary brands.',
    features: [
      'Dedicated technical lead & sprint squad',
      'Unlimited bespoke feature engineering',
      'SLA-backed 99.99% availability guarantee',
      'Enterprise security & SOC2 hardening',
      'Custom microservice & ERP integrations',
      'Dedicated Slack / Teams direct channel',
    ],
    ctaText: 'Get Started',
    ctaHref: '/contact?plan=enterprise',
  },
];

// 5. Four Verified Success Metrics & Strategic Badges
export const successMetrics: MetricItem[] = [
  {
    value: '98.05%',
    numericTarget: 98.05,
    suffix: '%',
    decimals: 2,
    label: 'Client Satisfaction',
    description: 'Near-perfect delivery satisfaction across 250+ enterprise rollouts.',
  },
  {
    value: '23,000+',
    numericTarget: 23,
    suffix: 'K+',
    decimals: 0,
    label: 'Platform Signups',
    description: 'Organic customer signups driven for client applications in 2026.',
  },
  {
    value: '250+',
    numericTarget: 250,
    suffix: '+',
    decimals: 0,
    label: 'Projects Delivered',
    description: 'Award-winning digital platforms shipped on time and within budget.',
  },
  {
    value: '99.99%',
    numericTarget: 99.99,
    suffix: '%',
    decimals: 2,
    label: 'Uptime Reliability',
    description: 'Continuous high-availability edge infrastructure for client web systems.',
  },
];

export const strategicPills = [
  'Strategic Agency',
  'Results-Driven',
  'Influential',
  'Innovation Driven',
  'Multidimensional',
  'Strategic-Minded',
  'Engineering First',
  'High-Velocity',
];

// 6. Five Verified Client Testimonials
export const clientTestimonials: TestimonialItem[] = [
  {
    id: 'edward-hayes',
    quote:
      'PixelCraft Studios delivered a comprehensive digital architecture that immediately aligned our entire leadership squad. The difference in our conversion metrics was palpable within 45 days, giving our board complete confidence to scale internationally.',
    author: 'Edward Hayes',
    role: 'Chief Operating Officer (COO)',
    company: 'Nexus Data Technologies',
    rating: 5,
    initials: 'EH',
  },
  {
    id: 'alistair-finch',
    quote:
      'Our previous agency campaigns felt like throwing budget against the wall. The team at PixelCraft brought rigorous engineering discipline, sub-second latency, and data analysis that decreased our Customer Acquisition Cost by over 40%.',
    author: 'Alistair Finch',
    role: 'VP of Growth & Strategy',
    company: 'Horizon Systems',
    rating: 5,
    initials: 'AF',
  },
  {
    id: 'sarah-chen',
    quote:
      'Our industry has rigorous financial compliance hurdles, which made modernizing our web portal daunting. PixelCraft navigated these regulatory waters with remarkable finesse, building a platform that is both uncompromisingly secure and visually breathtaking.',
    author: 'Sarah Chen',
    role: 'VP of Digital Product',
    company: 'Veloce Capital',
    rating: 5,
    initials: 'SC',
  },
  {
    id: 'james-oconnell',
    quote:
      'The creative and technical concepts they engineered for our flagship product launch were fresh, kinetic, and razor-sharp on brand. They understood our enterprise customers better than our internal teams did!',
    author: "James O'Connell",
    role: 'Founder & Head of Strategy',
    company: 'Solis Labs Global',
    rating: 5,
    initials: 'JO',
  },
  {
    id: 'elena-rostova',
    quote:
      'The most valuable aspect of working with PixelCraft Studios is their proactive technical communication and genuine partnership. We never felt like just another client ticket—they operated like a dedicated in-house engineering team.',
    author: 'Elena Rostova',
    role: 'Chief Brand Officer',
    company: 'Kinetix Interactive Media',
    rating: 5,
    initials: 'ER',
  },
];

// 7. Three Verified Editorial Blog Insights
export const blogInsights: BlogPostItem[] = [
  {
    id: 'fatal-flaw-in-growth-strategy',
    slug: 'fatal-flaw-in-growth-strategy',
    title: 'The Fatal Flaw in Modern Enterprise Growth Strategy: Why First-Sales Focus Fails',
    category: 'Strategy & Architecture',
    excerpt:
      'This architectural breakdown exposes the critical mistake that starves long-term enterprise profitability—optimizing solely for initial conversion while starving compounding retention loops.',
    author: 'Julian Reed',
    date: 'October 18, 2026',
    readTime: '6 min read',
    gradient: 'from-[#192b21] via-[#0f1a14] to-[#080d0d]',
  },
  {
    id: 'lookalike-audiences-that-convert',
    slug: 'lookalike-audiences-that-convert',
    title: 'Engineering Hyper-Accurate Lookalike Audiences That Actually Convert at Scale',
    category: 'Data & Telemetry',
    excerpt:
      'Stop burning ad spend on superficial demographics. We break down the non-obvious telemetry data points that top engineering teams feed into AI models to unlock 3.4x higher conversion efficiency.',
    author: 'Liam Walker',
    date: 'October 12, 2026',
    readTime: '8 min read',
    gradient: 'from-[#1a1b32] via-[#0f111f] to-[#080d0d]',
  },
  {
    id: 'vanity-metrics-hidden-cost',
    slug: 'vanity-metrics-hidden-cost',
    title: 'The Hidden Cost of Vanity Metrics: Why Engagement Without Revenue Destroys Velocity',
    category: 'Analytics & Product',
    excerpt:
      'Stop mistaking high impression counts for viable business health. Learn how to systematically audit your product data telemetry and pivot from vanity likes to compounding cashflow velocity.',
    author: 'Alistair Finch',
    date: 'September 29, 2026',
    readTime: '5 min read',
    gradient: 'from-[#2b1922] via-[#1a0f15] to-[#080d0d]',
  },
];
