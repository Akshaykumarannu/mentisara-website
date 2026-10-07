import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, CheckCircle2, ShieldCheck, Heart, UserCheck, Sparkles, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Person-Centred Psychological Care",
  description: "Learn about Mentisara's person-centred approach, clinical philosophy, and commitment to ethical, compassionate online psychotherapy.",
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
            Grounded in Empathy, Guided by Understanding.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed text-justify max-w-3xl mx-auto">
            Mentisara was established to provide a structured, person-centred therapeutic approach to understanding mental health concerns and supporting individuals through accessible online spaces.
          </p>
        </div>

        {/* SECTION 2: Story & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-serif text-forest-950 font-medium">
              The Mentisara Approach
            </h2>
            <p className="text-slate-700 leading-relaxed text-justify text-base sm:text-lg">
              In a world that often asks us to move faster, emotional well-being deserves space, understanding, and care. At Mentisara, we see psychological concerns not simply as symptoms to be managed, but as experiences that deserve to be understood within the context of your thoughts, emotions, relationships, and life circumstances.
Our approach is person-centred, collaborative, and evidence-informed. We respect your individuality, autonomy, and lived experience while creating a space where you can explore what you are going through at your own pace.
Through personalised psychological support, clinically informed interventions, and practical therapeutic strategies, we work alongside you to develop greater self-understanding, strengthen coping, and navigate life's challenges with greater clarity and resilience.
            </p>
            {/* <p className="text-slate-700 leading-relaxed text-justify text-base sm:text-lg">
             Private & Supportive Online Experience
Your sessions take place in a confidential and professionally maintained online setting, designed to provide a comfortable space for meaningful therapeutic conversations. Your privacy, dignity, and autonomy remain central throughout the counselling process.
            </p> */}

            <div className="p-6 bg-white rounded-3xl border border-sand-300 shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2 text-forest-900 font-semibold">
                <ShieldCheck className="w-5 h-5 text-terracotta-600" />
                <span>Private & Secure Online Environment</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 text-justify leading-relaxed">
                All therapy sessions are held via secure, encrypted video links. Your identity and personal history are protected under strict psychological ethics.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-4xl overflow-hidden shadow-elevated border-4 border-white bg-sand-200 relative group">
              <img
                src="/about-page-counseling-session.jpg"
                alt="Empathetic in-depth psychological counseling dialogue at Mentisara"
                className="w-full h-[450px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent pointer-events-none" />
              {/* <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-sand-300 shadow-soft-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-forest-100 text-forest-900 border border-forest-200 flex items-center justify-center font-serif font-bold text-sm flex-shrink-0">
                  M
                </div>
                <div>
                  <p className="text-xs font-serif font-semibold text-forest-950">Person-Centred & Mindfully Guided</p>
                  <p className="text-[11px] text-slate-600">Private clinical counseling and psychotherapy</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* SECTION 3: What Clients Can Expect
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
              <p className="text-sm text-slate-700 text-justify leading-relaxed">
                Express your feelings freely without fear of judgment, criticism, or unsolicited advice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sand-300 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-serif text-xl font-medium text-forest-950">Practical Coping Tools</h3>
              <p className="text-sm text-slate-700 text-justify leading-relaxed">
                Acquire cognitive reframing techniques, distress tolerance methods, and somatic grounding skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sand-300 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-serif text-xl font-medium text-forest-950">Self-Directed Pacing</h3>
              <p className="text-sm text-slate-700 text-justify leading-relaxed">
                You control the speed and focus of sessions. We adapt our clinical tools to what you need most.
              </p>
            </div>
          </div>
        </div> */}

        {/* SECTION 4: Core Pillars */}
        <div className="space-y-12 mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-serif text-forest-950 font-medium">Our Ethical Pillars</h2>
            <p className="text-slate-700">Core commitments that govern every therapy interaction at Mentisara.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-sand-300 text-center sm:text-left space-y-3">
              <Heart className="w-8 h-8 text-terracotta-600 sm:mx-0 mx-auto" />
              <h3 className="font-serif text-lg text-forest-950 font-medium">Person-Centred Care</h3>
              <p className="text-xs text-slate-600 text-justify leading-relaxed">Respecting each person's individuality, autonomy, values, needs, and lived experience..</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-sand-300 text-center sm:text-left space-y-3">
              <UserCheck className="w-8 h-8 text-forest-700 sm:mx-0 mx-auto" />
              <h3 className="font-serif text-lg text-forest-950 font-medium"> Evidence-Informed Practice</h3>
              <p className="text-xs text-slate-600 text-justify leading-relaxed">Using established psychological knowledge and appropriate therapeutic approaches, while maintaining professional competence and current knowledge..</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-sand-300 text-center sm:text-left space-y-3">
              <Scale className="w-8 h-8 text-terracotta-600 sm:mx-0 mx-auto" />
              <h3 className="font-serif text-lg text-forest-950 font-medium"> Confidentiality & Professional Integrity
</h3>
              <p className="text-xs text-slate-600 text-justify leading-relaxed">Protecting privacy, maintaining appropriate boundaries, obtaining informed consent, and practising honestly and responsibly.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-sand-300 text-center sm:text-left space-y-3">
              <Sparkles className="w-8 h-8 text-forest-700 sm:mx-0 mx-auto" />
              <h3 className="font-serif text-lg text-forest-950 font-medium">Client Wellbeing & Responsible Care</h3>
              <p className="text-xs text-slate-600 text-justify leading-relaxed">Prioritising the client's wellbeing, minimising harm, recognising professional limits, and providing appropriate referral or collaboration when additional support is needed.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#F1F6F3] border border-[#DEE7E1] rounded-3xl p-8 sm:p-12 text-forest-950 text-center space-y-6 shadow-soft-sm">
          <h2 className="text-3xl font-serif font-medium text-forest-950">Begin Your Consultation Process</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base text-justify sm:text-center leading-relaxed">
            Take a confident step toward emotional resilience with Mentisara&apos;s structured online sessions.
          </p>
          <Link href="/book-appointment" className="inline-block pt-2">
            <button className="flex items-center justify-center gap-2.5 bg-[#C47C56] hover:bg-[#B26A44] text-white font-semibold px-8 py-3.5 rounded-full shadow-soft-md transition-all duration-300 hover:-translate-y-0.5 text-base">
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
