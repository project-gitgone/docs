import { Footer } from "@/components/landing/footer";
import {
  Cloud,
  Documentation,
  Hero,
  WhyGitGone,
} from "@/components/landing/sections";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-fd-background text-fd-foreground">
      <Hero />
      <WhyGitGone />
      <Cloud />
      <Documentation />
      <Footer />
    </main>
  );
}
