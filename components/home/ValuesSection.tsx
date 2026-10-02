import React from "react";
import { Heart, Lock, Award, Compass, Sparkles, Scale } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Compassion",
    desc: "Approaching every emotional narrative with deep warmth, active listening, and absence of judgment.",
    gradient: "from-terracotta-500 to-terracotta-700",
    bg: "bg-terracotta-50",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Confidentiality",
    desc: "Upholding absolute privacy standards for all sessions, records, and client communications.",
    gradient: "from-forest-600 to-forest-800",
    bg: "bg-forest-50",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Ethical Excellence",
    desc: "Operating strictly within professional psychological codes of conduct and clinical integrity.",
    gradient: "from-terracotta-500 to-terracotta-700",
    bg: "bg-terracotta-50",
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Individuality",
    desc: "Honoring that no two psychological journeys are identical; tailoring therapy around you.",
    gradient: "from-forest-600 to-forest-800",
    bg: "bg-forest-50",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Respect & Autonomy",
    desc: "Empowering you as an active collaborator in your own emotional growth and recovery.",
    gradient: "from-sage-500 to-sage-700",
    bg: "bg-sage-50",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Continuous Growth",
    desc: "Integrating evidence-informed psychological practices and modern therapeutic techniques.",
    gradient: "from-forest-500 to-forest-700",
    bg: "bg-forest-50",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 md:py-32 bg-mesh-sage relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-forest-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-terracotta-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full border border-forest-200">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Practice Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            The Principles That{" "}
            <span className="italic font-normal text-[#D4956A]">Guide Our Care</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Every interaction at Mentisara is built upon clinical rigor, ethical standards, and genuine human empathy.
          </p>
          <div className="section-divider" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[1.75rem] border border-sand-200 shadow-soft-sm hover:shadow-soft-lg transition-all duration-400 overflow-hidden hover:-translate-y-1.5"
            >
              {/* Colored top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${v.gradient}`} />

              <div className="p-7 space-y-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.gradient} text-white flex items-center justify-center shadow-soft-sm group-hover:scale-110 transition-transform duration-300`}>
                  {v.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-forest-950 group-hover:text-forest-800 transition-colors">
                  {v.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>

              {/* Hover background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-400 pointer-events-none`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
