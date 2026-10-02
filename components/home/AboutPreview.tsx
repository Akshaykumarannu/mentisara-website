import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Brain, Heart, Shield } from "lucide-react";

const highlights = [
  { icon: <Brain className="w-5 h-5" />, text: "Empathetic listening that respects your lived reality" },
  { icon: <Shield className="w-5 h-5" />, text: "Confidential, ethics-guided digital therapy environment" },
  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Structured care models grounded in clinical evidence" },
  { icon: <Heart className="w-5 h-5" />, text: "Individualized support designed for long-term growth" },
];

const credentials = [
  { label: "Psychology Graduate", sub: "Clinical Specialization" },
  { label: "CBT Certified", sub: "Cognitive Behavioural Therapy" },
  { label: "Person-Centred", sub: "Humanistic Approach" },
];

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-mesh-warm opacity-60 pointer-events-none" />

      {/* Decorative arc */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-2 border-sand-300/40 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-sage-100/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* ── LEFT: IMAGE STACK ──────────────────────────── */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">

            {/* Background card (shadow) */}
            <div className="absolute top-6 left-6 right-6 bottom-0 bg-forest-200/40 rounded-[2.5rem] rotate-2" />

            {/* Main Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-elevated border-2 border-white z-10">
              <img
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1000"
                alt="Empathetic consultation environment"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />

              {/* Overlay label */}
              <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 text-white flex items-center justify-center font-serif font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-serif font-semibold text-forest-950">Mentisara Practice</p>
                    <p className="text-[11px] text-slate-500">Structured & Person-Centred Care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-[1.5rem] border border-sand-300 shadow-elevated p-5 z-20 max-w-[220px] animate-float-slow">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-terracotta-500" />
                <p className="text-xs font-bold uppercase tracking-wider text-forest-900">Credentials</p>
              </div>
              {credentials.map((cred, i) => (
                <div key={i} className={`${i > 0 ? 'border-t border-sand-200 mt-2 pt-2' : ''}`}>
                  <p className="text-[11px] font-semibold text-forest-900">{cred.label}</p>
                  <p className="text-[10px] text-slate-500">{cred.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: COPY ──────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-7 order-1 lg:order-2">

            <div>
              <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-forest-200 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
                About Mentisara
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-tight">
                Understanding You{" "}
                <span className="italic font-normal text-[#D4956A]">
                  Beyond the Surface
                </span>
              </h2>
              <div className="h-[3px] w-12 rounded-full bg-gradient-to-r from-[#D4956A] to-[#E8B89A] mt-4" />
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              At Mentisara, we believe that emotional well-being begins when you feel truly heard and
              understood. Rather than applying rigid templates or reductionist labels, our practice focuses
              on understanding your distinct psychological makeup through a structured and person-centred
              therapeutic approach.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed italic border-l-4 border-terracotta-400 pl-4">
              "Every person's emotional experience is valid and unique. Our role is to walk alongside
              you, not to lead you where we think you should go."
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-sand-200/80 hover:border-forest-300 hover:shadow-soft-sm transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center shrink-0 group-hover:bg-forest-800 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm text-forest-900 font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 bg-forest-800 hover:bg-forest-900 text-white font-semibold px-7 py-3.5 rounded-2xl shadow-soft-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-forest group text-sm"
              >
                Learn More About Mentisara
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
