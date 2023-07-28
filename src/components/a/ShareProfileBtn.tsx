"use client";

import { Share2 } from "lucide-react";
import { useEffect, useState } from "react";

const baseURL = "https://correla.vercel.app/";

export default function ShareProfileBtn({ profileId }: { profileId: string }) {
  const [canShare, setCanShare] = useState(false);
  useEffect(() => {
    if (
      window.navigator &&
      window.navigator.canShare &&
      window.navigator.canShare({
        url: baseURL,
        text: "Correla",
        title: "Correla",
      })
    ) {
      setCanShare(true);
    }
  }, []);
  if (!canShare) return null;

  const share = () => {
    window.navigator.share({
      url: `${baseURL}p/${profileId}`,
    });
  };
  return (
    <button
      onClick={share}
      className="mb-6 flex h-10 flex-auto items-center rounded-3xl bg-bluebtn/60 hover:bg-bluebtn/80 border border-white px-9 py-2 font-medium tracking-wide transition-all hover:scale-105 hover:shadow-md hover:shadow-white/60 focus:shadow-white/80"
    >
      <Share2 />
      <span className="ml-2 text-left">Share Profile</span>
    </button>
  );
}
