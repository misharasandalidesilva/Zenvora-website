"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  Code2,
  Layers,
} from "lucide-react";

const aiActivities = [
  {
    greeting: "Hi! I'm ZENVORA AI — ready to engineer your solution.",
    task: "Compiling Scalable Architecture...",
    status: "Active • 100% Agile",
    metric: "42ms Latency",
  },
  {
    greeting: "Turning Ideas Into Solutions — Web, ERP & Cloud.",
    task: "Optimizing High-Throughput POS Engine...",
    status: "99.9% Uptime Verified",
    metric: "0.08s Render",
  },
  {
    greeting: "Next.js 16 • TypeScript • Cloud-Native DevOps.",
    task: "Hardening Enterprise Security Layers...",
    status: "Zero Vulnerabilities",
    metric: "A+ Audit Score",
  },
];

export default function RobotShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activityIndex, setActivityIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    // Smooth subtle 3D tilt tracking the cursor
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleInteractiveClick = () => {
    setIsInteracting(true);
    setActivityIndex((prev) => (prev + 1) % aiActivities.length);
    setTimeout(() => setIsInteracting(false), 900);
  };

  const current = aiActivities[activityIndex];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleInteractiveClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleInteractiveClick();
        }
      }}
      aria-label="Interactive ZENVORA AI 3D Robot Engineering Solutions"
      className="group relative flex w-full max-w-[560px] cursor-pointer items-center justify-center py-2 select-none focus:outline-none"
    >
      {/* 1. Full-UI Atmospheric Ambient Glow (Wide diffuse gradient — NO isolated circles) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-8 -bottom-8 rounded-3xl bg-gradient-to-tr from-[#169A48]/8 via-[#1EB954]/12 to-transparent opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100 dark:from-[#169A48]/15 dark:via-[#1EB954]/20"
      />

      {/* 2. Top-Right Floating Interactive Speech Bubble */}
      <div
        className={`pointer-events-none absolute -top-4 right-0 z-30 flex items-center gap-2.5 rounded-2xl border border-emerald-200/90 bg-white/95 px-4 py-2 text-xs font-semibold text-[#0F172A] shadow-[0_12px_30px_rgba(15,23,42,0.1)] backdrop-blur-md transition-all duration-300 dark:border-[#1EB954]/40 dark:bg-[#121915]/95 dark:text-white dark:shadow-[0_12px_35px_rgba(0,0,0,0.7)] sm:-top-6 sm:right-2 ${
          isHovered
            ? "translate-y-0 scale-105 opacity-100"
            : "translate-y-1 scale-100 opacity-95"
        }`}
      >
        <span className="flex items-center gap-0.5">
          <span className="h-2 w-0.5 animate-pulse rounded-full bg-[#169A48] dark:bg-[#1EB954]" />
          <span className="h-3.5 w-0.5 animate-pulse rounded-full bg-[#169A48] [animation-delay:150ms] dark:bg-[#1EB954]" />
          <span className="h-2 w-0.5 animate-pulse rounded-full bg-[#169A48] [animation-delay:300ms] dark:bg-[#1EB954]" />
        </span>
        <span className="text-[11.5px] font-medium tracking-tight">
          {current.greeting}
        </span>
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
      </div>

      {/* 3. 3D Parallax & Levitation Container */}
      <div
        className="relative w-full transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
            isHovered ? 1.02 : 1
          })`,
        }}
      >
        {/* Slow Float Animation */}
        <div className="animate-float-slow relative flex w-full items-center justify-center">
          {/* THE 3D AI ROBOT (Continuous arm, no severed parts, pure transparent canvas) */}
          <Image
            src="/images/zenvora-ai-robot-cutout.png"
            alt="ZENVORA Interactive 3D AI Digital Systems Companion"
            width={1024}
            height={1024}
            priority
            className="h-auto w-full max-w-[500px] object-contain drop-shadow-[0_20px_35px_rgba(22,154,72,0.16)] transition-all duration-300 dark:drop-shadow-[0_26px_55px_rgba(0,0,0,0.9)]"
          />

          {/* 4. ACTIVE ENGINEERING HUD: Floating Holographic Console (Projecting from Robot's Hand) */}
          <div
            aria-hidden="true"
            className="animate-holo-float pointer-events-none absolute -left-2 top-[24%] z-30 max-w-[210px] rounded-xl border border-emerald-300/60 bg-white/90 p-3 shadow-xl backdrop-blur-md transition-all duration-300 dark:border-[#1EB954]/40 dark:bg-[#0c1410]/90 dark:shadow-[0_16px_40px_rgba(0,0,0,0.8)] sm:-left-4 sm:max-w-[230px]"
          >
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-emerald-200/60 pb-1.5 dark:border-[#1F2F28]">
              <div className="flex items-center gap-1.5">
                <Terminal className="h-3 w-3 text-[#169A48] dark:text-[#1EB954]" />
                <span className="font-mono text-[10px] font-bold text-[#0F172A] tracking-wider uppercase dark:text-white">
                  ZENVORA Core
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#1EB954]" />
                <span className="text-[9.5px] font-semibold text-[#169A48] dark:text-[#1EB954]">
                  LIVE
                </span>
              </div>
            </div>

            {/* Active Code / System Stream */}
            <div className="mt-2 space-y-1 font-mono text-[9.5px]">
              <div className="flex items-center gap-1 text-slate-700 dark:text-emerald-300/90">
                <Code2 className="h-2.5 w-2.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
                <span className="truncate">{current.task}</span>
              </div>
              <div className="flex items-center justify-between pt-1 text-[9px] text-slate-500 dark:text-[#94A3B8]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-2.5 w-2.5 text-[#169A48] dark:text-[#1EB954]" />
                  {current.status}
                </span>
                <span className="font-medium text-[#169A48] dark:text-[#1EB954]">
                  {current.metric}
                </span>
              </div>
            </div>
          </div>

          {/* 5. Floating Cloud & ERP Telemetry Chip (Bottom Right) */}
          <div
            aria-hidden="true"
            className="animate-holo-float pointer-events-none absolute -right-2 bottom-[14%] z-20 hidden items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md dark:border-[#1F2F28] dark:bg-[#121915]/90 sm:flex"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-[#169A48] dark:bg-[#1F2F28] dark:text-[#1EB954]">
              <Layers className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-[10.5px] font-bold text-[#0F172A] dark:text-white">
                Systems & Architecture
              </p>
              <p className="flex items-center gap-1 text-[9.5px] text-slate-500 dark:text-[#94A3B8]">
                <Activity className="h-2.5 w-2.5 text-[#169A48] dark:text-[#1EB954]" />
                Enterprise Ready
              </p>
            </div>
          </div>

          {/* 6. Active Holographic Vertical Rays Projecting Upwards from Hand */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[36%] left-[21%] z-20 flex flex-col items-center"
          >
            {/* Holographic vertical light streams */}
            <div className="relative flex h-14 w-12 items-end justify-center overflow-hidden">
              <span
                className={`h-full w-0.5 bg-gradient-to-t from-[#1EB954] to-transparent transition-all duration-500 ${
                  isHovered || isInteracting
                    ? "opacity-90 scale-y-110"
                    : "opacity-45"
                }`}
              />
              <span
                className={`mx-1.5 h-3/4 w-0.5 bg-gradient-to-t from-[#6EE7B7] to-transparent transition-all duration-500 ${
                  isHovered || isInteracting
                    ? "opacity-95 scale-y-125"
                    : "opacity-40"
                }`}
              />
              <span
                className={`h-4/5 w-0.5 bg-gradient-to-t from-[#169A48] to-transparent transition-all duration-500 ${
                  isHovered || isInteracting
                    ? "opacity-85 scale-y-110"
                    : "opacity-35"
                }`}
              />
            </div>
            {/* Floating Energy Particle at the Hand Base */}
            <span className="h-2 w-2 rounded-full bg-[#1EB954] shadow-[0_0_12px_#1EB954]" />
          </div>

          {/* 7. Subtle Core Light on Robot's Chest */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[57%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1EB954]/80 blur-[1px]" />
          </div>

          {/* 8. Soft Ground Floating Shadow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 left-1/2 h-4 w-1/2 -translate-x-1/2 rounded-full bg-[#169A48]/12 blur-md dark:bg-black/35"
          />
        </div>
      </div>
    </div>
  );
}
