import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Gauge,
  Lock,
  Layers3,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Us — Engineering Standards & Guarantees — ZENVORA",
  description:
    "Discover why leading businesses partner with ZENVORA. Strict TypeScript contracts, sub-second latency, enterprise data integrity, and 100% source code ownership.",
};

const pillars = [
  {
    title: "Architecture First, Not Shortcuts",
    tagline: "No spaghetti code, no hacky workarounds. Built to be maintained by any senior team.",
    description:
      "Every codebase is engineered with strict TypeScript contracts, modular domain boundaries, and zero-tech-debt patterns. We write comprehensive integration tests and maintain clear architectural decision records (ADRs).",
    icon: Layers3,
    points: [
      "Strict static typing and schema validation",
      "Domain-driven modular folder organization",
      "Automated linting and test suites in CI",
      "Comprehensive living documentation",
    ],
  },
  {
    title: "Sub-Second Speed & Core Web Vitals",
    tagline: "Speed is a feature. We engineer instantaneous response times across every viewport.",
    description:
      "Server-side rendering, streaming SSR, edge caching, and lean bundle optimization ensure every interface loads instantaneously. We target 99+ Core Web Vitals on real mobile networks.",
    icon: Gauge,
    points: [
      "Next.js App Router streaming & partial prerendering",
      "Edge-cached dynamic API responses",
      "Optimized WebP/AVIF media pipelines",
      "Sub-50ms TTFB global edge distribution",
    ],
  },
  {
    title: "Enterprise Security & Data Integrity",
    tagline: "Security is engineered into the foundation from day one, not bolted on later.",
    description:
      "Granular role-based access control (RBAC), end-to-end encrypted API pipelines, secure session tokens, and automated database backups protect your business intelligence and customer records.",
    icon: Lock,
    points: [
      "Role-based access control with audited tokens",
      "Automated multi-region database backups",
      "Strict CSRF & XSS sanitization boundaries",
      "Zero plain-text secrets — encrypted vault configs",
    ],
  },
  {
    title: "Transparent Agile Delivery Velocity",
    tagline: "No dark periods. Continuous live deployments and transparent Git commits.",
    description:
      "We operate in weekly sprints. You see working code on private staging URLs every week, with direct access to our systems architects, Git pull requests, and real-time Discord/Slack channels.",
    icon: Zap,
    points: [
      "Weekly staging previews and live feature demos",
      "Direct communication with senior engineers",
      "100% full source-code ownership upon milestone",
      "Zero proprietary lock-in — standard open frameworks",
    ],
  },
];

const comparisonData = [
  {
    feature: "Architecture Quality",
    freelancer: "Varies widely; prone to technical debt",
    agency: "Cookie-cutter templates & heavy plugins",
    zenvora: "Bespoke clean-architecture with strict TypeScript",
  },
  {
    feature: "Code Ownership",
    freelancer: "Often ambiguous or untracked",
    agency: "Often tied to proprietary platform fees",
    zenvora: "100% full client repository ownership & IP",
  },
  {
    feature: "Communication",
    freelancer: "Unpredictable response times",
    agency: "Filtered through non-technical account managers",
    zenvora: "Direct channel to your Lead Systems Architect",
  },
  {
    feature: "Long-term Scalability",
    freelancer: "Rewrites required as user count grows",
    agency: "High server costs from unoptimized builds",
    zenvora: "Cloud-native, edge-cached, scale-ready from Day 1",
  },
  {
    feature: "Post-Launch SLA",
    freelancer: "Disappears after handoff",
    agency: "Expensive retainers with slow ticket queues",
    zenvora: "Proactive 24/7 telemetry monitoring & fast SLAs",
  },
];

