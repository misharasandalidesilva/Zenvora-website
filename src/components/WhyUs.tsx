import { CheckCircle2, Gauge, Lock, Layers3 } from "lucide-react";

const pillars = [
  {
    title: "Architecture First, Not Shortcuts",
    description:
      "Every codebase is engineered with strict TypeScript contracts, modular domain boundaries, and zero-tech-debt patterns.",
    icon: Layers3,
  },
  {
    title: "Sub-Second Speed & Core Web Vitals",
    description:
      "Server-side rendering, edge caching, and lean bundle optimization ensure every interface responds instantaneously.",
    icon: Gauge,
  },
  {
    title: "Enterprise Security & Data Integrity",
    description:
      "Role-based access control, encrypted API pipelines, and automated backups baked into the foundation from day one.",
    icon: Lock,
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative border-t border-slate-200 bg-white py-24 transition-colors duration-300 dark:border-[#1F2F28] dark:bg-[#090D0B] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
              Why Zenvora
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl">
              Built for Teams That{" "}
              <span className="bg-gradient-to-r from-[#169A48] to-[#1EB954] bg-clip-text text-transparent">
                Refuse Fragile Software
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              We operate as an embedded engineering partner—combining boutique design
              precision with rock-solid systems architecture that scales effortlessly as
              your revenue grows.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                "Direct access to senior systems architects",
                "Weekly sprint demos with transparent Git velocity",
                "Full source-code ownership & comprehensive documentation",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm font-medium text-[#0F172A] dark:text-white"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-xs transition-all duration-300 hover:border-[#169A48]/50 hover:shadow-md dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/50 dark:hover:shadow-[0_0_30px_rgba(22,154,72,0.12)] sm:flex-row sm:items-start"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-[#169A48] transition-colors group-hover:bg-[#169A48] group-hover:text-white dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954] dark:group-hover:border-[#1EB954]/40 dark:group-hover:bg-[#169A48]/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-[#0F172A] dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
