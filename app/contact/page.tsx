import React from 'react';
import { Container, Section, Heading, Text, Badge, Card } from '@/components/ui';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact Us — Start a Project',
  description:
    'Connect with PixelCraft Studios to discuss web architecture, full-stack product engineering, or brand transformations.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] py-8 sm:py-12">
      <Section spacing="normal">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Communication Channels */}
            <div className="lg:col-span-5 flex flex-col items-start gap-6">
              <Badge tag="Direct Consultation">Initiate Collaboration</Badge>

              <Heading as="h1" size="h2">
                Let&apos;s Build Something{' '}
                <span className="font-script font-normal text-[var(--primary-color)]">
                  Extraordinary
                </span>
              </Heading>

              <Text size="xl" color="muted">
                Have a bold idea, web platform, or enterprise application that demands world-class engineering and kinetic design? Reach out directly to our engineering partners.
              </Text>

              <div className="space-y-4 pt-4 w-full">
                <Card variant="default" className="flex items-center gap-4 py-4 px-6 hover:border-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--light-gray)] block font-mono">DIRECT INQUIRIES</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-white hover:text-[var(--primary-color)] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </Card>

                <Card variant="default" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-6 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[var(--light-gray)] block font-mono">BUSINESS WHATSAPP & PHONE</span>
                      <a
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-[var(--primary-color)] transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-color)] text-[#080d0d] text-xs font-bold hover:brightness-105 active:scale-95 transition-all shrink-0 shadow-sm"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </Card>

                <Card variant="default" className="flex items-center gap-4 py-4 px-6 hover:border-white/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--light-gray)] block font-mono">STUDIO HEADQUARTERS</span>
                    <span className="text-sm font-semibold text-white">{siteConfig.address}</span>
                  </div>
                </Card>
              </div>

              {/* Official Social Media Channels */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#899698]">
                <span>Official Channels:</span>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[var(--primary-color)] transition-colors font-medium underline underline-offset-4"
                >
                  Facebook
                </a>
                <span>•</span>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[var(--primary-color)] transition-colors font-medium underline underline-offset-4"
                >
                  Instagram
                </a>
              </div>

              {/* Guarantees Box */}
              <div className="pt-4 border-t border-white/10 w-full space-y-2.5 text-xs text-[#899698]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--primary-color)]" />
                  <span>Average response time: &lt; 24 hours on business days</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--primary-color)]" />
                  <span>Strict NDA and intellectual property security guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--primary-color)]" />
                  <span>Direct consultation with senior engineering leads</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Real Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
