import type { PersonProfilePage } from "./types";

const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/p/"
    : "https://correla.vercel.app/api/p/";

export async function checkUsername(username: string) {
  const res = await fetch(`${apiUrl}?id=${username}`);
  const { usernameIsTaken } = await res.json();
  return usernameIsTaken;
}

export async function createP(username: string) {
  const res = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ id: username }),
  });
  const { ok } = await res.json();
  return ok;
}

export async function updateP(p: PersonProfilePage) {
  const res = await fetch(apiUrl, {
    method: "PUT",
    body: JSON.stringify(p),
  });
  const { ok } = await res.json();
  return ok;
}
