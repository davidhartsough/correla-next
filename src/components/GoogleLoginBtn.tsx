"use client";

import { signIn } from "next-auth/react";
import GoogleIcon from "./icons/GoogleIcon";

export default function GoogleLoginBtn() {
  const googleSignIn = () => signIn("google");
  return (
    <div>
      <button
        onClick={googleSignIn}
        className="mx-auto flex items-center rounded border px-5 py-3 text-center tracking-wide transition-colors hover:border-gray-500 hover:bg-gray-50 focus:border-gray-600 dark:hover:border-white/50 dark:hover:bg-white/5 dark:focus:bg-white/10"
      >
        <GoogleIcon />
        <span className="ml-2 mr-0.5">Sign in with Google</span>
      </button>
    </div>
  );
}
