"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, ShieldCheck, Cpu, Headphones } from "lucide-react";

interface MetricItem {
  value: string;
  numericTarget?: number;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const metrics: MetricItem[] = [
  {
    value: "100%",
    numericTarget: 100,
    suffix: "%",
    label: "Agile & Scalable Delivery",
    sublabel: "Sprint-driven transparent shipping",
    icon: Zap,
  },
  {
    value: "99.9%",
    numericTarget: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime Cloud Standards",
    sublabel: "Fault-tolerant cloud architecture",
    icon: ShieldCheck,
  },
  {
    value: "50+",
    numericTarget: 50,
    suffix: "+",
    label: "System Architecture Blueprints",
    sublabel: "Production systems deployed",
    icon: Cpu,
  },
  {
    value: "24/7",
    label: "Ongoing Tech Support",
    sublabel: "Proactive monitoring & SLA care",
    icon: Headphones,
  },
];

function AnimatedValue({ item, trigger }: { item: MetricItem; trigger: boolean }) {
  const [display, setDisplay] = useState(
    item.numericTarget !== undefined ? `0${item.suffix ?? ""}` : item.value
  );

  useEffect(() => {
    if (!trigger || item.numericTarget === undefined) {
      return;
    }

    const target = item.numericTarget;
    const decimals = item.decimals ?? 0;
    const duration = 1400;
    const start = performance.now();

    let frameId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setDisplay(`${current.toFixed(decimals)}${item.suffix ?? ""}`);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [trigger, item]);

  return <span>{display}</span>;
}

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 border-y border-slate-200 bg-[#F8FAFC] transition-colors duration-300 dark:border-[#1F2F28] dark:bg-[#090D0B]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#169A48]/50 hover:shadow-md dark:border-[#1F2F28] dark:bg-[#121915] dark:shadow-none dark:hover:border-[#1EB954]/50 dark:hover:shadow-[0_0_30px_rgba(22,154,72,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-4xl">
                    <AnimatedValue item={item} trigger={visible} />
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-[#169A48] transition-colors group-hover:bg-[#169A48] group-hover:text-white dark:border-[#1F2F28] dark:bg-[#090D0B] dark:text-[#1EB954] dark:group-hover:border-[#1EB954]/40 dark:group-hover:bg-[#169A48]/10">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-[#0F172A] dark:text-white">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-[#94A3B8]">
                  {item.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
