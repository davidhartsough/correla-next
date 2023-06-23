"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import LinkItem from "./LinkItem";

export default function SortableLink({ url }: { url: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    setActivatorNodeRef,
  } = useSortable({ id: url });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <LinkItem
      url={url}
      ref={setNodeRef}
      style={style}
      listeners={listeners}
      isDragging={isDragging}
      setActivatorNodeRef={setActivatorNodeRef}
      {...attributes}
    />
  );
}
