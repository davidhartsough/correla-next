import type { Metadata } from "next";
import { getBasicMeta } from "@/metadata-utils";
import BasePageLayout from "@/components/BasePageLayout";

export const metadata: Metadata = getBasicMeta("Explore", "explore");

export default function Layout({ children }: { children: JSX.Element }) {
  return <BasePageLayout title="Explore">{children}</BasePageLayout>;
}
