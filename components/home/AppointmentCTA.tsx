import React from "react";
import Link from "next/link";
import { Calendar, MessageCircle, ShieldCheck, Clock, Heart, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const trustFeatures = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
    title: "100% Confidential",
    desc: "Strict psychological code of ethics & data privacy.",
    iconBg: "bg-[#D4E8DC]",
  },
  {
    icon: <Clock className="w-5 h-5 text-[#B86237]" />,
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
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#B2D8C0]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#F5D4BF]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-9 relative z-10">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-forest-950 border border-[#BED7C6] shadow-soft-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          Accepting New Clients · Online Sessions Available Now
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-forest-950 leading-[1.15]">
            Ready to Take the First Step
            <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C47C56]">
              {" "}Towards Emotional Clarity?
            </span>
          </h2>
          <div className="section-divider mt-2" />
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Submit an online intake application today. Our clinical intake coordinator will reach out promptly
          to confirm session times and provide confidential connection details.
        </p>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {trustFeatures.map((feat, i) => (
            <div
              key={i}
              className="bg-white border border-[#CADBD0] p-5 rounded-2xl space-y-2.5 shadow-soft-sm hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="flex items-center gap-2.5">
                <div className={`p-1.5 rounded-lg ${feat.iconBg}`}>
                  {feat.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest-950">{feat.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-0.5">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/book-appointment" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#C47C56] hover:bg-[#B26A44] text-white font-semibold px-8 py-3.5 rounded-2xl shadow-soft-md transition-all duration-200 hover:-translate-y-0.5 text-base">
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
              Talk via WhatsApp
            </button>
          </a>
        </div>

        {/* Bottom reassurance */}
        <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
          Confidential intake process. All personal details are protected under professional psychological ethics.
        </p>

      </div>
    </section>
  );
}
