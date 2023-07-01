import Link from "next/link";
import { Search, UserCircle2 } from "lucide-react";
import { isSignedIn } from "@/session";
import CorrelaLogoIcon from "./icons/CorrelaLogoIcon";

export default async function TopBarNav() {
  const isLoggedIn = await isSignedIn();
  return (
    <div className="border-b border-opacity-50 px-2 py-1">
      <nav className="m-auto flex max-w-3xl">
        <div className="basis-1/2">
          <Link href="/" className="ml-2 inline-flex h-12 items-center">
            <span className="mr-2 h-10 w-10 flex-shrink-0 flex-grow-0 basis-10">
              <CorrelaLogoIcon />
            </span>
            <span className="text-2xl">Correla</span>
          </Link>
        </div>
        <div className="flex basis-1/2 items-center justify-end">
          <Link
            href="/explore"
            className="flex h-12 w-12 items-center justify-center rounded-full opacity-70 transition-all hover:bg-black/5 hover:opacity-100 focus:bg-black/5 focus:opacity-100 dark:hover:bg-white/5 dark:focus:bg-white/5"
          >
            <div className="flex h-7 w-7 items-center justify-center">
              <Search />
            </div>
          </Link>
          <Link
            href={isLoggedIn ? "/a" : "/a/login"}
            className="flex h-12 w-12 items-center justify-center rounded-full opacity-70 transition-all hover:bg-black/5 hover:opacity-100 focus:bg-black/5 focus:opacity-100 dark:hover:bg-white/5 dark:focus:bg-white/5"
          >
            <div className="flex h-7 w-7 items-center justify-center">
              <UserCircle2 />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
