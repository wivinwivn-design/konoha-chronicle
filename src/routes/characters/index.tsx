import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { characters } from "@/data/characters";
import { PageHeader } from "@/components/site/Ui";
import { CharacterCard } from "@/components/site/CharacterCard";

export const Route = createFileRoute("/characters/")({
  head: () => ({
    meta: [
      { title: "Characters Database — Naruto Fan Hub" },
      {
        name: "description",
        content:
          "Browse profiles for every major Naruto and Shippuden character, with clans, villages, chakra natures and signature jutsu.",
      },
      { property: "og:title", content: "Naruto Characters Database" },
      { property: "og:description", content: "Filter and search major Naruto characters by village and clan." },
    ],
  }),
  component: CharactersPage,
});

function CharactersPage() {
  const [q, setQ] = useState("");
  const [village, setVillage] = useState("All");
  const villageOptions = useMemo(
    () => ["All", ...Array.from(new Set(characters.map((c) => c.village)))],
    [],
  );
  const list = characters.filter(
    (c) =>
      (village === "All" || c.village === village) &&
      (c.name.toLowerCase().includes(q.toLowerCase()) || c.clan.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <PageHeader
        eyebrow="Database"
        title="Characters"
        description="Profiles for the major shinobi of Naruto and Naruto: Shippuden, each with full stats, abilities and story role."
      />
      <div className="mb-6 flex flex-wrap gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name or clan"
          aria-label="Search characters"
          className="h-10 min-w-56 flex-1 rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-primary"
        />
        <select
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          aria-label="Filter by village"
          className="h-10 rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-primary"
        >
          {villageOptions.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {list.map((c) => (
          <CharacterCard key={c.slug} character={c} />
        ))}
      </div>
      {list.length === 0 && <p className="text-sm text-muted-foreground">No characters match that filter.</p>}
    </div>
  );
}
