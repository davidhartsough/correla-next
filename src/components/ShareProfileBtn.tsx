"use client";

import { Share2 } from "lucide-react";

// TODO: [everything]
const baseURL = "https://correla.co/";

export default function ShareProfileBtn({ profileId }: { profileId: string }) {
  const url = `${baseURL}p/${profileId}`;
  if (
    navigator &&
    navigator.canShare &&
    navigator.canShare({
      url,
      text: "Correla",
      title: "Correla",
    })
  ) {
    const shareData = {
      url,
      // text: `...`,
      // title: `${name} • Correla`,
    };
    const share = () => navigator.share(shareData);
    return (
      <div>
        <button
          onClick={share}
          className="mx-auto mb-6 flex h-10 items-center rounded-3xl border px-8 py-2 font-medium tracking-wide transition-all hover:scale-105 hover:border-borderhover hover:bg-white/80 hover:shadow-md focus:border-borderfocus focus:bg-white/80 focus:shadow-md dark:hover:bg-black/10 dark:focus:bg-black/10"
        >
          <Share2 />
          <span className="ml-2 mr-1 w-28 text-left">Share Profile</span>
        </button>
      </div>
    );
  }
  return null;
}
