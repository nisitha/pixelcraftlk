import React from 'react';
import { Container, Section, Heading, Text, Badge } from '@/components/ui';

export const metadata = {
  title: 'Changelog — Platform Updates',
  description: 'Chronological release notes and design system updates for PixelCraft Studios.',
};

export default function ChangelogPage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-6">
            <Badge tag="Releases">Platform Updates</Badge>
            <Heading as="h1" size="h2">
              Changelog
            </Heading>
            <div className="space-y-6 pt-4 border-t border-white/[0.08] w-full">
              <div className="p-6 rounded-2xl bg-[var(--dark-field)] border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white">Version 1.0.0 — Phase 2 Release</span>
                  <span className="text-xs text-[var(--primary-color)] font-mono">March 2026</span>
                </div>
                <Text size="s" color="muted">
                  Recreated full reference navigation, sticky header with blur threshold, All Pages mega menu, cart slide-over drawer, and mobile navigation overlay.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
