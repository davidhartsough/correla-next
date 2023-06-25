import Link from "next/link";
import { redirect } from "next/navigation";
import { Edit, Bookmark, Eye } from "lucide-react";
import { getUser } from "@/session";
import BasePageLayout from "@/components/BasePageLayout";
import SignOutBtn from "@/components/SignOutBtn";
import ShareProfileBtn from "@/components/ShareProfileBtn";

export default async function Account() {
  const user = await getUser();
  if (!user) return redirect("/a/login");
  if (!user.profileId) return redirect("/a/create");
  const { profileId } = user;
  return (
    <BasePageLayout title="Account" centered>
      <div className="mx-auto max-w-min text-center">
        <Link
          href={`/p/${profileId}`}
          className="mx-auto mb-6 flex h-10 items-center rounded-3xl border px-8 py-2 font-medium tracking-wide transition-all hover:scale-105 hover:border-borderhover hover:bg-white/80 hover:shadow-md focus:border-borderfocus focus:bg-white/80 focus:shadow-md dark:hover:bg-black/10 dark:focus:bg-black/10"
        >
          <Eye />
          <span className="ml-2 mr-1 w-24 text-left">View Profile</span>
        </Link>
        <ShareProfileBtn profileId={profileId} />
        <Link
          href="/a/edit"
          className="mx-auto mb-6 flex h-10 items-center rounded-3xl border px-8 py-2 font-medium tracking-wide transition-all hover:scale-105 hover:border-borderhover hover:bg-white/80 hover:shadow-md focus:border-borderfocus focus:bg-white/80 focus:shadow-md dark:hover:bg-black/10 dark:focus:bg-black/10"
        >
          <Edit />
          <span className="ml-2 mr-1 w-24 text-left">Edit Profile</span>
        </Link>
        <hr />
        <SignOutBtn />
      </div>
    </BasePageLayout>
  );
}
