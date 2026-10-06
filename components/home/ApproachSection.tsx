import React from "react";
import { FileText, Headphones, Shield, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <FileText className="w-5 h-5 text-forest-800" />,
    title: "Online Intake Application",
    desc: "Fill out our online application form sharing your contact preference and primary areas of emotional focus.",
    accent: "bg-[#D4E8DC]",
    badgeText: "Step One",
  },
  {
    num: "02",
    icon: <Headphones className="w-5 h-5 text-[#BD7854]" />,
    title: "Consultation Alignment",
    desc: "We connect with you to discuss scheduling options, session format, and ensure our collaborative approach aligns with your needs.",
    accent: "bg-[#F7E2D4]",
    badgeText: "Step Two",
  },
  {
    num: "03",
    icon: <Shield className="w-5 h-5 text-forest-800" />,
    title: "Individualised Therapeutic Intervention",
    desc: "Engage in private online sessions tailored specifically to your unique emotional needs, concerns, personal goals, and therapeutic requirements.",
    accent: "bg-[#D4E8DC]",
    badgeText: "Step Three",
  },
  {
    num: "04",
    icon: <Sparkles className="w-5 h-5 text-[#BD7854]" />,
    title: "Growth & Resilience",
    desc: "Acquire sustainable emotional regulation skills, psychological insights, and long-term self-efficacy at your own pace.",
    accent: "bg-[#F7E2D4]",
    badgeText: "Step Four",
  },
];

export function ApproachSection() {
  return (
    <section className="py-20 md:py-28 bg-[#DFECE4] relative overflow-hidden border-b border-[#CADCD0]">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#C5DFCE]/50 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#F5D8C6]/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-950 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#BED4C6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Therapeutic Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-[1.15]">
            How Your Care Journey{" "}
            <span className="italic font-normal text-[#BD7854]">Unfolds</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-normal">
            Every step from initial contact to ongoing therapy is transparent, welcoming, and held in a secure space.
          </p>
          <div className="section-divider mt-2" />
        </div>

        {/* ── DESKTOP VISUAL PATHWAY: 01 ───── 02 ───── 03 ───── 04 ── */}
        <div className="hidden lg:block relative mb-6">
          {/* Connecting Pathway Line */}
          <div className="absolute top-7 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#A7CEB7] via-[#D5C2B2] to-[#A7CEB7] z-0" />

          {/* Grid of 4 Connected Pathway Milestones */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Node Milestone Circle */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#BED4C6] flex items-center justify-center font-serif text-lg font-bold text-forest-950 shadow-soft-sm mb-6 transition-transform duration-300 hover:scale-110">
                  <span className="text-[#BD7854] font-serif font-bold text-sm tracking-wider">
                    {step.num}
                  </span>
                </div>

                {/* Milestone Content Card */}
                <div className="w-full bg-white rounded-3xl p-6 border border-[#CADBD0] shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[260px] group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl ${step.accent} border border-sand-200/80 flex items-center justify-center shadow-soft-sm transition-transform duration-300 group-hover:scale-105`}>
                        {step.icon}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider bg-sand-100/70 px-2.5 py-1 rounded-full border border-sand-200">
                        {step.badgeText}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-forest-950 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE JOURNEY ── */}
        <div className="lg:hidden relative pl-6 space-y-6">
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#A7CEB7] via-[#D5C2B2] to-[#A7CEB7]" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-4">
              {/* Timeline Marker */}
              <div className="w-9 h-9 rounded-full bg-white border-2 border-[#BED4C6] flex items-center justify-center font-serif text-xs font-bold text-[#BD7854] shadow-soft-sm flex-shrink-0 relative z-10 mt-1">
                {step.num}
              </div>

              {/* Step Card */}
              <div className="flex-1 bg-white rounded-2xl p-5 border border-[#CADBD0] shadow-soft-sm space-y-2">
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-xl ${step.accent} flex items-center justify-center`}>
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider bg-sand-100 px-2 py-0.5 rounded-full">
                    {step.badgeText}
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold text-forest-950 leading-snug pt-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
