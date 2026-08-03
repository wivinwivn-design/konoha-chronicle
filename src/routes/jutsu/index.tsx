import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { jutsu } from "@/data/jutsu";
import { PageHeader, Chip } from "@/components/site/Ui";

export const Route = createFileRoute("/jutsu/")({
  head: () => ({
    meta: [
      { title: "Jutsu Database — Naruto Fan Hub" },
      {
        name: "description",
        content:
          "Every notable Naruto jutsu with rank, classification, chakra nature, hand signs, creator and known users.",
      },
      { property: "og:title", content: "Naruto Jutsu Database" },
      { property: "og:description", content: "Search jutsu by rank, nature and classification." },
    ],
  }),
  component: JutsuPage,
});

function JutsuPage() {
  const [q, setQ] = useState("");
  const list = jutsu.filter(
    (j) =>
      j.name.toLowerCase().includes(q.toLowerCase()) ||
      j.chakraNature.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader
        eyebrow="Database"
        title="Jutsu"
        description="Techniques from across the shinobi world, with ranks, hand signs, creators and known users."
      />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search jutsu or chakra nature"
        aria-label="Search jutsu"
        className="mb-6 h-10 w-full max-w-md rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-primary"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((j) => (
          <Link
            key={j.slug}
            to="/jutsu/$slug"
            params={{ slug: j.slug }}
            className="hover-lift rounded-lg border border-border bg-card p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-base">{j.name}</h2>
              <Chip tone="primary">Rank {j.rank}</Chip>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{j.japaneseName}</p>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{j.description}</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-primary">
              {j.chakraNature}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
