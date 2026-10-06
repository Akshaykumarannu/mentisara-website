"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { cn, buildWhatsAppUrl } from "@/lib/utils";
import { BrandLogo } from "@/components/common/BrandLogo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── TOP ANNOUNCEMENT BAR (SUBTLE SAGE WHISPER) ── */}
      <div className="bg-[#D8E8DC] text-[#143622] text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 relative z-50 border-b border-[#C0D9C8]">
        <span className="flex h-1.5 w-1.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-700" />
        </span>
        <span className="tracking-wide font-semibold text-[11px] sm:text-xs">
          Online Psychotherapy & Counselling · Private Video Sessions
        </span>
        <a
          href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about therapy sessions.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-[#A8582B] hover:text-[#7A3614] font-semibold text-xs transition-colors ml-2.5 underline underline-offset-2"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp Us
        </a>
      </div>

      {/* ── REFINED FLOATING / STICKY NAVBAR ── */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b",
          isScrolled
            ? "py-3 bg-[#FAF8F5]/92 backdrop-blur-md border-[#E3D8CC] shadow-[0_4px_24px_-6px_rgba(22,36,28,0.06)]"
            : "py-4 bg-[#FAF8F5]/80 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Official Mentisara Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD7854] rounded-xl p-1 transition-transform duration-200 hover:opacity-95"
            aria-label="Mentisara Home"
          >
            <BrandLogo size="sm" variant="dark" showTagline={true} />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {siteConfig.nav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-forest-950 font-semibold bg-[#E2ECE5] shadow-soft-sm"
                      : "text-slate-700 hover:text-forest-950 hover:bg-[#EFE8DE]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-[#BD7854] hover:bg-[#A86442] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-soft-sm hover:shadow-[0_8px_20px_-4px_rgba(189,120,84,0.35)] active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Toggle & Quick Action */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-1.5 bg-[#BD7854] text-white font-semibold px-3 py-1.5 rounded-xl text-xs transition-colors hover:bg-[#A86442]"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-forest-950 hover:bg-[#EFE8DE] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-forest-950/25 backdrop-blur-sm pt-[88px] animate-fade-in">
          <div className="bg-[#FAF8F5] border-b border-[#E3D8CC] px-6 pt-5 pb-8 shadow-2xl max-w-md mx-auto rounded-b-3xl">
            <nav className="flex flex-col space-y-1.5">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-colors",
                      isActive
                        ? "bg-[#E2ECE5] text-forest-950 font-semibold"
                        : "text-slate-700 hover:bg-[#EFE8DE] hover:text-forest-950"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#E3D8CC] space-y-2.5">
                <Link href="/book-appointment" className="w-full block">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#BD7854] hover:bg-[#A86442] text-white font-semibold py-3.5 rounded-2xl text-sm transition-colors shadow-soft-sm">
                    <Calendar className="w-4 h-4" />
                    Book an Appointment
                  </button>
                </Link>
                <a
                  href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about online therapy services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-[#C6DACD] text-forest-950 font-medium py-3 rounded-2xl text-sm hover:bg-[#EAF2ED] transition-colors"
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
