import { redirect } from "next/navigation";
import { discoverProfiles } from "@/models/profiles";
import PLink from "@/components/PLink";

const getSearchTerms = (name: string | undefined, tags: string | undefined) => {
  let results = name ? `the name "${name}"` : "";
  if (tags) {
    if (name) {
      results += " and ";
    }
    results += "the tag";
    if (tags.includes(",")) {
      const tagsArr = tags
        .split(",")
        .map((i) => i.trim().toLowerCase())
        .filter((t) => t);
      if (tagsArr.length > 1) {
        results += `s: "${tagsArr.join(", ")}"`;
      } else {
        results += `: "${tagsArr[0]}"`;
      }
    } else {
      results += `: "${tags.trim().toLowerCase()}"`;
    }
  }
  return results;
};

export default async function Discover({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { name, tags } = searchParams;
  if (!name && !tags) redirect("/explore");
  const profiles = await discoverProfiles(name, tags);
  const searchTerms = getSearchTerms(name, tags);
  if (profiles.length === 0) {
    return <p>{`No profiles match ${searchTerms}.`}</p>;
  }
  return (
    <div>
      <p className="mb-4 ml-1">{`${profiles.length} profile${
        profiles.length === 1 ? "" : "s"
      } matched ${searchTerms}.`}</p>
      {profiles.map((p) => (
        <PLink key={p.id} id={p.id} name={p.name} tagsStr={p.tagsStr} />
      ))}
      {profiles.length === 25 && (
        <p className="ml-1 mt-4">Showing only first 25 results</p>
      )}
    </div>
  );
}
