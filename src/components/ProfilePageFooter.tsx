import Link from "next/link";
import { getUser } from "@/session";
import SaveProfileBtn from "./SaveProfileBtn";

export default async function ProfilePageFooter({
  profileId,
}: {
  profileId: string;
}) {
  const user = await getUser();
  if (!user || !user.profileId) return null;
  if (user.profileId === profileId) {
    return (
      <div className="mt-6 flex items-center justify-center">
        <Link
          href="/a/edit"
          className="mx-auto my-6 block h-10 rounded-3xl bg-bluebase px-8 font-medium leading-10 tracking-wide text-white shadow-sm transition-all hover:scale-105 hover:bg-bluehover hover:shadow focus:bg-bluehover focus:shadow"
        >
          Edit
        </Link>
      </div>
    );
  }
  return <SaveProfileBtn userId={user.id} profileId={profileId} />;
}
