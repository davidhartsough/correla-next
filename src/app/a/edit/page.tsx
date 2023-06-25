import { redirect } from "next/navigation";
import { getUser } from "@/session";
import ProfileForm from "@/components/form/ProfileForm";
import { getProfile } from "@/models/profiles";

export default async function Edit() {
  const user = await getUser();
  if (!user) return redirect("/a/login");
  if (!user.profileId) return redirect("/a/create");
  const p = await getProfile(user.profileId);
  if (!p) return redirect("/a/create");
  return <ProfileForm p={p} />;
}
