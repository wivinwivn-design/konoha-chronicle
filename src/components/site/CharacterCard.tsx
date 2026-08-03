import { Link } from "@tanstack/react-router";
import type { Character } from "@/data/types";
import { AvatarTile } from "./Ui";

export function CharacterCard({ character, compact = false }: { character: Character; compact?: boolean }) {
  return (
    <Link
      to="/characters/$slug"
      params={{ slug: character.slug }}
      className="hover-lift group block overflow-hidden rounded-lg border border-border bg-card"
    >
      <AvatarTile
        name={character.name}
        affiliation={character.affiliation}
        className={compact ? "h-24 w-full" : "h-40 w-full"}
      />
      <div className="p-2.5">
        <p className="truncate text-sm font-semibold group-hover:text-primary">{character.name}</p>
        <p className="truncate text-[11px] text-muted-foreground">
          {character.nickname !== "—" ? character.nickname : character.rank}
        </p>
      </div>
    </Link>
  );
}
