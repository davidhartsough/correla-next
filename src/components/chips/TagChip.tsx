import Link from "next/link";

function getTagLink(tag: string): string {
  return `/discover?tags=${encodeURIComponent(tag)}`;
}

export default function TagChip({ tag }: { tag: string }) {
  return (
    <Link
      href={getTagLink(tag)}
      className="tag chip border font-medium opacity-90 hover:bg-white/80 hover:opacity-100 hover:shadow focus:bg-white/80 focus:opacity-100 focus:shadow dark:hover:bg-black/30 dark:focus:bg-black/30"
    >
      <span className="chip-text">{tag}</span>
    </Link>
  );
}
