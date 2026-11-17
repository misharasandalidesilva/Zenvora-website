"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Store,
  Globe2,
  Truck,
  LineChart,
  HeartPulse,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const allProjects = [
  {
    title: "PulseOps Enterprise ERP",
    category: "ERP & POS",
    industry: "Retail & Distribution",
    description:
      "Unified multi-warehouse inventory, automated supplier PO algorithms, and real-time P&L telemetry engineered for a regional retail distributor.",
    challenge: "Disjointed manual inventory records caused 18% stockout errors and delayed branch restocking.",
    solution: "Engineered an event-driven inventory core with automated re-order triggers and thermal POS printer sync.",
    metrics: "3.4x faster fulfillment",
    uptime: "99.98% Uptime",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "AWS ECS"],
    icon: BarChart3,
    previewBars: [45, 70, 58, 86, 94, 78, 100],
  },
  {
    title: "NexusPay Commerce Suite",
    category: "E-Commerce",
    industry: "Digital Retail",
    description:
      "Headless high-conversion storefront with multi-currency checkout, Stripe & local gateway orchestration, and instant order webhooks.",
    challenge: "Legacy WooCommerce site crashed during flash sales with 12s cart checkout latencies.",
    solution: "Built a headless Next.js frontend with Redis cart caching and resilient gateway webhook listeners.",
    metrics: "99.98% checkout reliability",
    uptime: "<0.8s Cart Checkout",
    stack: ["React 19", "Node.js", "Stripe API", "Redis", "Tailwind CSS"],
    icon: Store,
    previewBars: [60, 65, 78, 74, 90, 95, 98],
  },
  {
    title: "Vanguard Cloud Portal",
    category: "SaaS & Cloud",
    industry: "Logistics & Freight",
    description:
      "Multi-tenant client portal integrating third-party logistics APIs, automated billing cycles, and granular role-based dashboards.",
    challenge: "Over 500 corporate clients lacked real-time shipment visibility and invoice reconciliation.",
    solution: "Engineered a GraphQL microservice mesh aggregating 6 carrier APIs with automated PDF invoice generation.",
    metrics: "45K+ daily API calls",
    uptime: "42ms Edge Latency",
    stack: ["Next.js App Router", "GraphQL", "Docker", "GCP", "PostgreSQL"],
    icon: Globe2,
    previewBars: [52, 64, 80, 72, 88, 92, 97],
  },
  {
    title: "Apex Fleet Core",
    category: "ERP & POS",
    industry: "Fleet Management",
    description:
      "Real-time GPS vehicle tracking telemetry, automated driver dispatch routing, and preventative maintenance alerting.",
    challenge: "Manual route dispatch resulted in high fuel wastage and delayed customer deliveries.",
    solution: "Deployed a WebSocket telemetry pipeline processing vehicle IoT coordinates with dynamic route rerouting.",
    metrics: "22% fuel reduction",
    uptime: "Real-time Telemetry",
    stack: ["Node.js", "WebSockets", "TimescaleDB", "Redis", "Leaflet Maps"],
    icon: Truck,
    previewBars: [68, 75, 82, 88, 92, 96, 99],
  },
  {
    title: "Solaria SaaS Analytics",
    category: "SaaS & Cloud",
    industry: "Financial Services",
    description:
      "Sub-second executive financial analytics dashboard processing multi-source banking APIs and automated reconciliation reports.",
    challenge: "Spreadsheet reporting required 4 days at month-end closing with high risk of human error.",
    solution: "Built a columnar analytical pipeline with interactive SVG charts and automated scheduled email digests.",
    metrics: "Instant month-end reports",
    uptime: "SOC2-Ready Architecture",
    stack: ["Next.js", "TypeScript", "ClickHouse", "FastAPI", "Tailwind CSS"],
    icon: LineChart,
    previewBars: [40, 58, 72, 80, 89, 94, 98],
  },
  {
    title: "Aura Health Telemedicine",
    category: "Web Applications",
    industry: "Healthcare & MedTech",
    description:
      "HIPAA-compliant patient booking portal with WebRTC encrypted video consultations and automated electronic prescription dispatch.",
    challenge: "Clinics struggled with patient no-shows and insecure consultation links.",
    solution: "Engineered a hardened appointment scheduling engine with automated SMS reminders and in-browser WebRTC.",
    metrics: "60% fewer missed appointments",
    uptime: "End-to-End Encrypted",
    stack: ["Next.js", "WebRTC", "PostgreSQL", "Twilio API", "Tailwind CSS"],
    icon: HeartPulse,
    previewBars: [55, 62, 70, 84, 91, 95, 100],
  },
];

