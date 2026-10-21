import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';

export const metadata = {
  title: 'Works — Selected Projects',
  description: 'Explore high-impact digital products, web platforms, and brand experiences crafted by PixelCraft.',
};

const projects = [
  { slug: 'growth-engine', title: 'Growth Engine', date: 'June - 2022', category: 'Web Architecture' },
  { slug: 'market-magnet', title: 'Market Magnet', date: 'March - 2020', category: 'Digital Strategy' },
  { slug: 'trend-beacon', title: 'Trend Beacon', date: 'September - 2023', category: 'Brand Identity' },
  { slug: 'market-motion', title: 'Market Motion', date: 'September - 2024', category: 'Full-Stack SaaS' },
  { slug: 'tidal-strategy', title: 'Tidal Strategy', date: 'September - 2025', category: 'Conversion Optimization' },
];

export default function WorkPage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl mb-12 flex flex-col items-start gap-4">
            <Badge tag="Portfolio">Our Best Works</Badge>
            <Heading as="h1" size="h2">
              Transformative Cases that Drive Measurable{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Growth
              </span>
            </Heading>
            <Text size="xl" color="muted">
              Deep dive into selected case studies showcasing our engineering precision and digital craftsmanship.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Card key={p.slug} variant="elevated" className="flex flex-col justify-between h-[280px]">
                <div>
                  <span className="text-xs font-semibold text-[var(--primary-color)] uppercase tracking-wider">
                    {p.category}
                  </span>
                  <Heading as="h3" size="h5" className="mt-2">
                    {p.title}
                  </Heading>
                  <Text size="s" color="subtle" className="mt-1">
                    {p.date}
                  </Text>
                </div>
                <div>
                  <Button variant="secondary" size="sm" href={`/work/${p.slug}`}>
                    View Case Study
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
