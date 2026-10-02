"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/lib/testimonials-data";
import { Star, Quote, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));

  const active = testimonialsData[activeIdx];

  return (
    <section className="py-24 md:py-32 bg-mesh-midnight relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-forest-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-terracotta-800/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative quote marks */}
      <div className="absolute top-16 left-8 text-white/3 font-serif text-[300px] leading-none select-none pointer-events-none hidden lg:block">
        "
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/8 text-sand-300 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full border border-white/12">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400" />
            Client Perspectives
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-medium tracking-tight">
            Stories of{" "}
            <span className="italic font-normal gradient-text-warm">Growth & Healing</span>
          </h2>
          <p className="text-base sm:text-lg text-sand-400 leading-relaxed">
            Anonymous reflections from clients who found clarity and emotional balance through our practice.
          </p>
          <div className="section-divider" />
        </div>

        {/* Testimonial Showcase */}
        <div className="max-w-4xl mx-auto">

          {/* Main large testimonial */}
          <div className="glass-card-forest rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-elevated relative mb-6">
            {/* Large quote icon */}
            <div className="absolute top-8 right-8 opacity-15">
              <Quote className="w-16 h-16 text-white" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Content */}
            <p className="text-lg sm:text-xl md:text-2xl text-white font-serif font-light italic leading-relaxed mb-8 relative z-10">
              &ldquo;{active.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-forest-600 to-forest-800 text-white font-bold flex items-center justify-center text-base shadow-inner-glow">
                  {active.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-sm">{active.clientName}</span>
                    {active.verified && (
                      <div className="flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                  </div>
                  <p className="text-sand-500 text-xs mt-0.5">{active.location} · {active.date}</p>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/8 text-sand-400 px-3 py-1.5 rounded-full border border-white/10">
                  {active.serviceCategory}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation + Dot indicators */}
          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all hover:border-white/30"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? "w-8 h-2.5 bg-terracotta-400"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all hover:border-white/30"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* All testimonial preview chips */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {testimonialsData.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveIdx(i)}
                className={`p-3 rounded-2xl border text-left transition-all duration-300 ${
                  i === activeIdx
                    ? "bg-white/10 border-white/25 shadow-soft-sm"
                    : "bg-white/3 border-white/8 hover:bg-white/8 hover:border-white/15"
                }`}
              >
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-sand-300 line-clamp-2 leading-relaxed">
                  "{item.content.slice(0, 60)}..."
                </p>
                <p className="text-[10px] text-sand-500 mt-1 font-semibold">{item.clientName}</p>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-[11px] text-sand-600 mt-10 italic">
          Client names are kept as initials to uphold psychological confidentiality standards.
        </p>

      </div>
    </section>
  );
}
