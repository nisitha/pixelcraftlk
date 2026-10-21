import React from 'react';
import { Container, Section, Heading, Text, Badge, Button } from '@/components/ui';

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'content-marketing' },
    { slug: 'marketing-automation' },
    { slug: 'influencer-marketing' },
    { slug: 'email-marketing' },
  ];
}

export async function generateMetadata({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${formatted} — Digital Services`,
    description: `Comprehensive strategy and execution details for ${formatted} by PixelCraft Studios.`,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            <Badge tag="Service Details" href="/service">
              Back to Services
            </Badge>
            <Heading as="h1" size="h2">
              {formatted}
            </Heading>
            <Text size="xl" color="muted">
              Strategic execution, tooling integration, and dedicated workflow optimization built to drive measurable enterprise impact.
            </Text>
            <div className="pt-4 flex gap-4">
              <Button variant="primary" href="/contact">
                Engage This Service
              </Button>
              <Button variant="secondary" href="/service">
                All Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
