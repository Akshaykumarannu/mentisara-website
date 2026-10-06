import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Client Privacy & Data Protection",
  description: "Read Mentisara's Privacy Policy and Client Privacy guidelines for online psychological consultations.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="bg-white rounded-4xl p-8 sm:p-12 border border-sand-300 shadow-soft-md space-y-8">
          
          <div className="space-y-4 border-b border-sand-200 pb-6">
            <Badge variant="secondary">Legal & Ethics</Badge>
            <h1 className="text-3xl sm:text-4xl font-serif text-forest-950 font-medium">
              Privacy & Client Protection Policy
            </h1>
            <p className="text-xs text-slate-500">
              Last Updated: September 2026 | Document provided for client review
            </p>
          </div>

          <div className="bg-sand-100/70 p-4 rounded-2xl border border-sand-300 flex items-start gap-3 text-xs sm:text-sm text-forest-900">
            <ShieldCheck className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
            <p>
              <strong>Notice for Client Review:</strong> This privacy statement is tailored for Mentisara&apos;s mental health practice. Please consult with your legal adviser to ensure compliance with specific regional clinical governance standards.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">1. Commitment to Client Privacy & Discretion</h2>
              <p>
                At Mentisara (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we recognize the deeply personal nature of psychological therapy and mental health support. We are committed to maintaining the highest degree of ethical privacy, discretion, and data protection for all visitors and clients.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">2. Information We Collect</h2>
              <p>
                When you interact with our website or submit an appointment application form, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Contact Information:</strong> First name, last name, email address, phone number.</li>
                <li><strong>Intake Preferences:</strong> Preferred service category, scheduling time preferences, mode of session (Online / In-Person).</li>
                <li><strong>Contextual Notes:</strong> General areas of emotional focus you voluntarily provide to help us prepare for intake.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">3. How Your Information is Used</h2>
              <p>
                All data collected is strictly utilized to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Review and process consultation requests and workshop registrations.</li>
                <li>Coordinate session scheduling and transmit secure video connection links.</li>
                <li>Respond to inquiries submitted via our contact forms.</li>
              </ul>
              <p>
                We do not sell, rent, or monetize personal client information to any third party under any circumstances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">4. Session Privacy & Ethical Exceptions</h2>
              <p>
                Therapy sessions are strictly private. Professional discretion is maintained between you and your psychological practitioner, except under legally mandated exceptions including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Imminent risk of severe harm to self or others.</li>
                <li>Mandatory statutory disclosures required by law.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">5. Data Security & Storage</h2>
              <p>
                We implement industry-standard encryption protocols (HTTPS/TLS) across all website forms. Session notes and contact details are stored in password-protected, restricted-access clinical databases.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-forest-900 font-semibold">6. Contacting Our Data Privacy Officer</h2>
              <p>
                For questions regarding this policy or to request data deletion, please contact us at:{" "}
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
