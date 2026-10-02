import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getResourceBySlug, resourcesData } from "@/lib/resources-data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, ArrowLeft, Tag, Calendar as CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return resourcesData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getResourceBySlug(params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Mentisara Resources`,
    description: article.excerpt,
  };
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const article = getResourceBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = resourcesData.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Resources", href: "/resources" },
            { label: article.title },
          ]}
        />

        {/* HEADER */}
        <article className="bg-white rounded-4xl p-6 sm:p-10 md:p-12 border border-sand-300 shadow-soft-md space-y-8 mb-12">
          
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="primary">{article.category}</Badge>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <CalendarIcon className="w-3.5 h-3.5 text-forest-700" />
                {formatDate(article.publishedAt)}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-forest-700" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Author bar */}
            <div className="flex items-center gap-3 pt-2 border-t border-sand-200">
              <div className="w-10 h-10 rounded-full bg-forest-100 text-forest-800 font-bold flex items-center justify-center text-sm border border-forest-200">
                M
              </div>
              <div>
                <p className="text-sm font-semibold text-forest-950">{article.author.name}</p>
                <p className="text-xs text-slate-500">{article.author.role}</p>
              </div>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="rounded-3xl overflow-hidden h-72 sm:h-96 w-full bg-sand-200 border border-sand-300">
            <img
              src={article.imageUrl}
              alt={article.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div
            className="prose prose-forest max-w-none text-slate-800 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Tags */}
          <div className="pt-6 border-t border-sand-200 flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-forest-700" />
            {article.tags.map((tag) => (
              <span key={tag} className="bg-sand-100 text-forest-900 text-xs px-3 py-1 rounded-full border border-sand-300 font-medium">
                #{tag}
              </span>
            ))}
          </div>

        </article>

        {/* RELATED ARTICLES */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-serif text-forest-950 font-medium">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div key={rel.id} className="bg-white p-6 rounded-3xl border border-sand-300 space-y-3">
                  <Badge variant="secondary" className="text-[10px]">{rel.category}</Badge>
                  <h4 className="font-serif text-lg font-medium text-forest-950 hover:text-forest-700">
                    <Link href={`/resources/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                  <Link href={`/resources/${rel.slug}`} className="inline-block text-xs font-semibold text-forest-800 underline">
                    Read Post
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <Link href="/resources">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Resources
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
