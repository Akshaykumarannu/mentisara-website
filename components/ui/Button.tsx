import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-forest-600 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary: "bg-[#D4956A] hover:bg-[#C4855A] text-white shadow-soft-sm hover:shadow-soft-md border border-[#C4855A]",
      secondary: "bg-[#FAF8F4] hover:bg-[#F2ECE0] text-[#0A0F0B] font-semibold border border-sand-300/80 shadow-soft-sm",
      accent: "bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-soft-md border border-terracotta-600",
      outline: "bg-transparent hover:bg-white/10 text-current border border-current/30 hover:border-current",
      ghost: "bg-transparent hover:bg-white/10 text-current",
      link: "bg-transparent text-[#D4956A] hover:underline p-0 h-auto font-semibold",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs md:text-sm",
      md: "px-6 py-3 text-sm md:text-base",
      lg: "px-8 py-4 text-base md:text-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
