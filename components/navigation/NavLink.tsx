import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Reusable NavLink with Reference Dual-Layer Vertical Text Roll
 * On hover, top text rolls up to -100% while bottom text rolls in from 100% to 0%.
 */
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  className,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group relative inline-block h-[22px] overflow-hidden text-[15px] font-medium leading-[22px] transition-colors duration-200 select-none outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-color)] rounded',
        isActive ? 'text-white' : 'text-[var(--light-gray)] hover:text-white',
        className
      )}
    >
      {/* Top Text Layer (Rolls up to -100% on hover) */}
      <span
        aria-hidden="true"
        className="block transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full"
      >
        {label}
      </span>

      {/* Bottom Text Layer (Rolls in from 100% to 0% on hover) */}
      <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 text-white font-medium">
        {label}
      </span>
    </Link>
  );
};
