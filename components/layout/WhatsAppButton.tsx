"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  const handleClick = () => {
    trackEvent("click", "WhatsApp", "Floating WhatsApp Button");
  };

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Contact Mentisara on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-elevated transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <MessageCircle className="w-6 h-6 fill-current text-white shrink-0" />
      <span className="hidden md:inline text-sm font-semibold tracking-wide">
        Chat on WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
}
