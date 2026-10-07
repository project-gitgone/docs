import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-10 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
      {title}
    </h2>
  );
}

export function IconTile({
  icon: Icon,
  size = "md",
}: {
  icon: LucideIcon;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary ring-1 ring-fd-primary/20 ${size === "sm" ? "size-8" : "size-10"}`}
    >
      <Icon className={size === "sm" ? "size-4" : "size-5"} />
    </span>
  );
}

export function TextLink({
  href,
  event,
  children,
}: {
  href: string;
  event?: string;
  children: ReactNode;
}) {
  return (
    <Link
      data-umami-event={event}
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-fd-primary"
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function CtaButtons({ center = false }: { center?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      <Link
        href="/docs/quickstart"
        data-umami-event="docs_get_started"
        className="inline-flex items-center gap-2 rounded-md bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
      >
        Get started
        <ArrowRight className="size-4" />
      </Link>
      <Link
        href="/docs/server/setup"
        className="inline-flex items-center rounded-md border border-fd-border bg-fd-background px-5 py-2.5 font-medium transition-colors hover:bg-fd-accent"
      >
        Self-host the server
      </Link>
    </div>
  );
}
