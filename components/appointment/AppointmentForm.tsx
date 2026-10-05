"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Alert } from "@/components/ui/Alert";
import { servicesData } from "@/lib/services-data";
import { AppointmentFormData, APIResponse } from "@/types";
import { CheckCircle, ShieldCheck, Clock, Calendar, Lock, Upload, FileText, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const LANGUAGE_OPTIONS = [
  { label: "English", value: "English" },
  { label: "Kannada", value: "Kannada" },
  { label: "Malayalam", value: "Malayalam" },
  { label: "Hindi", value: "Hindi" },
  { label: "Other", value: "Other" },
];

export function AppointmentForm({ preselectedServiceId }: { preselectedServiceId?: string }) {
  const defaultService = preselectedServiceId || servicesData[0].id;

  const [formData, setFormData] = useState<AppointmentFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    preferredLanguage: "English",
    preferredLanguageOther: "",
    idProofFileName: "",
    preferredService: defaultService,
    preferredDate: "",
    preferredTimeSlot: "Morning (9 AM - 12 PM)",
    sessionMode: "Online",
    primaryConcern: "",
    additionalNotes: "",
    consentAgreed: false,
    honeypot: "",
  });

  const [idFile, setIdFile] = useState<File | null>(null);
  const [idFileBase64, setIdFileBase64] = useState<string | null>(null);
  const [idFileError, setIdFileError] = useState<string | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  // File upload handler for ID Proof (Optional)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdFileError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type: PDF, JPG, PNG
    const validMimes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    if (!validMimes.includes(file.type)) {
      setIdFileError("Please upload a PDF, JPG, or PNG document.");
      return;
    }

    // Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      setIdFileError("File size exceeds 5MB limit. Please upload a smaller file.");
      return;
    }

    setIdFile(file);
    setFormData((prev) => ({ ...prev, idProofFileName: file.name }));

    // Read safely as base64 for secure transmission (no public storage)
    const reader = new FileReader();
    reader.onload = () => {
      setIdFileBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeIdFile = () => {
    setIdFile(null);
    setIdFileBase64(null);
    setIdFileError(null);
    setFormData((prev) => ({ ...prev, idProofFileName: "" }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.firstName.trim()) errs.firstName = "First name is required.";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 8) {
      errs.phone = "Please enter a valid phone number (min 8 digits).";
    }

    // MANDATORY AGE VALIDATION (Requirement 18)
    if (!formData.age.trim()) {
      errs.age = "Age is required.";
    } else {
      const ageNum = parseInt(formData.age.trim(), 10);
      if (isNaN(ageNum) || ageNum < 10 || ageNum > 120) {
        errs.age = "Please enter a valid age (e.g. 18 - 99).";
      }
    }

    // LANGUAGE VALIDATION (Requirement 20)
    if (!formData.preferredLanguage) {
      errs.preferredLanguage = "Please select your preferred language.";
    } else if (formData.preferredLanguage === "Other" && !formData.preferredLanguageOther?.trim()) {
      errs.preferredLanguageOther = "Please specify your preferred language.";
    }

    if (!formData.primaryConcern.trim()) {
      errs.primaryConcern = "Please briefly describe what area you would like support with.";
    }
    if (!formData.consentAgreed) {
      errs.consent = "You must agree to the privacy & confidentiality consent statement.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    trackEvent("submit_start", "AppointmentForm", formData.preferredService);

    const payload: AppointmentFormData = {
      ...formData,
      idProofBase64: idFileBase64 || undefined,
    };

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result: APIResponse<{ applicationId?: string }> = await res.json();

      if (res.ok && result.success) {
        setSubmitSuccess(true);
        setApplicationId(result.data?.applicationId || "MTS-PENDING");
        trackEvent("submit_success", "AppointmentForm", formData.preferredService);
      } else {
        setApiError(result.message || "Unable to submit your application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setApiError("Network error submitting application. Please try contacting us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-sand-300 shadow-soft-md text-center max-w-2xl mx-auto animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl md:text-3xl font-serif text-forest-950 mb-3">
          Application Received
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Thank you, <strong className="text-forest-900">{formData.firstName}</strong>. Your request for an initial psychological consultation has been safely received. Our intake team will contact you via email or WhatsApp to confirm your appointment time.
        </p>

        {applicationId && (
          <div className="inline-block bg-sand-100 px-4 py-2 rounded-xl text-xs font-mono text-forest-900 mb-8 border border-sand-300">
            Reference ID: {applicationId}
          </div>
        )}

        <div className="bg-[#FAF7F2] rounded-2xl p-6 text-left border border-sand-200 mb-8 space-y-3">
          <h4 className="font-serif text-base text-forest-900 font-semibold flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C47C56]" />
            What Happens Next?
          </h4>
          <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1.5">
            <li>Our clinical intake team reviews your application details (typically within 24 hours).</li>
            <li>We connect with you to confirm your schedule and provide confidential video session access.</li>
            <li>Session details and guidance are shared securely before the consultation.</li>
          </ol>
        </div>

        <Button
          onClick={() => {
            setSubmitSuccess(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              age: "",
              preferredLanguage: "English",
              preferredLanguageOther: "",
              idProofFileName: "",
              preferredService: defaultService,
              preferredDate: "",
              preferredTimeSlot: "Morning (9 AM - 12 PM)",
              sessionMode: "Online",
              primaryConcern: "",
              additionalNotes: "",
              consentAgreed: false,
              honeypot: "",
            });
            setIdFile(null);
            setIdFileBase64(null);
          }}
          variant="outline"
          className="border-sand-300 hover:bg-sand-100"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  const serviceOptions = servicesData.map((s) => ({
    label: s.title,
    value: s.id,
  }));

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-sand-300/80 shadow-soft-md space-y-8">
      {/* Honeypot Anti-Spam Hidden Field */}
      <input
        type="text"
        name="website_honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="border-b border-sand-200 pb-4">
        <h3 className="text-xl md:text-2xl font-serif text-forest-950 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#C47C56]" />
          Appointment Application Form
        </h3>
        <p className="text-slate-600 text-xs md:text-sm mt-1">
          Please fill out the intake details below. All information is strictly confidential.
        </p>
      </div>

      {apiError && (
        <Alert variant="error" title="Submission Issue">
          {apiError}
        </Alert>
      )}

      {/* SECTION 1: Personal Details */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-forest-800 border-l-2 border-forest-600 pl-3">
          1. Contact Information
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="First Name"
            placeholder="Jane"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            placeholder="Doe"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            error={errors.lastName}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <Input
              label="Email Address"
              type="email"
              placeholder="jane.doe@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              helperText="We will send session confirmation details here."
            />
          </div>
          {/* MANDATORY AGE FIELD (Requirement 18) */}
          <Input
            label="Age *"
            type="number"
            placeholder="28"
            required
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            error={errors.age}
            helperText="Required for intake assessment."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Phone Number / WhatsApp"
            type="tel"
            placeholder="+91 98765 43210"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={errors.phone}
            helperText="Include country code if outside India."
          />

          {/* PREFERRED LANGUAGE FIELD (Requirement 20) */}
          <div className="space-y-1.5">
            <Select
              label="Preferred Language *"
              options={LANGUAGE_OPTIONS}
              value={formData.preferredLanguage}
              onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
              error={errors.preferredLanguage}
            />
            {formData.preferredLanguage === "Other" && (
              <div className="pt-2">
                <Input
                  label="Please specify your preferred language *"
                  placeholder="e.g., Tamil, Telugu, Marathi"
                  value={formData.preferredLanguageOther || ""}
                  onChange={(e) => setFormData({ ...formData, preferredLanguageOther: e.target.value })}
                  error={errors.preferredLanguageOther}
                />
              </div>
            )}
          </div>
        </div>

        {/* ID PROOF (OPTIONAL) (Requirement 19) */}
        <div className="pt-2 space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-forest-900">
            ID Proof (Optional)
          </label>
          <p className="text-xs text-slate-500">
            Optional identity verification. Accepted formats: PDF, JPG, PNG (Max 5MB). Handled strictly under psychological confidentiality standards.
          </p>

          {!idFile ? (
            <div className="relative border-2 border-dashed border-sand-300 hover:border-forest-300 rounded-2xl p-5 text-center transition-colors bg-sand-50/50">
              <input
                type="file"
                id="idProofFile"
                accept=".pdf,image/jpeg,image/jpg,image/png"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                <Upload className="w-5 h-5 text-forest-700" />
                <span className="text-xs font-medium text-forest-900">
                  Click or drag file here to attach an optional ID proof
                </span>
                <span className="text-[11px] text-slate-400">PDF, JPG, or PNG up to 5MB</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3.5 bg-forest-50 border border-forest-200 rounded-xl">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-forest-800 shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-forest-950 truncate max-w-xs">{idFile.name}</p>
                  <p className="text-slate-500">{(idFile.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeIdFile}
                className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-white transition-colors"
                aria-label="Remove uploaded file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {idFileError && (
            <p className="text-xs text-red-600 font-medium">{idFileError}</p>
          )}
        </div>
      </div>

      {/* SECTION 2: Service Preference */}
      <div className="space-y-4 pt-4 border-t border-sand-200">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-forest-800 border-l-2 border-forest-600 pl-3">
          2. Service & Scheduling Preferences
        </h4>

        <Select
          label="Preferred Psychological Service"
          required
          options={serviceOptions}
          value={formData.preferredService}
          onChange={(e) => setFormData({ ...formData, preferredService: e.target.value })}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Select
            label="Session Mode"
            options={[
              { label: "Online Session (Video Call)", value: "Online" },
              { label: "In-Person Consultation (Kerala)", value: "In-Person (Kerala)" },
            ]}
            value={formData.sessionMode}
            onChange={(e) => setFormData({ ...formData, sessionMode: e.target.value as 'Online' | 'In-Person (Kerala)' })}
          />

          <Input
            label="Preferred Date"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            helperText="Subject to availability."
          />

          <Select
            label="Preferred Time Window"
            options={[
              { label: "Morning (9 AM - 12 PM)", value: "Morning (9 AM - 12 PM)" },
              { label: "Afternoon (12 PM - 4 PM)", value: "Afternoon (12 PM - 4 PM)" },
              { label: "Evening (4 PM - 7 PM)", value: "Evening (4 PM - 7 PM)" },
            ]}
            value={formData.preferredTimeSlot}
            onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
          />
        </div>
      </div>

      {/* SECTION 3: Clinical Support Focus */}
      <div className="space-y-4 pt-4 border-t border-sand-200">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-forest-800 border-l-2 border-forest-600 pl-3">
          3. Tell Us What You Would Like Support With
        </h4>

        <Textarea
          label="Primary Area of Focus / Concern"
          required
          rows={4}
          placeholder="Briefly describe what challenges or emotional concerns you would like to address (e.g. managing anxiety, coping with stress, relationship difficulties, emotional regulation)..."
          value={formData.primaryConcern}
          onChange={(e) => setFormData({ ...formData, primaryConcern: e.target.value })}
          error={errors.primaryConcern}
        />

        <Textarea
          label="Additional Notes or Questions (Optional)"
          rows={2}
          placeholder="Any specific requests, previous therapy experience, or scheduling constraints..."
          value={formData.additionalNotes}
          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
        />
      </div>

      {/* Consent Checkbox & Privacy */}
      <div className="pt-4 border-t border-sand-200 space-y-4">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consentAgreed"
            checked={formData.consentAgreed}
            onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-sand-300 text-forest-800 focus:ring-forest-600"
          />
          <label htmlFor="consentAgreed" className="text-xs md:text-sm text-slate-700 leading-normal">
            I understand that Mentisara provides structured, person-centred psychological services. I consent to having Mentisara process my contact details confidentially for scheduling purposes. <span className="text-[#C47C56] font-bold">*</span>
          </label>
        </div>
        {errors.consent && <p className="text-xs text-red-600 font-medium">{errors.consent}</p>}

        <div className="flex items-center gap-2 text-xs text-slate-500 bg-[#FAF7F2] p-3 rounded-xl border border-sand-200">
          <Lock className="w-4 h-4 text-forest-700 shrink-0" />
          <span>Your information is encrypted and never shared with third parties.</span>
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          className="w-full justify-center shadow-soft-md bg-[#C47C56] hover:bg-[#B26A44] border-[#B26A44]"
          isLoading={isSubmitting}
        >
          <ShieldCheck className="w-5 h-5 mr-2" />
          Submit Appointment Application
        </Button>
      </div>
    </form>
  );
}
