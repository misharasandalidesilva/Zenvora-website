import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  PenTool,
  Code,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Process & Workflow — ZENVORA",
  description:
    "Learn how ZENVORA turns ideas into production solutions through a 4-step disciplined lifecycle: Discovery, Prototyping, Agile Sprints, and Zero-Downtime Deployment.",
};

const detailedSteps = [
  {
    step: "01",
    phase: "Discovery & Technical Scoping",
    duration: "Week 1",
    summary:
      "We map your business bottlenecks, data flows, and growth KPIs into a clear technical specification (SRS) and architecture roadmap.",
    icon: Compass,
    actions: [
      "Technical stakeholder discovery interviews",
      "Data entity modeling & DB schema definition",
      "Third-party API & security boundary audit",
      "Fixed milestone timeline & budget agreement",
    ],
    deliverables: "Comprehensive SRS Document, System Architecture Blueprint, Sprint Roadmap",
  },
  {
    step: "02",
    phase: "UI/UX Prototyping & System Design",
    duration: "Week 2 - 3",
    summary:
      "High-fidelity clickable Figma prototypes paired with API contracts and cloud topology before a single line of code is shipped.",
    icon: PenTool,
    actions: [
      "User journey mapping & information architecture",
      "Token-driven responsive Figma component system",
      "REST & GraphQL endpoint schema definition",
      "Interactive prototype review & client signoff",
    ],
    deliverables: "Interactive Figma Prototypes, Component Tokens, OpenAPI Contracts",
  },
  {
    step: "03",
    phase: "Agile Development & Automated QA",
    duration: "Week 4 - 8",
    summary:
      "Rapid weekly engineering sprints with automated QA, strict TypeScript contracts, and continuous staging previews.",
    icon: Code,
    actions: [
      "Weekly two-week feature milestone delivery",
      "Automated unit, integration, and E2E Cypress tests",
      "Continuous deployment to password-protected staging URLs",
      "Weekly live video demo & feedback incorporation",
    ],
    deliverables: "Live Staging Previews, Git Commit Access, Clean Documented Source Code",
  },
  {
    step: "04",
    phase: "Production Rollout & 24/7 SLA Care",
    duration: "Launch & Beyond",
    summary:
      "Zero-downtime blue/green production deployment, multi-region edge caching, telemetry monitoring, and proactive SLA support.",
    icon: Rocket,
    actions: [
      "Zero-downtime database migration & DNS propagation",
      "APM error telemetry (Sentry, Prometheus) configuration",
      "Comprehensive handover documentation & staff training",
      "24/7 ongoing uptime monitoring & emergency SLA support",
    ],
    deliverables: "Production Live Release, SSL & Firewall Setup, 24/7 Monitoring Dashboard",
  },
];

const faqs = [
  {
    q: "How long does a typical custom web or ERP project take?",
    a: "Most MVP systems and custom web platforms launch within 4 to 8 weeks. Enterprise-scale ERP and multi-warehouse POS systems typically take 8 to 14 weeks depending on third-party hardware integration and legacy data migration needs.",
  },
  {
    q: "Who owns the code, intellectual property, and database?",
    a: "You do. 100%. Upon completion of each project milestone, all source code in the Git repository, design assets, database schemas, and cloud deployment keys belong entirely to your company.",
  },
  {
    q: "How do we communicate throughout the sprints?",
    a: "We maintain direct, transparent communication via a dedicated Slack or Discord channel with your Lead Systems Architect, alongside weekly video sprint demos and private staging preview links.",
  },
  {
    q: "What happens after the system is deployed live?",
    a: "We provide a 30-day post-launch warranty with zero-cost bug fixes, followed by optional ongoing SLA maintenance packages covering security patching, database optimization, and continuous feature expansion.",
  },
];

export default function ProcessPage() {
  return (
    <div className="relative overflow-hidden bg-white py-14 transition-colors duration-300 dark:bg-[#090D0B] sm:py-20">
      <div className="bg-grid-obsidian pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] dark:opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The ZENVORA Methodology</span>
          </div>

          <h1 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
            From First Principles to{" "}
            <span className="bg-gradient-to-r from-[#169A48] via-[#1EB954] to-[#10B981] bg-clip-text text-transparent">
              Zero-Downtime Production
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-lg">
            Turning Ideas Into Solutions. A disciplined, transparent execution lifecycle engineered
            to eliminate risk, accelerate time-to-market, and deliver predictable, enterprise-grade software.
          </p>
        </div>

        {/* 4 Steps Timeline Breakdown */}
        <div className="mt-16 space-y-8">
          {detailedSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-8 shadow-xs transition-all duration-300 hover:border-[#169A48]/50 hover:shadow-xl dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/60 dark:hover:shadow-[0_20px_60px_rgba(22,154,72,0.14)] lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 items-center rounded-lg border border-emerald-200 bg-emerald-50 px-3 font-mono text-xs font-bold text-[#169A48] dark:border-[#1EB954]/30 dark:bg-[#090D0B] dark:text-[#1EB954]">
                        STEP {s.step}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                        <Clock className="h-3.5 w-3.5" />
                        {s.duration}
                      </span>
                    </div>

                    <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-[#0F172A] dark:text-white sm:text-3xl">
                      {s.phase}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                      {s.summary}
                    </p>

                    <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-[#1F2F28]/70 dark:bg-[#090D0B] lg:col-span-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Sprint Activities &amp; Milestones
                      </p>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {s.actions.map((act, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-[#1F2F28]/80">
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-[#169A48] dark:text-[#1EB954]">
                        <FileCheck className="h-4 w-4" />
                        <span>Tangible Output:</span>
                        <span className="font-normal text-slate-600 dark:text-slate-300">
                          {s.deliverables}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:text-[#1EB954]">
              Clear Answers
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-[#0F172A] dark:text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 dark:border-[#1F2F28] dark:bg-[#121915]"
              >
                <h3 className="font-semibold text-base text-[#0F172A] dark:text-white">
                  {f.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8 text-center shadow-md dark:border-[#1F2F28] dark:from-[#121915] dark:via-[#090D0B] dark:to-[#090D0B] sm:p-12">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
            Ready to Begin Step 01?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-[#94A3B8]">
            Turning Ideas Into Solutions — let&apos;s map out your requirements and build a production system that delivers.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#169A48] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(22,154,72,0.3)] transition-all hover:bg-[#1EB954] hover:shadow-[0_0_32px_rgba(30,185,84,0.5)] sm:w-auto"
            >
              Schedule Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-[#0F172A] transition-all hover:border-[#169A48] hover:text-[#169A48] dark:border-[#1F2F28] dark:bg-[#121915] dark:text-white sm:w-auto"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
