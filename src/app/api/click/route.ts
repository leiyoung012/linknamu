import { NextRequest, NextResponse } from "next/server";
import { getMongoClientPromise, getDbName } from "@/lib/mongodb";
import { links } from "@/data/profile";

const knownLinkIds = new Set(links.map((link) => link.id));

export async function GET() {
  const counts = Object.fromEntries(links.map((link) => [link.id, 0]));

  try {
    const client = await getMongoClientPromise();
    const db = client.db(getDbName());
    const docs = await db
      .collection<{ _id: string; count: number }>("clicks")
      .find({ _id: { $in: Array.from(knownLinkIds) } })
      .toArray();

    for (const doc of docs) {
      counts[doc._id] = doc.count;
    }

    return NextResponse.json(counts);
  } catch (error) {
    console.error("Failed to fetch click counts:", error);
    return NextResponse.json(counts);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { linkId } = (await request.json()) as { linkId?: string };

    if (!linkId || !knownLinkIds.has(linkId)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const client = await getMongoClientPromise();
    const db = client.db(getDbName());
    await db
      .collection<{ _id: string; count: number; updatedAt: Date }>("clicks")
      .updateOne(
        { _id: linkId },
        { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
        { upsert: true }
      );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to record click:", error);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
