import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';

interface ProductDetailProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'beginners' },
    { slug: 'professional' },
    { slug: 'enterprise' },
  ];
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${formatted} Plan — Pricing Details`,
    description: `Complete specifications and service deliverables for the ${formatted} plan.`,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-2xl flex flex-col items-start gap-6">
            <Badge tag="Plan Details" href="/pricing">
              Back to All Plans
            </Badge>
            <Heading as="h1" size="h2">
              {formatted} Package
            </Heading>
            <Text size="xl" color="muted">
              Dedicated engineering, strategic product direction, and continuous delivery calibrated for fast-scaling companies.
            </Text>
            <Card variant="highlight" className="w-full mt-4">
              <h4 className="text-lg font-semibold text-white mb-2">What&apos;s Included</h4>
              <p className="text-sm text-[var(--light-gray)] mb-6">
                All retainers include full IP ownership, transparent communication via private Slack/Discord, and sprint-based agile delivery.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Button variant="primary" href={`/checkout?plan=${slug}`}>
                  Subscribe via Checkout
                </Button>
                <Button variant="secondary" href="/contact">
                  Talk to an Advisor
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
