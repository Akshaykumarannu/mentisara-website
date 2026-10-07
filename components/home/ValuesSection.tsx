import React from "react";
import { Heart, Lock, Award, Compass, Sparkles, Scale } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-5 h-5 text-[#BD7854]" />,
    title: "Compassion",
    desc: "Approaching every emotional narrative with deep warmth, active listening, and absence of judgment.",
    iconBg: "bg-[#F7E2D4]",
    accentLine: "bg-[#BD7854]",
  },
  {
    icon: <Lock className="w-5 h-5 text-forest-800" />,
    title: "Privacy & Discretion",
    desc: "Upholding absolute privacy standards for all sessions, records, and client communications.",
    iconBg: "bg-[#D8EADB]",
    accentLine: "bg-forest-600",
  },
  {
    icon: <Scale className="w-5 h-5 text-[#BD7854]" />,
    title: "Ethical Excellence",
    desc: "Operating strictly within professional psychological codes of conduct and clinical integrity.",
    iconBg: "bg-[#F7E2D4]",
    accentLine: "bg-[#BD7854]",
  },
  {
    icon: <Compass className="w-5 h-5 text-forest-800" />,
    title: "Individuality",
    desc: "Understanding the uniqueness of each person's experiences and tailoring care to their individual needs, strengths, and circumstances.",
    iconBg: "bg-[#D8EADB]",
    accentLine: "bg-forest-600",
  },
  {
    icon: <Award className="w-5 h-5 text-forest-800" />,
    title: "Respect & Autonomy",
    desc: "Honouring your choices, values, and perspectives, while empowering you to take an active role in your growth and recovery..",
    iconBg: "bg-[#D8EADB]",
    accentLine: "bg-forest-600",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#BD7854]" />,
    title: "Continuous Growth",
    desc: "Integrating modern psychological practices, reflective self-awareness, and proven therapeutic techniques.",
    iconBg: "bg-[#F7E2D4]",
    accentLine: "bg-[#BD7854]",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5EEE4] relative overflow-hidden border-b border-[#E4D7C8]">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2DAC6]/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#C8E0D2]/35 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-950 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#D5C7B6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Practice Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-[1.15]">
            The Principles That{" "}
            <span className="italic font-normal text-[#BD7854]">Guide Our Care</span>
          </h2>
          {/* <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Every interaction at Mentisara is grounded in evidence-based practice, ethical standards, and genuine human empathy.
          </p> */}
          <div className="section-divider mt-2" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl border border-[#DED1C2]/90 shadow-[0_4px_20px_-4px_rgba(20,38,28,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(20,38,28,0.09)] transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-7 space-y-4 relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${v.accentLine} opacity-80`} />

              <div
                className={`w-11 h-11 rounded-2xl ${v.iconBg} flex items-center justify-center border border-sand-200/80 shadow-soft-sm transition-transform duration-300 group-hover:scale-105`}
              >
                {v.icon}
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-forest-950 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
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
