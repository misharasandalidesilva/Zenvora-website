"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

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

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("zenvora-theme", next);
    } catch {
      // ignore storage errors
    }
    if (next === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
    window.dispatchEvent(new Event("zenvora-theme-change"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-xs transition-all duration-200 hover:border-[#169A48] hover:text-[#169A48] hover:scale-105 active:scale-95 dark:border-[#1F2F28] dark:bg-[#121915] dark:text-[#94A3B8] dark:shadow-none dark:hover:border-[#1EB954]/60 dark:hover:text-[#1EB954]"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700 transition-transform duration-300 rotate-0 hover:-rotate-12 hover:text-[#169A48]" />
      )}
    </button>
  );
}
