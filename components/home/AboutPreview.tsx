import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Stethoscope, HeartHandshake, Award } from "lucide-react";

const credentialsAndApproach = [
  {
    icon: <BookOpen className="w-5 h-5 text-forest-700" />,
    title: "Evidence-Based Approach",
    desc: "Grounded in scientifically validated psychological frameworks and therapeutic modalities.",
  },
  {
    icon: <Award className="w-5 h-5 text-[#C47C56]" />,
    title: "Clinical Experience",
    desc: "Guided by dedicated clinical training, professional ethics, and thoughtful practice.",
  },
  {
    icon: <Stethoscope className="w-5 h-5 text-forest-700" />,
    title: "Psychiatric Care Coordination",
    desc: "Seamless collaborative consultation and doctor coordination whenever medication or medical input is indicated.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-[#C47C56]" />,
    title: "Person-Centred",
    desc: "Honoring your autonomy, lived experience, and personal pace without rigid labels or pressure.",
  },
];

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] relative overflow-hidden border-b border-[#E8DBCF]">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2DAC6]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C8E0D2]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: IMAGE & CREDENTIAL BADGE ── */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-md border-4 border-white bg-sand-200">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                alt="Professional, supportive online psychotherapy consultation"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />

              {/* Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E8DBCF] shadow-soft-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-900 border border-forest-200 flex items-center justify-center font-serif font-bold text-base">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-serif font-semibold text-forest-950">Mentisara Practice</p>
                    <p className="text-xs text-slate-500">Confidential & Person-Centred Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: COPY & 4 KEY CREDENTIALS ── */}
          <div className="lg:col-span-7 space-y-7 order-1 lg:order-2">

            <div>
              <div className="inline-flex items-center gap-2 bg-[#DDECE2] text-forest-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#BED6C5] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
                About Mentisara
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-tight">
                Understanding You{" "}
                <span className="italic font-normal text-[#C47C56]">
                  Beyond the Surface
                </span>
              </h2>
              <div className="section-divider-left mt-4" />
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              At Mentisara, we believe that emotional well-being begins when you feel truly heard and
              understood. Rather than applying rigid templates or reductionist labels, our practice focuses
              on understanding your distinct psychological makeup through a structured and person-centred
              therapeutic approach.
            </p>

            <blockquote className="text-sm text-slate-700 leading-relaxed italic border-l-4 border-[#C47C56] pl-4 bg-white/80 py-3 rounded-r-xl border border-l-0 border-[#E8DBCF] shadow-soft-sm">
              &ldquo;Every person&apos;s emotional experience is valid and unique. Our role is to walk alongside
              you as collaborative partners in your healing, self-discovery, and sustainable growth.&rdquo;
            </blockquote>

            {/* ── CREDENTIALS / OUR APPROACH (4 POINTS) ── */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-forest-900 mb-4">
                Our Approach & Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentialsAndApproach.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E2D5C5] shadow-soft-sm hover:border-forest-300 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-[#F5ECE1]">
                        {item.icon}
                      </div>
                      <h4 className="text-sm font-semibold text-forest-950">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Read more link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-[#C47C56] transition-colors group"
              >
                <span>Read more about our philosophy and practice</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
