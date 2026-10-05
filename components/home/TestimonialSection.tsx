"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/lib/testimonials-data";
import { Star, Quote, CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));

  const active = testimonialsData[activeIdx];

  return (
    <section className="py-20 md:py-28 bg-[#E4EFE7] relative overflow-hidden border-b border-[#CADCD0]">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#C5DEC9]/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#F5D8C6]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#BED4C6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Client Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            What Clients Say
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Reflections from individuals who found support and emotional clarity through our practice.
          </p>
          <div className="section-divider mt-2" />
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#CADBD0] shadow-soft-md relative mb-6">
            
            <div className="absolute top-8 right-8 text-[#D0E2D6]">
              <Quote className="w-12 h-12" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-xl text-forest-950 font-serif font-normal italic leading-relaxed mb-8 relative z-10">
              &ldquo;{active.content}&rdquo;
            </p>

            {/* Client Info */}
            <div className="flex flex-wrap items-center justify-between border-t border-sand-200 pt-6 gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#D4E8DC] text-forest-950 border border-[#BED4C6] font-bold flex items-center justify-center text-sm shadow-soft-sm">
                  {active.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-forest-950 font-semibold text-sm">{active.clientName}</span>
                    {active.verified && (
                      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified Session
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">{active.location}</p>
                </div>
              </div>

              <span className="text-xs font-semibold bg-[#F5EEE4] text-forest-950 px-3 py-1.5 rounded-full border border-[#DED1C2]">
                {active.serviceCategory}
              </span>
            </div>

          </div>

          {/* Navigation & Counter */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-forest-700" />
              <span>Anonymized to protect personal confidentiality</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-[#BED4C6] bg-white hover:bg-sand-50 text-forest-900 flex items-center justify-center transition-colors shadow-soft-sm"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-600 px-2 font-medium">
                {activeIdx + 1} / {testimonialsData.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-[#BED4C6] bg-white hover:bg-sand-50 text-forest-900 flex items-center justify-center transition-colors shadow-soft-sm"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
