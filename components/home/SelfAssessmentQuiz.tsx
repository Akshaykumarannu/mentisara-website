"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, RotateCcw, Heart, ShieldCheck } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface Question {
  step: number;
  title: string;
  options: Option[];
}

export function SelfAssessmentQuiz() {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions: Question[] = [
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
    const updated = { ...answers, [step]: val };
    setAnswers(updated);
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

  const getRecommendation = () => {
    const s1 = answers[1];
    const s2 = answers[2];

    if (s2 === "cbt" || s1 === "thoughts") {
      return {
        title: "Cognitive Behavioural Therapy (CBT)",
        slug: "cognitive-behavioural-therapy",
        id: "cognitive-behavioural-therapy",
        desc: "A structured, goal-oriented approach designed to identify, understand, and reframe unhelpful cognitive patterns while building actionable coping strategies.",
      };
    }
    if (s2 === "grounding" || s1 === "burnout") {
      return {
        title: "Emotional Regulation & Resilience Training",
        slug: "emotional-regulation-resilience",
        id: "emotional-regulation-resilience",
        desc: "Targeted somatic and distress-tolerance techniques designed to expand your emotional window, reduce physical overwhelm, and restore internal calm.",
      };
    }
    return {
      title: "Individual Psychotherapy & Person-Centred Care",
      slug: "individual-psychotherapy",
      id: "individual-psychotherapy",
      desc: "A safe, unhurried space tailored around your lived experience to help you unpack difficult emotions, gain clarity, and foster lasting self-compassion.",
    };
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-20 md:py-28 bg-[#EBF3EE] relative overflow-hidden border-b border-[#CADCD0]">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D8EADB]/50 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F8E8DA]/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial Container Card */}
        <div className="bg-[#FAF8F5] rounded-3xl sm:rounded-4xl p-7 sm:p-11 md:p-14 border border-[#DFD6CA] shadow-soft-md relative">

          {/* Section Badge & Title */}
          <div className="text-center space-y-3.5 mb-9">
            <div className="inline-flex items-center gap-1.5 bg-[#DCECE1] text-forest-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#BED9C6] shadow-soft-sm">
              <Sparkles className="w-3.5 h-3.5 text-forest-700" />
              <span>1-MINUTE EMOTIONAL CHECK-IN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-forest-950 font-medium tracking-tight leading-tight">
              Not Sure Which Therapy Approach You Need?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Answer 2 simple questions to receive an instant, non-judgmental care suggestion.
            </p>
          </div>

          {/* Interactive Steps 1 & 2 */}
          {step <= 2 ? (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>STEP {step} OF 2</span>
                <span>{step === 1 ? "50% COMPLETE" : "ALMOST DONE"}</span>
              </div>

              {/* Smooth Progress Bar */}
              <div className="w-full h-2 bg-[#E5DDD2] rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest-800 transition-all duration-300 rounded-full"
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
                    className="p-4 rounded-2xl bg-white border border-[#DCD3C7] hover:border-forest-600 hover:bg-[#F2ECE3] text-left text-xs sm:text-sm font-medium text-forest-950 transition-all duration-200 shadow-soft-sm hover:shadow-soft-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-forest-600 cursor-pointer"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Step */
            <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="w-14 h-14 bg-[#DCECE1] text-forest-950 rounded-full flex items-center justify-center mx-auto border border-[#BED9C6] shadow-soft-sm">
                <Heart className="w-7 h-7 text-forest-800" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#BD7854]">
                  Personalized Suggestion
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-forest-950 font-semibold leading-snug">
                  {recommendation.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed max-w-lg mx-auto">
                  {recommendation.desc}
                </p>
              </div>

              <div className="bg-[#F0EAE1] p-4 rounded-2xl border border-[#DFD6CA] flex items-center justify-center gap-2.5 text-xs text-forest-950 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#BD7854] shrink-0" />
                <span>No pressure, no diagnostic labels — private, person-centred online support</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href={`/book-appointment?service=${recommendation.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-900 hover:bg-forest-950 text-white font-semibold px-6 py-3 rounded-2xl shadow-soft-sm transition-all hover:-translate-y-0.5 text-sm"
                >
                  <span>Book Your Initial Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-600 hover:text-forest-950 font-medium py-2.5 px-4 rounded-xl hover:bg-[#EDE5DA] transition-colors cursor-pointer"
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
