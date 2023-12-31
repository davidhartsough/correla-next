"use client";

import { signIn } from "next-auth/react";
import GoogleIcon from "../icons/GoogleIcon";

export default function GoogleLoginBtn() {
  const googleSignIn = () => signIn("google");
  return (
    <div>
      <button
        onClick={googleSignIn}
        className="mx-auto flex items-center bg-bgbase/60 rounded border border-borderbase/50 px-5 py-3 text-center tracking-wide transition-colors hover:bg-gray-50 focus:border-gray-600 hover:border-white/50 dark:hover:bg-white/5 dark:focus:bg-white/10"
      >
        <GoogleIcon />
        <span className="ml-2 mr-0.5">Sign in with Google</span>
      </button>
    </div>
  );
}
