import Link from "next/link";
import { Users } from "lucide-react";

export default function HomeAccountLink({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}) {
  return (
    <div className="m-auto mt-4 basis-52 text-center">
      {isLoggedIn ? (
        <p className="text-shadow mb-4 text-lg font-semibold leading-tight text-white">
          View, edit, and <br /> share your profile.
        </p>
      ) : (
        <p className="text-shadow mb-4 text-lg font-semibold leading-tight text-white">
          Join the community <br /> and create your profile.
        </p>
      )}
      <Link
        href={isLoggedIn ? "/a" : "/a/login"}
        className="m-auto flex w-44 rounded-3xl border border-white/40 bg-bluebtn/90 px-8 py-2 font-medium tracking-wide text-white shadow shadow-white/50 transition-all hover:scale-105 hover:shadow-white/60 focus:shadow-white/80"
      >
        <Users />
        <span className="ml-2">Connect</span>
      </Link>
    </div>
  );
}
