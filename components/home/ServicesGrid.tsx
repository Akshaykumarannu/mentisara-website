"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import { UserCheck, BrainCircuit, Compass, ArrowRight, Calendar, Check, Clock, Laptop, ChevronRight } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "UserCheck":
      return <UserCheck className="w-7 h-7" />;
    case "BrainCircuit":
      return <BrainCircuit className="w-7 h-7" />;
    case "Compass":
      return <Compass className="w-7 h-7" />;
    default:
      return <UserCheck className="w-7 h-7" />;
  }
};

const iconBg = ["from-forest-600 to-forest-800", "from-terracotta-500 to-terracotta-700", "from-sage-500 to-sage-700"];
const accentColors = ["text-forest-400", "text-terracotta-400", "text-sage-400"];

export function ServicesGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-mesh-forest relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full border border-white/5 -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full border border-white/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/3 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-forest-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-terracotta-700/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/8 text-white/60 text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4956A]" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-medium tracking-tight">
            Evidence-Based{" "}
            <span className="text-[#D4956A] font-normal italic">
              Therapy Modalities
            </span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed max-w-xl mx-auto">
            Structured online psychotherapy tailored to your specific needs and goals.
          </p>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#D4956A] to-[#E8B89A] mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-[2rem] border transition-all duration-500 flex flex-col cursor-pointer
                ${hoveredId === service.id
                  ? "border-white/25 bg-white/10 shadow-glow-forest -translate-y-2"
                  : "border-white/10 hover:border-white/20"
                }`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-[2rem] bg-gradient-to-r ${iconBg[idx % 3]} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className="p-7 sm:p-8 flex flex-col h-full space-y-5">

                {/* Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconBg[idx % 3]} text-white flex items-center justify-center shadow-soft-md group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 text-sand-300 px-3 py-1.5 rounded-full border border-white/15">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-serif text-white font-medium mb-2 group-hover:text-sand-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-sand-400 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Session format */}
                <div className="flex items-center justify-between text-xs text-sand-500 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sand-400" />
                    {service.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-sand-400" />
                    Online Video
                  </span>
                </div>

                {/* Clinical Focus */}
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${accentColors[idx % 3]} mb-3`}>
                    What we address:
                  </p>
                  {service.clinicalFocus.slice(0, 4).map((focus, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-sand-400">
                      <Check className={`w-3.5 h-3.5 ${accentColors[idx % 3]} shrink-0`} />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-sand-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 px-4 py-2.5 rounded-xl transition-all duration-200"
                  >
                    Learn More
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/book-appointment?service=${service.id}`}
                    className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r ${iconBg[idx % 3]} px-4 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-soft-md`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Session
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 text-sand-300 hover:text-white font-semibold text-sm border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 px-7 py-3.5 rounded-2xl transition-all duration-300"
          >
            Explore All Services & FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
