import { redirect } from "next/navigation";
import { isSignedIn } from "@/session";
import GoogleLoginBtn from "@/components/a/GoogleLoginBtn";

export default async function Login() {
  const isLoggedIn = await isSignedIn();
  if (isLoggedIn) return redirect("/a");
  return <GoogleLoginBtn />;
}
