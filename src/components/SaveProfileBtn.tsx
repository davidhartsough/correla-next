import { isProfileSaved, saveProfile, unsaveProfile } from "@/models/profiles";

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
    <div>
      <button className="primary" onClick={() => action(userId, profileId)}>
        {isSaved ? "Saved" : "Save"}
      </button>
    </div>
  );
}
