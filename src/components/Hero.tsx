import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import RobotShowcase from "@/components/RobotShowcase";

const marqueeItems = [
  "Turning Ideas Into Solutions",
  "Custom Web Applications",
  "Next.js & TypeScript",
  "Enterprise ERP & POS",
  "UI/UX Design Systems",
  "Cloud Infrastructure & DevOps",
  "Payment Gateway Integration",
  "REST & GraphQL Microservices",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-14 pb-16 transition-colors duration-300 dark:bg-[#090D0B] sm:pt-20 sm:pb-24"
    >
      <div className="bg-grid-obsidian pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] dark:opacity-60" />
      <div className="bg-dot-matrix pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_75%_35%,black_10%,transparent_55%)] dark:opacity-25" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[540px] w-[820px] -translate-x-1/2 rounded-full bg-[#169A48]/10 blur-[150px] dark:bg-[#169A48]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-36 right-8 h-[420px] w-[420px] rounded-full bg-[#1EB954]/10 blur-[140px] dark:bg-[#1EB954]/14"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="text-center lg:col-span-6 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#169A48] shadow-xs dark:border-[#1F2F28] dark:bg-[#121915]/90 dark:text-[#1EB954] dark:shadow-[0_0_24px_rgba(22,154,72,0.16)]">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
              <span>TURNING IDEAS INTO SOLUTIONS.</span>
            </div>

            <h1 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.06]">
              Your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#169A48] via-[#1EB954] to-[#10B981] bg-clip-text text-transparent dark:to-[#6EE7B7]">
                  Vision.
                </span>
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#169A48] to-transparent" />
              </span>
              <br />
              Our{" "}
              <span className="bg-gradient-to-r from-[#169A48] via-[#1EB954] to-[#10B954] bg-clip-text text-transparent dark:from-[#1EB954] dark:via-[#34D399] dark:to-[#169A48]">
                Technology.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-lg lg:mx-0">
              Turning Ideas Into Solutions — we engineer scalable business systems, modern
              web applications, and intuitive digital experiences built to accelerate
              enterprise growth.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/contact"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#169A48] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(22,154,72,0.35)] transition-all duration-300 hover:bg-[#1EB954] hover:shadow-[0_0_44px_rgba(30,185,84,0.6)] sm:w-auto"
              >
                <span className="animate-beam pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]" />
                <span className="relative">Start Your Project</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#169A48] hover:text-[#169A48] dark:border-[#1F2F28] dark:bg-[#121915]/80 dark:text-white dark:hover:border-[#1EB954]/60 dark:hover:bg-[#121915] sm:w-auto"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200 pt-7 text-left dark:border-[#1F2F28]/80">
              {[
                { icon: Zap, title: "Rapid Sprints", sub: "Weekly live builds" },
                { icon: ShieldCheck, title: "Hardened Code", sub: "Strict TypeScript" },
                { icon: Cpu, title: "Scalable Core", sub: "Cloud-native ready" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-[#169A48] dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#1EB954]">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#0F172A] dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-[#94A3B8]">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-6">
            <RobotShowcase />
          </div>
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-slate-200 bg-slate-50 py-3.5 dark:border-[#1F2F28]/70 dark:bg-[#121915]/40">
        <div className="animate-marquee items-center gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center gap-8 whitespace-nowrap text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-[#94A3B8]"
            >
              <span>{item}</span>
              <span className="text-[#169A48] dark:text-[#1EB954]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
