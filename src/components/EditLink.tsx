import Link from "next/link";
import { Edit } from "lucide-react";
import { getUser } from "@/session";

export default async function EditLink({ profileId }: { profileId: string }) {
  const user = await getUser();
  if (!user || !user.profileId || user.profileId !== profileId) return null;
  return (
    <Link
      href="/a/edit"
      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-bluebase p-1 text-white shadow-sm transition-all hover:scale-105 hover:bg-bluehover hover:shadow focus:bg-bluehover focus:shadow"
    >
      <Edit width={20} height={20} />
    </Link>
  );
}
