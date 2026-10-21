import React from 'react';
import Link from 'next/link';
import { Container, Section, Badge } from '@/components/ui';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center py-16">
      <Section spacing="normal">
        <Container size="narrow">
          <div className="flex flex-col items-center text-center">
            {/* Top Badge */}
            <Badge tag="HTTP 404" className="mb-6">
              Page Not Located
            </Badge>

            {/* Display 404 Typography */}
            <div className="relative mb-4 select-none">
              <span className="text-[120px] sm:text-[160px] md:text-[200px] font-black tracking-tighter leading-none text-white/5 block">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
                  Lost in the{' '}
                  <span className="font-script font-normal text-[var(--primary-color)] italic">
                    void
                  </span>
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#899698] max-w-md mx-auto mb-8 leading-relaxed">
              The page or resource you requested has been relocated, archived, or does not exist within the PixelCraft Studios platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[var(--primary-color)] hover:brightness-105 text-[#080d0d] font-semibold text-sm transition-all shadow-lg select-none"
              >
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all select-none"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Works</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
