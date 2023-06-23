"use client";

import { memo, forwardRef, useEffect, HTMLAttributes } from "react";
import { GripVertical } from "lucide-react";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";

interface Props {
  url: string;
  isDragging?: boolean;
  listeners?: DraggableSyntheticListeners;
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  style?: HTMLAttributes<HTMLDivElement>["style"];
}

const LinkItem = memo(
  forwardRef<HTMLDivElement, Props>(function LinkItem(
    { url, isDragging, listeners, setActivatorNodeRef, ...props },
    ref
  ) {
    useEffect(() => {
      if (!isDragging) return;
      document.body.style.cursor = "grabbing";
      return () => {
        document.body.style.cursor = "";
      };
    }, [isDragging]);
    return (
      <div {...props} ref={ref}>
        <div
          className={`my-4 flex items-center rounded ${
            isDragging
              ? "bg-white/90 shadow-xl shadow-black dark:bg-black/90"
              : ""
          }`}
        >
          <input
            type="url"
            placeholder="https://www.example.com/profile"
            maxLength={192}
            pattern="^(https?:\/\/)((?!-)[a-zA-Z\-0-9]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}(\/[^\s]*)?$"
            title="Enter a valid URL"
            className="url-input block flex-auto rounded border bg-transparent px-2 py-1 invalid:border-red-600 hover:border-borderhover invalid:hover:border-red-500 focus:border-borderfocus invalid:focus:border-red-600"
            defaultValue={url}
          />
          <button
            type="button"
            className="ml-1 flex cursor-ns-resize items-center justify-center rounded border p-1 hover:border-borderhover focus:border-borderfocus"
            ref={setActivatorNodeRef}
            {...listeners}
          >
            <GripVertical />
          </button>
        </div>
      </div>
    );
  })
);

export default LinkItem;
