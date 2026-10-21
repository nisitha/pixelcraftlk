'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Container, Section, Heading, Text, Badge, Card } from '@/components/ui';
import { ShieldCheck, CheckCircle2, Lock, ArrowLeft, CreditCard } from 'lucide-react';
import { pricingPlans } from '@/data/homepage';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const selectedPlanId = searchParams.get('plan') || 'professional';

  const [currentPlanId, setCurrentPlanId] = useState(selectedPlanId);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [isCompleted, setIsCompleted] = useState(false);

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    company: '',
    country: 'United States',
  });

  const selectedTier = pricingPlans.find((p) => p.id === currentPlanId) || pricingPlans[1];
  const unitPrice = billingCycle === 'monthly' ? selectedTier.monthlyPrice : selectedTier.yearlyPrice;
  const subtotal = billingCycle === 'yearly' ? unitPrice * 12 : unitPrice;
  const estimatedTax = Math.round(subtotal * 0.0); // 0 tax for B2B global services
  const total = subtotal + estimatedTax;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
  };

  if (isCompleted) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center py-16">
        <Container size="narrow">
          <Card variant="elevated" className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[var(--primary-color)]/20 text-[var(--primary-color)] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[var(--primary-color)] font-semibold mb-2">
              RETAINER RESERVED //
            </span>

            <h1 className="text-3xl font-bold text-white tracking-tight mb-3">
              Retainer Slot Secured
            </h1>

            <p className="text-[#899698] leading-relaxed max-w-md mb-8 text-sm sm:text-base">
              Thank you, <strong className="text-white">{customerDetails.name || 'Valued Partner'}</strong>. Your onboarding documentation for the{' '}
              <strong className="text-white">{selectedTier.name}</strong> retainer has been initiated. Our technical operations director will email your secure onboarding invite within 2 business hours.
            </p>

            <div className="flex gap-4">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-full bg-[var(--primary-color)] text-[#080d0d] font-semibold text-sm hover:brightness-105 transition-all"
              >
                Return to Homepage
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-2.5 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all"
              >
                Explore Retainers
              </Link>
            </div>
          </Card>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] py-8 sm:py-12">
      <Section spacing="normal">
        <Container size="wide">
          <div className="mb-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#899698] hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Pricing Plans</span>
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Badge tag="Retainer Checkout">Secure Client Onboarding</Badge>
                <Heading as="h1" size="h2" className="mt-2">
                  Confirm Engineering Retainer
                </Heading>
              </div>

              {/* Billing Toggle */}
              <div className="inline-flex items-center p-1 rounded-full bg-[#111616] border border-white/10 self-start">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    billingCycle === 'monthly' ? 'bg-white text-[#080d0d]' : 'text-[#899698]'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    billingCycle === 'yearly' ? 'bg-white text-[#080d0d]' : 'text-[#899698]'
                  }`}
                >
                  Yearly (-20%)
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                {/* 1. Plan Selector */}
                <div className="p-6 rounded-2xl bg-[#111616] border border-white/10 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#899698] block">
                    1. Select Retainer Tier
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {pricingPlans.map((plan) => {
                      const isSelected = plan.id === currentPlanId;
                      const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

                      return (
                        <div
                          key={plan.id}
                          onClick={() => setCurrentPlanId(plan.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[var(--primary-color)]/10 border-[var(--primary-color)] text-white'
                              : 'bg-white/5 border-white/10 text-[#899698] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-white">{plan.name}</span>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-[var(--primary-color)]" />
                            )}
                          </div>
                          <div className="mt-2 text-lg font-bold text-white">${price}</div>
                          <span className="text-[11px] text-[#6f7781]">/mo</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Customer Credentials */}
                <div className="p-6 rounded-2xl bg-[#111616] border border-white/10 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#899698] block">
                    2. Primary Technical Contact
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="chk_name" className="block text-xs font-semibold text-[#899698] mb-1">
                        Full Name *
                      </label>
                      <input
                        id="chk_name"
                        type="text"
                        required
                        placeholder="Elena Vance"
                        value={customerDetails.name}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-[var(--dark-field)] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-color)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="chk_email" className="block text-xs font-semibold text-[#899698] mb-1">
                        Authorized Work Email *
                      </label>
                      <input
                        id="chk_email"
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={customerDetails.email}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-[var(--dark-field)] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-color)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="chk_company" className="block text-xs font-semibold text-[#899698] mb-1">
                      Company Legal Name *
                    </label>
                    <input
                      id="chk_company"
                      type="text"
                      required
                      placeholder="Nexus Technologies Inc"
                      value={customerDetails.company}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, company: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl bg-[var(--dark-field)] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-color)]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full h-[52px] rounded-full bg-[var(--primary-color)] hover:brightness-105 active:scale-[0.98] text-[#080d0d] font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-xl select-none"
                >
                  <Lock className="w-4 h-4" />
                  <span>Reserve Retainer Slot (${total})</span>
                </button>
              </form>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-3xl bg-[#0f1414] border border-white/10 space-y-6 shadow-2xl sticky top-28">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#6f7781] block mb-1">
                    ORDER SUMMARY //
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {selectedTier.name} Retainer
                  </h3>
                  <p className="text-xs text-[#899698] mt-1">
                    Billed {billingCycle === 'monthly' ? 'monthly' : 'annually (20% discount)'}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-sm">
                  <div className="flex justify-between text-[#899698]">
                    <span>Base Tier Rate</span>
                    <span className="text-white font-medium">${unitPrice} / mo</span>
                  </div>

                  <div className="flex justify-between text-[#899698]">
                    <span>Billing Frequency</span>
                    <span className="text-white font-medium capitalize">{billingCycle}</span>
                  </div>

                  <div className="flex justify-between text-[#899698]">
                    <span>Tax &amp; Surcharges</span>
                    <span className="text-white font-medium">$0 (B2B Global)</span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-white pt-4 border-t border-white/10">
                    <span>Due Today</span>
                    <span className="text-[var(--primary-color)] text-xl">${total}</span>
                  </div>
                </div>

                {/* Trust and SLA Badges */}
                <div className="pt-4 border-t border-white/5 space-y-2.5 text-xs text-[#899698]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--primary-color)]" />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[var(--primary-color)]" />
                    <span>Invoiced via Stripe Enterprise Billing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[var(--primary-color)]" />
                    <span>256-Bit SSL Encrypted Transmission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] flex items-center justify-center">
          <Text color="muted">Loading checkout parameters...</Text>
        </main>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
