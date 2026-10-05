"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const HERO_IMAGE = "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=85&w=1200";

const trustItems = [
  { icon: <ShieldCheck className="w-4 h-4 text-[#C47C56]" />, text: "100% Confidential" },
  { icon: <HeartHandshake className="w-4 h-4 text-forest-700" />, text: "Person-Centred Care" },
  { icon: <Sparkles className="w-4 h-4 text-[#C47C56]" />, text: "Evidence-Informed" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative overflow-hidden bg-mesh-hero py-20 lg:py-28 border-b border-[#D8E6DC]">
      {/* ── AMBIENT SAGE & WARM PEACH LIGHT GLOWS ── */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] rounded-full bg-[#BFDAC8]/60 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-[#F5D8C6]/50 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full bg-[#D4E8DC]/50 blur-[100px] pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Headline & Value Proposition */}
          <div className={`lg:col-span-7 space-y-7 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 border border-[#BFDAC8] bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-soft-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span className="text-xs font-semibold text-forest-900 tracking-wide">
                Now accepting clients · Kerala & Worldwide Online
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest-950 font-medium leading-[1.12] tracking-tight">
                Your Mind{" "}
                <span className="text-[#C47C56] italic font-normal inline-block">
                  Deserves Care.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
                Evidence-based, person-centred psychological care designed around your unique needs, experiences, and goals — delivered through confidential online sessions.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <Link href="/book-appointment">
                <button className="group flex items-center justify-center gap-2.5 bg-[#C47C56] hover:bg-[#B26A44] text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-soft-md text-sm sm:text-base w-full sm:w-auto">
                  <Calendar className="w-4 h-4" />
                  Book a Session
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                  WhatsApp Us
                </button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-[#CADCCE]">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-forest-900 text-xs font-semibold">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Sanctuary Card */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative">

              {/* Gentle shadow backdrop */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-sage-300/50 via-sand-200/50 to-terracotta-200/50 blur-xl pointer-events-none" />

              {/* Main Card */}
              <div className="relative rounded-[2rem] bg-white border border-[#C6D8CC] shadow-soft-md p-6 sm:p-7 space-y-6">

                {/* Card Top: Practice Header */}
                <div className="flex items-center justify-between pb-4 border-b border-sand-200">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-forest-100 text-forest-900 border border-forest-200 flex items-center justify-center font-serif font-bold text-lg">
                      M
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-forest-950 leading-tight">Mentisara</p>
                      <p className="text-xs text-slate-500 mt-0.5">Online Psychological Practice</p>
                    </div>
                  </div>
                  <span className="text-xs bg-forest-50 text-forest-800 font-semibold px-3 py-1 rounded-full border border-forest-200">
                    Confidential
                  </span>
                </div>

                {/* Session Photo Thumbnail */}
                <div className="relative h-44 rounded-2xl overflow-hidden border border-sand-200 bg-sand-100">
                  <img
                    src={HERO_IMAGE}
                    alt="Calm psychological care setting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium backdrop-blur-sm bg-forest-950/45 px-3 py-1.5 rounded-xl">
                    Private, ethics-guided video sessions
                  </div>
                </div>

                {/* Core Pillars */}
                <div className="space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-forest-900">
                    Our Therapeutic Commitment
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                      <span>Empathetic, non-judgmental space tailored to you</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                      <span>Evidence-informed psychotherapy modalities</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                      <span>Convenient online scheduling across Kerala & Worldwide</span>
                    </li>
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <Link href="/book-appointment" className="w-full block">
                    <button className="w-full flex items-center justify-center gap-2 bg-forest-900 hover:bg-forest-950 text-white font-medium py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-soft-sm">
                      <Calendar className="w-4 h-4" />
                      Request An Initial Consultation
                    </button>
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
