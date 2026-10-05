import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, servicesData } from "@/lib/services-data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Check, Calendar, ArrowLeft, ShieldCheck, Clock, Laptop } from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.title} | Mentisara Psychological Practice`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const faqItems = service.faqs.map((faq, i) => ({
    id: `faq-${i}`,
    title: faq.question,
    content: <p className="text-slate-700 leading-relaxed">{faq.answer}</p>,
  }));

  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />

        {/* HERO */}
        <div className="bg-white rounded-4xl p-8 sm:p-12 border border-sand-300 shadow-soft-md space-y-6 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Badge variant="primary">{service.badge}</Badge>
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-forest-700" />
                {service.duration}
              </span>
              <span className="flex items-center gap-1">
                <Laptop className="w-3.5 h-3.5 text-forest-700" />
                {service.sessionFormat}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-sand-200">
            <Link href={`/book-appointment?service=${service.id}`} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto shadow-soft-md">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation for {service.title}
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Services
              </Button>
            </Link>
          </div>
        </div>

        {/* SECTION 2: Who this is suitable for & Clinical Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-sand-100/70 p-8 rounded-3xl border border-sand-300 space-y-4">
            <h2 className="font-serif text-2xl text-forest-950 font-medium">Who This May Be Suitable For</h2>
            <ul className="space-y-3">
              {service.suitableFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-sand-300 space-y-4">
            <h2 className="font-serif text-2xl text-forest-950 font-medium">What the Approach Involves</h2>
            <ul className="space-y-3">
              {service.approachHighlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION 3: Clinical Focus Tags */}
        <div className="bg-white p-8 rounded-3xl border border-sand-300 space-y-4 mb-12">
          <h2 className="font-serif text-xl text-forest-950 font-medium">Primary Clinical Focus Areas</h2>
          <div className="flex flex-wrap gap-2">
            {service.clinicalFocus.map((focus, idx) => (
              <span
                key={idx}
                className="bg-forest-50 text-forest-900 border border-forest-200 px-4 py-2 rounded-full text-xs font-semibold"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 4: FAQs */}
        {service.faqs.length > 0 && (
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-forest-950 font-medium">
              Frequently Asked Questions
            </h2>
            <Accordion items={faqItems} />
          </div>
        )}

        {/* CTA Banner */}
        <div className="bg-[#F1F6F3] border border-[#DEE7E1] rounded-3xl p-8 text-forest-950 text-center space-y-4 shadow-soft-sm">
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-forest-950">
            Begin Your Consultation Process
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Submit an online intake application to reserve your confidential introductory video session.
          </p>
          <Link href={`/book-appointment?service=${service.id}`}>
            <Button size="lg" className="bg-[#C47C56] hover:bg-[#B26A44] text-white border-[#B26A44]">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment Now
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
