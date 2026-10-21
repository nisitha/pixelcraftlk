import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';
import { tokens } from '@/lib/tokens';

export const metadata = {
  title: 'Style Guide — Living UI Component System',
  description: 'Living design tokens, typography specimens, interactive buttons, and component documentation.',
};

export default function StyleGuidePage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl mb-12 flex flex-col items-start gap-4">
            <Badge tag="Tokens">Living Design System</Badge>
            <Heading as="h1" size="h2">
              Style Guide & System{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Specimen
              </span>
            </Heading>
            <Text size="xl" color="muted">
              Centralized design tokens and interactive primitives reverse-engineered from the Scalient reference audit.
            </Text>
          </div>

          <div className="space-y-12">
            {/* Color Swatches */}
            <div>
              <Heading as="h2" size="h4" className="mb-4">Color Palette</Heading>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <div className="p-4 rounded-xl bg-[var(--dark-color)] border border-white/20">
                  <span className="text-xs text-[var(--light-gray)]">Canvas</span>
                  <p className="text-sm font-semibold text-white">{tokens.colors.darkColor}</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--dark-field)] border border-white/10">
                  <span className="text-xs text-[var(--light-gray)]">Field</span>
                  <p className="text-sm font-semibold text-white">{tokens.colors.darkField}</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-white/10">
                  <span className="text-xs text-[var(--light-gray)]">Elevated</span>
                  <p className="text-sm font-semibold text-white">{tokens.colors.surfaceElevated}</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--dark-field)] border border-white/10">
                  <span className="text-xs text-[var(--light-gray)]">Electric Lime</span>
                  <p className="text-sm font-semibold text-[var(--primary-color)]">{tokens.colors.primaryColor}</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--dark-field)] border border-white/10">
                  <span className="text-xs text-[var(--light-gray)]">Indigo Accent</span>
                  <p className="text-sm font-semibold text-[var(--blue-color)]">{tokens.colors.blueColor}</p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--dark-field)] border border-white/10">
                  <span className="text-xs text-[var(--light-gray)]">Alert Orange</span>
                  <p className="text-sm font-semibold text-[var(--warning-color)]">{tokens.colors.warningColor}</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div>
              <Heading as="h2" size="h4" className="mb-4">Button Variants & Hovers</Heading>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary Roll Button</Button>
                <Button variant="secondary">Secondary Dark</Button>
                <Button variant="ghost">Ghost Trigger</Button>
                <Button variant="primary" size="sm">Small Primary</Button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <Heading as="h2" size="h4" className="mb-4">Badges & Pills</Heading>
              <div className="flex flex-wrap items-center gap-4">
                <Badge tag="New">Feature Announced</Badge>
                <Badge tag="Verified">Production Ready</Badge>
                <Badge>Standard Badge Without Tag</Badge>
              </div>
            </div>

            {/* Cards */}
            <div>
              <Heading as="h2" size="h4" className="mb-4">Cards & Surfaces</Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="default">
                  <h4 className="text-base font-semibold text-white mb-2">Default Card</h4>
                  <Text size="s" color="muted">Level 1 surface with 1px border stroke.</Text>
                </Card>
                <Card variant="elevated">
                  <h4 className="text-base font-semibold text-white mb-2">Elevated Card</h4>
                  <Text size="s" color="muted">Level 2 surface with subtle ambient shadow.</Text>
                </Card>
                <Card variant="highlight">
                  <h4 className="text-base font-semibold text-white mb-2">Highlight Card</h4>
                  <Text size="s" color="muted">Accent border for selected or featured items.</Text>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
