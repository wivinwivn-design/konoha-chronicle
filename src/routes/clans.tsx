import { createFileRoute } from "@tanstack/react-router";
import { clans } from "@/data/world";
import { BulletList, PageHeader, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/clans")({
  head: () => ({
    meta: [
      { title: "Clans — Naruto Fan Hub" },
      { name: "description", content: "Every major shinobi clan with history, members, kekkei genkai and techniques." },
      { property: "og:title", content: "Naruto Clans" },
      { property: "og:description", content: "Uchiha, Hyuga, Senju, Nara and more — full clan profiles." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader eyebrow="World" title="Clans" description="Bloodlines, secret techniques and clan politics." />
      <div className="grid gap-4 lg:grid-cols-2">
        {clans.map((c) => (
          <div key={c.slug} id={c.slug} className="panel-surface p-5 scroll-mt-20">
            <h2 className="text-2xl">{c.name}</h2>
            <p className="text-xs text-primary">{c.village}</p>
            <p className="mt-3 text-sm text-muted-foreground">{c.history}</p>
            <p className="mt-3 text-sm">
              <span className="font-bold uppercase text-muted-foreground">Kekkei Genkai: </span>
              {c.kekkeiGenkai}
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Section title="Members">
                <BulletList items={c.members} />
              </Section>
              <Section title="Clan Techniques">
                <BulletList items={c.techniques} />
              </Section>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{c.relationships}</p>
            <Section title="Important Events" className="mt-4">
              <BulletList items={c.events} />
            </Section>
          </div>
        ))}
      </div>
    </div>
  ),
});
