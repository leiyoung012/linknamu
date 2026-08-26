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
      <div className="h-28 w-28 overflow-hidden rounded-full bg-white p-2.5 shadow-[0_12px_28px_-8px_rgba(120,72,32,0.35)] ring-4 ring-white/70 dark:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.5)] dark:ring-white/10">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={224}
            height={224}
            quality={90}
            className="h-full w-full object-contain object-center"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-black/40 dark:text-white/40">
            {initial}
          </div>
        )}
      </div>
      <h1 className="mt-5 text-xl font-semibold tracking-tight">{profile.name}</h1>
      <p className="mt-1.5 text-sm text-black/55 dark:text-white/55">
        {profile.bio}
      </p>
    </div>
  );
}
