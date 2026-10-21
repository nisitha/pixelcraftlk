import React from 'react';
import { Container, Section, Heading, Badge, Button } from '@/components/ui';

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'fatal-flaw-in-growth-strategy' },
    { slug: 'lookalike-audiences-that-convert' },
    { slug: 'vanity-metrics-hidden-cost' },
  ];
}

export async function generateMetadata({ params }: BlogDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${formatted} — PixelCraft Insights`,
    description: `Read ${formatted} on the PixelCraft engineering and marketing insights publication.`,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const formatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-6">
            <Badge tag="Article" href="/blog">
              Back to Resources
            </Badge>
            <Heading as="h1" size="h2">
              {formatted}
            </Heading>
            <div className="flex items-center gap-3 text-sm text-[var(--light-gray)] border-y border-white/[0.08] py-3 w-full">
              <span>Published by Editorial Team</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <div className="space-y-4 text-base text-[var(--light-gray)] leading-relaxed pt-4">
              <p>
                In high-velocity digital product design, prioritizing rapid feedback loops and rigorous data validation separates market leaders from stagnant competitors.
              </p>
              <p>
                By building robust design systems and scalable web architectures, teams can minimize engineering friction and optimize user activation funnels with extreme precision.
              </p>
            </div>
            <div className="pt-8 border-t border-white/[0.08] w-full flex justify-between items-center">
              <Button variant="secondary" size="sm" href="/blog">
                More Articles
              </Button>
              <Button variant="primary" size="sm" href="/contact">
                Work With Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
