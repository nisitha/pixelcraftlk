import NotFound from '@/app/not-found';

export const metadata = {
  title: '404 — Page Not Found | PixelCraft Studios',
  description: 'The requested page could not be located on PixelCraft Studios.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function Custom404Page() {
  return <NotFound />;
}
