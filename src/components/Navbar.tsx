"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm dark:border-[#1F2F28] dark:bg-[#090D0B]/90 dark:shadow-[0_10px_40px_rgba(0,0,0,0.65)]"
          : "border-b border-slate-200/40 bg-white/75 backdrop-blur-md dark:border-[#1F2F28]/40 dark:bg-[#090D0B]/70"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="ZENVORA Home"
        >
          <div className="relative flex h-10 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-1.5 transition-all duration-300 group-hover:border-[#169A48]/50 dark:border-[#1F2F28]/80 dark:bg-[#121915]/80 dark:group-hover:border-[#1EB954]/50 dark:group-hover:shadow-[0_0_20px_rgba(30,185,84,0.2)]">
            <Image
              src="/images/zenvora-icon-light.png"
              alt="ZENVORA Logo Mark"
              width={48}
              height={34}
              priority
              className="block h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:hidden"
            />
            <Image
              src="/images/zenvora-icon-dark.png"
              alt="ZENVORA Logo Mark"
              width={48}
              height={34}
              priority
              className="hidden h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:block"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-plus-jakarta)] text-lg font-extrabold tracking-[0.16em] text-[#0F172A] leading-none dark:text-white">
              ZENVOR<span className="text-[#169A48] dark:text-[#1EB954]">A</span>
            </span>
            <span className="mt-0.5 font-mono text-[9px] tracking-[0.22em] text-slate-500 uppercase dark:text-[#94A3B8]">
              Systems &amp; Web
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-100/80 px-2 py-1.5 backdrop-blur-md dark:border-[#1F2F28]/80 dark:bg-[#121915]/70 md:flex"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-white hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:bg-[#1F2F28]/60 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-600 dark:border-[#1F2F28] dark:bg-[#121915]/60 dark:text-[#94A3B8] xl:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1EB954] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1EB954]" />
            </span>
            Booking New Projects
          </div>

          <ThemeToggle />

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#169A48] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(22,154,72,0.3)] transition-all duration-300 hover:bg-[#1EB954] hover:shadow-[0_0_32px_rgba(30,185,84,0.55)]"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#0F172A] transition-colors hover:border-[#169A48]/50 dark:border-[#1F2F28] dark:bg-[#121915] dark:text-white dark:hover:border-[#1EB954]/50"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-6 backdrop-blur-xl dark:border-[#1F2F28] dark:bg-[#090D0B]/95 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#0F172A] dark:text-[#94A3B8] dark:hover:bg-[#121915] dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#169A48] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(30,185,84,0.35)] transition-all hover:bg-[#1EB954]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
