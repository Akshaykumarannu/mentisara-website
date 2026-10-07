import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Check, X, Sparkles, Home, Shield, Clock, HeartHandshake } from "lucide-react";

export function OnlineVsTraditional() {
  const comparisonRows = [
    {
      feature: "Environment & Privacy",
      traditional: "Public waiting rooms, commute stress & clinic parking",
      mentisara: "100% private, comfortable session from your own quiet space",
    },
    {
      feature: "Scheduling Flexibility",
      traditional: "Rigid office hours requiring work leaves or travel",
      mentisara: "Flexible morning, afternoon & evening video slots",
    },
    {
      feature: "Therapeutic Approach",
      traditional: "Often rushed, medicalized symptom checklists",
      mentisara: "Structured, person-centred & empathetic listening",
    },
    {
      feature: "Geographical Reach",
      traditional: "Restricted to physical location in your city",
      mentisara: "Accessible across Kerala (inside and outside) online",
    },
    {
      feature: "Direct Communication",
      traditional: "Front desk receptionists and phone hold times",
      mentisara: "Direct, prompt intake coordinator & WhatsApp access",
    },
  ];

  return (
    <section className="py-20 bg-sand-50/70 border-b border-sand-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="secondary">Therapy That Fits Your Life</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest-950 font-medium tracking-tight">
            Why Online Therapy with Mentisara?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Eliminate commute friction and stigma. Experience professional psychological care in the safety of your personal space.
          </p>
        </div>

        {/* Visual Comparison Grid */}
        <div className="max-w-4xl mx-auto bg-white rounded-4xl border border-sand-300 shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Traditional Column */}
            <div className="p-6 sm:p-8 bg-sand-100/40 border-b md:border-b-0 md:border-r border-sand-200 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sand-200 text-slate-600 flex items-center justify-center">
                  <X className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-slate-800">Traditional In-Clinic Therapy</h3>
                  <p className="text-xs text-slate-500">Conventional clinical setup</p>
                </div>
              </div>

              <div className="space-y-4">
                {comparisonRows.map((row, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-700 block">{row.feature}</span>
                      <span>{row.traditional}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentisara Column */}
            <div className="p-6 sm:p-8 bg-forest-900 text-white space-y-6 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-forest-700/30 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-forest-800 text-sand-50 flex items-center justify-center font-serif text-lg font-bold border border-forest-700">
                    M
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-sand-100">Mentisara Online Care</h3>
                    <p className="text-xs text-sand-300">Person-Centred & Digital</p>
                  </div>
                </div>
                <span className="bg-terracotta-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-soft-sm">
                  Recommended
                </span>
              </div>

              <div className="space-y-4 relative z-10">
                {comparisonRows.map((row, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-sand-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">{row.feature}</span>
                      <span>{row.mentisara}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
