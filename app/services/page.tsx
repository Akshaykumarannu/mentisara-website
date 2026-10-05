import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { 
  Check, 
  ArrowRight, 
  Calendar, 
  UserCheck, 
  BrainCircuit, 
  Compass, 
  Shield, 
  Users, 
  HeartPulse, 
  Stethoscope, 
  Clock, 
  ShieldCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Psychological Services | Evidence-Based Online Therapy",
  description: "Explore Mentisara's structured therapy offerings: Individual Psychotherapy, CBT, DBT, ACT, Family & Couple Therapy, Emotional Regulation, and Collaborative Psychiatric Care.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "UserCheck":
        return <UserCheck className="w-7 h-7 text-forest-800" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-7 h-7 text-[#C47C56]" />;
      case "Compass":
        return <Compass className="w-7 h-7 text-forest-800" />;
      case "Shield":
        return <Shield className="w-7 h-7 text-[#C47C56]" />;
      case "Users":
        return <Users className="w-7 h-7 text-forest-800" />;
      case "HeartPulse":
        return <HeartPulse className="w-7 h-7 text-[#C47C56]" />;
      default:
        return <UserCheck className="w-7 h-7 text-forest-800" />;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#EAF2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="primary">Our Clinical Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Tailored Psychological Support
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Grounding care in scientific rigor and person-centred respect. We provide focused, confidential online therapy designed to meet your specific emotional needs.
          </p>
        </div>

        {/* 6 Core Modalities Grid */}
        <div className="space-y-10 mb-16">
          {servicesData.map((service) => (
            <Card key={service.id} className="p-7 md:p-10 border-sand-300/80 bg-white shadow-soft-sm hover:shadow-soft-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-sand-100 border border-sand-200">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1 text-xs">{service.badge}</Badge>
                      <h2 className="text-2xl sm:text-3xl font-serif text-forest-950 font-medium">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                    {service.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="bg-sand-50/60 p-4 rounded-2xl border border-sand-200">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2.5">
                        Suitable For:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {service.suitableFor.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-sand-50/60 p-4 rounded-2xl border border-sand-200">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2.5">
                        Approach Highlights:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {service.approachHighlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Session Details Box */}
                <div className="lg:col-span-4 bg-[#F8F5EE] p-6 rounded-3xl border border-sand-300/90 space-y-5 flex flex-col justify-between h-full">
                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <div>
                      <span className="font-semibold text-forest-900 block text-xs uppercase tracking-wider mb-0.5">Session Format:</span>
                      <span className="text-slate-700">{service.sessionFormat}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-forest-900 block text-xs uppercase tracking-wider mb-0.5">Duration:</span>
                      <span className="text-slate-700 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-forest-700" />
                        {service.duration}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-forest-900 block text-xs uppercase tracking-wider mb-0.5">Consultation Fee:</span>
                      <span className="text-slate-600">Communicated upon intake review</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-sand-200">
                    <Link href={`/services/${service.slug}`} className="w-full block">
                      <Button variant="secondary" className="w-full justify-center text-xs sm:text-sm" size="sm">
                        View Full Details
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </Link>
                    <Link href={`/book-appointment?service=${service.id}`} className="w-full block">
                      <Button variant="primary" className="w-full justify-center text-xs sm:text-sm bg-[#C47C56] hover:bg-[#B26A44] border-[#B26A44]" size="sm">
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

        {/* ── DEDICATED SECTION: COLLABORATIVE PSYCHIATRIC CARE (REQUIREMENT 13) ── */}
        <div className="bg-[#F8F1E7] rounded-3xl p-8 sm:p-10 border border-[#DFD1C0] shadow-soft-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-sand-200">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-forest-100 flex items-center justify-center border border-forest-200 text-forest-800">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="outline" className="mb-1 text-xs">Medical Coordination</Badge>
                <h3 className="text-2xl sm:text-3xl font-serif text-forest-950 font-medium">
                  Collaborative Psychiatric Care
                </h3>
              </div>
            </div>
            <Link href="/book-appointment">
              <Button size="sm" variant="outline" className="text-forest-900 border-forest-300 hover:bg-forest-50">
                Inquire About Coordinated Care
              </Button>
            </Link>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="font-medium text-forest-900">
              Coordinated psychiatric consultation and medication support when needed, in collaboration with trusted doctors through online care.
            </p>
            <p className="text-sm text-slate-600">
              At Mentisara, we recognize that certain mental health challenges benefit from a multidimensional approach combining psychotherapy and psychiatric evaluation. When indicated, we coordinate closely with qualified medical doctors to ensure your emotional care and medical support remain aligned and thoughtful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 space-y-1">
              <h5 className="font-semibold text-xs uppercase tracking-wider text-forest-900">Coordinated Liaison</h5>
              <p className="text-xs text-slate-600">Collaborative communication with trusted external doctors when medication is indicated.</p>
            </div>
            <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 space-y-1">
              <h5 className="font-semibold text-xs uppercase tracking-wider text-forest-900">Integrated Support</h5>
              <p className="text-xs text-slate-600">Therapy sessions align with medical recommendations for comprehensive care.</p>
            </div>
            <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 space-y-1">
              <h5 className="font-semibold text-xs uppercase tracking-wider text-forest-900">Confidentiality Assured</h5>
              <p className="text-xs text-slate-600">Information sharing occurs solely with your explicit written consent under medical ethics.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
