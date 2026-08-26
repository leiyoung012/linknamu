"use client";

import type { ProfileLink } from "@/data/profile";
import LinkIcon from "./LinkIcon";

export default function LinkCard({ id, label, url }: ProfileLink) {
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
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-4 text-center font-medium shadow-sm transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-white/10"
    >
      <LinkIcon id={id} />
      {label}
    </a>
  );
}
