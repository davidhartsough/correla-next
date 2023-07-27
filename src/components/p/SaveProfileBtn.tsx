"use client";

import { useState } from "react";
import { Bookmark, BookmarkMinus, BookmarkPlus } from "lucide-react";
import { saveP, unsaveP } from "@/api-utils";
import LilLoader from "../loader/LilLoader";

export default async function SaveProfileBtn({
  isSavedDefault,
  profileId,
}: {
  isSavedDefault: boolean;
  profileId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(isSavedDefault);
  const handleClick = async () => {
    setLoading(true);
    const action = isSaved ? unsaveP : saveP;
    setIsSaved(!isSaved);
    await action(profileId);
    setLoading(false);
  };
  if (loading) return <LilLoader size={40} />;
  return (
    <button
      onClick={handleClick}
      className="group ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-bluebase p-1 text-white shadow-sm transition-all hover:scale-105 hover:bg-bluehover hover:shadow focus:bg-bluehover focus:shadow"
    >
      <Bookmark
        width={20}
        height={20}
        className={`block group-hover:hidden ${isSaved ? "fill-white" : ""}`}
      />
      {isSaved ? (
        <BookmarkMinus
          width={20}
          height={20}
          className="hidden group-hover:block"
        />
      ) : (
        <BookmarkPlus
          width={20}
          height={20}
          className="hidden group-hover:block"
        />
      )}
    </button>
  );
}
