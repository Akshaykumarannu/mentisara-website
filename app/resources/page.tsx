"use client";

import React, { useState } from "react";
import Link from "next/link";
import { resourcesData } from "@/lib/resources-data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Mental Well-being", "Emotional Regulation", "Therapy & Guidance", "Resilience"];

  const filteredArticles = resourcesData.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "Resources & Articles" }]} />

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <Badge variant="primary">Psychoeducation & Articles</Badge>
          <h1 className="text-4xl sm:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Resources for Psychological Well-Being
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Evidence-informed articles, self-awareness guides, and therapeutic perspectives curated by the Mentisara clinical team.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Search articles by topic, keyword, or tag (e.g. CBT, anxiety, grounding)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-3.5 rounded-2xl bg-white shadow-soft-sm"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-forest-800 text-white shadow-soft-sm"
                    : "bg-white text-slate-600 border border-sand-300 hover:bg-sand-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-sand-300 max-w-md mx-auto space-y-3">
            <p className="font-serif text-xl text-forest-900">No articles found</p>
            <p className="text-sm text-slate-500">Try adjusting your search criteria or resetting category filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-semibold text-forest-800 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
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

                <div className="p-6 pt-0 flex items-center justify-between border-t border-sand-100 mt-4">
                  <span className="text-xs text-slate-500 font-medium">{art.author.name}</span>
                  <Link href={`/resources/${art.slug}`}>
                    <span className="inline-flex items-center text-xs font-semibold text-forest-800 hover:underline">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
