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
  ArrowRight,
} from "lucide-react";

interface CareTopic {
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
}

const careTopics: CareTopic[] = [
  {
    title: "Personality-related concerns",
    desc: "Sometimes, the patterns we struggle with are attempts to protect parts of ourselves. Understanding them can be the beginning of meaningful change.",
    icon: <UserCheck className="w-5 h-5 text-[#BD7854]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    title: "Relationships",
    desc: "The way we connect with  others is often shaped by experiences we carry within us. Understanding these patterns can open the way to healthier connection.",
    icon: <HeartHandshake className="w-5 h-5 text-[#BD7854]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  
  {
    title: "Depression",
    desc: "Sometimes, it is not that you have stopped caring—it is that you have been carrying too much for too long. Therapy can help you reconnect with yourself, gradually and without judgment.",
    icon: <CloudRain className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Anxiety",
    desc: "When your mind is constantly preparing for what might go wrong, even the present can become difficult to experience. Therapy can help you understand the cycle and regain a sense of steadiness.",
    icon: <Sparkles className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Adjustmental Issues",
    desc: "Not every change is easy to adapt to. When life no longer feels familiar, therapy can offer space to understand, adjust, and find your footing again.",
    icon: <GitBranch className="w-5 h-5 text-[#BD7854]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    title: "Trauma",
    desc: "What happened to you can continue to influence how you feel, think, trust, and respond today. Healing begins with having a safe space to understand those experiences.",
    icon: <ShieldCheck className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Self-Esteem",
    desc: "The way you speak to yourself shapes the way you experience your life. Therapy can help you move from constant self-judgment toward greater self-understanding and compassion.",
    icon: <Smile className="w-5 h-5 text-[#BD7854]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    title: "Life Transitions",
    desc: "Some changes are chosen; others are forced upon us. Therapy can help you make sense of what has changed and discover who you are becoming.",
    icon: <Compass className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    title: "Grief",
    desc: "Healing does not mean forgetting or leaving the past behind. It means learning to live with what has changed while making space for life to continue.",
    icon: <Feather className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
 
  {
    title: "Burnout",
    desc: "When constantly coping becomes a way of life, exhaustion can begin to feel normal. Therapy can help you recognise the cost, restore yourself, and create healthier ways of living.",
    icon: <Flame className="w-5 h-5 text-[#BD7854]" />,
    iconBg: "bg-[#F7E2D4]",
  },
];

export function SpecializedCareSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F2EBE1] relative overflow-hidden border-b border-[#E0D4C5]">
      {/* Decorative ambient blur */}
      <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-[#E8DACB]/50 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-[#C5DEC9]/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-950 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#D5C7B6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Specialized Care Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-[1.15]">
            Areas We{" "}
            <span className="italic font-normal text-[#BD7854]">Support</span>
          </h2>
          {/* <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-normal">
            Individualised care designed around your needs, goals and wellbeing.
          </p> */}
          <div className="section-divider mt-2" />
        </div>

        {/* 10 Elegant Floating Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {careTopics.map((topic, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-5 border border-[#DED1C2] shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1.5 hover:border-forest-300 space-y-2 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-2.5">
                <div
                  className={`w-10 h-10 rounded-xl ${topic.iconBg} flex items-center justify-center border border-sand-200/80 shadow-soft-sm transition-transform duration-300 group-hover:scale-105`}
                >
                  {topic.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-forest-950 leading-snug">
                  {topic.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {topic.desc}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/book-appointment"
                  className="editorial-link text-xs font-semibold text-forest-950 hover:text-[#BD7854] transition-colors inline-flex items-center gap-1 group/link"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
