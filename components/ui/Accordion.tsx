"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-sand-300/80 rounded-2xl bg-white overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left font-serif text-lg md:text-xl text-forest-900 font-medium hover:bg-sand-50 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600/30"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={cn("w-5 h-5 text-forest-700 transition-transform duration-300 shrink-0 ml-4", isOpen && "rotate-180")}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-2 text-slate-700 leading-relaxed text-sm md:text-base border-t border-sand-100 animate-fade-in">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
