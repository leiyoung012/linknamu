import ProfileHeader from "@/components/ProfileHeader";
import LinkCardList from "@/components/LinkCardList";
import DarkModeToggle from "@/components/DarkModeToggle";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-20 sm:px-8 sm:py-24">
      <DarkModeToggle />
      <div className="w-full max-w-sm">
        <ProfileHeader profile={profile} />
        <LinkCardList links={links} />
      </div>
    </main>
  );
}
