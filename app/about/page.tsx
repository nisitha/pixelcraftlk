import React from 'react';
import { Container, Section, Heading, Text, Badge, Button } from '@/components/ui';

export const metadata = {
  title: 'Company — About PixelCraft Studios',
  description:
    'Learn about PixelCraft Studios, our mission, leadership team, and digital craftsmanship philosophy.',
};

export default function AboutPage() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            <Badge tag="About Us">Agency Manifesto</Badge>
            <Heading as="h1" size="h2">
              Connecting Brands with Data-Driven{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Precision
              </span>
            </Heading>
            <Text size="xl" color="muted">
              At PixelCraft Studios, we believe marketing and engineering aren’t about selling—they’re about connecting. We build full-scale digital experiences that turn attention into compounding growth.
            </Text>
            <div className="pt-4 flex gap-4">
              <Button variant="primary" href="/contact">
                Work With Us
              </Button>
              <Button variant="secondary" href="/work">
                View Our Works
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
