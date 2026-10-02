"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, ShieldCheck, Star, Users, Play } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const HERO_IMAGE = "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=85&w=1600";

const trustItems = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Confidential" },
  { icon: <Star className="w-4 h-4 fill-current" />, text: "Licensed Practice" },
  { icon: <Users className="w-4 h-4" />, text: "500+ Clients Helped" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F0B]">

      {/* ── FULL-BLEED BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A06]/95 via-[#050A06]/70 to-[#050A06]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A06]/80 via-transparent to-[#050A06]/30" />
      </div>

      {/* ── AMBIENT GLOW ORBS ── */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#B5553A]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-[#1A5C35]/12 blur-[100px] pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 border border-white/15 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-white/80 tracking-wide">
                Now accepting new clients · Kerala & Worldwide
              </span>
            </div>

            {/* Headline with Animated Shimmer Accent */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-medium leading-[1.05] tracking-tight">
                Your Mind
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4956A] via-[#F5D0B5] to-[#D4956A] animate-text-shimmer inline-block">
                  Deserves Care.
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-xl font-light transition-all duration-700 delay-200">
                Evidence-based online psychotherapy, person-centred counselling, and CBT — delivered in a confidential, 
                judgement-free space. Real psychological support tailored to you.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/book-appointment">
                <button className="group flex items-center justify-center gap-3 bg-[#D4956A] hover:bg-[#C4855A] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(212,149,106,0.45)] text-base w-full sm:w-auto">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Book a Session
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </button>
              </Link>

              <a
                href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about therapy services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-4 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 text-base backdrop-blur-md w-full">
                  <span className="w-3 h-3 rounded-full bg-[#25D366] flex-shrink-0 shadow-[0_0_8px_#25D366] animate-pulse" />
                  WhatsApp Us
                </button>
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-xs font-medium hover:text-white transition-colors">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Animated Practice Info & Social Proof Card */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              
              {/* Background ambient glow pulse on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4956A]/20 to-[#B5553A]/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Main glass card with floating animation */}
              <div className="relative rounded-3xl border border-white/15 hover:border-[#D4956A]/40 bg-white/5 hover:bg-white/[0.07] backdrop-blur-2xl p-7 sm:p-8 space-y-6 shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-float-slow">
                
                {/* Header info */}
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4956A] to-[#B5553A] flex items-center justify-center shadow-lg text-white font-serif font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                    M
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base leading-tight">Mentisara</p>
                    <p className="text-white/50 text-xs mt-0.5">Online Psychotherapy Practice</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full hover:border-amber-400/50 transition-colors">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-spin-slow" />
                    <span className="text-amber-400 text-xs font-bold">5.0</span>
                  </div>
                </div>

                {/* Concern tags */}
                <div className="space-y-2.5">
                  <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold">Specialized Care For</p>
                  <div className="flex flex-wrap gap-2">
                    {["Anxiety", "Burnout", "Depression", "Relationships", "Trauma", "Self-Esteem", "Life Transitions"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-white/80 bg-white/10 hover:bg-[#D4956A]/20 hover:text-white border border-white/15 hover:border-[#D4956A]/40 px-3 py-1.5 rounded-full backdrop-blur-sm transition-all duration-200 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stat grid */}
                <div className="border-t border-white/10 pt-5 grid grid-cols-3 gap-3 text-center">
                  {[
                    { v: "500+", l: "Sessions" },
                    { v: "98%", l: "Satisfaction" },
                    { v: "3+ Yrs", l: "Experience" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 py-2.5 px-1 rounded-2xl transition-all duration-300">
                      <p className="font-serif text-xl font-semibold text-white">{s.v}</p>
                      <p className="text-white/40 text-[10px] font-medium mt-0.5 uppercase tracking-wider">{s.l}</p>
                    </div>
                  ))}
                </div>

                {/* Social proof quote */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-white/20 transition-colors">
                  <p className="text-white/70 text-xs leading-relaxed italic">
                    "I finally feel heard and understood. Mentisara provided the safe space I needed to heal."
                  </p>
                  <p className="text-white/40 text-[10px] mt-2 font-medium">— Anonymous Client, Kerala</p>
                </div>

                {/* Social links with brand logos */}
                <div className="border-t border-white/10 pt-5 space-y-3">
                  <p className="text-white/40 text-[11px] uppercase tracking-widest font-semibold">Connect With Us</p>
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Instagram Link */}
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/insta flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 p-2.5 rounded-2xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(236,72,153,0.25)]"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover/insta:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-white text-xs font-semibold truncate group-hover/insta:text-pink-300 transition-colors">Instagram</p>
                        <p className="text-white/40 text-[10px] truncate">@mentisara_talks</p>
                      </div>
                    </a>

                    {/* YouTube Link */}
                    <a
                      href={siteConfig.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/yt flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 p-2.5 rounded-2xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(239,68,68,0.25)]"
                    >
                      <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover/yt:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-white text-xs font-semibold truncate group-hover/yt:text-red-300 transition-colors">YouTube</p>
                        <p className="text-white/40 text-[10px] truncate">Mentisara Talks</p>
                      </div>
                    </a>

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
