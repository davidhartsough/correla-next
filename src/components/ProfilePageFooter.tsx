import Link from "next/link";
import { getUserId, getUserProfileId } from "@/session";
import SaveProfileBtn from "./SaveProfileBtn";

export default async function ProfilePageFooter({
  profileId,
}: {
  profileId: string;
}) {
  const userId = await getUserId();
  const userProfileId = await getUserProfileId();
  if (!userProfileId) return null;
  if (userProfileId === profileId) {
    return (
      <div>
        <Link href="/a/edit">Edit</Link>
      </div>
    );
  }
  return <SaveProfileBtn userId={userId!} profileId={profileId} />;
}
