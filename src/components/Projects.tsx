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
      className="relative border-t border-[#1F2F28] bg-[#090D0B] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[#1F2F28] bg-[#121915] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#1EB954] uppercase">
              Selected Systems
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Production{" "}
              <span className="bg-gradient-to-r from-[#169A48] to-[#1EB954] bg-clip-text text-transparent">
                Blueprints &amp; Case Studies
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1EB954] transition-colors hover:text-white"
          >
            Request full portfolio deck
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1F2F28] bg-[#121915] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1EB954]/55 hover:shadow-[0_14px_45px_rgba(22,154,72,0.14)]"
              >
                <div>
                  <div className="mb-6 rounded-xl border border-[#1F2F28] bg-[#090D0B] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#169A48]/15 text-[#1EB954]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">
                            {project.category}
                          </p>
                          <p className="text-xs font-semibold text-[#1EB954]">
                            {project.metrics}
                          </p>
                        </div>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-[#1EB954] shadow-[0_0_8px_#1EB954]" />
                    </div>

                    <div className="mt-4 flex h-10 items-end gap-1.5">
                      {project.previewBars.map((val, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-[#169A48]/50 to-[#1EB954] opacity-75 transition-all duration-300 group-hover:opacity-100"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#94A3B8]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-[#1F2F28]/80 pt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#1F2F28] bg-[#090D0B] px-2.5 py-1 font-mono text-[11px] text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
