import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/landing/footer";
import {
  Cloud,
  Documentation,
  Hero,
  WhyGitGone,
} from "@/components/landing/sections";
import { homeStructuredData } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-fd-background text-fd-foreground">
      <JsonLd data={homeStructuredData()} />
      <Hero />
      <WhyGitGone />
      <Cloud />
      <Documentation />
      <Footer />
    </main>
  );
}
