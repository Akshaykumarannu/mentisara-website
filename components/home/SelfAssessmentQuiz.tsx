"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight, RotateCcw, Heart, CheckCircle2, ShieldCheck } from "lucide-react";

export function SelfAssessmentQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      step: 1,
      title: "How has your emotional energy felt lately?",
      options: [
        { label: "Frequently overwhelmed or anxious", value: "anxious" },
        { label: "Emotionally drained or burned out", value: "burnout" },
        { label: "Stuck in repetitive negative thoughts", value: "thoughts" },
        { label: "Navigating a difficult change or loss", value: "transition" },
      ],
    },
    {
      step: 2,
      title: "What therapeutic style feels most comfortable for you?",
      options: [
        { label: "A gentle, non-judgmental space to share & process", value: "person_centred" },
        { label: "Structured, goal-focused practical tools (CBT)", value: "cbt" },
        { label: "Real-time nervous system grounding & somatic skills", value: "grounding" },
        { label: "I am open to therapist guidance on what works best", value: "open" },
      ],
    },
  ];

  const handleSelect = (val: string) => {
    setAnswers({ ...answers, [step]: val });
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(3); // Result step
    }
  };

  const reset = () => {
    setStep(1);
    setAnswers({});
  };

  return (
    <section className="py-20 bg-ivory relative overflow-hidden border-b border-sand-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-white via-sand-50 to-ivory-soft rounded-4xl p-6 sm:p-10 md:p-12 border border-sand-300 shadow-elevated relative">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <Badge variant="primary" className="bg-forest-100 text-forest-800 border-forest-300">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 inline text-forest-700" />
              1-Minute Emotional Check-In
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-forest-950 font-medium">
              Not Sure Which Therapy Approach You Need?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Answer 2 simple questions to receive an instant, non-judgmental care suggestion.
            </p>
          </div>

          {/* Quiz Steps */}
          {step <= 2 ? (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Step {step} of 2</span>
                <span>{step === 1 ? "50% Complete" : "Almost Done"}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-sand-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest-700 transition-all duration-300 rounded-full"
                  style={{ width: `${step * 50}%` }}
                />
              </div>

              <h3 className="text-lg sm:text-xl font-serif text-forest-950 font-medium pt-2">
                {questions[step - 1].title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {questions[step - 1].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(opt.value)}
                    className="p-4 rounded-2xl bg-white border border-sand-300/90 hover:border-forest-600 hover:bg-forest-50/50 text-left text-xs sm:text-sm font-medium text-forest-950 transition-all duration-200 shadow-soft-sm hover:shadow-soft-md focus:outline-none focus:ring-2 focus:ring-forest-600"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Step */
            <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="w-12 h-12 bg-forest-100 text-forest-800 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-forest-700" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-terracotta-600">
                  Personalized Suggestion
                </span>
                <h3 className="text-2xl font-serif text-forest-950 font-semibold">
                  Individual Psychotherapy & Person-Centred Care
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed max-w-lg mx-auto">
                  Based on your reflection, starting with a collaborative 1-on-1 consultation will give you a safe, unhurried space to explore your feelings and build tailored coping tools.
                </p>
              </div>

              <div className="bg-sand-100/70 p-4 rounded-2xl border border-sand-300 flex items-center justify-center gap-2 text-xs text-forest-900 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No pressure, no diagnosis labels — strictly confidential online support</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link href="/book-appointment?service=individual-psychotherapy" className="w-full sm:w-auto">
                  <Button size="md" className="w-full sm:w-auto shadow-soft-md">
                    Book Your Initial Consultation
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-forest-900 font-medium py-2 px-4"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
