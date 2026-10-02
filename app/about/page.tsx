import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, CheckCircle2, ShieldCheck, Heart, UserCheck, Sparkles, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Person-Centred Psychological Care",
  description: "Learn about Mentisara's person-centred approach, clinical philosophy, and commitment to confidential, evidence-informed online psychotherapy.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "About Mentisara" }]} />

        {/* HERO */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <Badge variant="primary">Our Story & Practice</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-forest-950 font-medium tracking-tight">
            Grounded in Empathy, Guided by Evidence.
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
            Mentisara was established to provide a structured, person-centred therapeutic approach to understanding mental health concerns and supporting individuals through accessible online spaces.
          </p>
        </div>

        {/* SECTION 2: Story & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-serif text-forest-950 font-medium">
              The Mentisara Approach
            </h2>
            <p className="text-slate-700 leading-relaxed">
              In a fast-paced world, emotional distress is often reduced to symptoms to be suppressed. At Mentisara, we take a different perspective. We understand that psychological challenges—whether anxiety, mood fluctuations, or relational stress—are meaningful signals of an individual&apos;s internal experience.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our person-centred framework respects your autonomy and lived experience. We walk alongside you as collaborative partners, offering psychological insights, cognitive tools, and non-judgmental support so you can reclaim emotional balance.
            </p>

            <div className="p-6 bg-white rounded-3xl border border-sand-300 shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2 text-forest-900 font-semibold">
                <ShieldCheck className="w-5 h-5 text-terracotta-600" />
                <span>Confidential Online Environment</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                All therapy sessions are held via secure, encrypted video links. Your identity and personal history are protected under strict psychological ethics.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-4xl overflow-hidden shadow-elevated border-4 border-white bg-sand-200">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                alt="Safe therapeutic conversation space"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: What Clients Can Expect */}
        <div className="bg-sand-100/70 rounded-4xl p-8 sm:p-12 border border-sand-300 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <Badge variant="secondary">Client Experience</Badge>
            <h2 className="text-3xl font-serif text-forest-950 font-medium">
              What You Can Expect in Therapy
            </h2>
            <p className="text-slate-700">
              We strive to make therapy predictable, safe, and transparent from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-sand-300 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-serif text-xl font-medium text-forest-950">A Safe Sounding Board</h3>
              <p className="text-sm text-slate-700">
                Express your feelings freely without fear of judgment, criticism, or unsolicited advice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sand-300 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-medium text-forest-950">Practical Coping Tools</h3>
              <p className="text-sm text-slate-700">
                Acquire cognitive reframing techniques, distress tolerance methods, and somatic grounding skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sand-300 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-medium text-forest-950">Self-Directed Pacing</h3>
              <p className="text-sm text-slate-700">
                You control the speed and focus of sessions. We adapt our clinical tools to what you need most.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: Core Pillars */}
        <div className="space-y-12 mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-serif text-forest-950 font-medium">Our Ethical Pillars</h2>
            <p className="text-slate-700">Core commitments that govern every therapy interaction at Mentisara.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-sand-300 text-center space-y-3">
              <Heart className="w-8 h-8 text-terracotta-600 mx-auto" />
              <h3 className="font-serif text-lg text-forest-950 font-medium">Person-Centred</h3>
              <p className="text-xs text-slate-600">Tailoring psychological support around your values, culture, and goals.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-sand-300 text-center space-y-3">
              <UserCheck className="w-8 h-8 text-forest-700 mx-auto" />
              <h3 className="font-serif text-lg text-forest-950 font-medium">Scientific Rigor</h3>
              <p className="text-xs text-slate-600">Grounded in validated CBT and clinical emotional regulation practices.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-sand-300 text-center space-y-3">
              <Scale className="w-8 h-8 text-terracotta-600 mx-auto" />
              <h3 className="font-serif text-lg text-forest-950 font-medium">Ethical Practice</h3>
              <p className="text-xs text-slate-600">Honoring strict client confidentiality and transparent communication.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-sand-300 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-forest-700 mx-auto" />
              <h3 className="font-serif text-lg text-forest-950 font-medium">Continuous Care</h3>
              <p className="text-xs text-slate-600">Empowering long-term psychological resilience beyond session hours.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#050A06] border border-white/10 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl font-serif font-medium text-white">Begin Your Consultation Process</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base font-light">
            Take a confident step toward emotional resilience with Mentisara&apos;s structured online sessions.
          </p>
          <Link href="/book-appointment" className="inline-block pt-2">
            <button className="flex items-center justify-center gap-2.5 bg-[#FAF8F4] hover:bg-white text-[#0A0F0B] font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-base border border-sand-200">
              <Calendar className="w-5 h-5 text-[#D4956A]" />
              <span className="text-[#0A0F0B] font-bold">Book an Appointment</span>
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
