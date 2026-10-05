"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  /**
   * "light"  → on DARK backgrounds  → white wordmark
   * "dark"   → on LIGHT backgrounds → dark forest wordmark
   * "auto"   → dark text by default
   */
  variant?: "light" | "dark" | "auto";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className,
  variant = "auto",
  showTagline = true,
  size = "md",
}: BrandLogoProps) {
  const isLight = variant === "light";

  /* ── Colour tokens ─────────────────────────── */
  const wordFill    = isLight ? "#FFFFFF" : "#111816";
  const taglineFill = isLight ? "rgba(255,255,255,0.58)" : "#6B7E72";
  const leafBody    = isLight ? "#9BBF9E" : "#6B8A6E";
  const leafShine   = isLight ? "#C0D9C2" : "#93B595";
  const stemColor   = isLight ? "#7A9E7D" : "#557A58";

  /* ── Size map ──────────────────────────────── */
  // viewBox: 270 × 94 (with tagline), 270 × 54 (without)
  const sizes = {
    sm: { w: 140, h: showTagline ? 49 : 28 },
    md: { w: 195, h: showTagline ? 68 : 39 },
    lg: { w: 256, h: showTagline ? 90 : 51 },
  };
  const { w, h } = sizes[size];
  const VW = 270;
  const VH = showTagline ? 94 : 54;

  return (
    <div
      className={cn("select-none leading-none flex-shrink-0 inline-flex", className)}
      aria-label="Mentisara — The Essence of the Mind"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${VW} ${VH}`}
        width={w}
        height={h}
        role="img"
        style={{ overflow: "visible" }}
      >
        {/* ── WORDMARK ── single <text> element */}
        <text
          x="0"
          y="44"
          fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
          fontSize="46"
          fontWeight="500"
          letterSpacing="2"
          fill={wordFill}
        >
          MENTISARA
        </text>

        {/* ── BOTANICAL LEAF ── between R and A */}
        <g transform="translate(213, -2) rotate(-15, 9, 12)">
          <path
            d="M9,0 C15,-1 21,7 17,17 C14,24 6,26 3,19 C0,12 3,3 9,0 Z"
            fill={leafBody}
          />
          <path
            d="M9,3 C13,2 17,8 14,15 C12,19 8,20 6,16 C4,12 6,5 9,3 Z"
            fill={leafShine}
            opacity="0.5"
          />
          <line x1="9" y1="1" x2="10" y2="23" stroke={stemColor} strokeWidth="1.1" strokeLinecap="round" opacity="0.70" />
          <line x1="9" y1="8" x2="5" y2="14" stroke={stemColor} strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
          <line x1="10" y1="12" x2="14" y2="17" stroke={stemColor} strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        </g>

        {/* ── TAGLINE ── bigger text */}
        {showTagline && (
          <text
            x={VW / 2}
            y="80"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif"
            fontSize="14"
            fontWeight="300"
            letterSpacing="3.5"
            fill={taglineFill}
          >
            The Essence of the Mind
          </text>
        )}
      </svg>
    </div>
  );
}
