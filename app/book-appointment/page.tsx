import React from "react";
import { Metadata } from "next";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Lock, Clock, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book an Appointment | Online Psychological Intake Application",
  description: "Register for an online therapy consultation or workshop at Mentisara. Confidential, person-centred psychological support.",
};

export default function BookAppointmentPage({
  searchParams,
}: {
  searchParams: { service?: string };
}) {
  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "Book Appointment" }]} />

        <div className="text-center space-y-4 mb-10">
          <Badge variant="primary">Intake Application</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Schedule Your Therapy Intake
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Please fill out your consultation request below. All information submitted is protected under strict client confidentiality standards.
          </p>
        </div>

        {/* Form Container */}
        <AppointmentForm preselectedServiceId={searchParams.service} />

        {/* Guarantees & Alternative Contact */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-5 rounded-2xl border border-sand-300 space-y-2">
            <ShieldCheck className="w-6 h-6 text-forest-700 mx-auto" />
            <h4 className="font-serif text-base font-medium text-forest-900">Ethics & Privacy</h4>
            <p className="text-xs text-slate-600">Strictly confidential handling of personal details.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-sand-300 space-y-2">
            <Clock className="w-6 h-6 text-terracotta-600 mx-auto" />
            <h4 className="font-serif text-base font-medium text-forest-900">24-Hour Response</h4>
            <p className="text-xs text-slate-600">Prompt coordination via email or phone.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-sand-300 space-y-2">
            <Lock className="w-6 h-6 text-forest-700 mx-auto" />
            <h4 className="font-serif text-base font-medium text-forest-900">Direct WhatsApp</h4>
            <p className="text-xs text-slate-600">
              Prefer quick messaging?{" "}
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-terracotta-600 underline font-semibold">
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
