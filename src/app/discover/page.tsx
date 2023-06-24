import { redirect } from "next/navigation";
import { discoverProfiles } from "@/models/profiles";
import PLink from "@/components/PLink";

export default async function Discover({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { name, tags } = searchParams;
  if (!name && !tags) redirect("/explore");
  const profiles = await discoverProfiles(name, tags);
  // TODO: what if empty
  return (
    <div>
      {profiles.map((p) => (
        <PLink key={p.id} id={p.id} name={p.name} tagsStr={p.tagsStr} />
      ))}
      {profiles.length === 25 && <p>Showing only first 25 results</p>}
    </div>
  );
}
