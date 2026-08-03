import { createFileRoute, notFound } from "@tanstack/react-router";
import { getArc } from "@/data/lore";
import { BulletList, Chip, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/story-arcs/$slug")({
  loader: ({ params }) => {
    const arc = getArc(params.slug);
    if (!arc) throw notFound();
    return { arc };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.arc;
    const title = a ? `${a.name} — Naruto Story Arc` : "Story Arc — Naruto Fan Hub";
    const description = a ? `${a.name} (${a.episodes}): summary, key battles, villains and outcome.` : "Story arc";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ArcPage,
});

function ArcPage() {
  const { arc: a } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Chip tone="primary">{a.part}</Chip>
      <h1 className="mt-2 text-4xl">{a.name}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {a.episodes} · {a.chapters}
      </p>
      <p className="mt-5 text-sm text-muted-foreground">{a.summary}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Section title="Main Characters">
          <BulletList items={a.mainCharacters} />
        </Section>
        <Section title="Main Villains">
          <BulletList items={a.villains} />
        </Section>
        <Section title="Key Battles">
          <BulletList items={a.battles} />
        </Section>
        <Section title="Important Events">
          <BulletList items={a.events} />
        </Section>
        <Section title="Outcome" className="md:col-span-2">
          <p className="text-sm text-muted-foreground">{a.outcome}</p>
        </Section>
      </div>
    </div>
  );
}
