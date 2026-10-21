import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';

export const metadata = {
  title: 'Pricing & Plans — Transparent Retainers',
  description: 'Flexible, custom-fit retainer plans designed to meet the unique needs and budget of your digital growth team.',
};

const tiers = [
  {
    name: 'Beginners',
    slug: 'beginners',
    price: '$799',
    period: '/month',
    desc: 'Start your journey with foundational strategy and essential tools.',
    features: ['Foundational strategy & setup', 'Monthly performance report', 'Monthly check-in advisory', 'Basic content plan'],
  },
  {
    name: 'Professional',
    slug: 'professional',
    price: '$999',
    period: '/month',
    featured: true,
    desc: 'Scale your marketing and engineering with dedicated support.',
    features: ['Multi-channel architecture', '24/7 priority support', 'Weekly analytics report', 'Custom landing pages', 'Continuous optimization'],
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    price: '$1035',
    period: '/month',
    desc: 'Full-scale embedded product design and development team.',
    features: ['Dedicated engineering pod', 'Custom SLA guarantee', 'Executive advisory board', 'Unlimited design requests', 'Enterprise infrastructure'],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl mb-12 flex flex-col items-start gap-4">
            <Badge tag="Our Plans">No Hidden Pricing</Badge>
            <Heading as="h1" size="h2">
              Pricing and Plans Tailored to any{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Team
              </span>
            </Heading>
            <Text size="xl" color="muted">
              We offer transparent, custom-fit plans designed to align with your team’s roadmap and strategic objectives.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t) => (
              <Card
                key={t.slug}
                variant={t.featured ? 'highlight' : 'elevated'}
                className="flex flex-col justify-between"
              >
                <div>
                  {t.featured && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--primary-color)] text-[var(--dark-color)] mb-4">
                      Most Popular
                    </span>
                  )}
                  <Heading as="h3" size="h4">
                    {t.name}
                  </Heading>
                  <div className="flex items-baseline gap-1 mt-3 mb-4">
                    <span className="text-4xl font-bold text-white">{t.price}</span>
                    <span className="text-sm text-[var(--light-gray)]">{t.period}</span>
                  </div>
                  <Text size="s" color="muted" className="mb-6">
                    {t.desc}
                  </Text>
                  <ul className="space-y-2.5 border-t border-white/[0.08] pt-6 mb-8">
                    {t.features.map((f, i) => (
                      <li key={i} className="text-sm text-[var(--light-gray)] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant={t.featured ? 'primary' : 'secondary'}
                  href={`/product/${t.slug}`}
                  className="w-full justify-center"
                >
                  Choose {t.name}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
