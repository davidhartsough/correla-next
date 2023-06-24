import Link from "next/link";
import { redirect } from "next/navigation";
import { discoverProfiles } from "@/models/profiles";

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
        <Link
          key={p.id}
          href={`/p/${p.id}`}
          className="mb-4 block rounded bg-gray-100/50 px-4 py-3 hover:bg-gray-100 focus:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <p className="pb-1 text-xl font-medium leading-tight tracking-wide">
            {p.name}
          </p>
          <p className="text-sm">{p.tagsStr}</p>
        </Link>
      ))}
      {profiles.length === 25 && <p>Showing only first 25 results</p>}
    </div>
  );
}
