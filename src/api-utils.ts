import type { PersonProfilePage } from "./types";

const apiUrl = `${process.env.BASE_URL}/api/`;

export async function checkUsername(username: string) {
  const res = await fetch(`${apiUrl}p/?id=${username}`);
  const { usernameIsTaken } = await res.json();
  return usernameIsTaken;
}

export async function createP(username: string) {
  const res = await fetch(`${apiUrl}p/`, {
    method: "POST",
    body: JSON.stringify({ id: username }),
  });
  const { ok } = await res.json();
  return ok;
}

export async function updateP(p: PersonProfilePage) {
  const res = await fetch(`${apiUrl}p/`, {
    method: "PUT",
    body: JSON.stringify(p),
  });
  const { ok } = await res.json();
  return ok;
}

export async function saveP(profileId: string) {
  const res = await fetch(`${apiUrl}s/`, {
    method: "POST",
    body: JSON.stringify({ id: profileId }),
  });
  const { ok } = await res.json();
  return ok;
}

export async function unsaveP(profileId: string) {
  const res = await fetch(`${apiUrl}p/`, {
    method: "PUT",
    body: JSON.stringify({ id: profileId }),
  });
  const { ok } = await res.json();
  return ok;
}
