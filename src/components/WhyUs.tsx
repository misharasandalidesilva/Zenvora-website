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
      className="relative border-t border-[#1F2F28] bg-[#090D0B] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-[#1F2F28] bg-[#121915] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#1EB954] uppercase">
              Why Zenvora
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for Teams That{" "}
              <span className="bg-gradient-to-r from-[#169A48] to-[#1EB954] bg-clip-text text-transparent">
                Refuse Fragile Software
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
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
                <li key={point} className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1EB954]" />
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
                  className="group flex flex-col gap-4 rounded-2xl border border-[#1F2F28] bg-[#121915] p-6 transition-all duration-300 hover:border-[#1EB954]/50 sm:flex-row sm:items-start"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1F2F28] bg-[#090D0B] text-[#1EB954] transition-colors group-hover:border-[#1EB954]/40 group-hover:bg-[#169A48]/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
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
