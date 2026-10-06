"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { FileText, Headphones, Shield, Sparkles, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface StepItem {
  id: number;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyAction: string;
  icon: React.ReactNode;
  highlightPoints: string[];
}

export function TherapyJourneyInteractive() {
  const steps: StepItem[] = [
    {
      id: 1,
      num: "01",
      title: "Seamless Application Intake",
      shortDesc: "Submit your intake request in under 2 minutes.",
      fullDesc: "Complete our secure intake form sharing your preferred contact mode, scheduling window, and the primary areas you would like support with. No sensitive history required upfront.",
      keyAction: "Simple, private online form with zero spam.",
      icon: <FileText className="w-6 h-6 text-forest-800" />,
      highlightPoints: [
        "Safe & ethical submission process",
        "Choose your preferred therapy style",
        "Specify convenient morning/evening slots"
      ]
    },
    {
      id: 2,
      num: "02",
      title: "Intake Alignment & Confirmation",
      shortDesc: "Our clinical coordinator connects within 24 hours.",
      fullDesc: "We review your preferences, discuss session expectations, answer your logistical questions, and confirm a dedicated time slot for your initial video consultation.",
      keyAction: "Clear guidance and direct coordination via email or WhatsApp.",
      icon: <Headphones className="w-6 h-6 text-terracotta-600" />,
      highlightPoints: [
        "Transparent fee details & session format",
        "No automated robot responses",
        "Direct connection to your practitioner"
      ]
    },
    {
      id: 3,
      num: "03",
      title: "Your 1-on-1 Online Therapy Session",
      shortDesc: "Empathetic, structured video sessions in privacy.",
      fullDesc: "Join via a secure, encrypted video link from the comfort of your room. We listen deeply to understand your unique life context and collaborate on meaningful psychological goals.",
      keyAction: "Person-centred pacing with proven CBT & regulation tools.",
      icon: <Shield className="w-6 h-6 text-forest-800" />,
      highlightPoints: [
        "Safe, non-judgmental conversational atmosphere",
        "Thoughtful & tailored psychological tools",
        "You always dictate the pace of sharing"
      ]
    },
    {
      id: 4,
      num: "04",
      title: "Long-Term Clarity & Inner Resilience",
      shortDesc: "Acquire tools that support you beyond therapy hours.",
      fullDesc: "Through collaborative practice, you develop practical emotional regulation strategies, challenge cognitive distortions, and cultivate enduring self-trust for daily challenges.",
      keyAction: "Sustainable emotional resilience and personal autonomy.",
      icon: <Sparkles className="w-6 h-6 text-terracotta-600" />,
      highlightPoints: [
        "Personalized distress tolerance roadmap",
        "Somatic grounding exercises you can use anywhere",
        "Reclaim confidence in your decisions and life direction"
      ]
    }
  ];

  const [activeStep, setActiveStep] = useState<StepItem>(steps[0]);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-sand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="secondary">Step-by-Step Care Roadmap</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            How Your Therapy Journey Unfolds
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We make every phase of therapy clear, transparent, and comforting from your very first click.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-10">
          {steps.map((s) => {
            const isActive = activeStep.id === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStep(s)}
                className={`p-5 rounded-3xl text-left transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                  isActive
                    ? "bg-forest-900 text-white shadow-soft-md border-forest-800 scale-[1.02]"
                    : "bg-sand-50/80 text-forest-950 border-sand-300 hover:bg-sand-100 hover:border-forest-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                    isActive ? "bg-forest-800 text-sand-100" : "bg-sand-200 text-forest-800"
                  }`}>
                    Step {s.num}
                  </span>
                  <div className={`p-2 rounded-xl ${isActive ? "bg-forest-800 text-sand-200" : "bg-white text-forest-800 border border-sand-300"}`}>
                    {s.icon}
                  </div>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-medium leading-snug">
                  {s.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="bg-mesh-sage rounded-4xl p-6 sm:p-10 border border-sand-300/80 shadow-soft-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/90 px-3.5 py-1 rounded-full text-xs font-semibold text-forest-900 border border-sand-300 shadow-soft-sm">
                <span>Phase {activeStep.num} Overview</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif text-forest-950 font-medium">
                {activeStep.title}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed">
                {activeStep.fullDesc}
              </p>

              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-forest-900 mb-2">
                  Key Highlights:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {activeStep.highlightPoints.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-sand-200">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-sand-300 shadow-soft-sm space-y-5 text-center flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Focus & Goal</span>
                <p className="font-serif text-lg text-forest-950 font-medium">
                  {activeStep.keyAction}
                </p>
              </div>

              <div className="pt-4 border-t border-sand-200">
                <Link href="/book-appointment" className="w-full block">
                  <Button size="md" className="w-full justify-center shadow-soft-sm">
                    Start at Step 01
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
