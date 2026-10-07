import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Docs", href: "/docs" },
  { label: "CLI", href: "/docs/cli" },
  { label: "Server", href: "/docs/server" },
  { label: "gitgone.org", href: "https://gitgone.org" },
  { label: "GitHub", href: "https://github.com/project-gitgone" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-fd-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-sm text-fd-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/assets/logo.svg" alt="" width={18} height={21} />
          <span className="font-medium text-fd-foreground">GitGone</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-fd-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
