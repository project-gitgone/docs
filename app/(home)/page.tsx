import Link from 'next/link';
import { Terminal, Shield, Lock, Share2, History, Cpu } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-fd-background">
      <section className="pt-20 pb-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Secrets management <br /> 
                <span className="text-muted-foreground">built for developers.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
                A self-hosted, zero-knowledge vault to sync environment variables across your team without the complexity of enterprise tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/docs"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium hover:opacity-90 transition-all"
                >
                  Get Started
                </Link>
                <a
                  href="https://github.com/project-gitgone"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border bg-fd-background px-6 py-2.5 rounded-md font-medium hover:bg-fd-accent transition-all inline-flex items-center"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="bg-fd-muted rounded-xl border border-border shadow-2xl overflow-hidden font-mono text-sm">
      
              <div className="p-6 space-y-2">
                <div className="flex gap-3">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">gitgone login</span>
                </div>
                <div className="text-muted-foreground">? Email: admin@example.com</div>
                <div className="text-muted-foreground">? Password: **********</div>
                <div className="text-primary/80">✔ Logged in successfully</div>
                <div className="pt-2 flex gap-3">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">gitgone run -- npm start</span>
                </div>
                <div className="text-blue-400">i Injecting secrets for project "api-gateway"...</div>
                <div className="text-primary/80">✔ Secrets injected (v12)</div>
                <div className="text-muted-foreground pt-1">{">"} api-gateway@1.0.0 start</div>
                <div className="text-muted-foreground">Server listening on port 3000...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <Feature 
              icon={<Lock className="size-5" />}
              title="Zero-Knowledge"
              description="Encryption happens on your machine. The server only stores encrypted blobs and never sees your raw secrets."
            />
            <Feature 
              icon={<Cpu className="size-5" />}
              title="Runtime Injection"
              description="Avoid persistent .env files. Inject secrets directly into your application process memory during execution."
            />
            <Feature 
              icon={<Share2 className="size-5" />}
              title="Team Sync"
              description="Share project access asymmetrically. New members get access through a secure local handshake."
            />
            <Feature 
              icon={<History className="size-5" />}
              title="Point-in-time recovery"
              description="Every push creates a versioned snapshot. Roll back your entire configuration to any previous state instantly."
            />
            <Feature 
              icon={<Shield className="size-5" />}
              title="Self-Hosted"
              description="Full control over your data. Deploy the GitGone server on your own infrastructure in minutes."
            />
            <Feature 
              icon={<Terminal className="size-5" />}
              title="CLI Native"
              description="Designed for speed. No complex UI to navigate—manage your entire vault without leaving your shell."
            />
          </div>
        </div>
      </section>

      <footer className="mt-auto py-12 border-t border-border">
        <div className="container mx-auto max-w-5xl px-4 flex justify-between items-center text-sm text-muted-foreground font-mono">
          <span>GitGone Project</span>
          <div className="flex gap-6">
            <Link href="/docs" className="hover:text-foreground">Docs</Link>
            <a href="https://github.com/project-gitgone" className="hover:text-foreground">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-foreground border-l border-primary/50 pl-4 py-1">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-primary">{icon}</span>
          <h3 className="font-bold text-base">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
