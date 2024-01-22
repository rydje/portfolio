import Image from "next/image";
import Label from "./label";

interface ExperienceCardProps {
  card: {
    title: string;
    date: string;
    type: string;
    description: string;
    image: string;
    imageBgColor: string;
    skills: Array<string>;
  };
}

export default function ExperienceCard({ card }: ExperienceCardProps) {
  return (
    <div className="md:flex space-x-3 2xl:mr-4 2xl:mt-8 2xl:block 2xl:space-x-0">
      <div
        className="mt-4 w-full md:max-2xl:w-1/3 h-36 rounded-lg p-10 align-middle flex justify-center items-center"
        style={{ backgroundColor: `#${card.imageBgColor}` }}
      >
        <Image src={card.image} alt={"Company logo"} width={200} height={100} />
      </div>
      <div className="w-2/3 2xl:w-full items-center">
        <h3 className="my-3 text-lg font-bold text-neutral-100">
          {card.title}
        </h3>
        <div className="text-sm">
          <p className="text-neutral-500">
            {card.date}
            <br />
            {card.type}
          </p>
          <p dangerouslySetInnerHTML={{ __html: card.description }}></p>
        </div>
        <div className="flex flex-wrap">
          {card.skills.map((skill, i) => (
            <Label key={i} text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
