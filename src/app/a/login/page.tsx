import { redirect } from "next/navigation";
import { isSignedIn } from "@/session";
import BasePageLayout from "@/components/BasePageLayout";
import GoogleLoginBtn from "@/components/GoogleLoginBtn";

export default async function Login() {
  const isLoggedIn = await isSignedIn();
  if (isLoggedIn) return redirect("/a");
  return (
    <BasePageLayout title="Login" centered>
      <GoogleLoginBtn />
    </BasePageLayout>
  );
}
