import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';

interface CareerDetailProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'seo-specialist' },
    { slug: 'frontend-architect' },
    { slug: 'ui-ux-designer' },
  ];
}

export async function generateMetadata({ params }: CareerDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${formatted} — Career Opening`,
    description: `Job specifications and application details for ${formatted} at PixelCraft Studios.`,
  };
}

export default async function CareerDetailPage({ params }: CareerDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            <Badge tag="Career Role" href="/career">
              Back to Open Roles
            </Badge>
            <Heading as="h1" size="h2">
              {formatted}
            </Heading>
            <Text size="xl" color="muted">
              Join our engineering and design team to lead transformative digital work for international high-growth clients.
            </Text>
            <Card variant="highlight" className="w-full mt-4">
              <h4 className="text-lg font-semibold text-white mb-2">How to Apply</h4>
              <p className="text-sm text-[var(--light-gray)] mb-6">
                Send your portfolio, GitHub, or previous case studies to careers@pixelcraftlk.com.
              </p>
              <Button variant="primary" href="mailto:careers@pixelcraftlk.com">
                Email Application
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
