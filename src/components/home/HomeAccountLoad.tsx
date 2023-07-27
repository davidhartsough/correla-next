import { isSignedIn } from "@/session";
import HomeAccountLink from "./HomeAccountLink";

export default async function HomeAccountLoad() {
  const isLoggedIn = await isSignedIn();
  return <HomeAccountLink isLoggedIn={isLoggedIn} />;
}
