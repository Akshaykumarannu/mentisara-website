import React from "react";
import Link from "next/link";
import { UserCheck, BrainCircuit, Compass, Shield, Users, HeartPulse, ArrowRight } from "lucide-react";

interface HomeServiceCard {
  id: string;
  slug: string;
  name: string;
  shortDesc?: string;
  icon: React.ReactNode;
  iconBg: string;
}

const homeServices: HomeServiceCard[] = [
  {
    id: "individual-psychotherapy",
    slug: "individual-psychotherapy",
    name: "Individual Psychotherapy",
    icon: <UserCheck className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    id: "family-couple-therapy",
    slug: "family-couple-therapy",
    name: "Family & Couple Therapy",
    icon: <Users className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    id: "cognitive-behavioural-therapy",
    slug: "cognitive-behavioural-therapy",
    name: "Cognitive Behavioural Therapy (CBT)",
    icon: <BrainCircuit className="w-5 h-5 text-[#BD7854]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    id: "dialectical-behaviour-therapy",
    slug: "dialectical-behaviour-therapy",
    name: "Dialectical Behaviour Therapy (DBT)",
    icon: <Compass className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    id: "acceptance-commitment-therapy",
    slug: "acceptance-commitment-therapy",
    name: "Acceptance and Commitment Therapy (ACT)",
    icon: <Shield className="w-5 h-5 text-[#BD7854]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  
  {
    id: "emotional-regulation-resilience",
    slug: "emotional-regulation-resilience",
    name: "Emotional Regulation & Resilience Training",
    icon: <HeartPulse className="w-5 h-5 text-[#BD7854]" />,
    iconBg: "bg-[#F7E2D4]",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#E1EDE5] relative overflow-hidden border-b border-[#CADCD0]">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#C8E0D2]/50 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#F5DECC]/35 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-950 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#BED4C6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Specialized{" "}
            <span className="text-[#BD7854] font-normal italic">
              Therapy Modalities
            </span>
          </h2>
          <p className="text-base text-slate-700 leading-relaxed max-w-xl mx-auto">
            Structured, individualized online psychological care designed to support your wellbeing and growth.
          </p>
          <div className="section-divider mt-2" />
        </div>

        {/* Tactile Overview Grid (6 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#CADBD0]/90 shadow-[0_4px_20px_-4px_rgba(20,38,28,0.05)] hover:shadow-[0_18px_38px_-8px_rgba(20,38,28,0.09)] transition-all duration-300 hover:-translate-y-1.5 hover:border-forest-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#BD7854] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center border border-sand-200/80 shadow-soft-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
                >
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-serif text-forest-950 font-semibold leading-snug pt-0.5">
                    {service.name}
                  </h3>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-[#E8EFEA] flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-950 hover:text-[#BD7854] transition-colors group/link"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
                <Link
                  href={`/book-appointment?service=${service.id}`}
                  className="text-xs font-medium text-slate-500 hover:text-forest-950 transition-colors"
                >
                  Book Session
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Services Page */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white hover:bg-sand-50 text-forest-950 font-semibold px-6 py-3 rounded-2xl border border-[#BED4C6] shadow-soft-sm transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            <span>View Full Service Details & Psychiatric Coordination</span>
            <ArrowRight className="w-4 h-4 text-[#BD7854]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
