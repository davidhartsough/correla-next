import { MetadataRoute } from "next";
import prisma from "@/db";

const baseUrl = process.env.BASE_URL;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mainPaths = [
    "",
    "/explore",
    "/discover",
    "/a",
    "/a/login",
    "/a/edit",
    "/a/create",
    "/s",
    "/privacy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
  const profiles = await prisma.profile.findMany({
    select: { id: true },
    take: 1,
  });
  const profilePaths = profiles.map(({ id }) => ({
    url: `${baseUrl}/p/${id}`,
    lastModified: new Date(),
  }));
  return [...mainPaths, ...profilePaths];
}
