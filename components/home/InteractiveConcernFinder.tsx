"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, BrainCircuit, Compass } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface ConcernCategory {
  id: string;
  label: string;
  emoji: string;
  title: string;
  subtitle: string;
  recommendedService: string;
  serviceSlug: string;
  serviceId: string;
  whatYouWillLearn: string[];
  sessionOutcome: string;
  gradient: string;
}

export function InteractiveConcernFinder() {
  const concerns: ConcernCategory[] = [
    {
      id: "anxiety",
      label: "Overthinking & Anxiety",
      emoji: "💭",
      title: "Untangling Worry Loops & Panic Sensations",
      subtitle: "When racing thoughts, chronic worry, or physical anxiety overwhelm your daily peace.",
      recommendedService: "Cognitive Behavioural Therapy (CBT)",
      serviceSlug: "cognitive-behavioural-therapy",
      serviceId: "cognitive-behavioural-therapy",
      whatYouWillLearn: [
        "Spotting and challenging automatic catastrophizing thoughts",
        "Somatic breathing techniques to calm rapid heartbeat & chest tightness",
        "Gradual desensitization for social & performance anxiety",
        "Building a personalized daily anxiety toolkit"
      ],
      sessionOutcome: "Regain cognitive clarity and feel in control of your nervous system.",
      gradient: "from-forest-800 to-forest-950",
    },
    {
      id: "burnout",
      label: "Work Stress & Burnout",
      emoji: "🔋",
      title: "Restoring Emotional Energy & Clear Boundaries",
      subtitle: "When demands exceed your reserves, leading to cynicism, exhaustion, and detachment.",
      recommendedService: "Emotional Regulation & Resilience Training",
      serviceSlug: "emotional-regulation-resilience",
      serviceId: "emotional-regulation-resilience",
      whatYouWillLearn: [
        "Identifying early somatic warning signals of nervous system exhaustion",
        "Assertive communication and non-negotiable personal boundaries",
        "Restorative recovery protocols that go beyond superficial self-care",
        "Aligning career output with mental health preservation"
      ],
      sessionOutcome: "Establish sustainable boundaries without guilt and prevent relapse into burnout.",
      gradient: "from-terracotta-700 to-terracotta-900",
    },
    {
      id: "emotional-overwhelm",
      label: "Emotional Overwhelm",
      emoji: "🌊",
      title: "Navigating High-Intensity Waves & Mood Swings",
      subtitle: "When feelings arrive with sudden intensity and you find it hard to regain your center.",
      recommendedService: "Emotional Regulation & Resilience Training",
      serviceSlug: "emotional-regulation-resilience",
      serviceId: "emotional-regulation-resilience",
      whatYouWillLearn: [
        "Distress tolerance skills during acute anger, grief, or overwhelm",
        "5-4-3-2-1 Somatic grounding techniques for real-time de-escalation",
        "Mindful self-compassion to soften harsh internal criticism",
        "Creating an emergency emotional safety plan"
      ],
      sessionOutcome: "Develop a strong internal anchor that holds steady during emotional storms.",
      gradient: "from-sage-800 to-forest-900",
    },
    {
      id: "transitions",
      label: "Life Transitions & Relationships",
      emoji: "🌱",
      title: "Finding Direction in Changes & Relationship Dynamics",
      subtitle: "Coping with career shifts, breakups, loss, relocate adjustments, or identity questions.",
      recommendedService: "Individual Psychotherapy",
      serviceSlug: "individual-psychotherapy",
      serviceId: "individual-psychotherapy",
      whatYouWillLearn: [
        "Unpacking unresolved emotional baggage and recurring relationship patterns",
        "Clarifying personal core values during uncertain life chapters",
        "Processing grief and adjustment challenges in a safe space",
        "Strengthening self-trust and decision-making confidence"
      ],
      sessionOutcome: "Gain deep self-awareness and step forward with grounded confidence.",
      gradient: "from-forest-900 to-forest-950",
    },
  ];

  const [activeConcern, setActiveConcern] = useState<ConcernCategory>(concerns[0]);

  const handleSelect = (concern: ConcernCategory) => {
    setActiveConcern(concern);
    trackEvent("concern_filter_click", "InteractiveConcernFinder", concern.id);
  };

  return (
    <section className="py-20 md:py-28 bg-mesh-sage relative overflow-hidden border-y border-sand-300/80">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="primary" className="bg-forest-100 text-forest-800 border-forest-300 shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-forest-700 inline" />
            Interactive Therapy Navigator
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            What Brings You to Mentisara Today?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Select what you are currently experiencing to preview how our person-centred approach tailors support to your situation.
          </p>
        </div>

        {/* Interactive Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-10 max-w-4xl mx-auto">
          {concerns.map((item) => {
            const isSelected = activeConcern.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`interactive-chip px-5 py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-soft-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                  isSelected
                    ? "bg-forest-800 text-white shadow-soft-md scale-[1.03] border-2 border-forest-700 ring-2 ring-forest-500/20"
                    : "bg-white/90 text-forest-900 border border-sand-300 hover:bg-sand-100 hover:border-forest-400"
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Card */}
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-4xl p-6 sm:p-10 border border-sand-300/90 shadow-elevated transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Overview & Recommended Route */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-sand-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-forest-900 border border-sand-300">
                <BrainCircuit className="w-4 h-4 text-terracotta-600" />
                <span>Recommended Approach: {activeConcern.recommendedService}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-forest-950 font-medium leading-tight">
                {activeConcern.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeConcern.subtitle}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-forest-900">
                  What we work on together in sessions:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {activeConcern.whatYouWillLearn.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col: Session Box & Action */}
            <div className="lg:col-span-5 bg-gradient-to-br from-sand-100 to-ivory p-6 sm:p-7 rounded-3xl border border-sand-300 space-y-5 flex flex-col justify-between h-full shadow-soft-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-sand-200">
                  <span className="text-xs font-semibold text-forest-800 uppercase tracking-wider">Session Format</span>
                  <span className="text-xs bg-forest-100 text-forest-900 font-bold px-2.5 py-1 rounded-full">1-on-1 Online</span>
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-forest-900">Expected Session Outcome:</p>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed bg-white/70 p-3 rounded-xl border border-sand-200">
                    &ldquo;{activeConcern.sessionOutcome}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Confidential, private video consultation</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link href={`/book-appointment?service=${activeConcern.serviceId}`} className="w-full block">
                  <Button size="md" className="w-full justify-center shadow-soft-md">
                    Book for {activeConcern.label}
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
                <Link href={`/services/${activeConcern.serviceSlug}`} className="w-full block">
                  <Button variant="ghost" size="sm" className="w-full justify-center text-xs">
                    Learn more about {activeConcern.recommendedService}
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
