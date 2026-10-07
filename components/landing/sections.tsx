import {
  ArrowUpRight,
  Check,
  Cloud as CloudIcon,
  Globe,
  LayoutDashboard,
  LifeBuoy,
  Rocket,
  Server,
  Terminal,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FEATURES, GUIDES } from "@/components/landing/content";
import {
  CtaButtons,
  IconTile,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/landing/ui";

const REASSURANCE = ["Open source", "MIT license", "Self-hosted or Cloud"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-fd-border px-4 pt-24 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgb(96_164_65/0.22),transparent_65%)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <Image
          src="/assets/logo.svg"
          alt=""
          width={72}
          height={83}
          priority
          className="drop-shadow-[0_12px_30px_rgb(96_164_65/0.45)]"
        />
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          Stop sharing your <span className="text-fd-primary">.env</span> on
          Slack.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-fd-muted-foreground text-pretty">
          Your team&apos;s secrets in one place, encrypted end to end, with who
          can access what. The server never sees a single value.
        </p>
        <div className="mt-10">
          <CtaButtons center />
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-fd-muted-foreground">
          {REASSURANCE.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <Check className="size-4 text-fd-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhyGitGone() {
  return (
    <Section id="features">
      <SectionHeading title="Everything a .env file can't do" />
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="flex gap-4">
            <IconTile icon={feature.icon} />
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fd-muted-foreground">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const CLOUD_FEATURES = [
  {
    icon: Rocket,
    text: "A private instance for your organization, deployed in minutes",
  },
  { icon: Globe, text: "A gitgone.org address, or your own domain" },
  {
    icon: LayoutDashboard,
    text: "A web console for projects, access, tokens and the audit log",
  },
  { icon: Users, text: "Members sign in with their GitGone Cloud account" },
  { icon: LifeBuoy, text: "Updates and support handled for you" },
];

export function Cloud() {
  return (
    <Section className="border-y border-fd-border bg-fd-card/50">
      <SectionHeading title="Or let us host it" />
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="leading-relaxed text-fd-muted-foreground text-pretty">
            GitGone Cloud runs the same open source server for you. You keep
            end-to-end encryption: your secrets are still encrypted on your
            machines, and the instance only stores encrypted data.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {CLOUD_FEATURES.map((feature) => (
              <li
                key={feature.text}
                className="flex items-center gap-3 text-sm"
              >
                <IconTile icon={feature.icon} size="sm" />
                {feature.text}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://gitgone.org"
              className="inline-flex items-center gap-2 rounded-md bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Try GitGone Cloud
              <ArrowUpRight className="size-4" />
            </a>
            <Link
              href="/docs/quickstart"
              className="inline-flex items-center rounded-md border border-fd-border bg-fd-background px-5 py-2.5 font-medium transition-colors hover:bg-fd-accent"
            >
              Read the quickstart
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            {
              icon: Server,
              title: "Self-hosted",
              text: "Free forever, on your infrastructure. You run upgrades and backups.",
            },
            {
              icon: CloudIcon,
              title: "GitGone Cloud",
              text: "Hosted for you, with a web console, billing and support.",
            },
          ].map((option) => (
            <div
              key={option.title}
              className="flex gap-4 rounded-xl border border-fd-border bg-fd-card p-5"
            >
              <IconTile icon={option.icon} />
              <div>
                <h3 className="font-semibold">{option.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fd-muted-foreground">
                  {option.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const PATHS = [
  {
    icon: Terminal,
    title: "Use the CLI",
    text: "Pull, push and run your secrets from the terminal, with a guided setup.",
    href: "/docs/cli",
    links: [
      { label: "Install the CLI", href: "/docs/cli/setup" },
      { label: "Key concepts", href: "/docs/cli/concepts" },
      { label: "Commands", href: "/docs/cli/commands" },
    ],
  },
  {
    icon: Server,
    title: "Host the server",
    text: "Run your own GitGone server with Docker, or let GitGone Cloud deploy it.",
    href: "/docs/server",
    links: [
      { label: "Install with Docker", href: "/docs/server/setup" },
      { label: "Domain and HTTPS", href: "/docs/server/domain" },
      { label: "Configuration", href: "/docs/server/configuration" },
    ],
  },
];

export function Documentation() {
  return (
    <Section>
      <SectionHeading title="Start here" />
      <div className="grid gap-6 md:grid-cols-2">
        {PATHS.map((path) => (
          <div
            key={path.href}
            className="flex flex-col rounded-xl border border-fd-border bg-fd-card p-6"
          >
            <Link href={path.href} className="group flex items-start gap-4">
              <IconTile icon={path.icon} />
              <div>
                <h3 className="text-lg font-semibold group-hover:text-fd-primary">
                  {path.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-fd-muted-foreground">
                  {path.text}
                </p>
              </div>
            </Link>
            <ul className="mt-5 flex flex-col gap-2.5 border-t border-fd-border pt-5">
              {path.links.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href}>{link.label}</TextLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h3 className="mt-12 mb-5 text-lg font-semibold">Guides</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex items-start gap-3 rounded-xl border border-fd-border bg-fd-card p-4 transition-colors hover:bg-fd-accent"
          >
            <IconTile icon={guide.icon} size="sm" />
            <span>
              <span className="block font-medium group-hover:text-fd-primary">
                {guide.title}
              </span>
              <span className="mt-0.5 block text-sm text-fd-muted-foreground">
                {guide.text}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
