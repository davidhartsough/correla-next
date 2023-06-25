import { getServerSession, Session } from "next-auth";
import { authOptions } from "./app/api/auth/[...nextauth]/route";

async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}

export async function isSignedIn(): Promise<boolean> {
  const session = await getSession();
  return !!session;
}

interface SessionDatabaseUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean | null;
  image: string | null;
  profileId: string | null;
  createdAt: string;
  updatedAt: string;
}

interface CustomSession extends Session {
  dbuser: SessionDatabaseUser;
}

export async function getUser() {
  const session = (await getSession()) as CustomSession;
  if (!session || !session.dbuser) return null;
  return {
    id: session.dbuser.id,
    name: session.dbuser.name,
    email: session.dbuser.email,
    profileId: session.dbuser.profileId,
  };
}
