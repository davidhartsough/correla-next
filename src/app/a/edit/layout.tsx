import type { Metadata } from "next";
import { getBasicMeta } from "@/metadata-utils";
import BasePageLayout from "@/components/BasePageLayout";

export const metadata: Metadata = getBasicMeta("Edit Profile", "a/edit");

export default function Layout({ children }: { children: JSX.Element }) {
  return <BasePageLayout title="Edit Profile">{children}</BasePageLayout>;
}
