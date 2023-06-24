import { redirect } from "next/navigation";
import { isSignedIn } from "@/session";
import UsernameForm from "@/components/form/UsernameForm";

export default async function Create() {
  // const isLoggedIn = await isSignedIn();
  // if (!isLoggedIn) return redirect("/a/login");
  // TODO: everything
  // if (hasProfile) return redirect("/a/edit");
  const name = "Steve Stevenson";
  const email = "steve@gmail.com";
  const suggestion = name.toLowerCase().replace(/ /g, "-");
  return <UsernameForm suggestion={suggestion} name={name} email={email} />;
}
