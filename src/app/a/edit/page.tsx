// import { redirect } from "next/navigation";
// import { isSignedIn } from "@/session";
import { getMockProfile } from "@/models/mocks";
import ProfileForm from "@/components/form/ProfileForm";

export default async function Edit() {
  // TODO: auth & get profile
  // const isLoggedIn = await isSignedIn();
  // if (!isLoggedIn) return redirect("/a/login");
  const p = getMockProfile("todo");
  return <ProfileForm p={p} />;
}
