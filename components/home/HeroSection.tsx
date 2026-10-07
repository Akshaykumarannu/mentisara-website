"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Video,
  Heart,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#173C36] text-white">
      {/* ── AMBIENT HERO SANCTUARY WRAPPER (MINDORA & VELLURA STYLE) ── */}
      <div className="relative min-h-[640px] lg:min-h-[760px] flex items-center">
        
        {/* Full-bleed botanical backdrop with serene mindfulness photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/mentisara-hero-sanctuary.jpg"
            alt="Mentisara — A Calm Space to Begin. Online Psychotherapy and Counseling."
            className="w-full h-full object-cover object-center lg:object-[center_top] scale-100 transition-transform duration-1000 ease-out"
          />

          {/* Deep cinematic gradient overlay ensuring 100% crystal-clear readability for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#173C36]/95 via-[#173C36]/80 to-[#173C36]/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C36] via-[#173C36]/40 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#173C36]/60 pointer-events-none" />
        </div>

        {/* ── HERO CONTENT CONTAINER ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* LEFT COLUMN: Editorial Typography & Actions */}
            <div
              className={`lg:col-span-7 space-y-7 transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Eyebrow Pill (Vellura style) */}
              {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-white shadow-soft-sm">
                <Heart className="w-3.5 h-3.5 text-[#C88768] fill-[#C88768]" />
                <span>Now Accepting Clients · Online Therapy</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
              </div> */}

              {/* Main Headline (Mindora / Vellura style: large, calm, authoritative) */}
              <div className="space-y-4">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-white">
                  Your Mind{" "}
                  <span className="italic font-normal text-[#C88768]">
                    Deserves Care.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl font-normal">
                  Every journey is unique. Each individual carries a unique world of experiences, emotions, thoughts, and perspectives that shape who they are. We are here for yours, offering a safe and confidential space through secure online sessions.
                </p>
              </div>

              {/* Action Buttons (Mindora Pill with Arrow Circle + Glassmorphism Outline) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link href="/book-appointment" className="group">
                  <button className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 bg-white text-[#173C36] hover:bg-[#F7F5EF] font-semibold pl-6 pr-2.5 py-3 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5 shadow-soft-lg active:translate-y-0 cursor-pointer">
                    <span>Book a Session</span>
                    <span className="w-8 h-8 rounded-full bg-[#173C36] text-white flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </button>
                </Link>

                <a
                  href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about online therapy services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-full border border-white/25 transition-all duration-200 hover:-translate-y-0.5 text-base backdrop-blur-md cursor-pointer">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] flex-shrink-0 shadow-[0_0_8px_#25D366]" />
                    <span>WhatsApp Us</span>
                  </button>
                </a>
              </div>

              {/* Social Proof & Trust Strip (Vellura style) */}
              {/* <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15 text-xs text-white/80 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C88768]" />
                  <span>Safe & Ethical Space</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:inline-block" />
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-emerald-300" />
                  <span>Person-Centred Care</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:inline-block" />
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C88768]" />
                  <span>Thoughtful & Tailored</span>
                </div>
              </div> */}
            </div>

            {/* RIGHT COLUMN: Floating Translucent Glassmorphic Card (Mindora style) */}
            <div
              className={`lg:col-span-5 transition-all duration-900 delay-200 ease-out flex justify-center lg:justify-end ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-full max-w-sm bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] space-y-5">
                
                {/* Reassurance Checklist */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Sessions designed for your comfort</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Secure, confidential & easy to access</span>
                  </div>
                </div>

                {/* Inner Care Card */}
                <div className="bg-white/95 text-[#173C36] rounded-2xl p-4 shadow-soft-sm flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C88768]">
                      Private Online Therapy
                    </span>
                    <p className="font-serif text-base font-semibold leading-tight">
                      Kerala (Inside & Outside)
                    </p>
                    <p className="text-xs text-[#26302E]/70">
                      1-on-1 Confidential Video Calls
                    </p>
                  </div>

                  <Link
                    href="/book-appointment"
                    aria-label="Book private session"
                    className="w-9 h-9 rounded-full bg-[#173C36] text-white hover:bg-[#0E2622] flex items-center justify-center transition-transform hover:scale-105 shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/75 pt-1">
                  <span>Flexible scheduling</span>
                  <span>·</span>
                  <span>No waiting rooms</span>
                  <span>·</span>
                  <span>50-60 min sessions</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ── SMOOTH BOTTOM GRADIENT MELT INTO NEXT SECTION ── */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#EDE7DC]/60 via-[#173C36]/30 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
