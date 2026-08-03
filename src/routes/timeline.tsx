import { createFileRoute, Link } from "@tanstack/react-router";
import { storyArcs } from "@/data/lore";
import { PageHeader } from "@/components/site/Ui";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Story Timeline — Naruto Fan Hub" },
      { name: "description", content: "An interactive timeline of the Naruto story from Part I through the Fourth Great Ninja War." },
      { property: "og:title", content: "Naruto Story Timeline" },
      { property: "og:description", content: "Follow the whole series arc by arc in order." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <PageHeader eyebrow="Story" title="Timeline" description="The series in order, from Team 7's first real mission to the end of the war." />
      <ol className="relative space-y-6 border-l border-border pl-6">
        {storyArcs.map((a, i) => (
          <li key={a.slug} className="relative">
            <span className="absolute -left-[31px] top-1 grid size-5 place-items-center rounded-full bg-ember text-[10px] font-bold text-primary-foreground">
              {i + 1}
            </span>
            <Link to="/story-arcs/$slug" params={{ slug: a.slug }} className="text-lg hover:text-primary">
              {a.name}
            </Link>
            <p className="text-xs text-primary">{a.part} · {a.episodes}</p>
            <p className="mt-1 text-sm text-muted-foreground">{a.summary}</p>
          </li>
        ))}
      </ol>
    </div>
  ),
});
