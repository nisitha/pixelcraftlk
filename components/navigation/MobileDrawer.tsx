'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PixelCraftLogo } from './PixelCraftLogo';
import { navigationData } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile Navigation Drawer (≤ 991px)
 * Displays categorized full-screen navigation overlay, accordion submenus,
 * body scroll lock, and touch-optimized controls.
 */
export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleClose = useCallback(() => {
    setAccordionOpen(false);
    onClose();
  }, [onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className={cn(
        'fixed inset-0 z-[1050] bg-[var(--dark-color)]/98 backdrop-blur-2xl flex flex-col justify-between transition-all duration-300 lg:hidden overflow-y-auto',
        isOpen
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-4'
      )}
    >
      {/* Mobile Header Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] shrink-0">
        <PixelCraftLogo onClick={handleClose} />
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close mobile menu"
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:text-[var(--primary-color)] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Nav Links Stack */}
      <div className="px-6 py-8 flex flex-col gap-2 flex-1">
        {/* Company Link */}
        <Link
          href="/about"
          onClick={handleClose}
          className="flex items-center justify-between py-3.5 text-xl font-medium text-white hover:text-[var(--primary-color)] transition-colors border-b border-white/[0.06]"
        >
          <span>Company</span>
          <ArrowUpRight className="w-4 h-4 text-[var(--light-gray)]" />
        </Link>

        {/* Accordion: All Pages */}
        <div className="border-b border-white/[0.06]">
          <button
            type="button"
            onClick={() => setAccordionOpen((prev) => !prev)}
            aria-expanded={accordionOpen}
            className="w-full flex items-center justify-between py-3.5 text-xl font-medium text-white hover:text-[var(--primary-color)] transition-colors cursor-pointer"
          >
            <span>All Pages</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 transition-transform duration-300 text-[var(--light-gray)]',
                accordionOpen && 'rotate-180 text-[var(--primary-color)]'
              )}
            />
          </button>

          {/* Collapsible Submenu */}
          <div
            className={cn(
              'grid transition-all duration-300 ease-in-out overflow-hidden',
              accordionOpen
                ? 'grid-rows-[1fr] opacity-100 pb-4'
                : 'grid-rows-[0fr] opacity-0'
            )}
          >
            <div className="overflow-hidden space-y-6 pt-2 pl-3">
              {navigationData.megaMenuColumns.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)]">
                    {col.title}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {col.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={handleClose}
                        className="py-1 text-sm text-[var(--light-gray)] hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Works Link */}
        <Link
          href="/work"
          onClick={handleClose}
          className="flex items-center justify-between py-3.5 text-xl font-medium text-white hover:text-[var(--primary-color)] transition-colors border-b border-white/[0.06]"
        >
          <span>Works</span>
          <ArrowUpRight className="w-4 h-4 text-[var(--light-gray)]" />
        </Link>

        {/* Pricing Link */}
        <Link
          href="/pricing"
          onClick={handleClose}
          className="flex items-center justify-between py-3.5 text-xl font-medium text-white hover:text-[var(--primary-color)] transition-colors border-b border-white/[0.06]"
        >
          <span>Pricing</span>
          <ArrowUpRight className="w-4 h-4 text-[var(--light-gray)]" />
        </Link>

        {/* Resources Link */}
        <Link
          href="/blog"
          onClick={handleClose}
          className="flex items-center justify-between py-3.5 text-xl font-medium text-white hover:text-[var(--primary-color)] transition-colors border-b border-white/[0.06]"
        >
          <span>Resources</span>
          <ArrowUpRight className="w-4 h-4 text-[var(--light-gray)]" />
        </Link>
      </div>

      {/* Bottom Sticky Action Area */}
      <div className="p-6 border-t border-white/[0.08] bg-[var(--dark-field)] shrink-0 flex flex-col gap-3">
        <Button
          variant="primary"
          href="/contact"
          onClick={handleClose}
          className="w-full justify-center"
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};
