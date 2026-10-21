import React from 'react';
import { Container, Section, Heading, Badge } from '@/components/ui';

export const metadata = {
  title: 'Licenses & Attribution',
  description: 'Asset licenses, typography attribution, and open-source acknowledgements for PixelCraft Studios.',
};

export default function LicensePage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-6">
            <Badge tag="Attribution">Open Source & Licenses</Badge>
            <Heading as="h1" size="h2">
              Licenses
            </Heading>
            <div className="space-y-6 text-sm text-[var(--light-gray)] leading-relaxed pt-4 border-t border-white/[0.08]">
              <p>
                <strong>Typography</strong>: Google Fonts Inter and Italianno are distributed under the SIL Open Font License (OFL) Version 1.1.
              </p>
              <p>
                <strong>Icons</strong>: Lucide React icons are licensed under the MIT License.
              </p>
              <p>
                <strong>Libraries</strong>: Next.js, React, and Tailwind CSS are licensed under the MIT License. GSAP is licensed under GreenSock standard licensing.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
