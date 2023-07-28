"use client";

import { useEffect } from "react";

export default function BgSpin() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("bg-spin")?.classList.add("animate-spin-slow");
    }, 3333);
    return () => clearTimeout(timer);
  }, []);
  return <div />;
}
