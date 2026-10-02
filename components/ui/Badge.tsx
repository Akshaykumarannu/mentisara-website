import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
}

export function Badge({ className, variant = "primary", children, ...props }: BadgeProps) {
  const base = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase";
  const variants = {
    primary: "bg-forest-100 text-forest-800 border border-forest-200",
    secondary: "bg-sand-200 text-forest-900 border border-sand-300",
    accent: "bg-terracotta-100 text-terracotta-800 border border-terracotta-200",
    outline: "bg-transparent text-forest-800 border border-forest-600/30",
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
