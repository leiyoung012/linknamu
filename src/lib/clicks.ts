import { getMongoClientPromise, getDbName } from "@/lib/mongodb";
import { links } from "@/data/profile";

export const knownLinkIds = new Set(links.map((link) => link.id));

export function zeroCounts(): Record<string, number> {
  return Object.fromEntries(links.map((link) => [link.id, 0]));
}

export async function fetchClickCounts(): Promise<Record<string, number>> {
  const client = await getMongoClientPromise();
  const db = client.db(getDbName());
  const docs = await db
    .collection<{ _id: string; count: number }>("clicks")
    .find({ _id: { $in: Array.from(knownLinkIds) } })
    .toArray();

  const counts = zeroCounts();
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }
  return counts;
}
