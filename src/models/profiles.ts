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
      tagsStr: "human",
      tagsArr: ["human"],
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
    if (tags.includes(",")) {
      where.AND = tags.split(",").map((t) => ({
        tagsStr: {
          contains: t.trim().toLowerCase(),
          mode: "insensitive",
        },
      }));
    } else {
      const tag = tags.trim().toLowerCase();
      where.tagsStr = {
        contains: tag,
        mode: "insensitive",
      };
    }
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

export async function isProfileSaved(
  userId: string,
  profileId: string
): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      savedProfiles: {
        where: { id: profileId },
        select: { id: true },
      },
    },
  });
  if (user && user.savedProfiles[0] && user.savedProfiles[0].id === profileId) {
    return true;
  }
  return false;
}

export async function saveProfile(userId: string, profileId: string) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      savedProfiles: {
        connect: { id: profileId },
      },
    },
  });
  return true;
}

export async function unsaveProfile(userId: string, profileId: string) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      savedProfiles: {
        disconnect: { id: profileId },
      },
    },
  });
  return true;
}

export async function getSavedProfiles(
  userId: string
): Promise<PersonProfileLink[]> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      savedProfiles: {
        select: {
          id: true,
          name: true,
          tagsStr: true,
        },
      },
    },
  });
  if (!user) return [];
  return user.savedProfiles;
}
