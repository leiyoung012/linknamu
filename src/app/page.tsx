import ProfileHeader from "@/components/ProfileHeader";
import LinkCardList from "@/components/LinkCardList";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/data/profile";
import { fetchClickCounts, zeroCounts } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export default async function Home() {
  const initialCounts = await fetchClickCounts().catch((error) => {
    console.error("Failed to fetch click counts:", error);
    return zeroCounts();
  });

  return (
    <main className="flex min-h-screen justify-center px-6 py-20 sm:px-8 sm:py-24">
      <DarkModeToggle />
      <div className="w-full max-w-sm">
        <ProfileHeader profile={profile} />
        <LinkCardList links={links} initialCounts={initialCounts} />
      </div>
    </main>
  );
}
