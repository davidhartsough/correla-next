"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { checkUsername, createP } from "@/api-utils";
import LilLoader from "../loader/LilLoader";

const usernamePattern = /^[a-z0-9]{3,36}$/;

export default function UsernameForm({ suggestion }: { suggestion: string }) {
  const [username, setUsername] = useState(suggestion);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [lastInput, setLastInput] = useState("");
  const [isTaken, setIsTaken] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsValid(usernamePattern.test(username));
  }, [username]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUsername(target.value);
    setHasError(false);
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setHasError(false);
      setLoading(true);
      setLastInput(username);
      try {
        const usernameIsTaken = await checkUsername(username);
        if (usernameIsTaken) {
          setIsTaken(true);
          setLoading(false);
        } else {
          setIsTaken(false);
          try {
            setFinishing(true);
            const ok = await createP(username);
            if (ok) {
              router.push("/a/edit");
            } else {
              setIsTaken(true);
              setLoading(false);
              setFinishing(false);
            }
          } catch {
            setHasError(true);
            setIsTaken(false);
            setLoading(false);
            setFinishing(false);
          }
        }
      } catch {
        setHasError(true);
        setIsTaken(false);
        setIsTaken(true);
        setLoading(false);
        setFinishing(false);
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
              pattern="[a-z0-9]{3,36}"
              title="Usernames can only contain lowercase alphanumeric characters and must be at least 3 characters long."
              readOnly={loading}
              onChange={handleInputChange}
            />
            {loading ? (
              <div className="ml-1 flex items-center justify-center">
                <LilLoader />
              </div>
            ) : (
              <button
                type="submit"
                className="ml-1 flex items-center justify-center rounded-full bg-bluebase p-1 text-white transition-colors hover:bg-bluehover focus:bg-bluehover"
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
          {hasError && (
            <p className="my-2 text-sm text-red-600">
              Unfortunately there was an error checking that username. Please
              try a different one.
            </p>
          )}
        </fieldset>
      </form>
    </div>
  );
}
