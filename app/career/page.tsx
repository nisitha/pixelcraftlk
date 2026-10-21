import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';

export const metadata = {
  title: 'Careers — Join PixelCraft Studios',
  description: 'Explore open engineering, design, and product strategy roles at PixelCraft Studios.',
};

const jobs = [
  { slug: 'seo-specialist', title: 'SEO & Performance Specialist', type: 'Full-Time', location: 'Remote / Colombo' },
  { slug: 'frontend-architect', title: 'Senior Frontend Architect (Next.js/React)', type: 'Full-Time', location: 'Remote' },
  { slug: 'ui-ux-designer', title: 'Lead UI/UX & Motion Designer', type: 'Full-Time', location: 'Remote / Colombo' },
];

export default function CareerPage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl mb-12 flex flex-col items-start gap-4">
            <Badge tag="Join Us">Career Opportunities</Badge>
            <Heading as="h1" size="h2">
              Build the Future of Digital{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Craftsmanship
              </span>
            </Heading>
            <Text size="xl" color="muted">
              We are a team of curious builders, designers, and engineers creating category-defining digital products.
            </Text>
          </div>

          <div className="space-y-4 max-w-4xl">
            {jobs.map((j) => (
              <Card key={j.slug} variant="elevated" className="flex items-center justify-between p-6">
                <div>
                  <Heading as="h3" size="h5">
                    {j.title}
                  </Heading>
                  <Text size="s" color="subtle" className="mt-1">
                    {j.type} • {j.location}
                  </Text>
                </div>
                <Button variant="secondary" size="sm" href={`/career/${j.slug}`}>
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
