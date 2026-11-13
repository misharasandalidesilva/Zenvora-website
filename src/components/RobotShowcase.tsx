"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, Activity, Cpu, Waves } from "lucide-react";

const aiGreetings = [
  "Hi! I'm ZENVORA AI — ready to build?",
  "Turning your ideas into live solutions.",
  "Web • ERP • Cloud — Let's engineer it!",
  "Always online. Let's create something extraordinary.",
];

export default function RobotShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    // Smooth subtle 3D tilt
    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 12;
    setTilt({ x: rotateX, y: rotateY });
    setGlowPos({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  const handleRobotClick = () => {
    setMsgIndex((prev) => (prev + 1) % aiGreetings.length);
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1400);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 1200);
      }}
      onMouseLeave={handleMouseLeave}
      onClick={handleRobotClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleRobotClick();
        }
      }}
      aria-label="Interactive ZENVORA AI 3D Robot — hover or click to interact"
      className="group relative flex w-full max-w-[520px] cursor-pointer items-center justify-center py-2 select-none focus:outline-none"
    >
      {/* 1. Dynamic Cursor-Tracking Ambient Emerald Aura (Zero Box, Zero Borders) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle 240px at ${glowPos.x}% ${glowPos.y}%, rgba(30, 185, 84, ${
            isHovered ? 0.26 : 0.14
          }), transparent 75%)`,
        }}
      />

      {/* 2. Soft Ambient Deep Backlight Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#169A48]/12 blur-[100px] transition-all duration-500 group-hover:bg-[#1EB954]/22 dark:bg-[#169A48]/25 dark:group-hover:bg-[#1EB954]/35 sm:h-96 sm:w-96"
      />

      {/* 3. Floating Interactive Speech Bubble (Top Right) */}
      <div
        className={`pointer-events-none absolute -top-2 right-2 z-30 flex items-center gap-2 rounded-full border border-emerald-200/90 bg-white/95 px-4 py-2 text-xs font-semibold text-[#0F172A] shadow-[0_12px_32px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all duration-300 dark:border-[#1EB954]/40 dark:bg-[#121915]/95 dark:text-white dark:shadow-[0_12px_35px_rgba(0,0,0,0.7)] sm:-top-4 sm:right-4 ${
          isHovered
            ? "translate-y-0 scale-105 opacity-100"
            : "translate-y-1 scale-100 opacity-95"
        }`}
      >
        <span className="flex items-center gap-0.5">
          <span className="h-2 w-0.5 animate-pulse rounded-full bg-[#169A48] dark:bg-[#1EB954]" />
          <span className="h-3.5 w-0.5 animate-pulse rounded-full bg-[#169A48] [animation-delay:150ms] dark:bg-[#1EB954]" />
          <span className="h-1.5 w-0.5 animate-pulse rounded-full bg-[#169A48] [animation-delay:300ms] dark:bg-[#1EB954]" />
        </span>
        <span className="text-[11.5px] font-medium tracking-tight">
          {aiGreetings[msgIndex]}
        </span>
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#169A48] dark:text-[#1EB954]" />
      </div>

      {/* 4. Floating Live Telemetry Badge (Floating on Left) */}
      <div
        aria-hidden="true"
        className="animate-holo-float pointer-events-none absolute -left-2 top-1/4 z-20 hidden items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#0F172A] shadow-md backdrop-blur-md dark:border-[#1F2F28] dark:bg-[#121915]/85 dark:text-white sm:flex"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1EB954] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#169A48] dark:bg-[#1EB954]" />
        </span>
        <Activity className="h-3 w-3 text-[#169A48] dark:text-[#1EB954]" />
        <span>100% Agile Core</span>
      </div>

      {/* 5. Floating Tech Hologram Chip (Floating on Bottom-Right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 bottom-6 z-20 hidden items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-slate-700 shadow-md backdrop-blur-md dark:border-[#1F2F28] dark:bg-[#121915]/85 dark:text-slate-200 sm:flex"
      >
        <Cpu className="h-3 w-3 text-[#169A48] dark:text-[#1EB954]" />
        <span>Next.js 16 • Cloud Native</span>
      </div>

      {/* 6. 3D Tilt + Floating Levitating Character Container */}
      <div
        className="relative w-full transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
            isHovered ? 1.03 : 1
          })`,
        }}
      >
        {/* Continuous Levitation Motion */}
        <div className="animate-float-slow relative flex w-full items-center justify-center">
          {/* THE ORIGINAL 3D AI ROBOT (Decontaminated Transparent Cutout — No Black Box/Circle) */}
          <Image
            src="/images/zenvora-ai-robot-cutout.png"
            alt="ZENVORA Interactive 3D AI Digital Systems Companion"
            width={1024}
            height={1024}
            priority
            className="h-auto w-full max-w-[480px] object-contain drop-shadow-[0_22px_40px_rgba(22,154,72,0.18)] transition-all duration-300 dark:drop-shadow-[0_24px_55px_rgba(0,0,0,0.85)]"
          />

          {/* 7. Active Waving / Holographic Energy Ripple on Robot's Raised Hand (Left side of viewer / Robot's Right) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[38%] left-[24%] z-20 flex items-center justify-center"
          >
            {/* Concentric Holographic Sonar Waves */}
            <span
              className={`absolute h-14 w-14 rounded-full border border-[#1EB954]/50 transition-all duration-700 ${
                isWaving ? "animate-ping scale-150 opacity-90" : "animate-pulse opacity-40"
              }`}
            />
            <span
              className={`absolute h-8 w-8 rounded-full bg-[#1EB954]/25 transition-all duration-500 ${
                isWaving ? "scale-125" : "scale-100"
              }`}
            />
            <span className="h-3 w-3 rounded-full bg-[#1EB954] shadow-[0_0_14px_#1EB954]" />

            {/* Dynamic Hand Waving Indicator Badge */}
            <div
              className={`absolute -top-7 -left-3 flex items-center gap-1 rounded-full border border-emerald-300/80 bg-white/95 px-2 py-0.5 text-[10px] font-bold text-[#169A48] shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-[#1EB954]/60 dark:bg-[#090D0B]/95 dark:text-[#1EB954] ${
                isWaving || isHovered
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-1 scale-90 opacity-0"
              }`}
            >
              <Waves className="h-3 w-3 animate-bounce" />
              <span>Wave!</span>
            </div>
          </div>

          {/* 8. Pulsing Emerald Core Reactor on Robot's Chest */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[57%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <span className="absolute -inset-2 animate-pulse rounded-full bg-[#1EB954]/20 blur-xs" />
            <span className="inline-block h-3 w-3 rounded-full bg-[#1EB954]/70 blur-[1px]" />
          </div>

          {/* 9. Soft Ground Floating Shadow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-2 left-1/2 h-5 w-3/5 -translate-x-1/2 rounded-full bg-[#169A48]/15 blur-md dark:bg-black/40"
          />
        </div>
      </div>
    </div>
  );
}
