import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Mail, Phone, MapPin, ShieldCheck, Play } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#050A06] text-sand-200 pt-16 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-[#D4956A]/15 border border-[#D4956A]/25 text-[#D4956A] flex items-center justify-center font-serif text-xl font-bold">
                M
              </div>
              <div>
                <span className="font-serif text-xl font-semibold tracking-tight text-white block leading-none">
                  MENTISARA
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-white/30 font-medium">
                  Mind Talks
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Structured, person-centred online psychotherapy and CBT for individuals seeking
              confidential, evidence-based mental health support.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4956A]/60" />
              <span>Confidential & Ethics-Guided Practice</span>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mentisara on Instagram"
                className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-xs font-medium group bg-white/5 border border-white/8 hover:border-pink-500/30 px-3 py-1.5 rounded-xl"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span>@mentisara_talks</span>
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mentisara on YouTube"
                className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-xs font-medium group bg-white/5 border border-white/8 hover:border-red-500/30 px-3 py-1.5 rounded-xl"
              >
                <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span>Mentisara Talks</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white/80 tracking-wide uppercase text-[11px] tracking-widest">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Workshops", href: "/workshops" },
                { label: "Resources", href: "/resources" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/45 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-[11px] font-semibold text-white/80 tracking-widest uppercase">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Individual Psychotherapy", href: "/services/individual-psychotherapy" },
                { label: "Cognitive Behavioural Therapy", href: "/services/cognitive-behavioural-therapy" },
                { label: "Emotional Regulation", href: "/services/emotional-regulation-resilience" },
                { label: "Book Appointment", href: "/book-appointment" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={item.href === "/book-appointment"
                      ? "text-[#D4956A] hover:text-[#E8B89A] transition-colors font-medium"
                      : "text-white/45 hover:text-white transition-colors"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-[11px] font-semibold text-white/80 tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-2.5 text-white/45 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4956A]/70 shrink-0 mt-0.5" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white/45 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4956A]/70 shrink-0" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hello Mentisara, I would like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/45 hover:text-white transition-colors"
                >
                  <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#25D366]" />
                  </span>
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/30 text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#D4956A]/50 shrink-0 mt-0.5" />
                <span>Kerala, India · Worldwide Online</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-7 flex flex-col md:flex-row items-center justify-between text-xs text-white/25 gap-4">
          <p>© {new Date().getFullYear()} Mentisara. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white/60 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
