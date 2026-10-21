'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink } from './NavLink';
import { navigationData } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  className?: string;
}

/**
 * Desktop "All Pages" Mega Dropdown Menu
 * Features 3-column categorised links, 400ms grace period close delay,
 * keyboard accessibility (Esc/Enter/Space), and outside-click dismissal.
 */
export const MegaMenu: React.FC<MegaMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear pending grace period timer
  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = () => {
    clearTimer();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    clearTimer();
    // 400ms grace delay matching Webflow data-delay="400"
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  const toggleDropdown = () => {
    clearTimer();
    setIsOpen((prev) => !prev);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      e.preventDefault();
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if ((e.key === 'Enter' || e.key === ' ') && !isOpen) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  // Outside click listener
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      clearTimer();
    };
  }, [isOpen, clearTimer]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      className={cn('relative inline-block', className)}
    >
      {/* Dropdown Trigger */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="All Pages navigation dropdown"
        className={cn(
          'group flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 outline-none cursor-pointer',
          isOpen ? 'text-white' : 'text-[var(--light-gray)] hover:text-white'
        )}
      >
        <span>All Pages</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-300 text-[var(--light-gray)] group-hover:text-white',
            isOpen && 'rotate-180 text-white'
          )}
        />
      </button>

      {/* Dropdown Menu Panel (3 Columns) */}
      <div
        className={cn(
          'absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[660px] max-w-[calc(100vw-32px)] transition-all duration-300 z-50 pointer-events-none',
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 translate-y-2 invisible'
        )}
      >
        <div className="bg-[var(--dark-field)] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <div className="grid grid-cols-3 gap-6 sm:gap-8">
            {navigationData.megaMenuColumns.map((col, idx) => (
              <div key={idx} className="flex flex-col items-start">
                {/* Column Title */}
                <span className="text-white font-semibold text-base mb-4 tracking-tight pb-1 border-b border-white/[0.08] w-full">
                  {col.title}
                </span>

                {/* Column Links */}
                <div className="flex flex-col gap-2.5 w-full">
                  {col.items.map((item, itemIdx) => (
                    <NavLink
                      key={itemIdx}
                      href={item.href}
                      label={item.label}
                      onClick={() => setIsOpen(false)}
                      className="text-sm"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
