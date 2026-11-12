import { Compass, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Requirement Scoping",
    description:
      "We map your business bottlenecks, technical constraints, and KPIs into a crystal-clear product roadmap and system blueprint.",
    icon: Compass,
  },
  {
    step: "02",
    title: "UI/UX Prototyping & Architecture",
    description:
      "Interactive Figma prototypes paired with database schemas, API contracts, and cloud topology before a single line of code is shipped.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Agile Development & Testing",
    description:
      "Rapid two-week engineering sprints with automated QA, type-safe TypeScript pipelines, and continuous staging previews.",
    icon: Code,
  },
  {
    step: "04",
    title: "Cloud Deployment & Maintenance",
    description:
      "Zero-downtime production rollouts, telemetry observability, and proactive 24/7 SLA support as your business scales.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-slate-200 bg-[#F8FAFC] py-24 transition-colors duration-300 dark:border-[#1F2F28] dark:bg-[#090D0B] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
            Engineering Workflow
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl">
            From Blueprint to{" "}
            <span className="bg-gradient-to-r from-[#169A48] to-[#1EB954] bg-clip-text text-transparent">
              Production in 4 Steps
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-[#94A3B8]">
            A disciplined, transparent execution lifecycle designed to eliminate risk and
            deliver predictable outcomes.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-11 right-12 left-12 hidden h-px bg-gradient-to-r from-slate-200 via-[#169A48]/40 to-slate-200 dark:from-[#1F2F28] dark:via-[#1EB954]/50 dark:to-[#1F2F28] lg:block"
          />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#169A48]/50 hover:shadow-md dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/60 dark:hover:shadow-[0_12px_38px_rgba(22,154,72,0.14)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 items-center rounded-xl border border-emerald-200 bg-emerald-50 px-3 font-mono text-sm font-bold text-[#169A48] dark:border-[#1EB954]/30 dark:bg-[#090D0B] dark:text-[#1EB954]">
                      STEP {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition-colors group-hover:border-[#169A48]/40 group-hover:text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#94A3B8] dark:group-hover:border-[#1EB954]/40 dark:group-hover:text-[#1EB954]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-[#0F172A] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
