import { createFileRoute, Link } from "@tanstack/react-router";
import { characters } from "@/data/characters";
import { PageHeader } from "@/components/site/Ui";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Teams — Naruto Fan Hub" },
      { name: "description", content: "Squad line-ups across the hidden villages, grouped by team assignment." },
      { property: "og:title", content: "Naruto Teams" },
      { property: "og:description", content: "Team 7, Team 8, Team 10, Team Guy and more." },
    ],
  }),
  component: () => {
    const groups = new Map<string, typeof characters>();
    characters.forEach((c) => {
      if (c.team === "—") return;
      groups.set(c.team, [...(groups.get(c.team) ?? []), c]);
    });
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-8">
        <PageHeader eyebrow="Organisation" title="Teams" description="Who trained with whom, and under which sensei." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...groups.entries()].map(([team, members]) => (
            <div key={team} className="panel-surface p-4">
              <h2 className="text-lg text-primary">{team}</h2>
              <ul className="mt-2 space-y-1">
                {members.map((m) => (
                  <li key={m.slug}>
                    <Link to="/characters/$slug" params={{ slug: m.slug }} className="text-sm text-muted-foreground hover:text-foreground">
                      {m.name} <span className="text-xs">· {m.rank}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  },
});
