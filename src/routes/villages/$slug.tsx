import { createFileRoute, notFound } from "@tanstack/react-router";
import { getVillage } from "@/data/world";
import { BulletList, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/villages/$slug")({
  loader: ({ params }) => {
    const village = getVillage(params.slug);
    if (!village) throw notFound();
    return { village };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.village;
    const title = v ? `${v.name} — Naruto Fan Hub` : "Village — Naruto Fan Hub";
    const description = v ? `${v.name} of the ${v.country}: history, leaders, clans and major events.` : "Village";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: VillagePage,
});

function VillagePage() {
  const { village: v } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{v.country}</p>
      <h1 className="mt-1 text-4xl">{v.name}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{v.japaneseName}</p>
      <p className="mt-5 text-sm text-muted-foreground">{v.history}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Section title="Leaders">
          <BulletList items={v.leaders} />
        </Section>
        <Section title="Notable Shinobi">
          <BulletList items={v.notableShinobi} />
        </Section>
        <Section title="Clans">
          <BulletList items={v.clans} />
        </Section>
        <Section title="Special Techniques">
          <BulletList items={v.techniques} />
        </Section>
        <Section title="Geography" className="md:col-span-2">
          <p className="text-sm text-muted-foreground">{v.geography}</p>
        </Section>
        <Section title="Major Events" className="md:col-span-2">
          <BulletList items={v.events} />
        </Section>
      </div>
    </div>
  );
}
