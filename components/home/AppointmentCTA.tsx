import React from "react";
import Link from "next/link";
import { Calendar, MessageCircle, ShieldCheck, Clock, Heart, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const trustFeatures = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-800" />,
    title: "Private & Ethical",
    desc: "Strict psychological code of ethics, data privacy, and secure sessions.",
    iconBg: "bg-[#D4E8DC]",
  },
  {
    icon: <Clock className="w-5 h-5 text-[#BD7854]" />,
    title: "Prompt Coordination",
    desc: "Prompt intake confirmation via email or WhatsApp.",
    iconBg: "bg-[#F7E2D4]",
  },
  {
    icon: <Heart className="w-5 h-5 text-forest-800" />,
    title: "Person-Centred",
    desc: "You set the pace. Individualized care without pressure.",
    iconBg: "bg-[#D4E8DC]",
  },
];

export function AppointmentCTA() {
  return (
    <section className="py-20 md:py-28 bg-mesh-dark relative overflow-hidden border-b border-[#BED7C6]">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[620px] h-[620px] bg-[#B2D8C0]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[520px] h-[520px] bg-[#F5D4BF]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-9 relative z-10">

        {/* Top Reassurance Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-forest-950 border border-[#BED7C6] shadow-soft-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          Accepting New Clients · Online Sessions Available Now
        </div>

        {/* Heading with Display Serif */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-forest-950 leading-[1.12]">
            Ready to Take the First Step
            <br className="hidden sm:inline" />
            <span className="italic font-medium text-[#BD7854]">
              {" "}Towards Emotional Clarity?
            </span>
          </h2>
          <div className="section-divider mt-2" />
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
          Submit an online intake application today. Our clinical intake coordinator will reach out promptly
          to confirm session times and provide secure connection details.
        </p>

        {/* 3 Reassuring Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {trustFeatures.map((feat, i) => (
            <div
              key={i}
              className="bg-white border border-[#CADBD0] p-5 rounded-2xl space-y-2.5 shadow-soft-sm hover:-translate-y-1 transition-all duration-200 hover:shadow-soft-md"
            >
              <div className="flex items-center gap-2.5">
                <div className={`p-1.5 rounded-xl ${feat.iconBg} border border-sand-200/80`}>
                  {feat.icon}
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-forest-950">{feat.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-0.5">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/book-appointment" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#BD7854] hover:bg-[#A86442] text-white font-semibold px-8 py-3.5 rounded-2xl shadow-soft-md transition-all duration-200 hover:-translate-y-0.5 text-base hover:shadow-[0_10px_24px_-4px_rgba(189,120,84,0.35)] active:translate-y-0">
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </Link>

          <a
            href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about booking an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white hover:bg-sand-50 text-forest-950 font-medium px-8 py-3.5 rounded-2xl border border-[#BED7C6] hover:border-forest-300 transition-all duration-200 hover:-translate-y-0.5 text-base shadow-soft-sm">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>Talk via WhatsApp</span>
            </button>
          </a>
        </div>

        {/* Crisis Notice */}
        <p className="text-xs text-slate-500 max-w-xl mx-auto pt-2">
          Online psychological care is designed for planned, non-emergency support. If you are experiencing
          an acute crisis or require immediate medical assistance, please contact your local emergency helpline.
        </p>

      </div>
    </section>
  );
}
