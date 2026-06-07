"use client";

import { cn } from "@/lib/utils";

interface MobileShellProps {
  children: React.ReactNode;
  className?: string;
}

/** Root wrapper for all mobile pages. Adds bottom padding for the tab bar. */
export function MobileShell({ children, className }: MobileShellProps) {
  return (
    <div className={cn("min-h-screen pb-24", className)}>
      {children}
    </div>
  );
}

interface MobileHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  right?: React.ReactNode;
  className?: string;
}

/** Sticky page header for native mobile pages. */
export function MobileHeader({ title, subtitle, right, className }: MobileHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between px-4 pt-4 pb-2", className)}>
      <div className="min-w-0">
        {typeof title === "string" ? (
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent truncate">
            {title}
          </h1>
        ) : (
          title
        )}
        {subtitle && (
          <p className="text-xs text-gray-400 mt-0.5 truncate">{subtitle}</p>
        )}
      </div>
      {right && <div className="flex-shrink-0 ml-3">{right}</div>}
    </div>
  );
}

interface MobileSectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

/** Titled section within a mobile page. */
export function MobileSection({ children, title, className }: MobileSectionProps) {
  return (
    <div className={cn("px-4", className)}>
      {title && (
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
          {title}
        </p>
      )}
      {children}
    </div>
  );
}

/** A glass card optimized for mobile. */
export function MobileCard({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      role={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "bg-white/5 border border-white/10 rounded-2xl",
        onClick && "active:scale-[0.98] transition-transform cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Horizontally scrollable row (type filters, tabs, etc.) */
export function MobileScrollRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-auto px-4 py-2 scrollbar-hide",
        className
      )}
    >
      {children}
    </div>
  );
}
