import type { Metadata } from "next";
import { getBasicMeta } from "@/metadata-utils";
import BasePageLayout from "@/components/BasePageLayout";

export const metadata: Metadata = getBasicMeta("Login", "a/login");

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <BasePageLayout title="Login" centered>
      {children}
    </BasePageLayout>
  );
}
