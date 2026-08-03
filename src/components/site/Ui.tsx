import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Section({
  title,
  icon,
  action,
  children,
  className = "",
}: {
  title: string;
  icon?: ReactNode;
  action?: { label: string; to: string };
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`panel-surface p-4 ${className}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-base uppercase tracking-wide">
          {icon && <span className="text-primary">{icon}</span>}
          {title}
        </h2>
        {action && (
          <Link
            to={action.to}
            className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-primary hover:underline"
          >
            {action.label}
            <ChevronRight className="size-3" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      )}
      <h1 className="mt-1 text-4xl sm:text-5xl">{title}</h1>
      {description && <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}

export function Chip({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "primary" }) {
  return (
    <span
      className={
        tone === "primary"
          ? "inline-block rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary"
          : "inline-block rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
      }
    >
      {children}
    </span>
  );
}

export function InfoRow({ label, value }: { label: string; value: ReactNode }) {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;
  return (
    <div className="flex flex-col gap-0.5 border-b border-border/60 py-2 last:border-0 sm:flex-row sm:gap-4">
      <dt className="w-44 shrink-0 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm text-foreground">{Array.isArray(value) ? value.join(", ") : value}</dd>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="space-y-1.5">
      {items.map((i) => (
        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

const toneMap: Record<string, string> = {
  Konoha: "from-primary/40 to-accent/30",
  Suna: "from-sand/40 to-primary/20",
  Kiri: "from-mist/40 to-secondary",
  Kumo: "from-cloud/40 to-secondary",
  Iwa: "from-stone/40 to-secondary",
  Akatsuki: "from-destructive/40 to-secondary",
  Otogakure: "from-leaf/30 to-secondary",
  Other: "from-secondary to-secondary",
};

export function AvatarTile({
  name,
  affiliation = "Other",
  className = "",
}: {
  name: string;
  affiliation?: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      role="img"
      aria-label={`Placeholder portrait for ${name}`}
      className={`grid place-items-center bg-gradient-to-br ${toneMap[affiliation] ?? toneMap["Other"]} ${className}`}
    >
      <span className="display text-3xl text-foreground/80">{initials}</span>
    </div>
  );
}
