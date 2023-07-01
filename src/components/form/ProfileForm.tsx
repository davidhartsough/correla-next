"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import type { PersonProfilePage } from "@/types";
import { updateP } from "@/api-utils";
import LinksForm, { urlPattern } from "./LinksForm";
import TagInput from "./TagInput";
import LilLoader from "../loader/LilLoader";

export default function ProfileForm({ p }: { p: PersonProfilePage }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(p.name);
  const [tagsStr, setTagsStr] = useState(p.tagsArr.join(", "));
  const [email, setEmail] = useState(p.email || "");
  const [hasError, setHasError] = useState(false);

  const handleNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };
  const handleEmailChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
  };

  const save = async () => {
    const tagsArr = tagsStr
      .trim()
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);
    const links: string[] = [];
    const urlInputs = document.querySelectorAll<HTMLInputElement>(".url-input");
    urlInputs.forEach((urlInput) => {
      const url = urlInput.value.trim();
      if (url && urlPattern.test(url)) {
        links.push(url);
      }
    });
    const profile = {
      id: p.id,
      name: name.trim(),
      tagsArr,
      email: email.trim() || null,
      links,
    };
    setHasError(false);
    setLoading(true);
    try {
      const ok = await updateP(profile);
      if (ok) {
        router.push(`/p/${p.id}`);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    }
  };

  return (
    <div>
      <fieldset className="mb-4">
        <label htmlFor="name-input" className="block py-1 text-lg">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
          required
          maxLength={128}
          minLength={2}
          className="block w-full rounded border bg-transparent px-2 py-1 invalid:border-red-600 hover:border-borderhover invalid:hover:border-red-500 focus:border-borderfocus invalid:focus:border-red-600"
          value={name}
          onChange={handleNameChange}
        />
      </fieldset>
      <TagInput tagsStr={tagsStr} setTagsStr={setTagsStr} />
      <hr className="my-8" />
      <fieldset className="my-4">
        <label htmlFor="email-input" className="block py-1 text-lg">
          Email
        </label>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="email@example.com"
          maxLength={128}
          pattern='^([^<>\(\)\[\]\\.,;:\s@"]{1,63})@((((?!-)(?!.*--)[a-zA-Z\-0-9]{1,63}(?<!-))+\.)+([a-zA-Z]{2,63}))$'
          title="Enter a valid email"
          className="block w-full rounded border bg-transparent px-2 py-1 invalid:border-red-600 hover:border-borderhover invalid:hover:border-red-500 focus:border-borderfocus invalid:focus:border-red-600"
          value={email}
          onChange={handleEmailChange}
        />
      </fieldset>
      <div className="mb-4">
        <LinksForm urls={p.links} />
      </div>
      {hasError && (
        <p className="text-sm text-red-600">
          Unfortunately there was an error saving your profile. Please try again
          or refresh the page.
        </p>
      )}
      <footer className="m-2 mt-8 flex items-center justify-center">
        {loading ? (
          <LilLoader size={40} />
        ) : (
          <button
            type="button"
            className="block h-10 rounded-3xl bg-bluebase px-8 font-medium leading-10 tracking-wide text-white shadow-sm transition-all hover:scale-105 hover:bg-bluehover hover:shadow focus:bg-bluehover focus:shadow disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:scale-100"
            disabled={name.trim().length < 2 || tagsStr.trim().length < 2}
            onClick={save}
          >
            Save
          </button>
        )}
      </footer>
    </div>
  );
}
