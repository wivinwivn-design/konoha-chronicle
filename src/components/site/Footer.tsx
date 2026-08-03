import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Database",
    links: [
      { label: "Characters", to: "/characters" },
      { label: "Jutsu", to: "/jutsu" },
      { label: "Villages", to: "/villages" },
      { label: "Clans", to: "/clans" },
    ],
  },
  {
    title: "World",
    links: [
      { label: "Tailed Beasts", to: "/tailed-beasts" },
      { label: "Akatsuki", to: "/akatsuki" },
      { label: "Hokage", to: "/hokage" },
      { label: "Kekkei Genkai", to: "/kekkei-genkai" },
    ],
  },
  {
    title: "Story",
    links: [
      { label: "Story Arcs", to: "/story-arcs" },
      { label: "Timeline", to: "/timeline" },
      { label: "Teams", to: "/teams" },
      { label: "Family Tree", to: "/family-tree" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Compare", to: "/compare" },
      { label: "Quiz", to: "/quiz" },
      { label: "Gallery", to: "/gallery" },
      { label: "About", to: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-panel">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="display text-lg">
            <span className="text-primary">NARUTO</span> FAN HUB
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            An unofficial fan encyclopedia of characters, jutsu, villages and story arcs — all written in
            original wording.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">{col.title}</h2>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        Fan-made project for educational purposes. Not affiliated with the official rights holders. All
        summaries are original text.
      </div>
    </footer>
  );
}
