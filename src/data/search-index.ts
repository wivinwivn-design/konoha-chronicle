import { characters } from "./characters";
import { jutsu } from "./jutsu";
import { villages, clans } from "./world";
import { akatsuki, hokages, storyArcs, tailedBeasts } from "./lore";

export type SearchItem = {
  title: string;
  subtitle: string;
  category: "Character" | "Jutsu" | "Village" | "Clan" | "Story Arc" | "Tailed Beast" | "Akatsuki" | "Hokage";
  to: string;
  keywords: string;
};

export const searchIndex: SearchItem[] = [
  ...characters.map((c) => ({
    title: c.name,
    subtitle: `${c.village} · ${c.rank}`,
    category: "Character" as const,
    to: `/characters/${c.slug}`,
    keywords: [c.name, c.japaneseName, c.nickname, c.clan, c.village, ...c.chakraNature].join(" ").toLowerCase(),
  })),
  ...jutsu.map((j) => ({
    title: j.name,
    subtitle: `Rank ${j.rank} · ${j.chakraNature}`,
    category: "Jutsu" as const,
    to: `/jutsu/${j.slug}`,
    keywords: [j.name, j.japaneseName, j.classification, j.chakraNature, j.creator].join(" ").toLowerCase(),
  })),
  ...villages.map((v) => ({
    title: v.name,
    subtitle: v.country,
    category: "Village" as const,
    to: `/villages/${v.slug}`,
    keywords: [v.name, v.japaneseName, v.country, ...v.clans].join(" ").toLowerCase(),
  })),
  ...clans.map((c) => ({
    title: c.name,
    subtitle: c.village,
    category: "Clan" as const,
    to: `/clans#${c.slug}`,
    keywords: [c.name, c.village, c.kekkeiGenkai].join(" ").toLowerCase(),
  })),
  ...storyArcs.map((a) => ({
    title: a.name,
    subtitle: `${a.part} · ${a.episodes}`,
    category: "Story Arc" as const,
    to: `/story-arcs/${a.slug}`,
    keywords: [a.name, a.part, a.episodes, ...a.mainCharacters].join(" ").toLowerCase(),
  })),
  ...tailedBeasts.map((b) => ({
    title: b.name,
    subtitle: `${b.tails}-Tails · ${b.form}`,
    category: "Tailed Beast" as const,
    to: `/tailed-beasts#${b.slug}`,
    keywords: [b.name, b.form, ...b.jinchuriki].join(" ").toLowerCase(),
  })),
  ...akatsuki.map((a) => ({
    title: a.name,
    subtitle: `Akatsuki · ${a.origin}`,
    category: "Akatsuki" as const,
    to: `/akatsuki#${a.slug}`,
    keywords: [a.name, a.origin, a.goals].join(" ").toLowerCase(),
  })),
  ...hokages.map((h) => ({
    title: h.name,
    subtitle: h.title,
    category: "Hokage" as const,
    to: `/hokage#${h.slug}`,
    keywords: [h.name, h.title, h.order].join(" ").toLowerCase(),
  })),
];

export const search = (q: string, limit = 12) => {
  const term = q.trim().toLowerCase();
  if (!term) return [];
  return searchIndex
    .filter((i) => i.keywords.includes(term) || i.title.toLowerCase().includes(term))
    .sort((a, b) => {
      const aStarts = a.title.toLowerCase().startsWith(term) ? 0 : 1;
      const bStarts = b.title.toLowerCase().startsWith(term) ? 0 : 1;
      return aStarts - bStarts;
    })
    .slice(0, limit);
};
