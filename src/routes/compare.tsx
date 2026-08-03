import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { characters } from "@/data/characters";
import { InfoRow, PageHeader } from "@/components/site/Ui";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Character Comparison — Naruto Fan Hub" },
      { name: "description", content: "Compare any two Naruto characters side by side across rank, natures and abilities." },
      { property: "og:title", content: "Naruto Character Comparison" },
      { property: "og:description", content: "Pick two profiles and see their stats next to each other." },
    ],
  }),
  component: () => {
    const [a, setA] = useState(characters[0]!.slug);
    const [b, setB] = useState(characters[1]!.slug);
    const left = characters.find((c) => c.slug === a)!;
    const right = characters.find((c) => c.slug === b)!;

    return (
      <div className="mx-auto max-w-[1400px] px-4 py-8">
        <PageHeader eyebrow="Tools" title="Compare Characters" description="Line up two profiles side by side." />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { value: a, set: setA, char: left, label: "First character" },
            { value: b, set: setB, char: right, label: "Second character" },
          ].map((side) => (
            <div key={side.label} className="panel-surface p-4">
              <select
                aria-label={side.label}
                value={side.value}
                onChange={(e) => side.set(e.target.value)}
                className="mb-4 h-10 w-full rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-primary"
              >
                {characters.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
              <h2 className="text-2xl">{side.char.name}</h2>
              <dl className="mt-3">
                <InfoRow label="Village" value={side.char.village} />
                <InfoRow label="Clan" value={side.char.clan} />
                <InfoRow label="Rank" value={side.char.rank} />
                <InfoRow label="Chakra Nature" value={side.char.chakraNature} />
                <InfoRow label="Kekkei Genkai" value={side.char.kekkeiGenkai} />
                <InfoRow label="Signature Jutsu" value={side.char.signatureJutsu} />
                <InfoRow label="Strengths" value={side.char.strengths} />
                <InfoRow label="Weaknesses" value={side.char.weaknesses} />
                <InfoRow label="Status" value={side.char.status} />
              </dl>
            </div>
          ))}
        </div>
      </div>
    );
  },
});
