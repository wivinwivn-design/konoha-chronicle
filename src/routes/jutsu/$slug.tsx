import { createFileRoute, notFound } from "@tanstack/react-router";
import { getJutsu } from "@/data/jutsu";
import { BulletList, Chip, InfoRow, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/jutsu/$slug")({
  loader: ({ params }) => {
    const item = getJutsu(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const j = loaderData?.item;
    const title = j ? `${j.name} — Naruto Jutsu` : "Jutsu — Naruto Fan Hub";
    const description = j ? `${j.name}: rank ${j.rank} ${j.classification}. ${j.description}` : "Jutsu entry.";
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 155) },
      ],
    };
  },
  component: JutsuDetail,
});

function JutsuDetail() {
  const { item: j } = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl">{j.name}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{j.japaneseName}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Chip tone="primary">Rank {j.rank}</Chip>
        <Chip>{j.type}</Chip>
        <Chip>{j.chakraNature}</Chip>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">{j.description}</p>
      <div className="mt-6 space-y-4">
        <Section title="Details">
          <dl>
            <InfoRow label="Classification" value={j.classification} />
            <InfoRow label="Hand Signs" value={j.handSigns} />
            <InfoRow label="Creator" value={j.creator} />
            <InfoRow label="Known Users" value={j.users} />
            <InfoRow label="First Appearance" value={j.firstAppearance} />
          </dl>
        </Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Section title="Strengths">
            <BulletList items={j.strengths} />
          </Section>
          <Section title="Weaknesses">
            <BulletList items={j.weaknesses} />
          </Section>
        </div>
      </div>
    </div>
  );
}
