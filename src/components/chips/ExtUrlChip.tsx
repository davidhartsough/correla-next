import LinkChip from "./LinkChip";

const urlPrefixes = ["https://", "http://", "www.", "www2."];
function formatLink(url: string): string {
  let link = url;
  urlPrefixes.forEach((prefix) => {
    if (link.startsWith(prefix)) {
      link = link.replace(prefix, "");
    }
  });
  if (link.charAt(link.length - 1) === "/") {
    link = link.slice(0, -1);
  }
  if (link.length > 40) {
    link = link.slice(0, 40) + "…";
  }
  return link;
}

export default function ExtUrlChip({ url }: { url: string }) {
  return <LinkChip url={url} text={formatLink(url)} />;
}
