import Explore from "@/components/Explore";
import Discover from "@/components/Discover";

export default function Directory({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { name, tags } = searchParams;
  return (
    <div>
      <form method="get" action="/d" id="explore">
        <Explore defaultName={name} defaultTags={tags} />
      </form>
      <Discover name={name} tags={tags} />
    </div>
  );
}
