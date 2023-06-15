// import { getServerSession } from "next-auth";
// import { authOptions } from "./app/api/auth/[...nextauth]";

export async function getSession() {
  return null;
  /*
  const session = await getServerSession(authOptions);
  console.log("session:", session);
  return session;
  */
}

export async function isSignedIn(): Promise<boolean> {
  const session = await getSession();
  return !!session;
}

export async function getUser() {
  const session = await getSession();
  if (!session) return null;
  // TODO: get user from session
  return session;
}

export async function getUserId(): Promise<string | null> {
  const session = await getSession();
  if (!session) return null;
  // TODO: get user id from session
  return "session.user.id"; // FIXME
}

export async function getUserProfileId(): Promise<string | null> {
  const session = await getSession();
  if (!session) return null;
  // TODO: get profile id from user session
  return "session.user.profileId"; // FIXME
}
