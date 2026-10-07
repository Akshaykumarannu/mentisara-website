"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Alert } from "@/components/ui/Alert";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { APIResponse } from "@/types";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: APIResponse = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try reaching out on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F5EEE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <Badge variant="primary">Get in Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            We Are Here to Listen & Assist
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Have questions about our person-centred therapy approach or appointment process? Reach out to our intake team today.
          </p>
        </div>

        {/* ── CRISIS DISCLAIMER BOX (REQUIREMENT 22) ── */}
        <div className="bg-[#FAF3EC] border border-[#E8D7C8] rounded-2xl p-5 mb-12 max-w-4xl mx-auto flex items-start gap-3.5 shadow-soft-sm">
          <AlertCircle className="w-5 h-5 text-[#C47C56] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#4A392F] leading-relaxed">
            <strong className="font-semibold text-forest-950 block sm:inline sm:mr-1">Important Notice:</strong>
            Mentisara is an online counselling platform, not an emergency or crisis service. For urgent mental health concerns, please seek immediate professional or emergency assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-sand-300/80 shadow-soft-sm space-y-6">
              <h2 className="text-2xl font-serif text-forest-950 font-medium">Contact Details</h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C47C56] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-forest-900 block">Email Inquiries</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-forest-800 hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C47C56] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-forest-900 block">Phone Support</span>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-forest-800 hover:underline">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C47C56] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-forest-900 block">Primary Location</span>
                    <span>{siteConfig.contact.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C47C56] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-forest-900 block">Practice Hours</span>
                    <span>{siteConfig.contact.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-6 border-t border-sand-200">
                <a
                  href={buildWhatsAppUrl("Hello Mentisara, I have a general contact inquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 rounded-2xl font-semibold shadow-soft-sm transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Instant WhatsApp Support</span>
                </a>
              </div>
            </div>

            {/* Location Notice */}
            <div className="bg-sand-100/70 rounded-3xl border border-sand-300 p-6 text-center space-y-2">
              <MapPin className="w-6 h-6 text-forest-800 mx-auto" />
              <h4 className="font-serif text-lg font-medium text-forest-950">Kerala (Inside & Outside) Online</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                All therapy consultations are delivered securely through private online video sessions.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-sand-300/80 shadow-soft-md space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif text-forest-950 font-medium">Send Us a Message</h2>

            {success ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-serif text-forest-900">Message Received</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-forest-900">{formData.fullName}</strong>. We have received your message and will respond within 24 hours.
                </p>
                <Button onClick={() => setSuccess(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                />

                {error && <Alert variant="error">{error}</Alert>}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    required
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Input
                    label="Subject"
                    placeholder="General Inquiry / Session Question"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <Textarea
                  label="Message"
                  required
                  rows={5}
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <Button type="submit" size="lg" isLoading={loading} className="w-full justify-center bg-[#C47C56] hover:bg-[#B26A44] border-[#B26A44]">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Message
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
