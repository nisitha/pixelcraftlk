export interface SiteConfig {
  readonly name: string;
  readonly legalName: string;
  readonly tagLine: string;
  readonly description: string;
  readonly url: string;
  readonly email: string;
  readonly phone: string;
  readonly whatsapp: string;
  readonly whatsappUrl: string;
  readonly social: {
    readonly facebook: string;
    readonly instagram: string;
    readonly twitter: string;
    readonly linkedin: string;
    readonly dribbble: string;
  };
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
  email: 'pixelcraftstudioslk@gmail.com',
  phone: '+94 78 767 6576',
  whatsapp: '+94 78 767 6576',
  whatsappUrl: 'https://wa.me/94787676576',
  social: {
    facebook: 'https://web.facebook.com/PixelCraftStudiosLK/',
    instagram: 'https://www.instagram.com/pixelcraftstudiolk/',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
    dribbble: 'https://dribbble.com',
  },
  address: 'Level 14, West Tower, World Trade Center, Colombo, Sri Lanka',
  foundingYear: 2026,
};
