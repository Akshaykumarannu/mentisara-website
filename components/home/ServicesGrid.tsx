import React from "react";
import Link from "next/link";
import { UserCheck, BrainCircuit, Compass, Shield, Users, HeartPulse, ArrowRight } from "lucide-react";

interface HomeServiceCard {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  icon: React.ReactNode;
  iconBg: string;
}

const homeServices: HomeServiceCard[] = [
  {
    id: "individual-psychotherapy",
    slug: "individual-psychotherapy",
    name: "Individual Psychotherapy",
    shortDesc: "Confidential, one-on-one therapy tailored to your unique emotional needs and lived experiences.",
    icon: <UserCheck className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    id: "cognitive-behavioural-therapy",
    slug: "cognitive-behavioural-therapy",
    name: "Cognitive Behavioural Therapy (CBT)",
    shortDesc: "A structured, goal-oriented approach to identify and reframe unhelpful thought and behaviour patterns.",
    icon: <BrainCircuit className="w-5 h-5 text-[#B86237]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    id: "dialectical-behaviour-therapy",
    slug: "dialectical-behaviour-therapy",
    name: "Dialectical Behaviour Therapy (DBT)",
    shortDesc: "Skills-based therapy focused on emotional regulation, distress tolerance, mindfulness, and healthier relationships.",
    icon: <Compass className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    id: "acceptance-commitment-therapy",
    slug: "acceptance-commitment-therapy",
    name: "Acceptance and Commitment Therapy (ACT)",
    shortDesc: "Therapy focused on psychological flexibility, acceptance of difficult experiences, and value-based living.",
    icon: <Shield className="w-5 h-5 text-[#B86237]" />,
    iconBg: "bg-[#F7E2D4]",
  },
  {
    id: "family-couple-therapy",
    slug: "family-couple-therapy",
    name: "Family & Couple Therapy",
    shortDesc: "Collaborative therapy focused on communication, relationship patterns, conflict resolution, and mutual understanding.",
    icon: <Users className="w-5 h-5 text-forest-800" />,
    iconBg: "bg-[#D4E8DC]",
  },
  {
    id: "emotional-regulation-resilience",
    slug: "emotional-regulation-resilience",
    name: "Emotional Regulation & Resilience Training",
    shortDesc: "Evidence-based strategies designed to expand emotional tolerance, stabilize mood responses, and build inner strength.",
    icon: <HeartPulse className="w-5 h-5 text-[#B86237]" />,
    iconBg: "bg-[#F7E2D4]",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#E1EDE5] relative overflow-hidden border-b border-[#CADCD0]">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C8E0D2]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F5DECC]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/90 text-forest-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#BED4C6] shadow-soft-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Evidence-Based{" "}
            <span className="text-[#C47C56] font-normal italic">
              Therapy Modalities
            </span>
          </h2>
          <p className="text-base text-slate-700 leading-relaxed max-w-xl mx-auto">
            Structured, individualized online psychological care designed to support your wellbeing and growth.
          </p>
          <div className="section-divider mt-2" />
        </div>

        {/* Concise Overview Grid (6 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#CADBD0] shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className={`w-11 h-11 rounded-2xl ${service.iconBg} flex items-center justify-center border border-sand-200/80 shadow-soft-sm`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-forest-950 font-semibold leading-snug">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-sand-200 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-[#C47C56] transition-colors group"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/book-appointment?service=${service.id}`}
                  className="text-xs font-medium text-slate-500 hover:text-forest-900 transition-colors"
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
            className="inline-flex items-center gap-2 bg-white hover:bg-sand-50 text-forest-950 font-semibold px-6 py-3 rounded-2xl border border-[#BED4C6] shadow-soft-sm transition-all hover:-translate-y-0.5 text-sm"
          >
            <span>View Full Service Details & Psychiatric Coordination</span>
            <ArrowRight className="w-4 h-4 text-[#C47C56]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
