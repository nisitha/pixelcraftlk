import React from 'react';
import { Container, Section, Heading, Text, Badge } from '@/components/ui';

export const metadata = {
  title: 'Privacy Policy — Data Protection',
  description: 'Data protection, privacy standards, and cookie compliance policies of PixelCraft Studios.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-6">
            <Badge tag="Privacy">Data Protection & GDPR</Badge>
            <Heading as="h1" size="h2">
              Privacy Policy
            </Heading>
            <Text size="s" color="subtle">
              Last updated: March 2026
            </Text>
            <div className="space-y-6 text-sm text-[var(--light-gray)] leading-relaxed pt-4 border-t border-white/[0.08]">
              <p>
                1. Information We Collect: PixelCraft Studios collects information you provide directly through our inquiry forms, newsletter signups, and technical discovery requests.
              </p>
              <p>
                2. Use of Information: We use collected details solely to communicate regarding project scopes, deliver commissioned services, and improve platform performance.
              </p>
              <p>
                3. Third-Party Disclosures: We do not sell, rent, or trade client personal or corporate information to third parties.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
