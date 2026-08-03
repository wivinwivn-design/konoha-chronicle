import { createFileRoute, Link } from "@tanstack/react-router";
import { characters } from "@/data/characters";
import { PageHeader } from "@/components/site/Ui";

const trees = [
  { root: "Uzumaki–Namikaze", nodes: ["Minato Namikaze + Kushina Uzumaki", "→ Naruto Uzumaki", "→ Hinata Hyuga (married in)"] },
  { root: "Uchiha", nodes: ["Fugaku + Mikoto Uchiha", "→ Itachi Uchiha", "→ Sasuke Uchiha"] },
  { root: "Senju", nodes: ["Hashirama Senju", "Tobirama Senju (brother)", "→ Tsunade (granddaughter)"] },
  { root: "Hyuga", nodes: ["Hiashi Hyuga", "→ Hinata Hyuga", "→ Hanabi Hyuga", "Hizashi Hyuga (twin) → Neji Hyuga"] },
  { root: "Sarutobi", nodes: ["Hiruzen Sarutobi", "→ Asuma Sarutobi", "→ Konohamaru Sarutobi (grandson)"] },
  { root: "Kazekage line", nodes: ["Rasa (Fourth Kazekage)", "→ Temari", "→ Kankuro", "→ Gaara"] },
];

export const Route = createFileRoute("/family-tree")({
  head: () => ({
    meta: [
      { title: "Family Trees — Naruto Fan Hub" },
      { name: "description", content: "Bloodlines and family connections between the major Naruto clans." },
      { property: "og:title", content: "Naruto Family Trees" },
      { property: "og:description", content: "Uzumaki, Uchiha, Senju, Hyuga, Sarutobi and Kazekage lineages." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader eyebrow="Relations" title="Family Tree" description="How the major bloodlines connect." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trees.map((t) => (
          <div key={t.root} className="panel-surface p-4">
            <h2 className="text-lg text-primary">{t.root}</h2>
            <ul className="mt-3 space-y-2 border-l border-border pl-3">
              {t.nodes.map((n) => (
                <li key={n} className="text-sm text-muted-foreground">{n}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Browse the full{" "}
        <Link to="/characters" className="text-primary hover:underline">
          character database
        </Link>{" "}
        for individual family listings ({characters.length} profiles).
      </p>
    </div>
  ),
});
