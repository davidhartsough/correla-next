import type { Metadata } from "next";
import { getBasicMeta } from "@/metadata-utils";
import BasePageLayout from "@/components/BasePageLayout";

export const metadata: Metadata = getBasicMeta(
  "Privacy Policy",
  "privacy",
  "The privacy policy document for Correla explains what information we collect, why we collect it, how we collect it, how we use it, and more."
);

export default function Layout({ children }: { children: JSX.Element }) {
  return <BasePageLayout title="Privacy Policy">{children}</BasePageLayout>;
}
