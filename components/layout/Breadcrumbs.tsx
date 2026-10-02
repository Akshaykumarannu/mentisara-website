import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 flex-wrap">
        <li>
          <Link href="/" className="hover:text-forest-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {item.href ? (
              <Link href={item.href} className="hover:text-forest-900 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-forest-900 font-medium truncate max-w-[200px] md:max-w-xs">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
