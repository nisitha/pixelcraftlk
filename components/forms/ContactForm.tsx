'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ContactFormProps {
  className?: string;
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className, defaultService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: defaultService,
    message: '',
    website_hp: '', // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateClient = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid work email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide at least 10 characters describing your project.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // 1. Client-side validation
    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Server-side validation via API Route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setServerError(data.error || 'Failed to submit inquiry. Please check your inputs.');
        setIsSubmitting(false);
        return;
      }

      // 3. Success state
      setIsSuccess(true);
      setSuccessMessage(data.message || 'Inquiry successfully submitted!');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: defaultService,
        message: '',
        website_hp: '',
      });
      setFieldErrors({});
    } catch (err) {
      console.error('Contact submission error:', err);
      setServerError('A network error occurred while submitting. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn('p-8 sm:p-10 rounded-3xl bg-[#0f1515] border border-[var(--primary-color)]/30 text-center shadow-2xl flex flex-col items-center justify-center min-h-[420px]', className)}>
        <div className="w-16 h-16 rounded-full bg-[var(--primary-color)]/15 border border-[var(--primary-color)]/40 flex items-center justify-center text-[var(--primary-color)] mb-6 animate-bounce-gentle">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
          Inquiry Transmitted Successfully
        </h3>

        <p className="text-base text-[#899698] font-normal leading-relaxed max-w-md mb-8">
          {successMessage}
        </p>

        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className={cn('p-8 sm:p-10 rounded-3xl bg-[#111616] border border-white/10 shadow-2xl relative overflow-hidden', className)}>
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[var(--primary-color)] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Consultation</span>
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">Initiate Project Inquiry</h3>
        <p className="text-sm text-[#899698] mt-1.5 leading-relaxed">
          Provide your project scope below. Our technical leads review all inquiries and respond within 24 hours.
        </p>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-sm text-red-400">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Anti-Spam Honeypot Field (Hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_hp">Leave this empty</label>
          <input
            id="website_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website_hp}
            onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#899698] mb-1.5">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="e.g. Elena Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={cn(
                'w-full h-12 px-4 rounded-xl bg-[var(--dark-field)] border text-white placeholder-[#5a6465] text-sm focus:outline-none transition-all',
                fieldErrors.name
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-white/10 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]'
              )}
            />
            {fieldErrors.name && (
              <span className="text-xs text-red-400 mt-1 block">{fieldErrors.name}</span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#899698] mb-1.5">
              Work Email *
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="elena@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={cn(
                'w-full h-12 px-4 rounded-xl bg-[var(--dark-field)] border text-white placeholder-[#5a6465] text-sm focus:outline-none transition-all',
                fieldErrors.email
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-white/10 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]'
              )}
            />
            {fieldErrors.email && (
              <span className="text-xs text-red-400 mt-1 block">{fieldErrors.email}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[#899698] mb-1.5">
              Company / Brand
            </label>
            <input
              id="company"
              type="text"
              placeholder="e.g. Nexus Technologies"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full h-12 px-4 rounded-xl bg-[var(--dark-field)] border border-white/10 text-white placeholder-[#5a6465] text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] transition-all"
            />
          </div>

          {/* Service Interest Select */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#899698] mb-1.5">
              Service Focus
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full h-12 px-4 rounded-xl bg-[var(--dark-field)] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] transition-all cursor-pointer"
            >
              <option value="" className="bg-[#111616] text-[#899698]">Select primary focus...</option>
              <option value="Web Architecture & SaaS" className="bg-[#111616] text-white">Full-Stack Web Architecture &amp; SaaS</option>
              <option value="Brand Systems & UI/UX" className="bg-[#111616] text-white">Brand Identity &amp; Kinetic Motion</option>
              <option value="Growth & Telemetry" className="bg-[#111616] text-white">Marketing Automation &amp; Telemetry</option>
              <option value="Enterprise Engineering Retainer" className="bg-[#111616] text-white">Enterprise Engineering Retainer</option>
              <option value="Other / Custom Brief" className="bg-[#111616] text-white">Other / Custom Brief</option>
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#899698] mb-1.5">
            Project Scope &amp; Target Timeline *
          </label>
          <textarea
            id="message"
            rows={4}
            required
            placeholder="Describe your current tech stack, target goals, key challenges, and desired launch window..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={cn(
              'w-full p-4 rounded-xl bg-[var(--dark-field)] border text-white placeholder-[#5a6465] text-sm focus:outline-none transition-all resize-none',
              fieldErrors.message
                ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-white/10 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]'
            )}
          />
          {fieldErrors.message && (
            <span className="text-xs text-red-400 mt-1 block">{fieldErrors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[52px] rounded-full bg-[var(--primary-color)] hover:brightness-105 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-[#080d0d] font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-lg select-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
