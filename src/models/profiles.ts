// import prisma from "@/db";
import type { PersonProfileLink, PersonProfilePage } from "@/types";
import { getMockProfile, mockProfiles } from "./mocks";

/*
export async function getUser(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      profileId: true,
    },
  });
}
*/

export async function getProfile(id: string): Promise<PersonProfilePage> {
  const profile = getMockProfile(id);
  /*
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
  */
  return profile;
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
    where.identity = {
      search: tagsStr,
      mode: "insensitive",
    };
  }
  const profiles = mockProfiles;
  /*
  const profiles = await prisma.profiles.findMany({
    take: 25,
    where,
    select: {
      id: true,
      name: true,
      tagsStr: true,
    },
    orderBy: { id: "asc" },
  });
  */
  return profiles;
}

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
