import Link from "next/link";
import { redirect } from "next/navigation";
import { getUserId } from "@/session";
import { getSavedProfiles } from "@/models/profiles";
import BasePageLayout from "@/components/BasePageLayout";

export default async function Saved() {
  const userId = await getUserId();
  if (!userId) return redirect("/a/login");
  const saved = await getSavedProfiles(userId);
  // TODO: what if empty
  return (
    <BasePageLayout title="Saved">
      <div>
        {saved.map((p) => (
          <div key={p.id}>
            <Link href={`/p/${p.id}`}>
              <p>{p.name}</p>
              <p>{p.tagsStr}</p>
            </Link>
          </div>
        ))}
      </div>
    </BasePageLayout>
  );
}
