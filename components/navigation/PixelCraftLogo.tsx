import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PixelCraftLogoProps {
  className?: string;
  onClick?: () => void;
}

/**
 * PixelCraft Studios Vector Brand Logo
 * Geometric craft insignia with electric lime accent mark and modern typography
 */
export const PixelCraftLogo: React.FC<PixelCraftLogoProps> = ({ className, onClick }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('group inline-flex items-center gap-3 select-none outline-none', className)}
      aria-label="PixelCraft Studios Homepage"
    >
      {/* Geometric Insignia */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--dark-field)] border border-white/10 group-hover:border-[var(--primary-color)]/50 transition-colors duration-300">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white group-hover:text-[var(--primary-color)] transition-colors duration-300"
        >
          {/* Stylized Pixel/Craft Monogram */}
          <path
            d="M4 4H14C17.3137 4 20 6.68629 20 10C20 13.3137 17.3137 16 14 16H9V20H4V4Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 10H14"
            stroke="var(--primary-color)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        {/* Micro Lime Spark Indicator */}
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--primary-color)] shadow-[0_0_8px_var(--primary-color)]" />
      </div>

      {/* Brand Wordmark */}
      <div className="flex items-baseline tracking-tight font-semibold text-lg sm:text-xl text-white">
        <span>Pixel</span>
        <span className="text-[var(--primary-color)]">Craft</span>
        <span className="text-[var(--light-gray)] font-normal text-xs ml-1.5 hidden sm:inline-block">
          STUDIOS
        </span>
      </div>
    </Link>
  );
};
