import { redirect } from "next/navigation";
import BasePageLayout from "@/components/BasePageLayout";
import { isSignedIn } from "@/session";

export default async function Create() {
  const isLoggedIn = await isSignedIn();
  if (!isLoggedIn) return redirect("/a/login");
  // TODO: everything
  return (
    <BasePageLayout title="Create Profile">
      <p>[form]</p>
    </BasePageLayout>
  );
}