const categories = ["All", "ERP & POS", "E-Commerce", "SaaS & Cloud", "Web Applications"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative overflow-hidden bg-white py-14 transition-colors duration-300 dark:bg-[#090D0B] sm:py-20">
      <div className="bg-grid-obsidian pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] dark:opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Proven Production Blueprints</span>
          </div>

          <h1 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
            Real Systems.{" "}
            <span className="bg-gradient-to-r from-[#169A48] via-[#1EB954] to-[#10B981] bg-clip-text text-transparent">
              Measurable Outcomes.
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-lg">
            Turning Ideas Into Solutions. Explore selected production web applications, enterprise ERP platforms,
            and cloud microservices engineered by ZENVORA.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#169A48] text-white shadow-xs dark:bg-[#1EB954] dark:text-[#090D0B]"
                  : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-[#169A48]/50 hover:bg-white dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#94A3B8] dark:hover:border-[#1EB954]/50 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#169A48]/50 hover:shadow-xl dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/60 dark:hover:shadow-[0_16px_45px_rgba(22,154,72,0.16)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-[#169A48] transition-colors group-hover:bg-[#169A48] group-hover:text-white dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954] dark:group-hover:border-[#1EB954]/40 dark:group-hover:bg-[#169A48]/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider dark:text-[#94A3B8]">
                      {item.industry}
                    </span>
                  </div>

                  <h2 className="mt-5 flex items-center justify-between font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-[#0F172A] dark:text-white">
                    <span>{item.title}</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#169A48] dark:text-[#94A3B8] dark:group-hover:text-[#1EB954]" />
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-2 rounded-xl border border-slate-200/80 bg-white p-3.5 text-xs dark:border-[#1F2F28]/60 dark:bg-[#090D0B]/70">
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong className="text-[#0F172A] dark:text-white">Challenge:</strong> {item.challenge}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong className="text-[#169A48] dark:text-[#1EB954]">Solution:</strong> {item.solution}
                    </p>
                  </div>

                  {/* Telemetry Preview Graphic */}
                  <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 dark:border-[#1F2F28]/60 dark:bg-[#090D0B]/80">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 dark:text-slate-400">
                      <span>Throughput Telemetry</span>
                      <span className="text-[#169A48] dark:text-[#1EB954]">{item.uptime}</span>
                    </div>
                    <div className="flex items-end justify-between gap-1.5 h-10">
                      {item.previewBars.map((height, i) => (
                        <div
                          key={i}
                          className="w-full rounded-sm bg-slate-200 transition-all duration-300 group-hover:bg-[#169A48] dark:bg-[#1F2F28] dark:group-hover:bg-[#1EB954]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-[#1F2F28]/70">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#169A48] dark:border-[#1EB954]/30 dark:bg-[#090D0B] dark:text-[#1EB954]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {item.metrics}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 dark:border-[#1F2F28]/60 dark:bg-[#090D0B]/80 dark:text-[#94A3B8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8 text-center shadow-md dark:border-[#1F2F28] dark:from-[#121915] dark:via-[#090D0B] dark:to-[#090D0B] sm:p-12">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
            Have a Complex System You Want Built?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-[#94A3B8]">
            Turning Ideas Into Solutions — let&apos;s build a high-performance system customized for your exact operations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#169A48] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(22,154,72,0.3)] transition-all hover:bg-[#1EB954] hover:shadow-[0_0_32px_rgba(30,185,84,0.5)] sm:w-auto"
            >
              Request a Project Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/process"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-[#0F172A] transition-all hover:border-[#169A48] hover:text-[#169A48] dark:border-[#1F2F28] dark:bg-[#121915] dark:text-white sm:w-auto"
            >
              See How We Build
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
