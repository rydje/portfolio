import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Project from "@/components/project/project";
import Nav from "@/components/side-header/nav";
import Social from "@/components/side-header/social";
import Title from "@/components/side-header/title";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-2xl px-6 py-12 mx-auto md:px-12 md:py-20 xl:px-24 xl:py-0 xl:flex xl:justify-between">
      <header className="xl:sticky xl:top-0 xl:flex max-h-screen xl:w-1/2 xl:flex-col xl:justify-between xl:py-24">
        <div>
          <Title />
          <Nav />
        </div>
        <Social />
      </header>
      <main className="mb-12 xl:w-1/2 pt-20 xl:order-last xl:space-y-5">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
          <h2 className="text-2xl xl:sr-only font-bold text-neutral-100">
            About
          </h2>
        </div>
        <About />
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
          <h2 className="text-2xl xl:sr-only font-bold text-neutral-100">
            Experience
          </h2>
        </div>
        <Experience />
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
          <h2 className="text-2xl xl:sr-only font-bold text-neutral-100">
            Project
          </h2>
        </div>
        <Project />
      </main>
    </div>
  );
}
