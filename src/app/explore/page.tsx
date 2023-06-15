import BasePageLayout from "@/components/BasePageLayout";

export default function Explore() {
  return (
    <BasePageLayout title="Explore">
      <form method="get" action="/discover" id="explore">
        <fieldset>
          <label htmlFor="name-input" className="block py-1 text-lg">
            Name
          </label>
          <input
            type="text"
            id="name-input"
            name="name"
            placeholder="Name"
            maxLength={120}
            className="mb-2 block w-full rounded border bg-transparent px-2 py-1 hover:border-borderhover focus:border-borderfocus"
          />
          <label htmlFor="tags-input" className="mt-2 block py-1 text-lg">
            Tags
          </label>
          <textarea
            id="tags-input"
            name="tags"
            placeholder="Tags"
            maxLength={240}
            rows={3}
            className="block w-full resize-none rounded border bg-transparent px-2 py-1 hover:border-borderhover focus:border-borderfocus"
          />
          <p className="text-sm opacity-80">Separate tags with a comma.</p>
          <button
            type="submit"
            className="mx-auto my-6 block h-10 rounded-3xl bg-bluebase px-8 py-2 font-medium tracking-wide text-white shadow-sm transition-all hover:scale-105 hover:bg-bluehover hover:shadow focus:bg-bluehover focus:shadow"
          >
            Search
          </button>
        </fieldset>
      </form>
    </BasePageLayout>
  );
}
