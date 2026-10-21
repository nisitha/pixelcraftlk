import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';
import { Lock } from 'lucide-react';

export const metadata = {
  title: 'Password Protected — PixelCraft Studios',
  description: 'This area is restricted to authorized clients and partners.',
};

export default function PasswordProtectedPage() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <Section spacing="normal">
        <Container size="narrow">
          <Card variant="elevated" className="max-w-md mx-auto p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 flex items-center justify-center mb-6 text-[var(--primary-color)]">
              <Lock className="w-6 h-6" />
            </div>
            <Badge tag="Restricted" className="mb-4">Protected Area</Badge>
            <Heading as="h1" size="h4" className="mb-2">
              Password Required
            </Heading>
            <Text size="s" color="muted" className="mb-6">
              This client deliverable is confidential. Please enter your team passcode to proceed.
            </Text>
            <form className="w-full space-y-4" action="#">
              <input
                type="password"
                placeholder="Enter password..."
                className="w-full h-12 px-4 rounded-xl bg-[var(--dark-field)] border border-white/10 text-white placeholder-[var(--dark-gray)] text-center tracking-widest focus:outline-none focus:border-[var(--primary-color)] transition-colors text-sm"
              />
              <Button variant="primary" type="submit" className="w-full justify-center">
                Unlock Deliverable
              </Button>
            </form>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