export default function WhyUsPage() {
  return (
    <div className="relative overflow-hidden bg-white py-14 transition-colors duration-300 dark:bg-[#090D0B] sm:py-20">
      <div className="bg-grid-obsidian pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] dark:opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Engineering Integrity</span>
          </div>

          <h1 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
            Built for Teams That{" "}
            <span className="bg-gradient-to-r from-[#169A48] via-[#1EB954] to-[#10B981] bg-clip-text text-transparent">
              Refuse Fragile Software
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-lg">
            Turning Ideas Into Solutions. We operate as an embedded systems engineering partner—combining
            boutique design precision with rock-solid architectural standards that scale effortlessly
            as your business revenue expands.
          </p>
        </div>

        {/* The 4 Architectural Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-8 shadow-xs transition-all duration-300 hover:border-[#169A48]/50 hover:shadow-xl dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/60 dark:hover:shadow-[0_16px_50px_rgba(22,154,72,0.14)]"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-[#169A48] transition-colors group-hover:bg-[#169A48] group-hover:text-white dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954] dark:group-hover:border-[#1EB954]/40 dark:group-hover:bg-[#169A48]/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-[#0F172A] dark:text-white">
                        {pillar.title}
                      </h2>
                      <p className="text-xs text-[#169A48] dark:text-[#1EB954]">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-[#1F2F28]/70">
                  <ul className="space-y-2">
                    {pillar.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-20 rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 dark:border-[#1F2F28] dark:bg-[#121915]/80 sm:p-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:text-[#1EB954]">
              Non-Negotiable Commitments
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-[#0F172A] dark:text-white sm:text-3xl">
              The 4 ZENVORA Client Guarantees
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "100% IP & Code Ownership", desc: "You own all code, assets, schemas, and deployment credentials." },
              { title: "Zero Proprietary Lock-In", desc: "Engineered exclusively with open-source industry standards." },
              { title: "Direct Architect Access", desc: "No middle-tier sales reps. Talk directly to engineers." },
              { title: "Weekly Working Demos", desc: "Live staging builds every 7 days throughout development." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-[#1F2F28] dark:bg-[#090D0B]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-[#169A48] dark:bg-[#1F2F28] dark:text-[#1EB954]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-semibold text-sm text-[#0F172A] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-[#94A3B8]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:text-[#1EB954]">
              Benchmark
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-[#0F172A] dark:text-white sm:text-3xl">
              How ZENVORA Compares to Alternatives
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xs dark:border-[#1F2F28] dark:bg-[#121915]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 dark:border-[#1F2F28] dark:bg-[#090D0B]">
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-[#94A3B8]">
                    Capability
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider dark:text-slate-500">
                    Freelancers
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider dark:text-slate-500">
                    Generic Agencies
                  </th>
                  <th className="p-4 text-xs font-bold text-[#169A48] uppercase tracking-wider dark:text-[#1EB954]">
                    ZENVORA Partner
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#1F2F28]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-[#121915]/50">
                    <td className="p-4 font-semibold text-xs text-[#0F172A] dark:text-white whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="p-4 text-xs text-slate-500 dark:text-[#94A3B8]">
                      {row.freelancer}
                    </td>
                    <td className="p-4 text-xs text-slate-500 dark:text-[#94A3B8]">
                      {row.agency}
                    </td>
                    <td className="p-4 text-xs font-medium text-[#169A48] dark:text-[#1EB954] bg-emerald-50/40 dark:bg-[#169A48]/5">
                      {row.zenvora}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8 text-center shadow-md dark:border-[#1F2F28] dark:from-[#121915] dark:via-[#090D0B] dark:to-[#090D0B] sm:p-12">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
            Partner With an Engineering Team You Can Trust
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-[#94A3B8]">
            Turning Ideas Into Solutions — let&apos;s build software that becomes a sustainable unfair advantage for your enterprise.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#169A48] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(22,154,72,0.3)] transition-all hover:bg-[#1EB954] hover:shadow-[0_0_32px_rgba(30,185,84,0.5)] sm:w-auto"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-[#0F172A] transition-all hover:border-[#169A48] hover:text-[#169A48] dark:border-[#1F2F28] dark:bg-[#121915] dark:text-white sm:w-auto"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
