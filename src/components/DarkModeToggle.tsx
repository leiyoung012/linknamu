"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-lg shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-all duration-200 hover:border-accent hover:shadow-[0_6px_16px_-6px_rgba(15,23,42,0.25)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_6px_16px_-6px_rgba(0,0,0,0.6)]"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
