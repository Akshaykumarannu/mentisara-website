import React from "react";
import Link from "next/link";
import { resourcesData } from "@/lib/resources-data";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ResourcePreview() {
  const articles = resourcesData.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#F7F0E8] relative overflow-hidden border-b border-[#E6D9C8]">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#F2DAC6]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#C8E0D2]/35 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/90 text-forest-950 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#D5C7B6] shadow-soft-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD7854]" />
              Insights & Resources
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-[1.15]">
              Mental Health Articles &{" "}
              <span className="italic font-normal text-[#BD7854]">Psychoeducation</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Explore compassionate perspectives on psychotherapy, emotional regulation, and psychological resilience.
            </p>
            <div className="section-divider-left mt-2" />
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2.5 bg-forest-900 hover:bg-forest-950 text-white font-semibold px-6 py-3 rounded-2xl shadow-soft-sm transition-all duration-200 hover:-translate-y-0.5 text-sm group flex-shrink-0"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Magazine Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#DED1C2] shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* 16:10 Aspect Ratio Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand-200">
                  <img
                    src={art.imageUrl}
                    alt={art.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm text-forest-950 shadow-soft-sm border border-sand-200/80 font-medium">
                      {art.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-forest-700" />
                      {formatDate(art.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-forest-700" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-forest-950 leading-snug line-clamp-2 group-hover:text-[#BD7854] transition-colors">
                    <Link href={`/resources/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-3 font-normal">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href={`/resources/${art.slug}`}
                  className="editorial-link text-sm font-semibold text-forest-950 hover:text-[#BD7854] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
