"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const trustItems = [
  { icon: <ShieldCheck className="w-4 h-4 text-[#BD7854]" />, text: "Safe & Ethical Space" },
  { icon: <HeartHandshake className="w-4 h-4 text-forest-700" />, text: "Person-Centred Care" },
  { icon: <Sparkles className="w-4 h-4 text-[#BD7854]" />, text: "Thoughtful & Tailored" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-mesh-hero py-20 lg:py-28 border-b border-[#D5E4D8]">
      {/* ── ORGANIC AMBIENT GLOWS & SUBTLE CURVES ── */}
      <div className="absolute top-0 right-1/4 w-[580px] h-[580px] rounded-full bg-[#BFDAC8]/50 blur-[130px] pointer-events-none animate-calm-pulse" />
      <div className="absolute bottom-10 left-10 w-[520px] h-[520px] rounded-full bg-[#F5D8C6]/45 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[680px] h-[360px] rounded-full bg-[#D4E8DC]/40 blur-[110px] pointer-events-none" />

      {/* Subtle organic SVG accent line */}
      <svg
        className="absolute top-12 right-10 w-96 h-96 text-[#BFDAC8]/30 pointer-events-none hidden xl:block"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
        <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>

      {/* ── MAIN COMPOSITION ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Editorial Headline & Actions */}
          <div
            className={`lg:col-span-7 space-y-7 transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 border border-[#BFDAC8] bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-soft-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span className="text-xs font-semibold text-forest-950 tracking-wide">
                Now accepting clients · Kerala (Inside & Outside) Online
              </span>
            </div>

            {/* Headline with Editorial Serif Treatment */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest-950 font-medium leading-[1.12] tracking-tight">
                Your Mind{" "}
                <span className="text-[#BD7854] italic font-normal inline-block">
                  Deserves Care.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
                No two journeys are alike. Every individual carries a unique world of experiences, emotions, thoughts, and perspectives that shape who they are. We are here for yours, offering a safe and confidential space through secure online sessions.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <Link href="/book-appointment">
                <button className="group flex items-center justify-center gap-2.5 bg-[#BD7854] hover:bg-[#A86442] text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-soft-md hover:shadow-[0_10px_24px_-4px_rgba(189,120,84,0.35)] text-sm sm:text-base w-full sm:w-auto active:translate-y-0">
                  <Calendar className="w-4 h-4" />
                  <span>Book a Session</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </Link>

              <a
                href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about online therapy services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="flex items-center justify-center gap-2.5 bg-white hover:bg-sand-50 text-forest-950 font-medium px-6 py-3.5 rounded-2xl border border-[#C6D8CC] hover:border-forest-300 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base shadow-soft-sm w-full">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] flex-shrink-0 shadow-[0_0_6px_#25D366]" />
                  <span>WhatsApp Us</span>
                </button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-[#CADCCE]">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-forest-950 text-xs font-semibold">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Counseling Session Visual Sanctuary */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-200 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">

              {/* Ambient warmth aura */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#BFDAC8]/60 via-[#F5D8C6]/40 to-[#D4E8DC]/60 blur-2xl pointer-events-none" />

              {/* Professional Visual Frame */}
              <div className="relative rounded-[2.25rem] overflow-hidden border-4 border-white shadow-soft-lg bg-[#F5EFE8] group">
                <img
                  src="/mentisara-online-therapy-counseling.jpg"
                  alt="Compassionate online psychotherapy and counseling session — Mentisara"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle gradient vignette at top & bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-black/10 pointer-events-none" />

                {/* Top Floating Telehealth Badge */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto flex items-center justify-between sm:justify-start gap-2.5 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-2xl border border-sand-200 shadow-soft-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                  </span>
                  <span className="text-xs font-semibold text-forest-950 tracking-wide">
                    Private Online Therapy
                  </span>
                  <span className="text-[10px] bg-[#D6E7DC] text-forest-900 font-bold px-2 py-0.5 rounded-full ml-auto sm:ml-1">
                    1-on-1
                  </span>
                </div>

                {/* Bottom Floating Safe Space Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-[#E2D6C8] shadow-soft-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D6E7DC] text-forest-900 border border-[#BED7C7] flex items-center justify-center font-serif font-bold text-base flex-shrink-0">
                      M
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-serif font-semibold text-forest-950 truncate">
                        A Safe & Compassionate Space
                      </p>
                      <p className="text-[11px] text-slate-600 truncate">
                        Personalized psychological care anywhere you are
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
