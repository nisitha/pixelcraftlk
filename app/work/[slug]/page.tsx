import React from 'react';
import { Container, Section, Heading, Text, Badge, Button } from '@/components/ui';

interface WorkDetailProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'growth-engine' },
    { slug: 'market-magnet' },
    { slug: 'trend-beacon' },
    { slug: 'market-motion' },
    { slug: 'tidal-strategy' },
  ];
}

export async function generateMetadata({ params }: WorkDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${formatted} — Project Case Study`,
    description: `Detailed case study for ${formatted} built by PixelCraft Studios.`,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            <Badge tag="Case Study" href="/work">
              Back to Works
            </Badge>
            <Heading as="h1" size="h2">
              {formatted}
            </Heading>
            <Text size="xl" color="muted">
              Strategic execution, architecture, and high-performance digital solutions delivering measurable business ROI.
            </Text>
            <div className="pt-4 flex gap-4">
              <Button variant="primary" href="/contact">
                Start Similar Project
              </Button>
              <Button variant="secondary" href="/work">
                All Projects
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
