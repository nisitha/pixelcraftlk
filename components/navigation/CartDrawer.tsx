'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  itemCount?: number;
}

/**
 * Slide-Over Cart & Project Scope Drawer
 * Matches the reference eCommerce / Inquiry drawer with body scroll lock and keyboard accessibility
 */
export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  itemCount = 0,
}) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop Scrim */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          'fixed inset-0 bg-black/70 backdrop-blur-sm z-[1100] transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Slide-Over Drawer Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Project Scope Cart Drawer"
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-[420px] bg-[var(--dark-field)] border-l border-white/10 z-[1200] shadow-2xl flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[var(--primary-color)]" />
            <h3 className="text-lg font-semibold text-white">Project Scope</h3>
            <span className="ml-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-[var(--primary-color)] text-[var(--dark-color)]">
              {itemCount}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-[var(--light-gray)] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between">
          {itemCount === 0 ? (
            <div className="flex flex-col items-center justify-center text-center my-auto py-12">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[var(--light-gray)]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">
                No Services Selected
              </h4>
              <p className="text-sm text-[var(--light-gray)] max-w-[260px] mb-6">
                Explore our capabilities or reach out directly for custom digital solutions.
              </p>
              <Button
                variant="secondary"
                size="sm"
                href="/service"
                onClick={onClose}
              >
                Browse Capabilities
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-white/10 flex items-start justify-between">
                <div>
                  <h5 className="font-medium text-white text-sm">Full-Stack Digital Transformation</h5>
                  <p className="text-xs text-[var(--light-gray)] mt-1">Design System & Web Architecture</p>
                </div>
                <span className="text-sm font-semibold text-[var(--primary-color)]">$999/mo</span>
              </div>
            </div>
          )}

          {/* Quick Recommendation Box */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mt-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need a Custom Solution?</span>
            </div>
            <p className="text-xs text-[var(--light-gray)]">
              Schedule a technical discovery session with our engineering leads.
            </p>
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-[var(--primary-color)] mt-2 transition-colors"
            >
              <span>Schedule consultation</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-white/[0.08] bg-[var(--dark-color)]/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-[var(--light-gray)]">Estimated Investment</span>
            <span className="text-base font-semibold text-white">
              {itemCount > 0 ? '$999.00 USD' : '$0.00 USD'}
            </span>
          </div>

          <Button
            variant="primary"
            href="/checkout"
            onClick={onClose}
            className="w-full justify-center"
          >
            Review Scope &amp; Checkout
          </Button>
        </div>
      </div>
    </>
  );
};
