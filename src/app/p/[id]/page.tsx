import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getProfile } from "@/models/profiles";
import TagChip from "@/components/chips/TagChip";
import EmailChip from "@/components/chips/EmailChip";
import ExtUrlChip from "@/components/chips/ExtUrlChip";
import EditLink from "@/components/EditLink";
import { getBasicMeta } from "@/metadata-utils";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const p = await getProfile(id);
  if (!p) return {};
  return getBasicMeta(p.name, `p/${id}`, `${p.name}: ${p.tagsArr.join(", ")}`);
}

export default async function PersonProfile({
  params: { id },
}: {
  params: { id: string };
}) {
  const p = await getProfile(id);
  if (!p) return redirect("/");
  const { name, tagsArr, email, links } = p;
  return (
    <main id="person">
      <header className="mb-6 flex items-center">
        <h1 id="name" className="m-0 flex-auto leading-10">
          {name}
        </h1>
        <EditLink profileId={id} />
      </header>
      <section id="profile">
        <div id="tags" className="chips flex flex-wrap pb-4">
          {tagsArr.map((tag, i) => (
            <TagChip key={`${tag}-${i}`} tag={tag} />
          ))}
        </div>
        <hr />
        <div id="links" className="chips mb-4 flex flex-wrap pt-6">
          {!!email && <EmailChip email={email} />}
          {links.map((url) => (
            <ExtUrlChip key={url} url={url} />
          ))}
        </div>
      </section>
    </main>
  );
}
