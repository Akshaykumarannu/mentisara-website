import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { BrandLogo } from "@/components/common/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#ECE5DC] text-forest-950 pt-16 pb-12 border-t border-[#D9D0C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#D8CFC2]">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block group" aria-label="Mentisara Home">
              <BrandLogo size="md" variant="dark" showTagline={true} />
            </Link>
            <p className="text-sm text-slate-700 leading-relaxed max-w-sm font-normal">
              Thoughtful, person-centred online psychological care designed around your unique needs,
              delivered in a safe and compassionate space.
            </p>
            <div className="flex items-center gap-2 text-xs text-forest-950 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#BD7854]" />
              <span>Ethics-Guided & Compassionate Online Practice</span>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mentisara on Instagram"
                className="flex items-center gap-2.5 text-slate-700 hover:text-forest-950 transition-colors text-xs font-medium bg-white/90 border border-[#D5CBBF] hover:border-pink-500/50 px-3 py-1.5 rounded-xl shadow-soft-sm"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
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
                className="flex items-center gap-2.5 text-slate-700 hover:text-forest-950 transition-colors text-xs font-medium bg-white/90 border border-[#D5CBBF] hover:border-red-500/50 px-3 py-1.5 rounded-xl shadow-soft-sm"
              >
                <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
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
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-forest-950">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-700 hover:text-forest-950 transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-forest-950">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Individual Psychotherapy", href: "/services/individual-psychotherapy" },
                { label: "CBT Sessions", href: "/services/cognitive-behavioural-therapy" },
                { label: "DBT Skills", href: "/services/dialectical-behaviour-therapy" },
                { label: "ACT Therapy", href: "/services/acceptance-commitment-therapy" },
                { label: "Family & Couple Therapy", href: "/services/family-couple-therapy" },
                { label: "Emotional Resilience", href: "/services/emotional-regulation-resilience" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-700 hover:text-forest-950 transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-forest-950">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-2.5 text-slate-700 hover:text-forest-950 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#BD7854] shrink-0 mt-0.5" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-2.5 text-slate-700 hover:text-forest-950 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#BD7854] shrink-0" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hello Mentisara, I would like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-700 hover:text-forest-950 transition-colors"
                >
                  <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                  </span>
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-600 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#BD7854] shrink-0 mt-0.5" />
                <span>Kerala, India · Worldwide Online Care</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 gap-4 font-medium">
          <p>© {new Date().getFullYear()} Mentisara. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-forest-950 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-forest-950 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
