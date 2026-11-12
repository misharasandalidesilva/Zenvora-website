"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const aiGreetings = [
  "Hi! I'm ZENVORA AI. Ready to build?",
  "Turning your ideas into live systems.",
  "Web • ERP • Cloud — Let's engineer it!",
];

export default function RobotShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

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
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
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
      aria-label="Interactive ZENVORA AI Robot — click to cycle greeting"
      className="group relative flex w-full max-w-[540px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 bg-[#090D0B] p-4 shadow-[0_24px_70px_rgba(15,23,42,0.18)] select-none focus:outline-none dark:overflow-visible dark:border-transparent dark:bg-transparent dark:p-0 dark:shadow-none"
    >
      {/* Cursor-tracking dynamic emerald aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 220px at ${glowPos.x}% ${glowPos.y}%, rgba(30, 185, 84, ${
            isHovered ? 0.28 : 0.16
          }), transparent 75%)`,
        }}
      />

      {/* Active Holographic Orbital Rings */}
      <div
        aria-hidden="true"
        className="animate-spin-slow pointer-events-none absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#1EB954]/20 sm:h-[400px] sm:w-[400px]"
      />
      <div
        aria-hidden="true"
        className="animate-spin-reverse-slow pointer-events-none absolute h-[250px] w-[250px] rounded-full border border-[#169A48]/15 sm:h-[310px] sm:w-[310px]"
      />

      {/* Minimal Floating AI Greeting Pill */}
      <div
        className={`pointer-events-none absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-[#1EB954]/40 bg-[#090D0B]/90 px-3.5 py-1.5 text-xs font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-300 sm:top-6 sm:right-4 ${
          isHovered
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-1 scale-95 opacity-90"
        }`}
      >
        <span className="flex items-center gap-0.5">
          <span className="h-2 w-0.5 animate-pulse rounded-full bg-[#1EB954]" />
          <span className="h-3 w-0.5 animate-pulse rounded-full bg-[#1EB954] [animation-delay:150ms]" />
          <span className="h-1.5 w-0.5 animate-pulse rounded-full bg-[#1EB954] [animation-delay:300ms]" />
        </span>
        <span className="text-[11px] text-white/95">{aiGreetings[msgIndex]}</span>
        <Sparkles className="h-3 w-3 text-[#1EB954]" />
      </div>

      {/* 3D Tilting & Levitating Robot Layer */}
      <div
        className="relative w-full transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
            isHovered ? 1.03 : 1
          })`,
        }}
      >
        <div className="animate-float-slow relative w-full">
          <Image
            src="/images/zenvora-ai-robot.jpg"
            alt="ZENVORA Interactive AI Digital Systems Companion"
            width={1024}
            height={1024}
            priority
            className="h-auto w-full object-contain mix-blend-lighten [mask-image:radial-gradient(closest-side,black_76%,transparent_100%)]"
          />

          {/* Pulsing Emerald Core Beacon over Robot's Holographic Hand */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[43%] left-[24%] flex h-8 w-8 items-center justify-center"
          >
            <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#1EB954]/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#1EB954]/80 blur-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
