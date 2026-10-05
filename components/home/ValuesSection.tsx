import React from "react";
import { Heart, Lock, Award, Compass, Sparkles, Scale } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-5 h-5 text-[#B86237]" />,
    title: "Compassion",
    desc: "Approaching every emotional narrative with deep warmth, active listening, and absence of judgment.",
    iconBg: "bg-[#F7E2D4]",
    accentBorder: "border-t-3 border-[#C47C56]",
  },
  {
    icon: <Lock className="w-5 h-5 text-forest-800" />,
    title: "Confidentiality",
    desc: "Upholding absolute privacy standards for all sessions, records, and client communications.",
    iconBg: "bg-[#D8EADB]",
    accentBorder: "border-t-3 border-forest-600",
  },
  {
    icon: <Scale className="w-5 h-5 text-[#B86237]" />,
    title: "Ethical Excellence",
    desc: "Operating strictly within professional psychological codes of conduct and clinical integrity.",
    iconBg: "bg-[#F7E2D4]",
    accentBorder: "border-t-3 border-[#C47C56]",
  },
  {
    icon: <Compass className="w-5 h-5 text-forest-800" />,
    title: "Individuality",
    desc: "Honoring that no two psychological journeys are identical; tailoring therapy around you.",
    iconBg: "bg-[#D8EADB]",
    accentBorder: "border-t-3 border-forest-600",
  },
  {
    icon: <Award className="w-5 h-5 text-forest-800" />,
    title: "Respect & Autonomy",
    desc: "Empowering you as an active collaborator in your own emotional growth and recovery.",
    iconBg: "bg-[#D8EADB]",
    accentBorder: "border-t-3 border-forest-600",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#B86237]" />,
    title: "Continuous Growth",
    desc: "Integrating evidence-informed psychological practices and modern therapeutic techniques.",
    iconBg: "bg-[#F7E2D4]",
    accentBorder: "border-t-3 border-[#C47C56]",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5EEE4] relative overflow-hidden border-b border-[#E4D7C8]">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#F2DAC6]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8E0D2]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#D5C7B6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Practice Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            The Principles That{" "}
            <span className="italic font-normal text-[#C47C56]">Guide Our Care</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Every interaction at Mentisara is built upon clinical rigor, ethical standards, and genuine human empathy.
          </p>
          <div className="section-divider mt-2" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl border border-[#DED1C2] shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 p-6 sm:p-7 space-y-4 ${v.accentBorder}`}
            >
              <div className={`w-11 h-11 rounded-2xl ${v.iconBg} flex items-center justify-center border border-sand-200 shadow-soft-sm`}>
                {v.icon}
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-forest-950 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
