import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';

export const metadata = {
  title: 'Request a Demo — Consultation',
  description: 'Book a discovery consultation and live architectural demonstration with PixelCraft Studios.',
};

export default function RequestDemoPage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-2xl flex flex-col items-start gap-6">
            <Badge tag="Discovery">Live Walkthrough</Badge>
            <Heading as="h1" size="h2">
              Request a Technical{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Demo
              </span>
            </Heading>
            <Text size="xl" color="muted">
              See firsthand how our engineering stack, motion design systems, and conversion-optimized architectures drive market impact.
            </Text>
            <Card variant="highlight" className="w-full mt-4">
              <Button variant="primary" href="/contact" className="w-full justify-center">
                Schedule Interactive Consultation
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
