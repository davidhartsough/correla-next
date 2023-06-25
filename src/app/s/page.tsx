import { redirect } from "next/navigation";
import { getUser } from "@/session";
import { getSavedProfiles } from "@/models/profiles";
import PLink from "@/components/PLink";

export default async function Saved() {
  const user = await getUser();
  if (!user) return redirect("/a/login");
  const saved = await getSavedProfiles(user.id);
  if (saved.length === 0) {
    return <p>Any profiles you save will be listed here.</p>;
  }
  return (
    <div>
      {saved.map((p) => (
        <PLink key={p.id} id={p.id} name={p.name} tagsStr={p.tagsStr} />
      ))}
    </div>
  );
}
