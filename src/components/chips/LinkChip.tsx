export default function LinkChip({ url, text }: { url: string; text: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="link chip border border-blue-600 border-opacity-50 text-blue-600 hover:bg-blue-400/5 hover:shadow focus:bg-blue-400/5 focus:shadow dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500/10 dark:focus:bg-blue-500/10"
    >
      <span className="chip-text">{text}</span>
    </a>
  );
}
