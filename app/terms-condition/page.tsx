import React from 'react';
import { Container, Section, Heading, Text, Badge } from '@/components/ui';

export const metadata = {
  title: 'Terms & Conditions — Legal',
  description: 'Terms of service, client agreements, and intellectual property terms for PixelCraft Studios.',
};

export default function TermsPage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-6">
            <Badge tag="Legal">Client Service Agreements</Badge>
            <Heading as="h1" size="h2">
              Terms & Conditions
            </Heading>
            <Text size="s" color="subtle">
              Last updated: March 2026
            </Text>
            <div className="space-y-6 text-sm text-[var(--light-gray)] leading-relaxed pt-4 border-t border-white/[0.08]">
              <p>
                1. Acceptance of Terms: By accessing or utilizing the digital services of PixelCraft Studios, you agree to comply with and be bound by these Terms of Service.
              </p>
              <p>
                2. Intellectual Property Rights: All bespoke code, custom designs, and assets created specifically for clients are assigned in full upon complete milestone settlement.
              </p>
              <p>
                3. Confidentiality & Non-Disclosure: We treat all proprietary architecture, business metrics, and trade secrets with strict non-disclosure protections.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
