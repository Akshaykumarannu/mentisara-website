import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Flame, 
  CloudRain, 
  HeartHandshake, 
  ShieldCheck, 
  Smile, 
  Compass, 
  GitBranch, 
  Feather, 
  UserCheck,
  ArrowRight
} from "lucide-react";

interface CareTopic {
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
}

const careTopics: CareTopic[] = [
  {
    title: "Anxiety",
    desc: "Navigating worry loops, physical tension, and acute panic.",
    icon: <Sparkles className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Burnout",
    desc: "Recovering emotional energy and establishing workplace boundaries.",
    icon: <Flame className="w-5 h-5 text-[#B86237]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    title: "Depression",
    desc: "Reconnecting with motivation, self-worth, and inner clarity.",
    icon: <CloudRain className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Relationships",
    desc: "Addressing communication patterns, conflict, and trust.",
    icon: <HeartHandshake className="w-5 h-5 text-[#B86237]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    title: "Trauma",
    desc: "Processing past experiences in a safe, paced therapeutic setting.",
    icon: <ShieldCheck className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Self-Esteem",
    desc: "Softening internal criticism and strengthening self-compassion.",
    icon: <Smile className="w-5 h-5 text-[#B86237]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    title: "Life Transitions",
    desc: "Finding direction during career changes, relocation, or loss.",
    icon: <Compass className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Adjustmental Issues",
    desc: "Managing psychological stress when adapting to new life demands.",
    icon: <GitBranch className="w-5 h-5 text-[#B86237]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    title: "Grief",
    desc: "Honoring emotional pain, bereavement, and personal loss.",
    icon: <Feather className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Personality-related concerns",
    desc: "Understanding recurring emotional patterns and relational dynamics.",
    icon: <UserCheck className="w-5 h-5 text-[#B86237]" />,
    iconBg: "bg-[#F7E2D4]",
  },
];

export function SpecializedCareSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F2EBE1] relative overflow-hidden border-b border-[#E0D4C5]">
      {/* Decorative ambient blur */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#E8DACB]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C5DEC9]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#D5C7B6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Specialized Care Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Areas We{" "}
            <span className="italic font-normal text-[#C47C56]">Support</span>
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Evidence-informed psychological support tailored to your unique challenges, personal goals, and emotional journey.
          </p>
          <div className="section-divider mt-2" />
        </div>

        {/* 10 Scannable Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {careTopics.map((topic, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-[#DED1C2] shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className={`w-9 h-9 rounded-xl ${topic.iconBg} flex items-center justify-center border border-sand-200/80 shadow-soft-sm`}>
                  {topic.icon}
                </div>
                <h3 className="font-serif text-base font-semibold text-forest-950 leading-snug">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {topic.desc}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/book-appointment"
                  className="text-[11px] font-semibold text-forest-900 hover:text-[#C47C56] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
