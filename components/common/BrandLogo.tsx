"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className,
  variant = "auto",
  size = "md",
}: BrandLogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "w-[150px] sm:w-[170px]",
    md: "w-[190px] sm:w-[215px]",
    lg: "w-[240px] sm:w-[275px]",
  };

  return (
    <div
      className={cn(
        "select-none leading-none flex-shrink-0 inline-flex items-center",
        isLight && "brightness-0 invert",
        className
      )}
      aria-label="Mentisara — The Essence of the Mind"
    >
      <Image
        src="/mentisara-logo.png"
        alt="Mentisara — The Essence of the Mind"
        width={508}
        height={132}
        priority
        className={cn(
          "h-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]",
          sizeClasses[size]
        )}
      />
    </div>
  );
}
