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
    <div>
      <button
        onClick={share}
        className="mx-auto mb-6 flex h-10 items-center rounded-3xl border px-8 py-2 font-medium tracking-wide transition-all hover:scale-105 hover:border-borderhover hover:bg-white/80 hover:shadow-md focus:border-borderfocus focus:bg-white/80 focus:shadow-md dark:hover:bg-black/10 dark:focus:bg-black/10"
      >
        <Share2 />
        <span className="ml-2 mr-1 w-24 text-left">Share Profile</span>
      </button>
    </div>
  );
}
