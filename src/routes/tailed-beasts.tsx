import { createFileRoute } from "@tanstack/react-router";
import { tailedBeasts } from "@/data/lore";
import { BulletList, PageHeader, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/tailed-beasts")({
  head: () => ({
    meta: [
      { title: "Tailed Beasts — Naruto Fan Hub" },
      { name: "description", content: "All nine tailed beasts with jinchuriki, abilities, chakra natures and history." },
      { property: "og:title", content: "The Nine Tailed Beasts" },
      { property: "og:description", content: "Shukaku through Kurama: hosts, powers and battles." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader eyebrow="World" title="Tailed Beasts" description="The nine chakra beasts and their hosts." />
      <div className="grid gap-4 lg:grid-cols-2">
        {tailedBeasts.map((b) => (
          <div key={b.slug} id={b.slug} className="panel-surface scroll-mt-20 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">{b.tails}-Tails</p>
            <h2 className="text-2xl">{b.name}</h2>
            <p className="text-xs text-muted-foreground">{b.form} · {b.chakraNature}</p>
            <p className="mt-3 text-sm text-muted-foreground">{b.history}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Section title="Jinchuriki">
                <BulletList items={b.jinchuriki} />
              </Section>
              <Section title="Abilities">
                <BulletList items={b.abilities} />
              </Section>
              <Section title="Major Battles">
                <BulletList items={b.battles} />
              </Section>
              <Section title="Relationships">
                <p className="text-sm text-muted-foreground">{b.relationships}</p>
              </Section>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
