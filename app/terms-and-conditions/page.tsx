import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/site-config";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Mentisara Psychological Practice",
  description: "Review Mentisara's Terms and Conditions regarding therapy appointments, online consultations, and workshop registration.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

        <div className="bg-white rounded-4xl p-8 sm:p-12 border border-sand-300 shadow-soft-md space-y-8">
          
          <div className="space-y-4 border-b border-sand-200 pb-6">
            <Badge variant="secondary">Legal Terms</Badge>
            <h1 className="text-3xl sm:text-4xl font-serif text-forest-950 font-medium">
              Terms & Conditions of Service
            </h1>
            <p className="text-xs text-slate-500">
              Effective Date: September 2026 | Document provided for client review
            </p>
          </div>

          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Important Emergency Disclaimer:</strong> Mentisara is an elective psychological and psychotherapeutic service. Our website and online sessions are <em>not</em> intended for emergency medical or acute psychiatric crisis intervention. If you are in immediate distress or experiencing self-harm thoughts, please contact your local emergency hospital or 24/7 helpline immediately (e.g. Tele-MANAS helpline 14416 in India).
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">1. Scope of Services</h2>
              <p>
                Mentisara provides structured, person-centred psychological support and emotional resilience training via online video platforms. Submitting an application form does not constitute an automatic clinical relationship until intake confirmation is agreed upon.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">2. Appointments & Scheduling</h2>
              <p>
                All session times are scheduled in Indian Standard Time (IST) unless explicitly agreed upon with your practitioner. We ask clients to join sessions promptly at the appointed time in a quiet, private setting.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">3. Cancellation & Rescheduling Policy</h2>
              <p>
                To respect the practitioner&apos;s time and other clients awaiting slots:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cancellations or rescheduling requests must be submitted at least 24 hours in advance.</li>
                <li>Late cancellations or unattended sessions without prior notice may be subject to a standard session retention fee.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">4. Payments & Refunds</h2>
              <p>
                Session fees and workshop payments are processed via verified online gateways. Refunds are available only when the therapist is unavailable at the scheduled appointment time. If a technical issue occurs during the session, the session will be rescheduled, and no additional payment will be required.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">5. Intellectual Property</h2>
              <p>
                All psychoeducational resources, articles, workshop materials, and website content are the intellectual property of Mentisara and may not be reproduced without written permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">6. Inquiries & Updates</h2>
              <p>
                For questions regarding these terms, contact{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-forest-800 underline font-semibold">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>
          </div>

        </div>

      </div>
    </div>
  );
}
