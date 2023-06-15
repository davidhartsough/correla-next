import LinkChip from "./LinkChip";

export default function EmailChip({ email }: { email: string }) {
  return <LinkChip url={`mailto:${email}`} text="Email" />;
}
