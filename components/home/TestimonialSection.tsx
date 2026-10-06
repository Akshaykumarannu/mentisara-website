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
      <div className="absolute top-0 right-1/4 w-[520px] h-[420px] bg-[#C5DEC9]/60 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[320px] bg-[#F5D8C6]/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-950 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#BED4C6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Client Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-[1.15]">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-normal">
            Reflections from individuals who found support and emotional clarity through our practice.
          </p>
          <div className="section-divider mt-2" />
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-14 border border-[#CADBD0] shadow-soft-md relative mb-6">

            {/* Warm Decorative Quote Mark Watermark */}
            <div className="absolute top-7 right-7 sm:top-10 sm:right-10 text-[#CDE0D3]/60 pointer-events-none">
              <Quote className="w-14 h-14 sm:w-16 sm:h-16" />
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1.5 mb-6 relative z-10">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-xl text-forest-950 font-serif font-normal italic leading-relaxed mb-8 relative z-10">
              &ldquo;{active.content}&rdquo;
            </p>

            {/* Client Info */}
            <div className="flex flex-wrap items-center justify-between border-t border-sand-200/90 pt-6 gap-4 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#D4E8DC] text-forest-950 border border-[#BED4C6] font-bold flex items-center justify-center text-sm shadow-soft-sm flex-shrink-0">
                  {active.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-forest-950 font-semibold text-sm">{active.clientName}</span>
                    {active.verified && (
                      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified Session
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">{active.location}</p>
                </div>
              </div>

              <span className="text-xs font-semibold bg-[#F5EEE4] text-forest-950 px-3.5 py-1.5 rounded-full border border-[#DED1C2]">
                {active.serviceCategory}
              </span>
            </div>

          </div>

          {/* Navigation & Counter */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-forest-700" />
              <span>Anonymized to protect personal privacy & identity</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-[#BED4C6] bg-white hover:bg-sand-50 text-forest-950 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-soft-sm active:translate-y-0 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-600 px-2 font-medium">
                {activeIdx + 1} / {testimonialsData.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-[#BED4C6] bg-white hover:bg-sand-50 text-forest-950 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-soft-sm active:translate-y-0 cursor-pointer"
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
