import React from "react";
import { ShieldCheck, Video, Globe, Sparkles, Heart } from "lucide-react";

const trustItems = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Safe & Ethical Space" },
  { icon: <Sparkles className="w-4 h-4" />, text: "Empathetic & Non-Judgmental" },
  { icon: <Video className="w-4 h-4" />, text: "Secure Video Sessions" },
  { icon: <Heart className="w-4 h-4" />, text: "Person-Centred Care" },
  { icon: <Globe className="w-4 h-4" />, text: "Kerala & Worldwide" },
];

export function TrustStrip() {
  return (
    <section className="py-4 bg-[#F3ECE2] border-b border-[#E3D6C5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-forest-950 text-xs font-semibold tracking-wide"
            >
              <span className="text-[#BD7854] flex-shrink-0">{item.icon}</span>
              <span>{item.text}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden lg:inline-block w-1 h-1 rounded-full bg-[#D6C7B4] ml-7" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
