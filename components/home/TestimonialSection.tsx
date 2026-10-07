"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/lib/testimonials-data";
import { Star, Quote, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));

  const active = testimonialsData[activeIdx];

  return (
    <section className="py-14 sm:py-16 bg-[#E4EFE7] relative overflow-hidden border-b border-[#CADCD0]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#C5DEC9]/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[250px] bg-[#F5D8C6]/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 bg-white/95 text-forest-950 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-[#BED4C6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Client Reflections
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Reflections of Healing & Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Real experiences from individuals supported through our practice.
          </p>
        </div>

        {/* ── 3 COMPACT TRUST STATS ── */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl mx-auto mb-5">
          <div className="bg-white/95 rounded-2xl p-3.5 sm:p-4 text-center border border-[#CADBD0] shadow-soft-sm">
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-forest-950">500+</div>
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600 mt-0.5">Sessions</div>
          </div>
          <div className="bg-white/95 rounded-2xl p-3.5 sm:p-4 text-center border border-[#CADBD0] shadow-soft-sm">
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#BD7854]">98%</div>
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600 mt-0.5">Satisfaction</div>
          </div>
          <div className="bg-white/95 rounded-2xl p-3.5 sm:p-4 text-center border border-[#CADBD0] shadow-soft-sm">
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-forest-950">3+ Yrs</div>
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600 mt-0.5">Experience</div>
          </div>
        </div>

        {/* ── COMPACT REVIEW CARD (No individual therapy / cbt labels) ── */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#CADBD0] shadow-soft-sm relative">

            {/* Stars & Quote Icon */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-5 h-5 text-[#CADBD0]" />
            </div>

            {/* Review Quote */}
            <p className="text-base sm:text-lg text-forest-950 font-serif italic leading-relaxed mb-6">
              &ldquo;{active.content}&rdquo;
            </p>

            {/* Client Signature & Navigation */}
            <div className="flex items-center justify-between border-t border-sand-200/90 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#D4E8DC] text-forest-950 border border-[#BED4C6] font-bold flex items-center justify-center text-xs shadow-soft-sm flex-shrink-0">
                  {active.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-forest-950 leading-tight">
                    {active.clientName}
                  </p>
                  <p className="text-xs text-slate-500">
                    {active.location}
                  </p>
                </div>
              </div>

              {/* Compact Arrow Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-lg border border-[#BED4C6] bg-white hover:bg-sand-50 text-forest-950 flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-soft-sm active:translate-y-0 cursor-pointer"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-600 font-medium px-1.5">
                  {activeIdx + 1}/{testimonialsData.length}
                </span>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-lg border border-[#BED4C6] bg-white hover:bg-sand-50 text-forest-950 flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-soft-sm active:translate-y-0 cursor-pointer"
                  aria-label="Next review"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 font-medium mt-3.5">
            <ShieldCheck className="w-4 h-4 text-forest-700" />
            <span>Anonymized to protect personal privacy & identity</span>
          </div>
        </div>

      </div>
    </section>
  );
}
