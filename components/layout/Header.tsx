"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, Calendar, ArrowRight, MessageCircle, ArrowUpRight } from "lucide-react";
import { cn, buildWhatsAppUrl } from "@/lib/utils";
import { BrandLogo } from "@/components/common/BrandLogo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isHeroTransparent = isHome && !isScrolled;

  return (
    <>
      {/* ── TOP ANNOUNCEMENT BAR ── */}
      <div
        className={cn(
          "text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 relative z-50 border-b transition-colors duration-300",
          isHeroTransparent
            ? "bg-[#173C36] text-[#F7F5EF] border-white/10"
            : "bg-[#E7EDE5] text-[#173C36] border-[#D4DFC1]/60"
        )}
      >
        <span className="flex h-1.5 w-1.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        <span className="tracking-wide font-medium text-[11px] sm:text-xs">
          Online Psychotherapy & Counselling · Private Video Sessions
        </span>
        <a
          href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about therapy sessions.")}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "hidden sm:inline-flex items-center gap-1 font-semibold text-xs transition-colors ml-3 underline underline-offset-2",
            isHeroTransparent
              ? "text-[#C88768] hover:text-[#EDE7DC]"
              : "text-[#C88768] hover:text-[#97573A]"
          )}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp Us
        </a>
      </div>

      {/* ── STICKY EDITORIAL NAVBAR ── */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b",
          isScrolled
            ? "py-3 bg-[#F7F5EF]/95 backdrop-blur-md border-[#E2D9CC] shadow-[0_4px_20px_-6px_rgba(23,60,54,0.06)]"
            : isHome
            ? "py-4 bg-[#173C36]/80 backdrop-blur-md border-white/10 text-white"
            : "py-5 bg-transparent border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* LEFT: Mentisara Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl p-1 transition-opacity duration-200 hover:opacity-90"
            aria-label="Mentisara Home"
          >
            <BrandLogo
              size="md"
              variant={isHeroTransparent ? "light" : "dark"}
              showTagline={true}
            />
          </Link>

          {/* CENTER: Existing Navigation Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.nav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200",
                    isHeroTransparent
                      ? isActive
                        ? "text-white bg-white/20 backdrop-blur-md"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : isActive
                      ? "text-[#173C36] bg-[#EDE7DC]/70 shadow-soft-sm font-semibold"
                      : "text-[#26302E] hover:text-[#173C36] hover:bg-[#EDE7DC]/40 font-medium"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Existing Primary CTA Button (Mindora Pill with Arrow Circle) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/book-appointment"
              className={cn(
                "inline-flex items-center gap-2 font-semibold pl-5 pr-2 py-2 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:translate-y-0 group",
                isHeroTransparent
                  ? "bg-white text-[#173C36] hover:bg-white/95"
                  : "bg-[#173C36] hover:bg-[#0E2622] text-[#F7F5EF]"
              )}
            >
              <span>Book a Session</span>
              <span
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:rotate-45",
                  isHeroTransparent
                    ? "bg-[#173C36] text-white"
                    : "bg-white text-[#173C36]"
                )}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle & Quick Action */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/book-appointment"
              className={cn(
                "inline-flex items-center gap-1 font-semibold px-3 py-1.5 rounded-full text-xs transition-colors",
                isHeroTransparent
                  ? "bg-white text-[#173C36]"
                  : "bg-[#173C36] text-[#F7F5EF]"
              )}
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl transition-colors focus:outline-none",
                isHeroTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-[#173C36] hover:bg-[#EDE7DC]"
              )}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#173C36]/50 backdrop-blur-md pt-[92px] animate-fade-in">
          <div className="bg-[#F7F5EF] border-b border-[#E2D9CC] px-6 pt-5 pb-8 shadow-2xl max-w-md mx-auto rounded-b-3xl">
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
                        ? "bg-[#EDE7DC] text-[#173C36] font-semibold"
                        : "text-[#26302E] hover:bg-[#EDE7DC]/50 hover:text-[#173C36]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#A8B9A5]" />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#E2D9CC] space-y-2.5">
                <Link href="/book-appointment" className="w-full block">
                  <button className="w-full flex items-center justify-center gap-2 bg-[#173C36] hover:bg-[#0E2622] text-[#F7F5EF] font-semibold py-3.5 rounded-2xl text-sm transition-colors shadow-soft-sm">
                    <Calendar className="w-4 h-4 text-[#A8B9A5]" />
                    Book an Appointment
                  </button>
                </Link>
                <a
                  href={buildWhatsAppUrl("Hello Mentisara, I would like to inquire about online therapy services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-[#E2D9CC] bg-white text-[#173C36] font-medium py-3 rounded-2xl text-sm hover:bg-[#EDE7DC] transition-colors"
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
