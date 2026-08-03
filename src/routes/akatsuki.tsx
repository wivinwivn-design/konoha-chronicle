import { createFileRoute } from "@tanstack/react-router";
import { akatsuki } from "@/data/lore";
import { BulletList, PageHeader, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/akatsuki")({
  head: () => ({
    meta: [
      { title: "Akatsuki — Naruto Fan Hub" },
      { name: "description", content: "Profiles for every Akatsuki member: biography, abilities, partners, battles and legacy." },
      { property: "og:title", content: "The Akatsuki" },
      { property: "og:description", content: "Pain, Itachi, Kisame, Deidara, Sasori and the rest of the organisation." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader eyebrow="Organisation" title="Akatsuki" description="Ten members, one plan, and the ring each of them wore." />
      <div className="grid gap-4 lg:grid-cols-2">
        {akatsuki.map((m) => (
          <div key={m.slug} id={m.slug} className="panel-surface scroll-mt-20 p-5">
            <h2 className="text-2xl">{m.name}</h2>
            <p className="text-xs text-primary">{m.ring} · {m.origin}</p>
            <p className="mt-3 text-sm text-muted-foreground">{m.biography}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Section title="Abilities">
                <BulletList items={m.abilities} />
              </Section>
              <Section title="Battles">
                <BulletList items={m.battles} />
              </Section>
              <Section title="Partners">
                <BulletList items={m.partners} />
              </Section>
              <Section title="Goals">
                <p className="text-sm text-muted-foreground">{m.goals}</p>
              </Section>
              <Section title="Death">
                <p className="text-sm text-muted-foreground">{m.death}</p>
              </Section>
              <Section title="Legacy">
                <p className="text-sm text-muted-foreground">{m.legacy}</p>
              </Section>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
