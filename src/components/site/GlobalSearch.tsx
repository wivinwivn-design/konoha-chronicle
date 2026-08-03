import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { search } from "@/data/search-index";

export function GlobalSearch({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-background/80 p-4 backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="panel-surface mx-auto mt-10 max-w-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="size-4 text-primary" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search characters, jutsu, villages, arcs..."
            aria-label="Search the fan hub"
            className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {query && results.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground">No results for “{query}”.</p>
          )}
          {results.map((r) => (
            <Link
              key={r.category + r.to + r.title}
              to={r.to}
              onClick={() => onOpenChange(false)}
              className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 transition-colors last:border-0 hover:bg-secondary"
            >
              <span>
                <span className="block text-sm font-semibold">{r.title}</span>
                <span className="block text-xs text-muted-foreground">{r.subtitle}</span>
              </span>
              <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                {r.category}
              </span>
            </Link>
          ))}
          {!query && (
            <p className="p-4 text-sm text-muted-foreground">
              Start typing to search the full database. Press Escape to close.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
