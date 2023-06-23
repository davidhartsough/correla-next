"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Plus } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableLink from "./SortableLink";
import LinkItem from "./LinkItem";

export const urlPattern =
  /^(https?:\/\/)((?!-)(?!.*--)[a-zA-Z\-0-9]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}(\/[^\s]*)?$/;

export default function LinksForm({ urls }: { urls: string[] }) {
  const [links, setLinks] = useState<string[]>(urls);
  const [activeId, setActiveId] = useState<string | null>(null);

  const [newUrlInput, setNewUrlInput] = useState("");

  const handleNewUrlInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setNewUrlInput(target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newUrl = newUrlInput.trim();
    if (newUrl.length > 10 && urlPattern.test(newUrl)) {
      setLinks([...links, newUrl]);
      setNewUrlInput("");
    }
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = ({ active }: DragStartEvent) => {
    if (!active) return;
    setActiveId(active.id as string);
  };
  const handleDragEnd = ({ over }: DragEndEvent) => {
    if (over && activeId && activeId !== over.id) {
      setLinks((items) => {
        const oldIndex = items.indexOf(activeId);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };
  const handleDragCancel = () => setActiveId(null);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="my-4">
          <label htmlFor="link-input" className="block py-1 text-lg">
            Links
          </label>
          <div className="flex items-center">
            <input
              type="url"
              id="link-input"
              name="link"
              placeholder="https://www.example.com/profile"
              maxLength={192}
              pattern="^(https?:\/\/)((?!-)[a-zA-Z\-0-9]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}(\/[^\s]*)?$"
              title="Enter a valid URL"
              className="block flex-auto rounded border bg-transparent px-2 py-1 hover:border-borderhover focus:border-borderfocus"
              value={newUrlInput}
              onChange={handleNewUrlInputChange}
            />
            <button
              type="submit"
              className="ml-1 flex items-center justify-center rounded-full border p-1 hover:border-borderhover focus:border-borderfocus"
            >
              <Plus />
            </button>
          </div>
        </fieldset>
      </form>
      <fieldset className="my-8">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={links} strategy={verticalListSortingStrategy}>
            {links.map((link) => (
              <SortableLink key={link} url={link} />
            ))}
          </SortableContext>
          <DragOverlay>
            {!!activeId && <LinkItem url={activeId} isDragging />}
          </DragOverlay>
        </DndContext>
      </fieldset>
    </div>
  );
}
