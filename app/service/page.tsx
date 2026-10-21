import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';

export const metadata = {
  title: 'Services — Full-Stack Digital Capabilities',
  description: 'Comprehensive digital capabilities spanning content marketing, automation, branding, and full-stack engineering.',
};

const services = [
  { slug: 'content-marketing', title: 'Content Marketing', desc: 'Create and distribute high-value content that attracts, educates, and converts.' },
  { slug: 'marketing-automation', title: 'Marketing Automation', desc: 'Streamline growth funnels and deliver personalized experiences at scale.' },
  { slug: 'influencer-marketing', title: 'Influencer Marketing', desc: 'Partner with authoritative industry voices to amplify your brand presence.' },
  { slug: 'email-marketing', title: 'Email Marketing', desc: 'Build compounding retention loops with high-converting lifecycle email flows.' },
];

export default function ServicePage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl mb-12 flex flex-col items-start gap-4">
            <Badge tag="Capabilities">Our Services</Badge>
            <Heading as="h1" size="h2">
              Solutions Tailored for Your{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Growth
              </span>
            </Heading>
            <Text size="xl" color="muted">
              We fuel bold ideas, driving them forward with sharp strategy, modern design systems, and resilient engineering.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Card key={s.slug} variant="elevated" className="flex flex-col justify-between p-8">
                <div>
                  <Heading as="h3" size="h4" className="mb-3">
                    {s.title}
                  </Heading>
                  <Text size="m" color="muted" className="mb-6">
                    {s.desc}
                  </Text>
                </div>
                <div>
                  <Button variant="secondary" size="sm" href={`/service/${s.slug}`}>
                    Service Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
