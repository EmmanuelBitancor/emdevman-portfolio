import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-foreground">
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
