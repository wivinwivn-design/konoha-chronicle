import { createFileRoute, Link } from "@tanstack/react-router";
import { storyArcs } from "@/data/lore";
import { Chip, PageHeader } from "@/components/site/Ui";

export const Route = createFileRoute("/story-arcs/")({
  head: () => ({
    meta: [
      { title: "Story Arcs — Naruto Fan Hub" },
      { name: "description", content: "Every Naruto and Shippuden story arc with episodes, chapters, battles and outcomes." },
      { property: "og:title", content: "Naruto Story Arcs" },
      { property: "og:description", content: "From the Land of Waves to the Fourth Great Ninja War." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader
        eyebrow="Story"
        title="Story Arcs"
        description="The full run of the series, arc by arc, with original summaries."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {storyArcs.map((a) => (
          <Link
            key={a.slug}
            to="/story-arcs/$slug"
            params={{ slug: a.slug }}
            className="hover-lift rounded-lg border border-border bg-card p-4"
          >
            <Chip tone="primary">{a.part}</Chip>
            <h2 className="mt-2 text-lg">{a.name}</h2>
            <p className="text-xs text-muted-foreground">
              {a.episodes} · {a.chapters}
            </p>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{a.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  ),
});
