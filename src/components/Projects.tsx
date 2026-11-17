import { ArrowUpRight, BarChart3, Store, Globe2 } from "lucide-react";

const projects = [
  {
    title: "PulseOps Enterprise ERP",
    category: "ERP & Inventory Core",
    description:
      "Unified multi-warehouse inventory, automated supplier POs, and real-time P&L telemetry engineered for a regional retail distributor.",
    metrics: "3.4x faster fulfillment",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    icon: BarChart3,
    previewBars: [45, 70, 58, 86, 94, 78, 100],
  },
  {
    title: "NexusPay Commerce Suite",
    category: "E-Commerce & Payments",
    description:
      "Headless high-conversion storefront with multi-currency checkout, Stripe & local gateway orchestration, and instant order webhooks.",
    metrics: "99.98% checkout reliability",
    stack: ["React", "Node.js", "Stripe API", "Redis"],
    icon: Store,
    previewBars: [60, 65, 78, 74, 90, 95, 98],
  },
  {
    title: "Vanguard Cloud Portal",
    category: "SaaS & API Integration",
    description:
      "Multi-tenant client portal integrating third-party logistics APIs, automated billing cycles, and granular role-based dashboards.",
    metrics: "45K+ daily API calls",
    stack: ["Next.js App Router", "GraphQL", "Docker", "GCP"],
    icon: Globe2,
    previewBars: [52, 64, 80, 72, 88, 92, 97],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-slate-200 bg-[#F8FAFC] py-24 transition-colors duration-300 dark:border-[#1F2F28] dark:bg-[#090D0B] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
              Selected Systems
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl">
              Production{" "}
              <span className="bg-gradient-to-r from-[#169A48] to-[#1EB954] bg-clip-text text-transparent">
                Architecture in Action
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            Real-world systems delivering high uptime, predictable scaling, and mission-critical
            performance across industries.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#169A48]/50 hover:shadow-lg dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/60 dark:hover:shadow-[0_16px_45px_rgba(22,154,72,0.16)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-[#169A48] transition-colors group-hover:bg-[#169A48] group-hover:text-white dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954] dark:group-hover:border-[#1EB954]/40 dark:group-hover:bg-[#169A48]/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider dark:text-[#94A3B8]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-6 flex items-center justify-between font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-[#0F172A] dark:text-white">
                    <span>{item.title}</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#169A48] dark:text-[#94A3B8] dark:group-hover:text-[#1EB954]" />
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {item.description}
                  </p>

                  {/* Telemetry Preview Graphic */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 dark:border-[#1F2F28]/60 dark:bg-[#090D0B]/80">
                    <div className="flex items-end justify-between gap-1.5 h-12">
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
                    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-[#169A48] dark:border-[#1EB954]/30 dark:bg-[#090D0B] dark:text-[#1EB954]">
                      {item.metrics}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:border-[#1F2F28]/60 dark:bg-[#090D0B]/80 dark:text-[#94A3B8]"
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
      </div>
    </section>
  );
}
