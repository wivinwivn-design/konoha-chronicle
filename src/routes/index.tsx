import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Flame,
  BookOpen,
  Globe,
  Zap,
  Star,
  ScrollText,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-village.jpg";
import { characters } from "@/data/characters";
import { jutsu } from "@/data/jutsu";
import { villages } from "@/data/world";
import { storyArcs, tailedBeasts } from "@/data/lore";
import { Section, AvatarTile } from "@/components/site/Ui";
import { CharacterCard } from "@/components/site/CharacterCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naruto Fan Hub — Characters, Jutsu & Story Encyclopedia" },
      {
        name: "description",
        content:
          "Everything about the world of Naruto: character profiles, jutsu, hidden villages, clans, tailed beasts, Akatsuki and the complete story timeline.",
      },
      { property: "og:title", content: "Naruto Fan Hub — The Complete Fan Encyclopedia" },
      {
        property: "og:description",
        content: "Browse characters, jutsu, villages, clans and story arcs from Naruto and Shippuden.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: Users, value: `${characters.length}+`, label: "Characters" },
  { icon: Zap, value: `${jutsu.length}+`, label: "Jutsu" },
  { icon: Globe, value: `${villages.length}`, label: "Hidden Villages" },
  { icon: Flame, value: `${tailedBeasts.length}`, label: "Tailed Beasts" },
  { icon: ScrollText, value: `${storyArcs.length}`, label: "Story Arcs" },
  { icon: BookOpen, value: "700+", label: "Manga Chapters" },
];

const updates = [
  { title: "Full jutsu database expanded", text: "Hand signs, creators and known users for every entry." },
  { title: "Story timeline rebuilt", text: "Part I through the end of the Fourth Great Ninja War." },
  { title: "Character comparison added", text: "Line up any two profiles side by side." },
];

function Home() {
  const featuredCharacters = characters.filter((c) => c.featured);
  const featuredJutsu = jutsu.filter((j) => j.featured);
  const featuredArcs = storyArcs.filter((a) => a.featured);

  return (
    <div className="mx-auto max-w-[1400px] px-3 pb-10 sm:px-5">
      {/* Hero */}
      <section className="relative mt-3 overflow-hidden rounded-xl border border-border">
        <img
          src={heroImage}
          alt="A hidden ninja village at sunset with leaders' faces carved into the mountainside"
          width={1920}
          height={1088}
          className="h-[300px] w-full object-cover sm:h-[380px]"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center gap-4 p-6 sm:p-10"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/80">Welcome to</p>
            <h1 className="mt-1 text-5xl leading-none sm:text-7xl">
              <span className="text-primary">NARUTO</span> FAN HUB
            </h1>
            <p className="mt-3 max-w-md text-sm text-foreground/80">
              Everything about the world of Naruto — characters, jutsu, villages, clans, story arcs and
              more, written in original wording.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/characters"
              className="bg-ember inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-primary-foreground hover-lift"
            >
              <Users className="size-4" /> Explore Characters
            </Link>
            <Link
              to="/jutsu"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-foreground hover-lift"
            >
              <Sparkles className="size-4" /> Discover Jutsu
            </Link>
          </div>
        </div>
      </section>

      {/* Popular characters + stats */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <Section
          title="Popular Characters"
          icon={<Star className="size-4" />}
          action={{ label: "View all", to: "/characters" }}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {featuredCharacters.map((c) => (
              <CharacterCard key={c.slug} character={c} compact />
            ))}
          </div>
        </Section>

        <Section title="Quick Stats" icon={<Zap className="size-4" />}>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-lg bg-secondary/60 p-3">
                <s.icon className="size-6 shrink-0 text-primary" />
                <div>
                  <p className="display text-xl leading-none">{s.value}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Arcs + jutsu */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Section
          title="Featured Story Arcs"
          icon={<BookOpen className="size-4" />}
          action={{ label: "View all", to: "/story-arcs" }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {featuredArcs.map((a) => (
              <Link
                key={a.slug}
                to="/story-arcs/$slug"
                params={{ slug: a.slug }}
                className="hover-lift rounded-lg border border-border bg-card p-3"
              >
                <p className="text-sm font-semibold">{a.name}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{a.episodes}</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section
          title="Popular Jutsu"
          icon={<Flame className="size-4" />}
          action={{ label: "View all", to: "/jutsu" }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {featuredJutsu.map((j) => (
              <Link
                key={j.slug}
                to="/jutsu/$slug"
                params={{ slug: j.slug }}
                className="hover-lift rounded-lg border border-border bg-card p-3"
              >
                <p className="text-sm font-semibold">{j.name}</p>
                <p className="mt-1 text-[11px] text-primary">{j.chakraNature}</p>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      {/* Villages + updates */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <Section
          title="Hidden Villages"
          icon={<Globe className="size-4" />}
          action={{ label: "View all", to: "/villages" }}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {villages.map((v) => (
              <Link
                key={v.slug}
                to="/villages/$slug"
                params={{ slug: v.slug }}
                className="hover-lift overflow-hidden rounded-lg border border-border bg-card"
              >
                <AvatarTile name={v.name.replace("Hidden ", "").replace(" Village", "")} className="h-16 w-full" />
                <div className="p-2">
                  <p className="truncate text-xs font-semibold">{v.name.replace(" Village", "")}</p>
                  <p className="truncate text-[10px] text-muted-foreground">{v.country}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="Latest Updates" icon={<Sparkles className="size-4" />}>
          <ul className="space-y-3">
            {updates.map((u) => (
              <li key={u.title} className="rounded-lg bg-secondary/60 p-3">
                <p className="text-sm font-semibold">{u.title}</p>
                <p className="text-[11px] text-muted-foreground">{u.text}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/quiz"
            className="bg-ember mt-4 inline-flex items-center gap-2 rounded-md px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-primary-foreground"
          >
            Take the ninja quiz <ArrowRight className="size-3" />
          </Link>
        </Section>
      </div>
    </div>
  );
}
