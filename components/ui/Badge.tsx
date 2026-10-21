import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: string;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Reusable Pill Badge Primitive (.sub-title-wrap)
 * High-contrast pill container with optional tag and right directional arrow
 */
export const Badge: React.FC<BadgeProps> = ({
  tag,
  href,
  icon,
  className,
  children,
  ...props
}) => {
  const content = (
    <>
      {tag && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--primary-color)] text-[var(--dark-color)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--dark-color)] animate-pulse" />
          {tag}
        </span>
      )}
      <span className="text-sm font-medium text-white">{children}</span>
      {icon || <ArrowRight className="w-3.5 h-3.5 text-[var(--light-gray)] transition-transform group-hover:translate-x-1" />}
    </>
  );

  const containerClasses = cn(
    'group inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[var(--dark-field)] border border-white/10 hover:border-white/20 transition-colors duration-200 cursor-default select-none',
    href && 'cursor-pointer hover:bg-[var(--surface-elevated)]',
    className
  );

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={containerClasses} {...props}>
      {content}
    </div>
  );
};
