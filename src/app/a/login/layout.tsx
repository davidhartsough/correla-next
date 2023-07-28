import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getBasicMeta } from "@/metadata-utils";
import ALayout from "@/components/a/ALayout";

export const metadata: Metadata = getBasicMeta("Login", "a/login");

export default function Layout({
  children,
}: {
  children: JSX.Element | ReactNode;
}) {
  return <ALayout title="Sign in">{children}</ALayout>;
}
