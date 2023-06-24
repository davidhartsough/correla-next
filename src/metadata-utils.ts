import type { Metadata } from "next";

export function getBasicMeta(
  title: string,
  path: string,
  description?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://correla.com/${path}/`,
    },
  };
}
