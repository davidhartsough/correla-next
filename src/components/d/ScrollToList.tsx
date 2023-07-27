"use client";

import { useEffect } from "react";

export default function ScrollToList() {
  useEffect(() => {
    document.getElementById("discover")?.scrollIntoView();
  }, []);
  return <div />;
}
