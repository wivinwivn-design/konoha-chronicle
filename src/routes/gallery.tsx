import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-village.jpg";
import { characters } from "@/data/characters";
import { AvatarTile, PageHeader } from "@/components/site/Ui";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Naruto Fan Hub" },
      { name: "description", content: "Placeholder art gallery of character tiles and village scenery from the fan hub." },
      { property: "og:title", content: "Naruto Fan Hub Gallery" },
      { property: "og:description", content: "Village scenery and character tiles." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader eyebrow="Media" title="Gallery" description="Original scenery art and placeholder character tiles." />
      <img
        src={heroImage}
        alt="Ninja village at sunset with carved mountain faces"
        loading="lazy"
        width={1920}
        height={1088}
        className="mb-6 w-full rounded-xl border border-border object-cover"
      />
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {characters.map((c) => (
          <Link key={c.slug} to="/characters/$slug" params={{ slug: c.slug }} className="hover-lift overflow-hidden rounded-lg border border-border">
            <AvatarTile name={c.name} affiliation={c.affiliation} className="aspect-square w-full" />
          </Link>
        ))}
      </div>
    </div>
  ),
});
