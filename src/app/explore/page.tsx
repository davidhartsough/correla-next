import ExploreSearchForm from "@/components/ExploreSearchForm";

export default function Explore() {
  return (
    <form method="get" action="/discover" id="explore">
      <ExploreSearchForm />
    </form>
  );
}
