import Image from "next/image";
import Link from "next/link";
import { Building, Mail, Phone, MapPin, Shield, Heart } from "lucide-react";
import FooterBrandWatermark from "./FooterBrandWatermark";

function FacebookIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.101-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.302-.502.101-.2.05-.376-.025-.527-.075-.15-.677-1.631-.928-2.235-.244-.589-.493-.509-.677-.518-.175-.009-.376-.011-.577-.011s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.201 2.123 3.242 5.143 4.548.718.311 1.279.497 1.716.636.723.23 1.381.197 1.901.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.351zm-5.467 7.618h-.005a10.875 10.875 0 01-5.548-1.517l-.398-.236-4.127 1.082 1.101-4.024-.26-.413A10.873 10.873 0 012.008 12c0-5.999 4.882-10.881 10.887-10.881 2.909 0 5.643 1.134 7.697 3.191a10.825 10.825 0 013.193 7.69c0 6-4.882 10.882-10.88 10.882zM12 0C5.373 0 0 5.373 0 12c0 2.115.553 4.184 1.602 6.007L0 24l6.16-1.616A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#F8FAFC] pt-16 pb-8 transition-colors duration-300 dark:border-[#1F2F28] dark:bg-[#090D0B]">
      {/* Subtle Atmospheric Emerald Bloom (Top-Right / Bottom-Left) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#169A48]/8 blur-[120px] dark:bg-[#1EB954]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-[#169A48]/6 blur-[110px] dark:bg-[#169A48]/8"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 4-Column Creative Main Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Info & Socials (4 Cols) */}
          <div className="flex flex-col justify-between lg:col-span-4">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 focus:outline-none">
                <div className="relative flex h-10 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white p-1.5 shadow-xs dark:border-[#1F2F28] dark:bg-[#121915]">
                  <Image
                    src="/images/zenvora-icon-light.png"
                    alt="ZENVORA Logo"
                    width={44}
                    height={30}
                    className="block h-6 w-auto object-contain dark:hidden"
                  />
                  <Image
                    src="/images/zenvora-icon-dark.png"
                    alt="ZENVORA Logo"
                    width={44}
                    height={30}
                    className="hidden h-6 w-auto object-contain dark:block"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-plus-jakarta)] text-xl font-extrabold tracking-[0.16em] text-[#0F172A] leading-none dark:text-white">
                    ZENVOR<span className="text-[#169A48] dark:text-[#1EB954]">A</span>
                  </span>
                  <span className="mt-0.5 font-mono text-[9px] tracking-[0.24em] text-slate-500 uppercase dark:text-[#94A3B8]">
                    Systems &amp; Web
                  </span>
                </div>
              </Link>

              <p className="mt-5 max-w-sm text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                Engineering high-performance web systems, custom ERP platforms, and cloud-native
                solutions designed to perform, built to grow, and ready for the future.
              </p>
            </div>

            {/* Circular Social Buttons */}
            <div className="mt-6 flex items-center gap-2.5">
              {[
                { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
                { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
                { label: "Facebook: ZENVORA", href: "https://www.facebook.com", icon: FacebookIcon },
                { label: "WhatsApp", href: "https://wa.me/94770000000", icon: WhatsAppIcon },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-600 shadow-xs transition-all duration-300 hover:border-[#169A48] hover:bg-[#169A48] hover:text-white hover:scale-105 dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#94A3B8] dark:hover:border-[#1EB954] dark:hover:bg-[#1EB954] dark:hover:text-[#090D0B]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: COMPANY (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#169A48] uppercase dark:text-[#1EB954]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300/80 bg-emerald-50 text-[10px] dark:border-[#1EB954]/40 dark:bg-[#169A48]/15">
                <Building className="h-2.5 w-2.5" />
              </span>
              <span>COMPANY</span>
            </div>

            <ul className="mt-5 space-y-3">
              {[
                { label: "About Us", href: "/why-us" },
                { label: "Our Capabilities", href: "/services" },
                { label: "Selected Blueprints", href: "/projects" },
                { label: "Engineering Workflow", href: "/process" },
                { label: "Frequently Asked Questions", href: "/process#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-600 transition-colors duration-200 hover:text-[#169A48] hover:translate-x-0.5 dark:text-[#94A3B8] dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONTACT US (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#169A48] uppercase dark:text-[#1EB954]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300/80 bg-emerald-50 text-[10px] dark:border-[#1EB954]/40 dark:bg-[#169A48]/15">
                <Mail className="h-2.5 w-2.5" />
              </span>
              <span>CONTACT US</span>
            </div>

            <ul className="mt-5 space-y-3.5 text-xs text-slate-600 dark:text-[#94A3B8]">
              <li>
                <a
                  href="mailto:hello@zenvora.com"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#169A48] dark:hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
                  <span>hello@zenvora.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94770000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-[#169A48] dark:hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
                  <span>+94 77 000 0000</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Column 4: LEGAL (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#169A48] uppercase dark:text-[#1EB954]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300/80 bg-emerald-50 text-[10px] dark:border-[#1EB954]/40 dark:bg-[#169A48]/15">
                <Shield className="h-2.5 w-2.5" />
              </span>
              <span>LEGAL</span>
            </div>

            <ul className="mt-5 space-y-3">
              {[
                { label: "Privacy Policy", href: "/contact" },
                { label: "Terms & Conditions", href: "/contact" },
                { label: "99.9% Uptime SLA", href: "/why-us" },
                { label: "100% IP Ownership", href: "/why-us" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-600 transition-colors duration-200 hover:text-[#169A48] hover:translate-x-0.5 dark:text-[#94A3B8] dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large Architectural Brand Watermark with Interactive Cursor Animation (DARTCODES & CONVRTO styled) */}
        <FooterBrandWatermark />

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-[#1F2F28] dark:text-[#94A3B8] sm:flex-row">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>&copy; 2026 ZENVORA. Made with</span>
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500 inline" />
            <span>in Colombo, Sri Lanka.</span>
          </p>

          {/* 3 Glowing Indicator Dots (from design image) */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#169A48] shadow-[0_0_8px_#169A48] dark:bg-[#1EB954] dark:shadow-[0_0_8px_#1EB954]" />
            <span className="h-2 w-2 rounded-full bg-[#169A48]/60 dark:bg-[#1EB954]/60" />
            <span className="h-2 w-2 rounded-full bg-[#169A48]/30 dark:bg-[#1EB954]/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
