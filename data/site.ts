export interface SiteConfig {
  readonly name: string;
  readonly legalName: string;
  readonly tagLine: string;
  readonly description: string;
  readonly url: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly foundingYear: number;
}

export const siteConfig: SiteConfig = {
  name: 'PixelCraft Studios',
  legalName: 'PixelCraft Studios Ltd',
  tagLine: 'Fueling the Next Generation of Brands',
  description:
    'Powering bold ideas with strategy, creativity, and growth. We design and engineer world-class digital products and high-conversion web architectures.',
  url: 'https://pixelcraftlk.com',
  email: 'hello@pixelcraftlk.com',
  phone: '+94 11 234 5678',
  address: 'Level 14, West Tower, World Trade Center, Colombo, Sri Lanka',
  foundingYear: 2026,
};
