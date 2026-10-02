import React from "react";
import Link from "next/link";
import { Calendar, MessageCircle, ShieldCheck, Clock, Heart, ArrowRight, Star } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const trustFeatures = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "100% Confidential",
    desc: "Strict psychological code of ethics & privacy.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "24-Hour Response",
    desc: "Prompt coordination via email or WhatsApp.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Person-Centred",
    desc: "You set the pace. No rigid labels or pressure.",
    color: "text-terracotta-400",
    bg: "bg-terracotta-500/10 border-terracotta-500/20",
  },
];

const ratingBadge = [1,2,3,4,5];

export function AppointmentCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark forest background */}
      <div className="absolute inset-0 bg-mesh-dark" />

      {/* Animated ambient glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-forest-600/25 rounded-full blur-[150px] pointer-events-none animate-breathe" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-terracotta-700/20 rounded-full blur-[130px] pointer-events-none animate-breathe delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-forest-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-semibold text-sand-200 border border-white/12 shadow-soft-sm">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-terracotta-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terracotta-500" />
          </span>
          Accepting New Clients · Online Sessions Available Now
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
            Ready to Take the First Step
            <br className="hidden sm:inline" />
            <span className="italic font-normal text-sand-300">
              {" "}Towards Emotional Clarity?
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-terracotta-500" />
            <div className="flex items-center gap-1">
              {ratingBadge.map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-terracotta-500" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-sand-300 max-w-2xl mx-auto leading-relaxed">
          Submit an online intake application today. Our clinical coordinator will reach out promptly
          to confirm session times and provide confidential connection details.
        </p>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {trustFeatures.map((feat, i) => (
            <div key={i} className={`${feat.bg} border backdrop-blur-sm p-5 rounded-2xl space-y-2 hover:-translate-y-1 transition-transform duration-300`}>
              <div className={`flex items-center gap-2 ${feat.color} text-xs font-bold uppercase tracking-wider`}>
                {feat.icon}
                <span>{feat.title}</span>
              </div>
              <p className="text-xs text-sand-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/book-appointment" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white hover:bg-[#F8F5EE] text-[#0A0F0B] font-bold px-9 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group text-base">
              <Calendar className="w-5 h-5 text-[#D4956A] group-hover:rotate-6 transition-transform" />
              <span className="text-[#0A0F0B] font-bold">Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#0A0F0B] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </button>
          </Link>

          <a
            href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about booking an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/8 text-white font-semibold px-9 py-4 rounded-2xl border border-white/25 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 text-base">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              Talk via WhatsApp
            </button>
          </a>
        </div>

        {/* Bottom reassurance */}
        <p className="text-xs text-sand-500 max-w-md mx-auto leading-relaxed">
          No commitment required. Confidential intake process. All data is handled under strict psychological privacy standards.
        </p>

      </div>
    </section>
  );
}
