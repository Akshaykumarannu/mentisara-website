"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { cn, buildWhatsAppUrl } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  // On the home page: header starts transparent over dark hero; elsewhere starts light
  const isHome = pathname === "/";

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#0A0F0B] text-white/60 text-[11px] py-2.5 px-4 text-center font-medium flex items-center justify-center gap-2 relative z-50 border-b border-white/5">
        <span className="flex h-1.5 w-1.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        <span>Licensed Online Psychotherapy in Kerala & Worldwide — Confidential Video Sessions</span>
        <a
          href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about session slots.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-[#D4956A] hover:text-[#E8B89A] underline ml-2 font-semibold transition-colors"
        >
          <MessageCircle className="w-3 h-3" />
          WhatsApp
        </a>
      </div>

      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
          isScrolled || !isHome
            ? "bg-white/97 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4956A] rounded-xl p-1 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center font-serif text-lg font-bold shadow-md transition-all duration-300",
              isScrolled || !isHome
                ? "bg-[#0A0F0B] text-[#D4956A]"
                : "bg-gradient-to-br from-[#D4956A] to-[#B5553A] text-white"
            )}>
              M
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn(
                "font-serif text-xl font-bold tracking-tight leading-none transition-colors",
                isScrolled || !isHome ? "text-[#0A0F0B]" : "text-white"
              )}>
                MENTISARA
              </span>
              <span className={cn(
                "text-[9px] tracking-[0.22em] uppercase font-semibold mt-0.5 transition-colors",
                isScrolled || !isHome ? "text-[#D4956A]" : "text-[#E8B89A]"
              )}>
                Mind Talks
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    isScrolled || !isHome
                      ? isActive
                        ? "text-[#0A0F0B] font-semibold bg-slate-100"
                        : "text-slate-600 hover:text-[#0A0F0B] hover:bg-slate-50"
                      : isActive
                        ? "text-white font-semibold bg-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/8"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="flex items-center gap-2 bg-[#D4956A] hover:bg-[#C4855A] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-[0_8px_20px_-5px_rgba(212,149,106,0.4)]"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/book-appointment"
              className="flex items-center gap-1.5 bg-[#D4956A] text-white font-semibold px-4 py-2 rounded-xl text-xs transition-colors hover:bg-[#C4855A]"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl transition-colors",
                isScrolled || !isHome
                  ? "text-[#0A0F0B] hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/40 backdrop-blur-sm pt-[88px]">
          <div className="bg-white border-b border-slate-100 px-6 pt-5 pb-8 shadow-2xl max-w-md mx-auto rounded-b-3xl">
            <nav className="flex flex-col space-y-1">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-3.5 rounded-2xl text-sm font-medium flex items-center justify-between transition-colors",
                      isActive
                        ? "bg-[#D4956A]/10 text-[#B95937] font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-slate-100 space-y-2">
                <Link href="/book-appointment" className="w-full block">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#D4956A] hover:bg-[#C4855A] text-white font-semibold py-3.5 rounded-2xl text-sm transition-colors">
                    <Calendar className="w-4 h-4" />
                    Book an Appointment
                  </button>
                </Link>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-medium py-3 rounded-2xl text-sm hover:bg-slate-50 transition-colors"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
