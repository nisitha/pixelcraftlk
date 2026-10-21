import React from 'react';
import { Container, Section, Heading, Text, Badge, Button } from '@/components/ui';

export const metadata = {
  title: 'Coming Soon — PixelCraft Studios',
  description: 'Exciting features and client portal updates arriving shortly.',
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <Section spacing="normal">
        <Container size="narrow">
          <div className="flex flex-col items-center text-center gap-6">
            <Badge tag="In Progress">Platform Update</Badge>
            <Heading as="h1" size="h2">
              Something Extraordinary is in the{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Crafting
              </span>
            </Heading>
            <Text size="xl" color="muted" className="max-w-xl">
              We are actively developing this feature as part of the upcoming PixelCraft digital platform release.
            </Text>
            <div className="pt-4">
              <Button variant="primary" href="/">
                Return to Home
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
