"use client";

import { useState, useRef, useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

function subscribe(callback: () => void) {
  window.addEventListener("zenvora-theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("zenvora-theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Theme {
  return typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export default function FooterBrandWatermark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  const [isHovered, setIsHovered] = useState(false);
  const [pixelPos, setPixelPos] = useState({ x: 0, y: 0 });

  const updateCoordinates = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    setPixelPos({ x, y });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      updateCoordinates(e.clientX, e.clientY);
    },
    [updateCoordinates]
  );

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsHovered(true);
      updateCoordinates(e.clientX, e.clientY);
    },
    [updateCoordinates]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches[0]) {
        setIsHovered(true);
        updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    [updateCoordinates]
  );

  const handleTouchEnd = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Compute text gradient:
  // When hovered: Real-time radial spotlight tracking cursor coordinates (CONVRTO luminous emerald style)
  // When idle: Sophisticated, legible architectural watermark gradient perfectly blended into the UI canvas
  const textBackground = isHovered
    ? isDark
      ? `radial-gradient(circle 340px at ${pixelPos.x}px ${pixelPos.y}px, #A7F3D0 0%, #34D399 22%, #10B981 46%, #059669 68%, #1B4532 88%, #153425 100%)`
      : `radial-gradient(circle 340px at ${pixelPos.x}px ${pixelPos.y}px, #10B981 0%, #059669 30%, #047857 55%, #64748B 80%, #CBD5E1 100%)`
    : isDark
      ? "linear-gradient(180deg, #244F39 0%, #1A3E2C 55%, #122B1E 100%)"
      : "linear-gradient(180deg, #CBD5E1 0%, #94A3B8 100%)";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-hidden="true"
      className="group relative mt-10 mb-2 flex cursor-crosshair items-center justify-center overflow-hidden py-3 select-none sm:mt-12 sm:py-5"
    >
      {/* Ambient Floor Glow behind typography - reacts directly to cursor position */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? (isDark ? 0.9 : 0.5) : isDark ? 0.22 : 0.08,
          background: isHovered
            ? `radial-gradient(420px circle at ${pixelPos.x}px ${pixelPos.y}px, ${
                isDark ? "rgba(52, 211, 153, 0.32)" : "rgba(16, 185, 129, 0.22)"
              }, ${
                isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(5, 150, 105, 0.08)"
              } 45%, transparent 75%)`
            : isDark
              ? "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(22, 154, 72, 0.18), transparent 75%)"
              : "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(22, 154, 72, 0.08), transparent 75%)",
        }}
      />

      {/* Floating Interactive Cursor Beacon Dot when hovered */}
      {isHovered && (
        <div
          className="pointer-events-none absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/60 bg-[#1EB954]/20 shadow-[0_0_20px_#10B981] transition-transform duration-75 ease-out dark:border-emerald-400/80 dark:bg-[#34D399]/25"
          style={{
            left: `${pixelPos.x}px`,
            top: `${pixelPos.y}px`,
          }}
        >
          <div className="absolute inset-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#34D399]" />
        </div>
      )}

      {/* Giant Architectural Brand Text */}
      <span
        style={{
          backgroundImage: textBackground,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          filter: isHovered
            ? isDark
              ? "drop-shadow(0 10px 32px rgba(52, 211, 153, 0.35))"
              : "drop-shadow(0 8px 24px rgba(16, 185, 129, 0.28))"
            : isDark
              ? "drop-shadow(0 4px 18px rgba(22, 154, 72, 0.16))"
              : "none",
        }}
        className="relative block w-full text-center font-[family-name:var(--font-plus-jakarta)] text-6xl font-black uppercase leading-none tracking-tight transition-all duration-500 ease-out sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] group-hover:tracking-[0.03em] group-hover:-translate-y-1"
      >
        ZENVORA
      </span>
    </div>
  );
}
