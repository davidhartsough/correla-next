"use client";

import type { ChangeEvent } from "react";
import TagChips from "../chips/TagChips";

export default function TagInput({
  tagsStr,
  setTagsStr,
}: {
  tagsStr: string;
  setTagsStr: (tags: string) => void;
}) {
  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setTagsStr(target.value);
  };
  return (
    <fieldset className="my-4">
      <label htmlFor="tags-input" className="block py-1 text-lg">
        Tags
      </label>
      <textarea
        name="tags"
        id="tags-input"
        placeholder="Tags"
        required
        maxLength={384}
        minLength={2}
        rows={3}
        className="block w-full resize-none rounded border bg-transparent px-2 py-1 invalid:border-red-600 hover:border-borderhover invalid:hover:border-red-500 focus:border-borderfocus invalid:focus:border-red-600"
        value={tagsStr}
        onChange={handleChange}
      />
      <p className="mb-4 text-sm opacity-80">Separate tags with a comma.</p>
      <TagChips tagsStr={tagsStr} />
    </fieldset>
  );
}
