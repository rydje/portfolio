import ProjectCard from "./project-card";

export default function Project() {
    const projects = [
        {
            name: "Recipes",
            description: 'Displays recipes from third party APIs (Spoonacular and Edamam)',
            skills: ["Symfony", "Tailwind", "Clean Architecture"],
            url: "https://github.com/rydje/recipe-symfony"
        },
        {
            name: "BAMBOO",
            description: 'BAMBOO Cocktail club website',
            skills: ["Next", "Tailwind", "TypeScript", "Vercel"],
            url: "https://github.com/rydje/bamboo"
        },
        {
            name: "Rust Chengdu",
            description: 'Chengdu local Rust meetup group repository',
            skills: ["Rust"],
            url: "https://github.com/RPG-Alex/rust-chengdu"
        },
    ]

  return (
    <div>
      <div className="grid sm:grid-cols-3 justify-center gap-4">
        {projects.map((projectData, i) => 
            <ProjectCard key={i} project={projectData}/>
        )}
      </div>
      <p className="mt-8">
        More on <span className="font-semibold text-neutral-100">GitHub</span> → <a className="text-amaranth-500" href="https://github.com/rydje">
          https://github.com/rydje
        </a>
      </p>
    </div>
  );
}
