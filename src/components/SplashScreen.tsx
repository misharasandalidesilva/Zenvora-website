"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => {
      setPhase("fading");
      document.body.style.overflow = "";
    }, 1700);

    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 2250);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-[#090D0B] ${
        phase === "fading"
          ? "pointer-events-none -translate-y-2 scale-[1.02] opacity-0"
          : "opacity-100"
      }`}
    >
      <div className="bg-grid-obsidian pointer-events-none absolute inset-0 opacity-35 [mask-image:radial-gradient(circle_at_center,black_15%,transparent_70%)]" />
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-[#169A48]/18 blur-[130px] dark:bg-[#169A48]/22" />

      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
        <div className="h-px w-full max-w-2xl origin-center animate-[splashLineExpand_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards] bg-gradient-to-r from-transparent via-[#169A48] to-transparent dark:via-[#1EB954]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="animate-[splashRevealUp_0.75s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          <Image
            src="/images/zenvora-icon-light.png"
            alt="ZENVORA Logo"
            width={96}
            height={68}
            priority
            className="block h-14 w-auto object-contain drop-shadow-[0_0_24px_rgba(22,154,72,0.25)] dark:hidden sm:h-16"
          />
          <Image
            src="/images/zenvora-icon-dark.png"
            alt="ZENVORA Logo"
            width={96}
            height={68}
            priority
            className="hidden h-14 w-auto object-contain drop-shadow-[0_0_28px_rgba(30,185,84,0.45)] dark:block sm:h-16"
          />
        </div>

        <h2 className="mt-6 animate-[splashRevealUp_0.75s_cubic-bezier(0.22,1,0.36,1)_0.18s_both] font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-[0.34em] text-[#0F172A] dark:text-white sm:text-3xl">
          ZENVOR<span className="text-[#169A48] dark:text-[#1EB954]">A</span>
        </h2>

        <p className="mt-2.5 animate-[splashRevealUp_0.75s_cubic-bezier(0.22,1,0.36,1)_0.34s_both] font-mono text-[11px] font-medium tracking-[0.26em] text-slate-500 uppercase dark:text-[#94A3B8]">
          Turning Ideas Into Solutions.
        </p>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <div className="h-[1.5px] w-40 overflow-hidden rounded-full bg-slate-200 dark:bg-[#1F2F28]/80">
          <div className="h-full w-full origin-left animate-[splashProgress_1.55s_cubic-bezier(0.22,1,0.36,1)_forwards] bg-gradient-to-r from-transparent via-[#169A48] to-[#1EB954] dark:via-[#1EB954] dark:to-[#6EE7B7]" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase dark:text-[#94A3B8]/60">
          Initializing Experience
        </span>
      </div>
    </div>
  );
}
