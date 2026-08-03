import { createFileRoute } from "@tanstack/react-router";
import { hokages } from "@/data/lore";
import { BulletList, PageHeader, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/hokage")({
  head: () => ({
    meta: [
      { title: "Hokage — Naruto Fan Hub" },
      { name: "description", content: "Every Hokage of the Hidden Leaf with biography, leadership, abilities and timeline." },
      { property: "og:title", content: "The Hokage of Konoha" },
      { property: "og:description", content: "From Hashirama Senju to Naruto Uzumaki." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader eyebrow="Leadership" title="Hokage" description="Seven leaders and the village they each inherited." />
      <div className="space-y-4">
        {hokages.map((h) => (
          <div key={h.slug} id={h.slug} className="panel-surface scroll-mt-20 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">{h.order} Hokage</p>
            <h2 className="text-2xl">{h.name}</h2>
            <p className="text-xs text-muted-foreground">{h.title} · {h.reign}</p>
            <p className="mt-3 text-sm text-muted-foreground">{h.biography}</p>
            <p className="mt-2 text-sm text-muted-foreground">{h.leadership}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Section title="Abilities">
                <BulletList items={h.abilities} />
              </Section>
              <Section title="Achievements">
                <BulletList items={h.achievements} />
              </Section>
              <Section title="Timeline">
                <ol className="space-y-2">
                  {h.timeline.map((t) => (
                    <li key={t.label} className="border-l-2 border-primary/60 pl-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-primary">{t.label}</p>
                      <p className="text-sm text-muted-foreground">{t.text}</p>
                    </li>
                  ))}
                </ol>
              </Section>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
