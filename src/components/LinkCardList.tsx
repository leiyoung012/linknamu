import type { ProfileLink } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkCardList({ links }: { links: ProfileLink[] }) {
  return (
    <div className="mt-10 flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} {...link} />
      ))}
    </div>
  );
}
