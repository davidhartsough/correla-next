import type { Metadata } from "next";
import { getBasicMeta } from "@/metadata-utils";
import BasePageLayout from "@/components/BasePageLayout";

export const metadata: Metadata = getBasicMeta("Saved", "s");

export default function Layout({ children }: { children: JSX.Element }) {
  return <BasePageLayout title="Saved">{children}</BasePageLayout>;
}
