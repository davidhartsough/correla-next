import { redirect } from "next/navigation";
import { getUser } from "@/session";
import UsernameForm from "@/components/form/UsernameForm";

export default async function Create() {
  const user = await getUser();
  if (!user) return redirect("/a/login");
  if (user.profileId) return redirect("/a/edit");
  const { name, email } = user;
  const suggestion = name
    ? name.toLowerCase().replace(/ /g, "")
    : email.split("@")[0];
  return <UsernameForm suggestion={suggestion} />;
}
