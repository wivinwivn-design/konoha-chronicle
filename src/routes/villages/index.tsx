import { createFileRoute, Link } from "@tanstack/react-router";
import { villages } from "@/data/world";
import { PageHeader, AvatarTile } from "@/components/site/Ui";

export const Route = createFileRoute("/villages/")({
  head: () => ({
    meta: [
      { title: "Hidden Villages — Naruto Fan Hub" },
      { name: "description", content: "History, leaders, geography and notable shinobi of every hidden village." },
      { property: "og:title", content: "Naruto Hidden Villages" },
      { property: "og:description", content: "Explore the five great nations and their hidden villages." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader
        eyebrow="World"
        title="Hidden Villages"
        description="Each hidden village with its history, leadership, geography, clans and defining events."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {villages.map((v) => (
          <Link
            key={v.slug}
            to="/villages/$slug"
            params={{ slug: v.slug }}
            className="hover-lift overflow-hidden rounded-lg border border-border bg-card"
          >
            <AvatarTile name={v.name.replace("Hidden ", "")} className="h-28 w-full" />
            <div className="p-4">
              <h2 className="text-lg">{v.name}</h2>
              <p className="text-xs text-primary">{v.country}</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{v.history}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ),
});
