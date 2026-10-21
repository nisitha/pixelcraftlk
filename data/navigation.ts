import { NavigationConfig } from '@/types/navigation';

/**
 * PixelCraft Studios Navigation Configuration
 * Source of Truth: docs/page-inventory.md
 */
export const navigationData: NavigationConfig = {
  primaryLinks: [
    { label: 'Company', href: '/about' },
    { label: 'Works', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/blog' },
  ],

  megaMenuColumns: [
    {
      title: 'Main pages',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Company', href: '/about' },
        { label: 'Service', href: '/service' },
        { label: 'Work', href: '/work' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Blog', href: '/blog' },
        { label: 'Career', href: '/career' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Inner Pages',
      items: [
        { label: 'Work Single', href: '/work/growth-engine' },
        { label: 'Service Single', href: '/service/marketing-automation' },
        { label: 'Pricing Single', href: '/product/professional' },
        { label: 'Career Single', href: '/career/seo-specialist' },
        { label: 'Blog Single', href: '/blog/fatal-flaw-in-growth-strategy' },
        { label: 'Terms & Condition', href: '/terms-condition' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
    {
      title: 'Utility Pages',
      items: [
        { label: 'Style Guide', href: '/style-guide' },
        { label: 'License', href: '/license' },
        { label: 'Change log', href: '/changelog' },
        { label: 'Password', href: '/401' },
        { label: '404', href: '/404' },
        { label: 'Request a Demo', href: '/request-a-demo' },
        { label: 'Coming soon', href: '/coming-soon' },
      ],
    },
  ],

  footerColumns: [
    {
      title: 'Main Pages',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Company', href: '/about' },
        { label: 'Service', href: '/service' },
        { label: 'Work', href: '/work' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Inner Pages',
      items: [
        { label: 'Works Details', href: '/work/growth-engine' },
        { label: 'Pricing Details', href: '/product/professional' },
        { label: 'Service Details', href: '/service/marketing-automation' },
        { label: 'Career Details', href: '/career/seo-specialist' },
        { label: 'Terms & Condition', href: '/terms-condition' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
    {
      title: 'Utility Pages',
      items: [
        { label: 'License', href: '/license' },
        { label: 'Change Log', href: '/changelog' },
        { label: 'Style Guide', href: '/style-guide' },
        { label: 'Password', href: '/401' },
        { label: 'Coming Soon', href: '/coming-soon' },
        { label: 'Request a Demo', href: '/request-a-demo' },
        { label: '404', href: '/404' },
      ],
    },
  ],

  legalLinks: [
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-condition' },
    { label: 'License', href: '/license' },
  ],

  socialLinks: [
    { platform: 'facebook', href: 'https://web.facebook.com/PixelCraftStudiosLK/', label: 'Facebook' },
    { platform: 'instagram', href: 'https://www.instagram.com/pixelcraftstudiolk/', label: 'Instagram' },
    { platform: 'whatsapp', href: 'https://wa.me/94787676576', label: 'WhatsApp' },
    { platform: 'twitter', href: 'https://x.com', label: 'X (Twitter)' },
    { platform: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
    { platform: 'dribbble', href: 'https://dribbble.com', label: 'Dribbble' },
  ],
};
