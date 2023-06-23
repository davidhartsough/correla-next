import BaseTagChip from "./BaseTagChip";

export default function TagChips({ tagsStr }: { tagsStr: string }) {
  const tagsArr = tagsStr
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t);
  return (
    <div className="chips flex flex-wrap">
      {tagsArr.map((tag, i) => (
        <BaseTagChip key={`${tag}-${i}`} tag={tag} />
      ))}
    </div>
  );
}
