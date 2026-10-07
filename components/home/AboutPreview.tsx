import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Stethoscope, HeartHandshake, Award } from "lucide-react";

const credentialsAndApproach = [
  {
    icon: <BookOpen className="w-5 h-5 text-forest-800" />,
    title: "Tailored and Structured Approach",
    desc: "Guided by established psychological frameworks and individualised therapeutic methods.",
    tagBg: "bg-[#D8EADB]",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-[#BD7854]" />,
    title: "Person-Centred Care",
    desc: "Respecting your individuality, lived experiences, autonomy, and personal pace throughout the therapeutic process.",
    tagBg: "bg-[#F7E2D4]",
  },
  {
    icon: <Award className="w-5 h-5 text-forest-800" />,
    title: "Clinical Experience",
    desc: "Grounded in professional training, practical experience, and responsible mental health practice.",
    tagBg: "bg-[#D8EADB]",
  },
  {
    icon: <Stethoscope className="w-5 h-5 text-[#BD7854]" />,
    title: "Psychiatric Care Coordination",
    desc: "Facilitating psychiatric consultation and coordinated care when medication or further medical assessment is indicated.",
    tagBg: "bg-[#F7E2D4]",
  },
];

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] relative overflow-hidden border-b border-[#E8DBCF]">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#F2DAC6]/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#C8E0D2]/35 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: EDITORIAL COUNSELING IMAGE ── */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-soft-md border border-[#E5D7CA] bg-white p-3 sm:p-3.5 group">
              <div className="relative rounded-[1.5rem] overflow-hidden bg-[#EFF4F1]">
                <img
                  src="/about-mentisara-counseling.jpg"
                  alt="Empathic psychological counseling consultation — Mentisara"
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Credential Bar */}
              {/* <div className="mt-3 bg-[#FAF5EE] rounded-2xl p-3.5 border border-[#E8DBCF] flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#D6E7DC] text-forest-900 border border-[#BED7C7] flex items-center justify-center font-serif font-bold text-sm flex-shrink-0">
                  M
                </div>
                <div>
                  <p className="text-xs font-serif font-semibold text-forest-950">Evidence-Based Psychotherapy</p>
                  <p className="text-[11px] text-slate-600">A collaborative space to understand you beyond the surface</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* ── RIGHT: EDITORIAL COPY & 4 KEY CREDENTIALS ── */}
          <div className="lg:col-span-7 space-y-7 order-1 lg:order-2">

            <div>
              <div className="inline-flex items-center gap-2 bg-[#DDECE2] text-forest-950 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#BED6C5] mb-4 shadow-soft-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
                About Mentisara
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-[1.15]">
                Understanding You{" "}
                <span className="italic font-normal text-[#BD7854]">
                  Beyond the Surface
                </span>
              </h2>
              <div className="section-divider-left mt-3.5" />
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-justify">
              At Mentisara, we believe meaningful care begins with seeing the whole person. Every individual has a unique inner world shaped by experiences, emotions, thoughts, relationships, and ways of coping. We take time to understand these within the context of your life, rather than defining you through a label or a single concern. Our structured, person-centred, and clinically informed approach allows therapy to be thoughtful, individualised, and meaningful.
            </p>

            <blockquote className="text-sm text-slate-700 leading-relaxed italic border-l-3 border-[#BD7854] pl-4 bg-white/90 py-3.5 rounded-r-2xl border border-l-0 border-[#E8DBCF] shadow-soft-sm text-justify">
              &ldquo;Every person&apos;s emotional experience is valid and unique. Our role is to walk alongside
              you as collaborative partners in your healing, self-discovery, and sustainable growth.&rdquo;
            </blockquote>

            {/* ── CREDENTIALS / OUR APPROACH (4 REFINED CARDS) ── */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-forest-950 mb-3.5">
                Our Approach & Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {credentialsAndApproach.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E2D5C5] shadow-soft-sm hover:border-forest-300 hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 space-y-1.5 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-xl ${item.tagBg} border border-sand-200/80 transition-transform duration-300 group-hover:scale-105`}>
                        {item.icon}
                      </div>
                      <h4 className="text-sm font-semibold text-forest-950">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-1 text-justify">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Read more link with animated line */}
            <div className="pt-2">
              <Link
                href="/about"
                className="editorial-link text-sm font-semibold text-forest-950 hover:text-[#BD7854] transition-colors group"
              >
                <span>Read more about our philosophy and practice</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
