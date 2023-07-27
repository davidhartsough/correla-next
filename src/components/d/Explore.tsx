"use client";

import { ChangeEvent, useState } from "react";

export default function ExploreSearchForm({
  defaultName,
  defaultTags,
}: {
  defaultName: string | undefined;
  defaultTags: string | undefined;
}) {
  const [name, setName] = useState(defaultName || "");
  const [tags, setTags] = useState(defaultTags || "");
  const handleNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };
  const handleTagChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setTags(target.value);
  };
  return (
    <fieldset>
      <label htmlFor="name-input" className="block py-1 text-lg">
        Name
      </label>
      <input
        type="text"
        id="name-input"
        name="name"
        placeholder="Name"
        maxLength={128}
        className="mb-2 block w-full rounded border bg-transparent px-2 py-1 hover:border-borderhover focus:border-borderfocus"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="tags-input" className="mt-2 block py-1 text-lg">
        Tags
      </label>
      <textarea
        id="tags-input"
        name="tags"
        placeholder="Tags"
        maxLength={384}
        rows={3}
        className="block w-full resize-none rounded border bg-transparent px-2 py-1 hover:border-borderhover focus:border-borderfocus"
        value={tags}
        onChange={handleTagChange}
      />
      <p className="text-sm opacity-80">Separate tags with a comma.</p>
      <button
        type="submit"
        className="mx-auto my-6 block h-10 rounded-3xl bg-bluebase px-8 font-medium leading-10 tracking-wide text-white shadow-sm transition-all hover:scale-105 hover:bg-bluehover hover:shadow focus:bg-bluehover focus:shadow disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:scale-100"
        disabled={!name && !tags}
      >
        Search
      </button>
    </fieldset>
  );
}
