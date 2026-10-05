import React from "react";
import { ShieldCheck, Video, Globe, Award, Clock, Heart } from "lucide-react";

const trustItems = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Confidential" },
  { icon: <Award className="w-4 h-4" />, text: "Evidence-Based" },
  { icon: <Video className="w-4 h-4" />, text: "Secure Video Sessions" },
  { icon: <Heart className="w-4 h-4" />, text: "Person-Centred Care" },
  { icon: <Globe className="w-4 h-4" />, text: "Kerala & Worldwide" },
  { icon: <Clock className="w-4 h-4" />, text: "Flexible Online Timings" },
];

export function TrustStrip() {
  return (
    <section className="py-4 bg-[#F2EAE0] border-b border-[#E0D3C3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-forest-950 text-xs font-semibold">
              <span className="text-[#C47C56]">{item.icon}</span>
              <span>{item.text}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden lg:inline-block w-px h-3 bg-[#D4C5B3] ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
