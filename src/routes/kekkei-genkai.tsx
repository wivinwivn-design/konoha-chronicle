import { createFileRoute, Link } from "@tanstack/react-router";
import { characters } from "@/data/characters";
import { PageHeader } from "@/components/site/Ui";

export const Route = createFileRoute("/kekkei-genkai")({
  head: () => ({
    meta: [
      { title: "Kekkei Genkai & Chakra Natures — Naruto Fan Hub" },
      { name: "description", content: "Explore bloodline limits and chakra nature affinities across the shinobi world." },
      { property: "og:title", content: "Kekkei Genkai Explorer" },
      { property: "og:description", content: "Bloodline limits and chakra natures, grouped by user." },
    ],
  }),
  component: () => {
    const withKg = characters.filter((c) => c.kekkeiGenkai !== "None");
    const natures = ["Fire", "Water", "Wind", "Lightning", "Earth"];
    return (
      <div className="mx-auto max-w-[1400px] px-4 py-8">
        <PageHeader eyebrow="Explorer" title="Kekkei Genkai" description="Bloodline limits and the chakra natures behind them." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {withKg.map((c) => (
            <Link key={c.slug} to="/characters/$slug" params={{ slug: c.slug }} className="hover-lift rounded-lg border border-border bg-card p-4">
              <h2 className="text-base">{c.name}</h2>
              <p className="mt-1 text-sm text-primary">{c.kekkeiGenkai}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.chakraNature.join(" · ")}</p>
            </Link>
          ))}
        </div>
        <h2 className="mt-10 text-2xl">Chakra Nature Explorer</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {natures.map((n) => (
            <div key={n} className="panel-surface p-4">
              <h3 className="text-lg text-primary">{n}</h3>
              <ul className="mt-2 space-y-1">
                {characters
                  .filter((c) => c.chakraNature.includes(n))
                  .map((c) => (
                    <li key={c.slug}>
                      <Link to="/characters/$slug" params={{ slug: c.slug }} className="text-xs text-muted-foreground hover:text-foreground">
                        {c.name}
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
