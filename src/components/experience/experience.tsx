import ExperienceCard from "./experience-card";

export default function Experience() {
  const experiences = [
    {
      title: "Lead backend",
      date: "Mar 2022 - Jun 2023",
      type: "Remote",
      description:
        'As a Lead Backend Engineer at Testapic, I led a team of 4 engineers toward the <span class="font-semibold text-neutral-100">Clean Architecture</span> path. I drafted best practices, improved system performance (Data optimization), stability (Unit testing), security (code audit). During that time I animated many talks introducing technical topics such as <span class="font-semibold text-neutral-100">Specification pattern</span>, <span class="font-semibold text-neutral-100"></span>Pragmatic Unit Testing</span>, <span class="font-semibold text-neutral-100">Circuit breakers</span>, ...',
      image: "/images/testapic-logo.png",
      imageBgColor: "010231",
      skills: ["Symfony", "Clojure", "MySQL", "Postgres", "GCP", "RabbitMQ"],
    },
    {
      title: "Lead backend",
      date: "Jun 2017 - Mar 2023",
      type: "Paris then remote",
      description:
        'Eurecab helps people compare and book the best driver at the best price. Its marketplace is open to major cabs companies (<span class="font-semibold text-neutral-100">Lecab</span>, <span class="font-semibold text-neutral-100">Snapcar</span>, <span class="font-semibold text-neutral-100">Marcel</span> ...) as well as to independent drivers on most cities. Spearheaded design and implementation of common ride haling critical services (real-time geotracking, driver/rider matching algorithm, coupon system, and many more...',
      image: "/images/eurecab-logo.svg",
      imageBgColor: "F8BD11",
      skills: ["Symfony", "Clojure", "MySQL", "Postgres", "GCP", "RabbitMQ"],
    },
    {
      title: "Backend developer",
      date: "Sept 2014 - Jun 2017",
      type: "Aubervilliers",
      description:
        'As a part of the billing team, I was in charge of the integration of worldwide mobile operator payment solution (<span class="font-semibold text-neutral-100">Orange</span>, <span class="font-semibold text-neutral-100">SFR</span>, <span class="font-semibold text-neutral-100">Bouygues</span>, <span class="font-semibold text-neutral-100">Telcel</span>, <span class="font-semibold text-neutral-100">AT&T</span>, <span class="font-semibold text-neutral-100">O2</span>, <span class="font-semibold text-neutral-100">T-Mobile</span>, …) in our products. I was also the technical referrent of the customer care developments',
      image: "/images/alchimie-logo.svg",
      imageBgColor: "FEFEFE",
      skills: ["Symfony", "Clojure", "MySQL", "Postgres", "GCP", "RabbitMQ"],
    },
    {
      title: "Lead backend",
      date: "Mar 2022 - Jun 2023",
      type: "Remote",
      description:
        'I joined Smile as an intern and received coaching and support from senior fullstack engineers to gain practical experience in using PHP Drupal, which enabled me to build website for big brands such as <span class="font-semibold text-neutral-100">Campanile</span>, <span class="font-semibold text-neutral-100">Total.com</span>, and <span class="font-semibold text-neutral-100">Paris Sorbonne</span> library intranet',
      image: "/images/smile-logo.png",
      imageBgColor: "337AB7",
      skills: ["Symfony", "Clojure", "MySQL", "Postgres", "GCP", "RabbitMQ"],
    },
  ];

  return (
    <div>
      <div className="2xl:grid 2xl:grid-cols-2">
        {experiences.map((experienceData, i) => 
            <ExperienceCard card={experienceData}></ExperienceCard>
        )}
      </div>
      <p className="mt-8">
        More on <span className="font-semibold text-neutral-100">LinkedIn</span>{" "}
        →{" "}
        <a
          className="text-amaranth-500"
          href="https://www.linkedin.com/in/rdjebrouni"
        >
          https://www.linkedin.com/in/rdjebrouni
        </a>
      </p>
    </div>
  );
}
