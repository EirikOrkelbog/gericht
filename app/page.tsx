import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-24">
      <Hero />
      <About />
    </main>
  );
}
