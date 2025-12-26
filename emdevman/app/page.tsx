import Hero from "./components/Hero"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Future Sections */}
      <section className="w-full py-12 px-4 md:px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Selected Projects
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            (Project cards will go here)
          </p>
        </div>
      </section>

    </main>
  );
}