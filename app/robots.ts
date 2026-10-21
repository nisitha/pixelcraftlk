import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://pixelcraftlk.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/401'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
