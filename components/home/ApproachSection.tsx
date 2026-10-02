import React from "react";
import { FileText, Headphones, Shield, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    icon: <FileText className="w-6 h-6" />,
    title: "Online Intake Application",
    desc: "Fill out our streamlined online application form sharing your contact preference and primary areas of emotional focus.",
    gradient: "from-forest-600 to-forest-800",
    accentColor: "text-forest-400",
  },
  {
    num: "02",
    icon: <Headphones className="w-6 h-6" />,
    title: "Consultation Alignment",
    desc: "Our intake coordinator connects with you to discuss scheduling options, session format, and match your requirements.",
    gradient: "from-terracotta-500 to-terracotta-700",
    accentColor: "text-terracotta-400",
  },
  {
    num: "03",
    icon: <Shield className="w-6 h-6" />,
    title: "Structured CBT Sessions",
    desc: "Engage in confidential online video sessions grounded in CBT and person-centred therapeutic frameworks.",
    gradient: "from-sage-500 to-sage-700",
    accentColor: "text-sage-400",
  },
  {
    num: "04",
    icon: <Sparkles className="w-6 h-6" />,
    title: "Growth & Resilience",
    desc: "Acquire practical emotional regulation skills and long-term psychological self-efficacy.",
    gradient: "from-amberGold-500 to-amberGold-600",
    accentColor: "text-amber-400",
  },
];

export function ApproachSection() {
  return (
    <section className="py-24 md:py-32 bg-forest-950 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-terracotta-800/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/8 text-sand-300 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full border border-white/12">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400" />
            Therapeutic Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-medium tracking-tight">
            How Your Care Journey{" "}
            <span className="italic font-normal gradient-text-warm">Unfolds</span>
          </h2>
          <p className="text-base sm:text-lg text-sand-400 leading-relaxed">
            Every step from initial contact to ongoing therapy is transparent, welcoming, and completely confidential.
          </p>
          <div className="section-divider" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none hidden lg:block" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-white/4 hover:bg-white/7 border border-white/8 hover:border-white/15 rounded-[1.75rem] p-6 transition-all duration-400 hover:-translate-y-2"
            >
              {/* Step number top */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-soft-md group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <span className={`font-serif text-3xl font-bold ${step.accentColor} opacity-40 group-hover:opacity-70 transition-opacity`}>
                  {step.num}
                </span>
              </div>

              <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-sand-100 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-sand-500 leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow connector (except last) */}
              {idx < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-forest-900 border border-white/10 rounded-full flex items-center justify-center hidden lg:flex z-10">
                  <ArrowRight className="w-3 h-3 text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2.5 bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/30 text-sand-200 hover:text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-300 text-sm group"
          >
            Start Your Journey Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
