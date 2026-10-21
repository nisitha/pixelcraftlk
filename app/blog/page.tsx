import React from 'react';
import { Container, Section, Heading, Text, Badge, Button, Card } from '@/components/ui';

export const metadata = {
  title: 'Resources & Blog — Market Insights & Strategy',
  description: 'Deep architectural insights, growth frameworks, and thought leadership from PixelCraft Studios.',
};

const posts = [
  {
    slug: 'fatal-flaw-in-growth-strategy',
    title: 'Fatal Flaw in Growth Strategy: Why Focusing on First-Sales Starves Long-Term Profitability',
    category: 'Revenue',
    date: 'December 16, 2025',
    author: 'Julian Reed',
  },
  {
    slug: 'lookalike-audiences-that-convert',
    title: 'Lookalike: Build Hyper-Accurate Lookalike Audiences That Convert Without Burning Budget',
    category: 'Targeting',
    date: 'December 16, 2025',
    author: 'Liam Walker',
  },
  {
    slug: 'vanity-metrics-hidden-cost',
    title: 'The Hidden Cost of Vanity Metrics: Why Stop Mistaking Engagement for Real Customer Revenue',
    category: 'Analytics',
    date: 'December 16, 2025',
    author: 'Alistair Finch',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-[70vh]">
      <Section spacing="normal">
        <Container size="wide">
          <div className="max-w-3xl mb-12 flex flex-col items-start gap-4">
            <Badge tag="Resources">Market Insights</Badge>
            <Heading as="h1" size="h2">
              Market Insights and our{' '}
              <span className="font-script font-normal text-[var(--primary-color)]">
                Strategy
              </span>
            </Heading>
            <Text size="xl" color="muted">
              We fuel bold ideas, driving them forward with sharp strategy, data audits, and architectural discipline.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Card key={p.slug} variant="elevated" className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[var(--primary-color)] uppercase tracking-wider">
                    {p.category}
                  </span>
                  <Heading as="h3" size="h5" className="mt-2 mb-3">
                    {p.title}
                  </Heading>
                  <Text size="s" color="subtle">
                    By {p.author} • {p.date}
                  </Text>
                </div>
                <div className="pt-6">
                  <Button variant="secondary" size="sm" href={`/blog/${p.slug}`}>
                    Read Article
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
