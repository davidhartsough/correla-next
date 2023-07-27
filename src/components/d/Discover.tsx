import { discoverProfiles } from "@/models/profiles";
import PLink from "@/components/PLink";
import ScrollToList from "./ScrollToList";

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
  name,
  tags,
}: {
  name: string | undefined;
  tags: string | undefined;
}) {
  if (!name && !tags) return null;
  const profiles = await discoverProfiles(name, tags);
  const searchTerms = getSearchTerms(name, tags);
  return (
    <div className="mt-4">
      <h2 className="mb-4 text-2xl font-light">Discover</h2>
      <div id="discover" className="ml-1">
        {profiles.length === 0 ? (
          <p>{`No profiles match ${searchTerms}.`}</p>
        ) : (
          <p className="mb-4 ml-1">{`${profiles.length} profile${
            profiles.length === 1 ? "" : "s"
          } matched ${searchTerms}.`}</p>
        )}
      </div>
      <ScrollToList />
      {profiles.map((p) => (
        <PLink key={p.id} id={p.id} name={p.name} tagsStr={p.tagsStr} />
      ))}
      {profiles.length === 25 && (
        <p className="ml-1 mt-4">Showing only first 25 results</p>
      )}
    </div>
  );
}
