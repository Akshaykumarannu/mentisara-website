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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* ── TOP ANNOUNCEMENT BAR (FRESH SOFT SAGE) ── */}
      <div className="bg-[#D7E8DC] text-[#133822] text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 relative z-50 border-b border-[#BED8C6]">
        <span className="flex h-1.5 w-1.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-700" />
        </span>
        <span className="tracking-wide font-semibold">Online Psychotherapy & Counselling · Confidential Video Sessions</span>
        <a
          href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about therapy sessions.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-[#9A4C24] hover:text-[#7A3614] underline ml-2 font-bold transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp Us
        </a>
      </div>

      {/* ── STICKY LIGHT NAVBAR ── */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E3DCD2]",
          isScrolled ? "py-3 shadow-soft-sm" : "py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Official Mentisara Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C47C56] rounded-xl p-1 group">
            <BrandLogo
              size="sm"
              variant="dark"
              showTagline={true}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-forest-950 font-semibold bg-[#DCEAE0]"
                      : "text-slate-700 hover:text-forest-950 hover:bg-[#EAE4DC]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="flex items-center gap-2 bg-[#C47C56] hover:bg-[#B26A44] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-soft-sm hover:shadow-soft-md"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/book-appointment"
              className="flex items-center gap-1.5 bg-[#C47C56] text-white font-semibold px-3.5 py-1.5 rounded-xl text-xs transition-colors hover:bg-[#B26A44]"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-forest-950 hover:bg-[#EAE4DC] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-forest-950/30 backdrop-blur-sm pt-[88px]">
          <div className="bg-[#FAF7F2] border-b border-[#E3DCD2] px-6 pt-5 pb-8 shadow-2xl max-w-md mx-auto rounded-b-3xl">
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
                        ? "bg-[#DCEAE0] text-forest-950 font-semibold"
                        : "text-slate-700 hover:bg-[#EAE4DC] hover:text-forest-950"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-sand-300 space-y-2">
                <Link href="/book-appointment" className="w-full block">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#C47C56] hover:bg-[#B26A44] text-white font-semibold py-3.5 rounded-2xl text-sm transition-colors shadow-soft-sm">
                    <Calendar className="w-4 h-4" />
                    Book an Appointment
                  </button>
                </Link>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-forest-200 text-forest-900 font-medium py-3 rounded-2xl text-sm hover:bg-forest-50 transition-colors"
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
