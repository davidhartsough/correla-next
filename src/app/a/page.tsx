import Link from "next/link";
import { redirect } from "next/navigation";
import { Edit, Bookmark, Eye } from "lucide-react";
import { getUser } from "@/session";
import ALayout from "@/components/a/ALayout";
import SignOutBtn from "@/components/a/SignOutBtn";
import ShareProfileBtn from "@/components/a/ShareProfileBtn";

export default async function Account() {
  const user = await getUser();
  if (!user) return redirect("/a/login");
  if (!user.profileId) return redirect("/a/create");
  const { profileId } = user;
  return (
    <ALayout title="Account">
      <div className="mx-auto flex max-w-max flex-col items-stretch justify-stretch text-left">
        <div className="text-white">
          <Link
            href={`/p/${profileId}`}
            className="mb-6 flex h-10 flex-auto items-center rounded-3xl bg-bluebtn/60 hover:bg-bluebtn/80 border border-white px-9 py-2 font-medium tracking-wide transition-all hover:scale-105 hover:shadow-md hover:shadow-white/60 focus:shadow-white/80"
          >
            <Eye />
            <span className="ml-2 text-left">View Profile</span>
          </Link>
          <ShareProfileBtn profileId={profileId} />
          <Link
            href="/a/edit"
            className="mb-6 flex h-10 flex-auto items-center rounded-3xl bg-bluebtn/60 hover:bg-bluebtn/80 border border-white px-9 py-2 font-medium tracking-wide transition-all hover:scale-105 hover:shadow-md hover:shadow-white/60 focus:shadow-white/80"
          >
            <Edit />
            <span className="ml-2 text-left">Edit Profile</span>
          </Link>
          <Link
            href="/s"
            className="mb-6 flex h-10 flex-auto items-center rounded-3xl bg-bluebtn/60 hover:bg-bluebtn/80 border border-white px-9 py-2 font-medium transition-all hover:scale-105 hover:shadow-md hover:shadow-white/60 focus:shadow-white/80"
          >
            <Bookmark />
            <span className="ml-2 text-left">Saved Profiles</span>
          </Link>
        </div>
        <div className="h-0.5 bg-white rounded-lg" />
        <SignOutBtn />
      </div>
    </ALayout>
  );
}
