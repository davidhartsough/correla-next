import { NextResponse } from "next/server";
import { getUser } from "@/session";
import { isProfileSaved, saveProfile, unsaveProfile } from "@/models/profiles";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "invalid request" }, { status: 400 });
  }
  const user = await getUser();
  if (!user || !user.id) {
    return NextResponse.json(
      { message: "unauthenticated/unauthorized" },
      { status: 401 }
    );
  }
  const isSaved = await isProfileSaved(user.id, id);
  return NextResponse.json({ isSaved });
}

export async function POST(request: Request) {
  const user = await getUser();
  if (!user || !user.id) {
    return NextResponse.json(
      { message: "unauthenticated/unauthorized" },
      { status: 401 }
    );
  }
  const res = await request.json();
  const { id } = res;
  if (id && typeof id === "string" && id.length > 2) {
    const ok = await saveProfile(user.id, id);
    return NextResponse.json({ ok });
  }
  return NextResponse.json({ message: "invalid request" }, { status: 400 });
}

export async function PUT(request: Request) {
  const user = await getUser();
  if (!user || !user.id) {
    return NextResponse.json(
      { message: "unauthenticated/unauthorized" },
      { status: 401 }
    );
  }
  const res = await request.json();
  const { id } = res;
  if (id && typeof id === "string" && id.length > 2) {
    const ok = await unsaveProfile(user.id, id);
    return NextResponse.json({ ok });
  }
  return NextResponse.json({ message: "invalid request" }, { status: 400 });
}
