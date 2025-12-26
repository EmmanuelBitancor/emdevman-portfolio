import Image from "next/image";

export default function Hero() {
  return (
    // CHANGE: Replaced 'py-12' with 'pt-32 pb-12'
    // 'pt-32' adds 128px of top padding on mobile to clear the navbar
    <section className="relative z-10 w-full pt-32 pb-12 md:py-24 lg:py-32 xl:py-48 text-foreground transition-colors duration-300 ease-in-out">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m <span className="text-zinc-500 dark:text-zinc-400">Emmanuel</span>
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                A Full Stack Developer crafting beautiful, accessible, and performant web experiences using Next.js.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background shadow transition-all duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                href="#projects"
              >
                View My Work
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-background px-8 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-zinc-100/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:border-zinc-800 dark:hover:bg-zinc-800"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-zinc-100 dark:border-zinc-800 md:aspect-[4/4] md:w-[400px] transition-colors duration-300">
              <Image
                alt="Portrait of the developer"
                src="/assets/images/profile2.png"
                width={400}
                height={400}
                className="object-cover w-full h-full transition-all duration-300"
                loading="lazy" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}