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
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg shadow-sm transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-white/10"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
