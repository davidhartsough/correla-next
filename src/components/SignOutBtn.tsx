"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  const logout = () => signOut();
  return (
    <div>
      <button
        onClick={logout}
        className="mx-auto my-6 flex h-10 items-center rounded-3xl border px-8 py-2 font-medium tracking-wide transition-all hover:scale-105 hover:border-borderhover hover:bg-white/80 hover:shadow-md focus:border-borderfocus focus:bg-white/80 focus:shadow-md dark:hover:bg-black/10 dark:focus:bg-black/10"
      >
        <LogOut />
        <span className="ml-2 mr-1 w-24 text-left">Sign Out</span>
      </button>
    </div>
  );
}
