interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    skills: Array<string>;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-neutral-700 rounded-lg p-3 flex flex-col justify-between">
      <div>
        <div className="flex justify-start gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#e63946"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
            />
          </svg>
          <h3 className="text-neutral-100 font-bold">{project.name}</h3>
        </div>
        <p className="my-3">{project.description}</p>
      </div>
      <div className="flex flex-wrap">
        {project.skills.map((skill, i) => (
          <span key={i} className="text-neutral-500 mr-2">{skill}</span>
        ))}
      </div>
    </div>
  );
}
