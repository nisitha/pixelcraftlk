'use client';

import React, { useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PixelCraftLogo } from './PixelCraftLogo';
import { NavLink } from './NavLink';
import { MegaMenu } from './MegaMenu';
import { CartDrawer } from './CartDrawer';
import { MobileDrawer } from './MobileDrawer';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

export interface NavbarProps {
  className?: string;
}

/**
 * PixelCraft Studios Global Header & Navigation
 * Recreates the verified reference layout, sticky blur transition,
 * All Pages mega dropdown, cart drawer, and mobile navigation overlay.
 */
export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { isScrolled } = useScrollPosition(40);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-[var(--dark-color)]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'py-5 bg-transparent border-b border-transparent',
          className
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Left Cluster: Logo & Desktop Navigation Links */}
            <div className="flex items-center gap-8 xl:gap-12">
              <PixelCraftLogo />

              {/* Desktop Nav Links (≥ 992px) */}
              <nav
                role="navigation"
                aria-label="Primary Navigation"
                className="hidden lg:flex items-center gap-7 xl:gap-9"
              >
                <NavLink href="/about" label="Company" />
                <MegaMenu />
                <NavLink href="/work" label="Works" />
                <NavLink href="/pricing" label="Pricing" />
                <NavLink href="/blog" label="Resources" />
              </nav>
            </div>

            {/* Right Cluster: Cart Drawer Trigger, Primary CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Cart / Inquiry Scope Trigger Button */}
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                aria-label="Open Project Scope Cart"
                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white hover:text-[var(--primary-color)] transition-all duration-200 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                {/* Cart Quantity Badge */}
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--primary-color)] text-[var(--dark-color)] text-[11px] font-bold shadow-sm">
                  {cartCount}
                </span>
              </button>

              {/* Primary Action Button (Desktop Only) */}
              <div className="hidden sm:inline-flex">
                <Button variant="white" size="default" href="/contact" showIcon={false}>
                  Contact Now
                </Button>
              </div>

              {/* Mobile Hamburger Menu Button (≤ 991px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[var(--primary-color)] transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        itemCount={cartCount}
      />

      {/* Mobile Navigation Drawer Overlay */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
