import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Building2,
  Palette,
  CloudCog,
  ShoppingCart,
  Network,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities — ZENVORA",
  description:
    "Explore our full spectrum of engineering capabilities: Custom Web Apps, ERP & POS Systems, Cloud & DevOps, UI/UX Design, E-Commerce, and API Mesh Integration.",
};

const detailedServices = [
  {
    num: "01",
    id: "web-apps",
    title: "Custom Web Applications",
    tagline: "High-performance full-stack web applications engineered with Next.js, React, and strict TypeScript.",
    icon: Code2,
    deliverables: [
      "Server-side rendered Next.js App Router architectures",
      "Type-safe full-stack micro-frontends with Tailwind CSS",
      "Dynamic state machines & real-time WebSocket interfaces",
      "Sub-second Core Web Vitals and edge caching",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    num: "02",
    id: "erp-pos",
    title: "Enterprise ERP & POS Systems",
    tagline: "Tailored resource planning, inventory distribution, and point-of-sale platforms.",
    icon: Building2,
    deliverables: [
      "Multi-branch & warehouse synchronized inventory telemetry",
      "Automated supplier purchase orders & re-order algorithms",
      "Offline-first POS checkout with fiscal thermal printer drivers",
      "Real-time executive balance sheet & P&L analytics",
    ],
    tech: ["PostgreSQL", "Prisma ORM", "Redis", "Docker", "REST & GraphQL"],
  },
  {
    num: "03",
    id: "ui-ux",
    title: "UI/UX Design & Design Systems",
    tagline: "Conversion-optimized product design, interactive wireframes, and enterprise design tokens.",
    icon: Palette,
    deliverables: [
      "Figma design systems with unified token architecture",
      "High-fidelity clickable interactive user prototypes",
      "User journey mapping & usability stress testing",
      "Accessibility (WCAG 2.1 AA) compliance auditing",
    ],
    tech: ["Figma", "Design Tokens", "Prototyping", "Wireframing", "A/B Testing"],
  },
  {
    num: "04",
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    tagline: "Resilient multi-region cloud setups, automated CI/CD pipelines, and high-uptime cluster orchestration.",
    icon: CloudCog,
    deliverables: [
      "Automated GitHub Actions CI/CD staging & production pipelines",
      "Dockerized container clustering & Kubernetes workload scaling",
      "Cloudflare edge firewall, DDoS shielding & SSL certificate automation",
      "24/7 proactive health telemetry, Sentry APM & Prometheus alerting",
    ],
    tech: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    num: "05",
    id: "ecommerce",
    title: "High-Conversion E-Commerce Platforms",
    tagline: "Custom headless storefronts engineered for sub-second checkout and high conversion rates.",
    icon: ShoppingCart,
    deliverables: [
      "Custom headless shopping cart and instant multi-step checkout",
      "Payment gateway integration (Stripe, PayPal, local bank IPGs)",
      "Automated invoice dispatch, SMS notification & courier webhooks",
      "Promotional coupon engines, gift cards & tiered loyalty programs",
    ],
    tech: ["Next.js", "Stripe API", "Headless CMS", "Redis Queue", "SendGrid"],
  },
  {
    num: "06",
    id: "api-integration",
    title: "API Mesh & Enterprise Integration",
    tagline: "Unified microservices, webhook broker pipelines, and legacy database bridging.",
    icon: Network,
    deliverables: [
      "High-throughput REST and GraphQL microservice endpoints",
      "Resilient asynchronous event message broker (Kafka / RabbitMQ)",
      "Legacy on-premise SQL/ERP database synchronization bridges",
      "Granular OAuth2 / JWT role-based access control (RBAC)",
    ],
    tech: ["GraphQL", "REST APIs", "Kafka", "OAuth2 / JWT", "Webhooks"],
  },
];

const techStack = [
  { category: "Frontend & Mobile", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "React Native"] },
  { category: "Backend & Systems", items: ["Node.js", "Python / FastAPI", "GraphQL", "REST Microservices", "WebSockets"] },
  { category: "Databases & Cache", items: ["PostgreSQL", "Redis", "Prisma ORM", "MongoDB", "Elasticsearch"] },
  { category: "Cloud & Reliability", items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel Enterprise"] },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-white py-14 transition-colors duration-300 dark:bg-[#090D0B] sm:py-20">
      <div className="bg-grid-obsidian pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] dark:opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Full-Spectrum Capabilities</span>
          </div>

          <h1 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl">
            Engineering Systems That Accelerate{" "}
            <span className="bg-gradient-to-r from-[#169A48] via-[#1EB954] to-[#10B981] bg-clip-text text-transparent">
              Enterprise Growth
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-lg">
            Turning Ideas Into Solutions. From boutique SaaS products to mission-critical ERP software,
            we architect, design, and deploy software built to scale with zero friction.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="mt-16 space-y-8">
          {detailedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-8 shadow-xs transition-all duration-300 hover:border-[#169A48]/50 hover:shadow-xl dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/60 dark:hover:shadow-[0_20px_60px_rgba(22,154,72,0.14)] lg:p-10"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#169A48] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-[#1EB954]" />

                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 items-center rounded-lg border border-emerald-200 bg-emerald-50 px-3 font-mono text-xs font-bold text-[#169A48] dark:border-[#1EB954]/30 dark:bg-[#090D0B] dark:text-[#1EB954]">
                        SERVICE {service.num}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#169A48] dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954]">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h2 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-[#0F172A] dark:text-white sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-2 text-base text-slate-600 dark:text-[#94A3B8]">
                      {service.tagline}
                    </p>

                    <div className="mt-6">
                      <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                        Core Deliverables
                      </p>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-[#1F2F28]/70 dark:bg-[#090D0B] lg:col-span-5">
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider dark:text-[#94A3B8]">
                        <Cpu className="h-3.5 w-3.5 text-[#169A48] dark:text-[#1EB954]" />
                        Recommended Tech Stack
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-700 dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#94A3B8]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-[#1F2F28]/80">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#169A48] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:bg-[#1EB954] hover:shadow-[0_0_24px_rgba(30,185,84,0.4)]"
                      >
                        Request a Blueprint for this Service
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack Matrix */}
        <div className="mt-24 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 dark:border-[#1F2F28] dark:bg-[#121915] sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#169A48] uppercase dark:text-[#1EB954]">
              Technology Standards
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-[#0F172A] dark:text-white sm:text-3xl">
              Enterprise-Grade Stacks We Master
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-[#94A3B8]">
              We avoid volatile hype cycles and build exclusively with mature, hardened,
              and well-supported software stacks.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((col) => (
              <div
                key={col.category}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 dark:border-[#1F2F28] dark:bg-[#090D0B]"
              >
                <h3 className="font-[family-name:var(--font-plus-jakarta)] text-sm font-bold text-[#0F172A] dark:text-white">
                  {col.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-[#94A3B8]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#169A48] dark:bg-[#1EB954]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8 text-center shadow-md dark:border-[#1F2F28] dark:from-[#121915] dark:via-[#090D0B] dark:to-[#090D0B] sm:p-12">
          <h2 className="font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
            Need a Custom Architecture for Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-[#94A3B8]">
            Turning Ideas Into Solutions — book a direct technical discovery session with our
            senior systems architect today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#169A48] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(22,154,72,0.3)] transition-all hover:bg-[#1EB954] hover:shadow-[0_0_32px_rgba(30,185,84,0.5)] sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-[#0F172A] transition-all hover:border-[#169A48] hover:text-[#169A48] dark:border-[#1F2F28] dark:bg-[#121915] dark:text-white sm:w-auto"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
