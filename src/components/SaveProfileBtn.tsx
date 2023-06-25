import { isProfileSaved, saveProfile, unsaveProfile } from "@/models/profiles";

// TODO: server/client
export default async function SaveProfileBtn({
  userId,
  profileId,
}: {
  userId: string;
  profileId: string;
}) {
  const isSaved = await isProfileSaved(userId, profileId);
  const action = isSaved ? unsaveProfile : saveProfile;
  return (
    <button
      onClick={() => action(userId, profileId)}
      className="mx-auto my-6 block h-10 rounded-3xl bg-bluebase px-8 font-medium leading-10 tracking-wide text-white shadow-sm transition-all hover:scale-105 hover:bg-bluehover hover:shadow focus:bg-bluehover focus:shadow"
    >
      {isSaved ? "Saved" : "Save"}
    </button>
  );
}
