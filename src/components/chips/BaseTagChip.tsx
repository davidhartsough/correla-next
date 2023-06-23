export default function BaseTagChip({ tag }: { tag: string }) {
  return (
    <div className="tag chip border font-medium opacity-90 hover:opacity-100">
      <span className="chip-text">{tag}</span>
    </div>
  );
}
