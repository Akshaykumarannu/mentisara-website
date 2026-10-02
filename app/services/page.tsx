import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Check, ArrowRight, Calendar, UserCheck, BrainCircuit, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Psychological Services | Individual Therapy, CBT & Emotional Regulation",
  description: "Explore Mentisara's structured therapy offerings: Individual Psychotherapy, Cognitive Behavioural Therapy, and Emotional Regulation & Resilience Training.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "UserCheck":
        return <UserCheck className="w-8 h-8 text-forest-800" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-8 h-8 text-terracotta-600" />;
      case "Compass":
        return <Compass className="w-8 h-8 text-forest-800" />;
      default:
        return <UserCheck className="w-8 h-8 text-forest-800" />;
    }
  };

  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "Services" }]} />

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="primary">Our Clinical Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Tailored Psychological Support
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Grounding care in scientific rigor and person-centred respect. We provide focused, confidential online therapy designed to meet your specific emotional needs.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {servicesData.map((service, idx) => (
            <Card key={service.id} className="p-8 md:p-10 border-sand-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-sand-100 border border-sand-300">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">{service.badge}</Badge>
                      <h2 className="text-2xl sm:text-3xl font-serif text-forest-950 font-medium">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                    {service.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                        Suitable For:
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {service.suitableFor.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                        Approach Highlights:
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {service.clinicalFocus.slice(0, 3).map((focus, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-ivory-soft p-6 rounded-3xl border border-sand-300 space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <div>
                      <span className="font-semibold text-forest-900 block">Session Format:</span>
                      <span>{service.sessionFormat}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-forest-900 block">Duration:</span>
                      <span>{service.duration}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-forest-900 block">Consultation Fee:</span>
                      <span className="text-slate-600">Details provided upon application review</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-sand-200">
                    <Link href={`/services/${service.slug}`} className="w-full block">
                      <Button variant="secondary" className="w-full justify-center" size="sm">
                        View Full Details
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </Link>
                    <Link href={`/book-appointment?service=${service.id}`} className="w-full block">
                      <Button variant="primary" className="w-full justify-center" size="sm">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </div>

              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
