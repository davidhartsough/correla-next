import type { Metadata } from "next";
import { getProfile } from "@/models/profiles";
import ProfilePageFooter from "@/components/ProfilePageFooter";
import TagChip from "@/components/chips/TagChip";
import EmailChip from "@/components/chips/EmailChip";
import ExtUrlChip from "@/components/chips/ExtUrlChip";
import { getBasicMeta } from "@/metadata-utils";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { name, tagsArr } = await getProfile(id);
  return getBasicMeta(name, `p/${id}`, `${name}: ${tagsArr.join(", ")}`);
}

export default async function PersonProfile({
  params: { id },
}: {
  params: { id: string };
}) {
  const { name, tagsArr, email, links } = await getProfile(id);
  return (
    <main id="person">
      <header>
        <h1 id="name">{name}</h1>
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
        <ProfilePageFooter profileId={id} />
      </section>
    </main>
  );
}
