"use client";

import { useState, useRef } from "react";
import { Sparkles } from "lucide-react";

const aiGreetings = [
  "Hi! I'm ZENVORA AI — ready to build?",
  "Turning your ideas into live solutions.",
  "Web • ERP • Cloud — Let's engineer it!",
];

export default function RobotShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 14;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
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
      aria-label="Interactive ZENVORA AI Robot — hover or click to interact"
      className="group relative flex w-full max-w-[500px] cursor-pointer items-center justify-center py-4 select-none focus:outline-none"
    >
      {/* Subtle Ambient Emerald Glow (no box, no black circle) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#169A48]/14 blur-[95px] transition-all duration-500 group-hover:bg-[#1EB954]/24 dark:bg-[#169A48]/22 dark:group-hover:bg-[#1EB954]/30 sm:h-80 sm:w-80"
      />

      {/* Minimal Floating Speech Pill */}
      <div
        className={`pointer-events-none absolute top-2 right-0 z-20 flex items-center gap-2 rounded-full border border-emerald-200 bg-white/95 px-3.5 py-1.5 text-xs font-medium text-[#0F172A] shadow-lg backdrop-blur-md transition-all duration-300 dark:border-[#1EB954]/40 dark:bg-[#121915]/95 dark:text-white dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] sm:top-4 sm:right-2 ${
          isHovered
            ? "translate-y-0 scale-105 opacity-100"
            : "translate-y-1 scale-100 opacity-95"
        }`}
      >
        <span className="flex items-center gap-0.5">
          <span className="h-2 w-0.5 animate-pulse rounded-full bg-[#169A48] dark:bg-[#1EB954]" />
          <span className="h-3 w-0.5 animate-pulse rounded-full bg-[#169A48] [animation-delay:150ms] dark:bg-[#1EB954]" />
          <span className="h-1.5 w-0.5 animate-pulse rounded-full bg-[#169A48] [animation-delay:300ms] dark:bg-[#1EB954]" />
        </span>
        <span className="text-[11px] font-medium">{aiGreetings[msgIndex]}</span>
        <Sparkles className="h-3 w-3 text-[#169A48] dark:text-[#1EB954]" />
      </div>

      {/* 3D Parallax + Levitating Transparent Vector Robot */}
      <div
        className="relative w-full transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
            isHovered ? 1.03 : 1
          })`,
        }}
      >
        <div className="animate-float-slow relative w-full">
          <svg
            viewBox="0 0 460 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full drop-shadow-[0_24px_38px_rgba(15,23,42,0.18)] dark:drop-shadow-[0_24px_45px_rgba(0,0,0,0.65)]"
          >
            <defs>
              {/* Sleek 3D Metallic Body Gradients */}
              <linearGradient id="bodyMetal" x1="140" y1="120" x2="320" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="45%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              <linearGradient id="headShell" x1="150" y1="60" x2="310" y2="210" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#090D0B" />
              </linearGradient>

              <linearGradient id="visorGlass" x1="170" y1="90" x2="290" y2="185" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="60%" stopColor="#06140D" />
                <stop offset="100%" stopColor="#092917" />
              </linearGradient>

              <linearGradient id="emeraldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6EE7B7" />
                <stop offset="50%" stopColor="#1EB954" />
                <stop offset="100%" stopColor="#169A48" />
              </linearGradient>

              <linearGradient id="holoCard" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1EB954" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.85" />
              </linearGradient>

              <filter id="neonGreen" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ground Hover Shadow (floats subtly below robot) */}
            <ellipse
              cx="235"
              cy="408"
              rx="86"
              ry="12"
              fill="#169A48"
              fillOpacity="0.16"
            />

            {/* Floating Holographic UI Window (Right Side — by Robot's Left Hand) */}
            <g className="animate-holo-float">
              {/* Holo Card 1 */}
              <rect
                x="312"
                y="148"
                width="116"
                height="82"
                rx="14"
                fill="url(#holoCard)"
                stroke="#1EB954"
                strokeOpacity="0.55"
                strokeWidth="1.5"
              />
              {/* Window Dots */}
              <circle cx="328" cy="164" r="3" fill="#1EB954" />
              <circle cx="338" cy="164" r="3" fill="#6EE7B7" fillOpacity="0.5" />
              <circle cx="348" cy="164" r="3" fill="#6EE7B7" fillOpacity="0.3" />
              {/* Mini Code / UI Bars */}
              <rect x="326" y="178" width="54" height="6" rx="3" fill="#6EE7B7" fillOpacity="0.85" />
              <rect x="326" y="191" width="84" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.45" />
              <rect x="326" y="203" width="66" height="5" rx="2.5" fill="#94A3B8" fillOpacity="0.35" />
              <rect x="326" y="214" width="38" height="7" rx="3.5" fill="#1EB954" />

              {/* Holo Orbit Ring & Sparkle */}
              <ellipse
                cx="370"
                cy="132"
                rx="34"
                ry="9"
                transform="rotate(-14 370 132)"
                stroke="#1EB954"
                strokeOpacity="0.45"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <circle cx="398" cy="122" r="3.5" fill="#6EE7B7" filter="url(#neonGreen)" />
              <circle cx="320" cy="248" r="2.5" fill="#1EB954" filter="url(#neonGreen)" />
            </g>

            {/* Left Articulated Arm (Holding/Pointing to Holographic UI) */}
            <g>
              {/* Shoulder Joint */}
              <circle cx="308" cy="242" r="20" fill="#1E293B" stroke="#475569" strokeWidth="2" />
              <circle cx="308" cy="242" r="9" fill="#0F172A" stroke="#1EB954" strokeWidth="2" />
              {/* Upper Arm */}
              <path
                d="M312 252 L344 278 L368 254"
                stroke="url(#bodyMetal)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Emerald Forearm Accent */}
              <path
                d="M344 278 L368 254"
                stroke="#1EB954"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#neonGreen)"
              />
              {/* Open Hand */}
              <circle cx="373" cy="249" r="13" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
              <path
                d="M370 241 L366 231 M376 239 L376 229 M382 243 L387 234"
                stroke="#94A3B8"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </g>

            {/* Right Articulated Arm — ACTIVELY WAVING HELLO! */}
            <g className="animate-robot-wave">
              {/* Shoulder Joint */}
              <circle cx="162" cy="242" r="20" fill="#1E293B" stroke="#475569" strokeWidth="2" />
              <circle cx="162" cy="242" r="9" fill="#0F172A" stroke="#1EB954" strokeWidth="2" />
              {/* Raised Waving Arm */}
              <path
                d="M154 246 L112 220 L98 168"
                stroke="url(#bodyMetal)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Forearm Emerald Trim */}
              <path
                d="M112 220 L98 168"
                stroke="#1EB954"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#neonGreen)"
              />
              {/* Waving Hand & Fingers */}
              <circle cx="96" cy="158" r="15" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
              <path
                d="M85 150 L77 137 M92 145 L89 130 M99 145 L101 130 M106 149 L112 137"
                stroke="#CBD5E1"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Motion Wave Arcs next to Waving Hand */}
              <path
                d="M66 134 C58 144, 58 158, 66 168"
                stroke="#1EB954"
                strokeOpacity="0.65"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M55 128 C44 142, 44 162, 55 176"
                stroke="#1EB954"
                strokeOpacity="0.35"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>

            {/* Robot Torso */}
            <g>
              <rect
                x="170"
                y="222"
                width="130"
                height="136"
                rx="46"
                fill="url(#bodyMetal)"
                stroke="#475569"
                strokeWidth="2.5"
              />
              {/* Chest Armor Plate */}
              <path
                d="M188 238 C188 230, 282 230, 282 238 L274 316 C272 332, 198 332, 196 316 Z"
                fill="#0F172A"
                stroke="#334155"
                strokeWidth="1.5"
              />
              {/* Glowing ZENVORA Core Reactor on Chest */}
              <circle
                cx="235"
                cy="274"
                r="22"
                fill="#06140D"
                stroke="#1EB954"
                strokeWidth="2"
                filter="url(#neonGreen)"
              />
              {/* Mini Geometric Z Mark Inside Chest Core */}
              <path
                d="M225 266 H244 L227 282 H245"
                stroke="#6EE7B7"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Lower Propulsion Thruster Base */}
              <path
                d="M205 356 L265 356 L252 374 L218 374 Z"
                fill="#1E293B"
                stroke="#475569"
                strokeWidth="1.5"
              />
              <ellipse
                cx="235"
                cy="377"
                rx="18"
                ry="5"
                fill="#1EB954"
                filter="url(#neonGreen)"
              />
            </g>

            {/* Neck Connector */}
            <rect x="218" y="198" width="34" height="28" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
            <line x1="224" y1="208" x2="246" y2="208" stroke="#1EB954" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="224" y1="216" x2="246" y2="216" stroke="#1EB954" strokeWidth="2" strokeOpacity="0.4" />

            {/* Robot Head */}
            <g>
              {/* Side Ear Sensors */}
              <rect x="148" y="116" width="16" height="44" rx="8" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
              <rect x="151" y="128" width="4" height="20" rx="2" fill="#1EB954" filter="url(#neonGreen)" />
              <rect x="306" y="116" width="16" height="44" rx="8" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
              <rect x="315" y="128" width="4" height="20" rx="2" fill="#1EB954" filter="url(#neonGreen)" />

              {/* Top Antenna Beacon */}
              <line x1="235" y1="74" x2="235" y2="52" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="235" cy="48" r="7" fill="url(#emeraldGlow)" filter="url(#neonGreen)" />

              {/* Head Outer Shell */}
              <rect
                x="158"
                y="72"
                width="154"
                height="130"
                rx="54"
                fill="url(#headShell)"
                stroke="#64748B"
                strokeWidth="2.5"
              />

              {/* Smoked Glass Visor */}
              <rect
                x="174"
                y="90"
                width="122"
                height="94"
                rx="38"
                fill="url(#visorGlass)"
                stroke="#1EB954"
                strokeOpacity="0.45"
                strokeWidth="1.8"
              />

              {/* Subtle Glass Reflection Highlight */}
              <path
                d="M194 102 C214 96, 252 96, 274 104"
                stroke="white"
                strokeOpacity="0.22"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Expressive Blinking / Smiling Emerald LED Eyes */}
              <g className="animate-robot-blink" filter="url(#neonGreen)">
                {isHovered ? (
                  <>
                    {/* Happy Smiling Arcs on Hover */}
                    <path
                      d="M198 138 C204 126, 218 126, 224 138"
                      stroke="#6EE7B7"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M246 138 C252 126, 266 126, 272 138"
                      stroke="#6EE7B7"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </>
                ) : (
                  <>
                    {/* Sleek Glowing Pill Eyes */}
                    <rect x="200" y="122" width="18" height="24" rx="9" fill="#6EE7B7" />
                    <rect x="252" y="122" width="18" height="24" rx="9" fill="#6EE7B7" />
                  </>
                )}
              </g>

              {/* Subtle Friendly Digital Smile Line */}
              <path
                d="M222 158 Q235 166 248 158"
                stroke="#1EB954"
                strokeOpacity="0.75"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
