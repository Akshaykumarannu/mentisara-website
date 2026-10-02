import React from "react";
import { ShieldCheck, Star, Video, Globe, Award, Clock } from "lucide-react";

const trustItems = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Confidential" },
  { icon: <Star className="w-4 h-4 fill-current" />, text: "Licensed Practice" },
  { icon: <Video className="w-4 h-4" />, text: "Secure HD Video" },
  { icon: <Globe className="w-4 h-4" />, text: "Kerala & Worldwide" },
  { icon: <Award className="w-4 h-4" />, text: "Evidence-Based" },
  { icon: <Clock className="w-4 h-4" />, text: "Flexible Scheduling" },
];

export function TrustStrip() {
  return (
    <section className="py-4 bg-[#0A0F0B] border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4956A]/5 via-transparent to-[#1A3F2A]/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/40 text-xs font-medium">
              <span className="text-[#D4956A]/70">{item.icon}</span>
              {item.text}
              {i < trustItems.length - 1 && (
                <span className="hidden lg:inline-block w-px h-3 bg-white/10 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
