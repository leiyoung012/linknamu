"use client";

import { useEffect, useState } from "react";
import type { ProfileLink } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkCardList({ links }: { links: ProfileLink[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/click")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

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
