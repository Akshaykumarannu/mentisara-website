import React from "react";
import Link from "next/link";
import { resourcesData } from "@/lib/resources-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ResourcePreview() {
  const articles = resourcesData.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-mesh-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-terracotta-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-sand-300/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-terracotta-100 text-terracotta-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-terracotta-200">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-600" />
              Insights & Resources
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
              Mental Health Articles &{" "}
              <span className="italic font-normal text-[#D4956A]">Psychoeducation</span>
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Explore evidence-informed perspectives on psychotherapy, emotional regulation, and psychological resilience.
            </p>
            <div className="section-divider-left" />
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2.5 bg-forest-800 hover:bg-forest-900 text-white font-semibold px-6 py-3 rounded-2xl shadow-soft-sm transition-all hover:-translate-y-0.5 text-sm group flex-shrink-0"
          >
            View All Resources
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Card key={art.id} className="p-0 overflow-hidden flex flex-col justify-between hover:shadow-soft-md transition-all">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-sand-200">
                  <img
                    src={art.imageUrl}
                    alt={art.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-forest-900 shadow-soft-sm">
                      {art.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-forest-700" />
                      {formatDate(art.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-forest-700" />
                      {art.readTime}
                    </span>
                  </div>

                  <CardTitle className="text-lg md:text-xl font-medium line-clamp-2 hover:text-forest-700 transition-colors">
                    <Link href={`/resources/${art.slug}`}>{art.title}</Link>
                  </CardTitle>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link href={`/resources/${art.slug}`}>
                  <span className="inline-flex items-center text-xs font-semibold text-forest-800 hover:text-forest-950 hover:underline">
                    Read Full Article
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
