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
    sm: "w-[170px] sm:w-[195px]",
    md: "w-[210px] sm:w-[240px]",
    lg: "w-[260px] sm:w-[300px]",
  };

  const logoSrc = isLight ? "/mentisara-logo-white.png" : "/mentisara-logo-dark.png";

  return (
    <div
      className={cn(
        "select-none leading-none flex-shrink-0 inline-flex items-center",
        isLight && "drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] filter",
        className
      )}
      aria-label="Mentisara — The Essence of the Mind"
    >
      <Image
        src={logoSrc}
        alt="Mentisara — The Essence of the Mind"
        width={508}
        height={132}
        priority
        className={cn(
          "h-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] brightness-105 contrast-110",
          sizeClasses[size]
        )}
      />
    </div>
  );
}
