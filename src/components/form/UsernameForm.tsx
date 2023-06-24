"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { checkIfUsernameTaken, createNewProfile } from "@/models/profiles";

const usernamePattern = /^[a-z\-0-9]{3,36}$/;

export default function UsernameForm({
  suggestion,
  name,
  email,
}: {
  suggestion: string;
  name: string;
  email: string;
}) {
  const [username, setUsername] = useState(suggestion);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [lastInput, setLastInput] = useState("");
  const [isTaken, setIsTaken] = useState(false);
  const [finishing, setFinishing] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsValid(usernamePattern.test(username));
  }, [username]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUsername(target.value);
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setLoading(true);
      setLastInput(username);
      const usernameIsTaken = await checkIfUsernameTaken(username);
      if (usernameIsTaken) {
        setIsTaken(true);
        setLoading(false);
      } else {
        setIsTaken(false);
        setFinishing(true);
        await createNewProfile(username, name, email);
        router.push("/a/edit");
      }
    }
  };
  if (finishing) {
    return (
      <div className="flex items-center justify-center text-center">
        <p className="rounded-3xl border px-6 pb-2.5 pt-2 align-middle">
          {username}
        </p>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="my-4" disabled={loading}>
          <label htmlFor="username-input" className="block py-1 text-lg">
            Username
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="username-input"
              className="block flex-auto rounded border bg-transparent px-2 py-1 invalid:border-red-600 hover:border-borderhover invalid:hover:border-red-500 focus:border-borderfocus invalid:focus:border-red-600"
              name="username"
              required
              placeholder="username"
              value={username}
              maxLength={36}
              minLength={3}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              pattern="[a-z\-0-9]{3,36}"
              title="Usernames can only contain lowercase alphanumeric characters and hyphens and must be at least 3 characters long."
              readOnly={loading}
              onChange={handleInputChange}
            />
            {loading ? (
              <p>loading</p>
            ) : (
              <button
                type="submit"
                className="ml-1 flex items-center justify-center rounded-full bg-bluebase p-1 transition-colors hover:bg-bluehover focus:bg-bluehover"
                disabled={!isValid}
              >
                <ArrowBigRight />
              </button>
            )}
          </div>
          <p className="my-1 text-sm opacity-80">
            {!!lastInput && !!isTaken
              ? `Sorry, "${lastInput}" is already taken.`
              : "If the username is available, you can keep it!"}
          </p>
        </fieldset>
      </form>
    </div>
  );
}
