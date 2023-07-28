"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  const logout = () => signOut();
  return (
    <button
      onClick={logout}
      className="my-6 flex h-10 opacity-75 hover:opacity-90 flex-auto items-center rounded-3xl border border-gray-900/70 hover:border-black px-9 py-2 font-medium tracking-wide transition-all hover:scale-105 bg-gray-100/50 dark:bg-black/50 border-black dark:border-white hover:bg-white/60 hover:shadow-md focus:bg-white/80 focus:shadow-md dark:hover:bg-black/80 dark:hover:border-white dark:focus:bg-black/90"
    >
      <LogOut />
      <span className="ml-2 text-left">Sign Out</span>
    </button>
  );
}
