"use client";

import { useState } from "react";
import type { ProfileLink } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkCardList({
  links,
  initialCounts,
}: {
  links: ProfileLink[];
  initialCounts: Record<string, number>;
}) {
  const [counts, setCounts] = useState<Record<string, number>>(initialCounts);

  function incrementCount(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <div className="mt-10 flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          count={counts[link.id] ?? 0}
          onClickIncrement={() => incrementCount(link.id)}
        />
      ))}
    </div>
  );
}
