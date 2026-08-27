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
      className="flex w-full items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-4 text-left font-semibold text-foreground shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_10px_24px_-10px_rgba(15,23,42,0.25)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center">
        <LinkIcon id={id} />
      </span>
      <span className="flex flex-col">
        {label}
        {description && (
          <span className="text-sm font-normal text-muted-foreground">
            {description}
          </span>
        )}
      </span>
    </a>
  );
}
