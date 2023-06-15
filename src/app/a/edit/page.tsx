import { redirect } from "next/navigation";
import BasePageLayout from "@/components/BasePageLayout";
import { isSignedIn } from "@/session";

export default async function Edit() {
  const isLoggedIn = await isSignedIn();
  if (!isLoggedIn) return redirect("/a/login");
  // TODO: everything
  return (
    <BasePageLayout title="Edit Profile">
      <p>[form]</p>
    </BasePageLayout>
  );
}
