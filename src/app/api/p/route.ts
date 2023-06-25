import { NextResponse } from "next/server";
import {
  checkIfUsernameTaken,
  createNewProfile,
  updateProfile,
} from "@/models/profiles";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "invalid request" }, { status: 400 });
  }
  const usernameIsTaken = await checkIfUsernameTaken(id);
  return NextResponse.json({ usernameIsTaken });
}

export async function POST(request: Request) {
  const res = await request.json();
  const { id } = res;
  if (id && typeof id === "string" && id.length > 2) {
    const ok = await createNewProfile(id);
    return NextResponse.json({ ok });
  }
  return NextResponse.json({ message: "invalid request" }, { status: 400 });
}

const isValidStr = (str: unknown) =>
  str && typeof str === "string" && str.length > 1;
const isValidStrArr = (arr: unknown) =>
  arr && Array.isArray(arr) && arr.every(isValidStr);
const emailPattern =
  /^([^<>\(\)\[\]\\.,;:\s@"]{1,63})@((((?!-)(?!.*--)[a-zA-Z\-0-9]{1,63}(?<!-))+\.)+([a-zA-Z]{2,63}))$/;

export async function PUT(request: Request) {
  const res = await request.json();
  const { id, name, email, tagsArr, links } = res;
  if (
    isValidStr(id) &&
    isValidStr(name) &&
    ((isValidStr(email) && emailPattern.test(email)) ||
      email === null ||
      email === undefined) &&
    isValidStrArr(tagsArr) &&
    isValidStrArr(links)
  ) {
    const ok = await updateProfile({
      id,
      name,
      tagsArr,
      email,
      links,
    });
    return NextResponse.json({ ok });
  }
  return NextResponse.json({ message: "invalid request" }, { status: 400 });
}
