import type { Metadata } from "next";
import { getBasicMeta } from "@/metadata-utils";
import BasePageLayout from "@/components/BasePageLayout";

export const metadata: Metadata = getBasicMeta("Create", "a/create");

export default function Layout({ children }: { children: JSX.Element }) {
  return <BasePageLayout title="Choose a username">{children}</BasePageLayout>;
}
