import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Naruto Fan Hub" },
      { name: "description", content: "About this fan-made Naruto encyclopedia, its sources, original writing policy and accessibility goals." },
      { property: "og:title", content: "About the Naruto Fan Hub" },
      { property: "og:description", content: "A fan project written in original wording, built for fast and accessible browsing." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <PageHeader eyebrow="Project" title="About" description="What this site is, and what it isn't." />
      <div className="space-y-4">
        <Section title="The project">
          <p className="text-sm text-muted-foreground">
            The Naruto Fan Hub is an unofficial encyclopedia covering characters, jutsu, hidden villages,
            clans, the Akatsuki, the Hokage, the tailed beasts and the full story timeline of Naruto and
            Naruto: Shippuden.
          </p>
        </Section>
        <Section title="Original wording">
          <p className="text-sm text-muted-foreground">
            Every biography, description and arc summary here is written from scratch. No official dialogue or
            published text is reproduced, and all imagery is either originally generated scenery or neutral
            placeholder tiles.
          </p>
        </Section>
        <Section title="Accessibility and performance">
          <p className="text-sm text-muted-foreground">
            Pages use semantic headings, labelled controls, keyboard-dismissable search and a single high
            contrast theme. Data is bundled statically so navigation is instant, and images are lazy-loaded
            outside the hero.
          </p>
        </Section>
        <Section title="Disclaimer">
          <p className="text-sm text-muted-foreground">
            This is a non-commercial fan project and is not affiliated with or endorsed by the rights holders
            of the series.
          </p>
        </Section>
      </div>
    </div>
  ),
});
