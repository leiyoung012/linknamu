import Image from "next/image";
import type { profile as ProfileType } from "@/data/profile";

export default function ProfileHeader({
  profile,
}: {
  profile: typeof ProfileType;
}) {
  const initial = profile.name.trim().charAt(0) || "?";

  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-black/40 dark:text-white/40">
            {initial}
          </div>
        )}
      </div>
      <h1 className="mt-4 text-xl font-semibold">{profile.name}</h1>
      <p className="mt-1 text-sm text-black/60 dark:text-white/60">
        {profile.bio}
      </p>
    </div>
  );
}
