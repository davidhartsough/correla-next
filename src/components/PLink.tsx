import Link from "next/link";

export default function PLink({
  id,
  name,
  tagsStr,
}: {
  id: string;
  name: string;
  tagsStr: string;
}) {
  return (
    <Link
      href={`/p/${id}`}
      className="mb-4 block rounded bg-gray-100/50 px-4 py-3 hover:bg-gray-100 focus:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 dark:focus:bg-white/10"
    >
      <p className="pb-1 text-xl font-medium leading-tight tracking-wide">
        {name}
      </p>
      <p className="text-sm">{tagsStr}</p>
    </Link>
  );
}
