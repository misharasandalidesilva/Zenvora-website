import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { Sparkles, MessageCircle, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries — ZENVORA",
  description:
    "Get in touch with ZENVORA. Schedule a technical discovery session for your custom web app, ERP system, or cloud infrastructure project. Direct access to Lead Systems Architects.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-white py-14 transition-colors duration-300 dark:bg-[#090D0B] sm:py-20">
      <div className="bg-grid-obsidian pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] dark:opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Direct Technical Consultation</span>
          </div>

          <h1 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Turn Your Ideas Into{" "}
            <span className="bg-gradient-to-r from-[#169A48] via-[#1EB954] to-[#10B981] bg-clip-text text-transparent">
              Live Production Solutions
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-lg">
            Have a project in mind, need a system modernized, or want to audit your cloud infrastructure?
            Fill out the form below or message our engineers directly on WhatsApp.
          </p>
        </div>

        {/* 3 Value Badges */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          {[
            { icon: Clock, title: "2-Hour Response Time", desc: "During business hours for all project briefs" },
            { icon: ShieldCheck, title: "Strict NDA On Request", desc: "Your intellectual property is 100% protected" },
            { icon: MessageCircle, title: "Direct Architect Talk", desc: "Talk directly to software engineers, not sales reps" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 dark:border-[#1F2F28] dark:bg-[#121915]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#169A48] dark:bg-[#090D0B] dark:text-[#1EB954]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-[#0F172A] dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-[#94A3B8]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Full Interactive Form */}
        <div className="mt-14">
          <Contact />
        </div>
      </div>
    </div>
  );
}
