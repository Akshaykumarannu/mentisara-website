import React from "react";
import { FileText, Headphones, Shield, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <FileText className="w-5 h-5 text-forest-800" />,
    title: "Online Intake Application",
    desc: "Fill out our confidential online application form sharing your contact preference and primary areas of emotional focus.",
    accent: "bg-[#D4E8DC]",
  },
  {
    num: "02",
    icon: <Headphones className="w-5 h-5 text-[#B86237]" />,
    title: "Consultation Alignment",
    desc: "We connect with you to discuss scheduling options, session format, and ensure our collaborative approach aligns with your needs.",
    accent: "bg-[#F7E2D4]",
  },
  {
    num: "03",
    icon: <Shield className="w-5 h-5 text-forest-800" />,
    title: "Individualised Therapeutic Intervention",
    desc: "Engage in confidential online sessions tailored specifically to your unique emotional needs, concerns, personal goals, and therapeutic requirements.",
    accent: "bg-[#D4E8DC]",
  },
  {
    num: "04",
    icon: <Sparkles className="w-5 h-5 text-[#B86237]" />,
    title: "Growth & Resilience",
    desc: "Acquire sustainable emotional regulation skills, psychological insights, and long-term self-efficacy at your own pace.",
    accent: "bg-[#F7E2D4]",
  },
];

export function ApproachSection() {
  return (
    <section className="py-20 md:py-28 bg-[#DFECE4] relative overflow-hidden border-b border-[#CADCD0]">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5DFCE]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5D8C6]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#BED4C6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Therapeutic Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            How Your Care Journey{" "}
            <span className="italic font-normal text-[#C47C56]">Unfolds</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Every step from initial contact to ongoing therapy is transparent, welcoming, and completely confidential.
          </p>
          <div className="section-divider mt-2" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle connecting line for desktop */}
          <div className="absolute top-12 left-10 right-10 h-px bg-[#BED4C6] pointer-events-none hidden lg:block" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#CADBD0] shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 relative z-10 flex flex-col justify-between"
            >
              <div>
                {/* Step header with icon and number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${step.accent} border border-sand-200/80 flex items-center justify-center shadow-soft-sm`}>
                    {step.icon}
                  </div>
                  <span className="font-serif text-2xl font-bold text-forest-900/40">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-forest-950 mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
