import { Link, useRouter } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GlobalSearch } from "./GlobalSearch";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Characters", to: "/characters" },
  { label: "Villages", to: "/villages" },
  { label: "Clans", to: "/clans" },
  { label: "Jutsu", to: "/jutsu" },
  { label: "Kekkei Genkai", to: "/kekkei-genkai" },
  { label: "Tailed Beasts", to: "/tailed-beasts" },
  { label: "Story Arcs", to: "/story-arcs" },
  { label: "Timeline", to: "/timeline" },
  { label: "Akatsuki", to: "/akatsuki" },
  { label: "Hokage", to: "/hokage" },
  { label: "Teams", to: "/teams" },
  { label: "Family Tree", to: "/family-tree" },
  { label: "Compare", to: "/compare" },
  { label: "Quiz", to: "/quiz" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => setOpen(false));
    return unsub;
  }, [router]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-3 sm:px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full border-2 border-primary text-primary">
            <span className="block size-2.5 rounded-full bg-primary" />
          </span>
          <span className="display text-xl leading-none">
            <span className="text-primary">NARUTO</span> <span className="text-foreground">FAN HUB</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="scrollbar-none hidden flex-1 items-center gap-1 overflow-x-auto lg:flex"
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="shrink-0 rounded-md px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Search className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-panel lg:hidden">
          <div className="grid max-h-[70vh] grid-cols-2 gap-1 overflow-y-auto p-3 sm:grid-cols-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:bg-secondary hover:text-foreground [&.active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
