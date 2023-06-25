import prisma from "@/db";
import { getUser } from "@/session";
import type { PersonProfileLink, PersonProfilePage } from "@/types";

export async function getProfile(
  id: string
): Promise<PersonProfilePage | null> {
  const profile = await prisma.profile.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      tagsArr: true,
      email: true,
      links: true,
    },
  });
  return profile;
}

export async function updateProfile(p: PersonProfilePage): Promise<boolean> {
  const user = await getUser();
  if (!user || user.profileId !== p.id) return false;
  try {
    await prisma.profile.update({
      where: { id: p.id },
      data: {
        name: p.name,
        email: p.email,
        links: p.links,
        tagsArr: p.tagsArr,
        tagsStr: p.tagsArr.join(", "),
      },
    });
    return true;
  } catch {
    return false;
  }
}

export async function createNewProfile(username: string): Promise<boolean> {
  const user = await getUser();
  if (!user || !user.id) return false;
  await prisma.profile.create({
    data: {
      id: username,
      name: user.name || user.email.split("@")[0],
      email: user.email,
      tagsStr: "human, person",
      tagsArr: ["human", "person"],
      links: [],
      user: { connect: { id: user.id } },
    },
  });
  await prisma.user.update({
    where: { id: user.id },
    data: { profileId: username },
  });
  return true;
}

export async function checkIfUsernameTaken(username: string): Promise<boolean> {
  const profile = await prisma.profile.findUnique({
    where: { id: username },
    select: { id: true },
  });
  return !!profile;
}

export async function discoverProfiles(
  name: string | undefined,
  tags: string | undefined
): Promise<PersonProfileLink[]> {
  const where: any = {};
  if (name) {
    where.name = { contains: name, mode: "insensitive" };
  }
  if (tags) {
    const tagsStr = tags.includes(",")
      ? tags
          .split(",")
          .map((i) => i.trim().toLowerCase())
          .join(" & ")
      : tags.trim().toLowerCase();
    where.tagsStr = {
      search: tagsStr,
      mode: "insensitive",
    };
  }

  const profiles = await prisma.profile.findMany({
    take: 25,
    where,
    select: {
      id: true,
      name: true,
      tagsStr: true,
    },
    orderBy: { id: "asc" },
  });
  return profiles;
}

// TODO: saving other people's profiles

export async function isProfileSaved(
  userId: string,
  profileId: string
): Promise<boolean> {
  return false;
}

export async function saveProfile(userId: string, profileId: string) {}

export async function unsaveProfile(userId: string, profileId: string) {}

export async function getSavedProfiles(
  userId: string
): Promise<PersonProfileLink[]> {
  // const profiles = await prisma.profiles.findMany({});
  // return profiles;
  return [];
}
