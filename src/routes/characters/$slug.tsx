import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCharacter, characters } from "@/data/characters";
import type { Character } from "@/data/types";
import { AvatarTile, BulletList, Chip, InfoRow, Section } from "@/components/site/Ui";

export const Route = createFileRoute("/characters/$slug")({
  loader: ({ params }) => {
    const character = getCharacter(params.slug);
    if (!character) throw notFound();
    return { character };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.character;
    const title = c ? `${c.name} — Naruto Fan Hub` : "Character — Naruto Fan Hub";
    const description = c
      ? `${c.name}: ${c.village} ${c.rank}. Clan, team, chakra natures, signature jutsu, battles and story role.`
      : "Character profile.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: CharacterPage,
});

function CharacterPage() {
  const { character } = Route.useLoaderData();
  const c = character as Character;
  const related = c.related
    .map((s: string) => characters.find((x) => x.slug === s))
    .filter((x): x is Character => Boolean(x));

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8">
      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        <div className="panel-surface overflow-hidden">
          <AvatarTile name={c.name} affiliation={c.affiliation} className="h-56 w-full" />
          <div className="p-4">
            <h1 className="text-3xl leading-none">{c.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{c.japaneseName}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip tone="primary">{c.rank}</Chip>
              <Chip>{c.village}</Chip>
              <Chip>{c.status}</Chip>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{c.personality}</p>
          </div>
        </div>

        <div className="space-y-4">
          <Section title="Profile">
            <dl>
              <InfoRow label="Nickname" value={c.nickname} />
              <InfoRow label="Clan" value={c.clan} />
              <InfoRow label="Team" value={c.team} />
              <InfoRow label="Family" value={c.family} />
              <InfoRow label="Mentor" value={c.mentor} />
              <InfoRow label="Students" value={c.students} />
              <InfoRow label="Birthday" value={c.birthday} />
              <InfoRow label="Age" value={c.age} />
              <InfoRow label="Height" value={c.height} />
              <InfoRow label="Chakra Nature" value={c.chakraNature} />
              <InfoRow label="Kekkei Genkai" value={c.kekkeiGenkai} />
              <InfoRow label="Summoning" value={c.summoning} />
              <InfoRow label="Weapons" value={c.weapons} />
              <InfoRow label="Anime Debut" value={c.animeDebut} />
              <InfoRow label="Manga Debut" value={c.mangaDebut} />
            </dl>
          </Section>

          <div className="grid gap-4 md:grid-cols-2">
            <Section title="Signature Jutsu">
              <BulletList items={c.signatureJutsu} />
            </Section>
            <Section title="Ultimate Techniques">
              <BulletList items={c.ultimate} />
            </Section>
            <Section title="Abilities">
              <BulletList items={c.abilities} />
            </Section>
            <Section title="Strengths">
              <BulletList items={c.strengths} />
            </Section>
            <Section title="Weaknesses">
              <BulletList items={c.weaknesses} />
            </Section>
            <Section title="Major Battles">
              <BulletList items={c.battles} />
            </Section>
            <Section title="Allies">
              <BulletList items={c.allies} />
            </Section>
            <Section title="Enemies">
              <BulletList items={c.enemies} />
            </Section>
          </div>

          <Section title="Role in the Story">
            <p className="text-sm text-muted-foreground">{c.role}</p>
            <h3 className="mt-4 text-sm uppercase tracking-wide text-primary">Character Development</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.development}</p>
            <h3 className="mt-4 text-sm uppercase tracking-wide text-primary">Goals</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.goals}</p>
          </Section>

          {related.length > 0 && (
            <Section title="Related Characters">
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={r!.slug}
                    to="/characters/$slug"
                    params={{ slug: r!.slug }}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold hover:text-primary"
                  >
                    {r!.name}
                  </Link>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}
