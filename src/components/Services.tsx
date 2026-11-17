import Link from "next/link";
import {
  Code2,
  Building2,
  Palette,
  CloudCog,
  ShoppingCart,
  Network,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    num: "01",
    title: "Custom Web Applications",
    description:
      "Production-grade web platforms engineered with Next.js, React, and scalable APIs designed for speed, security, and long-term maintainability.",
    tags: ["Next.js", "React", "Scalable APIs"],
    icon: Code2,
    spanClass: "lg:col-span-7",
    highlight: "Flagship Engineering",
  },
  {
    num: "02",
    title: "ERP & POS Systems",
    description:
      "Tailored enterprise resource planning and point-of-sale ecosystems that unify inventory, multi-branch workflows, and automated billing.",
    tags: ["Inventory", "Workflows", "Auto-Billing"],
    icon: Building2,
    spanClass: "lg:col-span-5",
    highlight: "Business Automation",
  },
  {
    num: "03",
    title: "UI/UX Design & Prototyping",
    description:
      "High-converting product interfaces crafted with Figma wireframes, mapped user journeys, and cohesive token-driven design systems.",
    tags: ["Figma", "User Journeys", "Design Systems"],
    icon: Palette,
    spanClass: "lg:col-span-4",
  },
  {
    num: "04",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Resilient cloud architecture featuring automated CI/CD pipelines, containerized workloads, and zero-downtime high-uptime deployments.",
    tags: ["CI/CD", "AWS / GCP", "High Uptime"],
    icon: CloudCog,
    spanClass: "lg:col-span-4",
  },
  {
    num: "05",
    title: "E-Commerce Platforms",
    description:
      "Custom high-speed digital storefronts engineered for conversion with seamless local and international payment gateway integrations.",
    tags: ["Custom Stores", "Stripe / Local Pay", "Headless"],
    icon: ShoppingCart,
    spanClass: "lg:col-span-4",
  },
  {
    num: "06",
    title: "API & Systems Integration",
    description:
      "Clean microservices, hardened REST/GraphQL endpoints, and reliable third-party data synchronization connecting your entire enterprise ecosystem.",
    tags: ["Microservices", "Secure Endpoints", "3rd-Party Sync", "Webhooks"],
    icon: Network,
    spanClass: "lg:col-span-12",
    highlight: "Connected Ecosystem",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-white py-24 transition-colors duration-300 dark:bg-[#090D0B] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
              Core Capabilities
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl">
              Engineered Solutions for{" "}
              <span className="bg-gradient-to-r from-[#169A48] to-[#1EB954] bg-clip-text text-transparent">
                Modern Enterprises
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            Turning Ideas Into Solutions — from bespoke SaaS applications to
            mission-critical ERP software, every system is crafted for measurable ROI.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {services.map((service) => {
            const Icon = service.icon;
            const isFullWidth = service.spanClass === "lg:col-span-12";
            return (
              <div
                key={service.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#169A48]/50 hover:shadow-[0_14px_40px_rgba(22,154,72,0.10)] dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/60 dark:hover:shadow-[0_14px_45px_rgba(22,154,72,0.16)] md:col-span-1 ${service.spanClass}`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#1EB954] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-[#169A48]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div
                  className={
                    isFullWidth
                      ? "flex flex-col justify-between gap-6 lg:flex-row lg:items-center"
                      : ""
                  }
                >
                  <div className={isFullWidth ? "max-w-2xl" : ""}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-[#169A48] transition-all duration-300 group-hover:bg-[#169A48] group-hover:text-white dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954] dark:group-hover:border-[#1EB954]/50 dark:group-hover:bg-[#169A48]/15 dark:group-hover:shadow-[0_0_24px_rgba(30,185,84,0.28)]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#169A48] dark:text-[#94A3B8]/60 dark:group-hover:text-[#1EB954]">
                            /{service.num}
                          </span>
                          {service.highlight && (
                            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-[#169A48] dark:border-[#1EB954]/30 dark:bg-[#169A48]/10 dark:text-[#1EB954]">
                              {service.highlight}
                            </span>
                          )}
                        </div>
                      </div>

                      {!isFullWidth && (
                        <a
                          href="#contact"
                          aria-label={`Inquire about ${service.title}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-400 transition-all group-hover:border-slate-200 group-hover:bg-slate-50 group-hover:text-[#169A48] dark:text-[#94A3B8]/50 dark:group-hover:border-[#1F2F28] dark:group-hover:bg-[#090D0B] dark:group-hover:text-[#1EB954]"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <h3 className="mt-6 font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-[#0F172A] dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                      {service.description}
                    </p>
                  </div>

                  {isFullWidth && (
                    <div className="flex shrink-0 flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 dark:border-[#1F2F28] dark:bg-[#090D0B]">
                      <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-[#0F172A] dark:border-[#1F2F28] dark:bg-[#121915] dark:text-white">
                        Web / Mobile
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#169A48] dark:text-[#1EB954]" />
                      <span className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 font-mono text-xs font-semibold text-[#169A48] dark:border-[#1EB954]/40 dark:bg-[#169A48]/15 dark:text-[#1EB954]">
                        ZENVORA API Mesh
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#169A48] dark:text-[#1EB954]" />
                      <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-[#0F172A] dark:border-[#1F2F28] dark:bg-[#121915] dark:text-white">
                        ERP &bull; Payments &bull; Cloud
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5 dark:border-[#1F2F28]/80">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600 transition-colors group-hover:border-emerald-200 group-hover:text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#94A3B8] dark:group-hover:border-[#1EB954]/30 dark:group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-[#0F172A] shadow-xs transition-all duration-300 hover:border-[#169A48] hover:text-[#169A48] hover:shadow-md dark:border-[#1F2F28] dark:bg-[#121915] dark:text-white dark:hover:border-[#1EB954]/60 dark:hover:text-[#1EB954]"
          >
            Explore All 6 Detailed Services &amp; Tech Stacks
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
