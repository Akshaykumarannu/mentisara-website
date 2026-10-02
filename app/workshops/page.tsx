import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { workshopsData } from "@/lib/workshops-data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Calendar, Clock, Laptop, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Workshops & Group Programs | Emotional Grounding & CBT Skills",
  description: "Explore upcoming interactive online workshops by Mentisara focusing on emotional regulation, stress management, and CBT techniques.",
};

export default function WorkshopsPage() {
  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ label: "Workshops" }]} />

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="primary">Group Psychoeducation</Badge>
          <h1 className="text-4xl sm:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Workshops & Group Programs
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Interactive, skill-focused online workshops designed to build practical emotional regulation tools, cognitive reframing habits, and personal resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {workshopsData.map((workshop) => (
            <Card key={workshop.id} className="border-sand-300 flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="accent">{workshop.status}</Badge>
                    <span className="text-xs font-semibold text-forest-800 bg-sand-100 px-3 py-1 rounded-full border border-sand-300">
                      {workshop.mode}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{workshop.title}</CardTitle>
                  <p className="text-xs text-terracotta-700 font-medium mt-1">{workshop.tagline}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-700 text-sm leading-relaxed">{workshop.description}</p>

                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 bg-ivory-soft p-4 rounded-2xl border border-sand-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>{workshop.capacity}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                      Workshop Topics Covered:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {workshop.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>

              <CardFooter className="pt-6 border-t border-sand-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Registration Fee</span>
                  <span className="text-base font-bold text-forest-950">{workshop.fee}</span>
                </div>
                <Link href={`/book-appointment?service=workshop-${workshop.slug}`}>
                  <Button variant="primary" size="md">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
