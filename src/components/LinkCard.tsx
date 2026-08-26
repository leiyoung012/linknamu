"use client";

import type { ProfileLink } from "@/data/profile";
import LinkIcon from "./LinkIcon";

export default function LinkCard({ id, label, description, url }: ProfileLink) {
  function handleClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-4 text-center font-semibold shadow-[0_4px_16px_-4px_rgba(120,72,32,0.12)] backdrop-blur-md transition-colors duration-200 hover:bg-white/70 dark:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.3)] dark:hover:bg-white/10"
    >
      <LinkIcon id={id} />
      <span className="flex flex-col items-center">
        {label}
        {description && (
          <span className="text-sm font-normal text-black/55 dark:text-white/55">
            {description}
          </span>
        )}
      </span>
    </a>
  );
}
