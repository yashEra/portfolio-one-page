import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const projectData = [
  {
    title: "AyurCare || Clinical Management System",
    description:
      "The ongoing crisis in Sri Lanka, marked by a severe shortage of foreign currency, has led to skyrocketing prices of essential goods, particularly food, plunging many into hunger. Fuel restrictions have cascading effects, disrupting livelihoods and causing chaos in transportation. The introduction of Token G07 aims to alleviate the lengthy fuel queues, providing a vital solution to a pressing issue.",
    imageUrl:
      "https://yasith.art/assests/images/university-projects/tokenG10.png",
    techStack: ["React", "Springboot", "CSS"],
    githubLink: "https://github.com/yashEra/tokenG10",
    demoLink: "",
    projectType: "3rd Year Project",
  },
  {
    title: "TrendHire - Job Application Portal (JSP | Servlet)",
    description:
      "The ongoing crisis in Sri Lanka, marked by a severe shortage of foreign currency, has led to skyrocketing prices of essential goods, particularly food, plunging many into hunger. Fuel restrictions have cascading effects, disrupting livelihoods and causing chaos in transportation. The introduction of Token G07 aims to alleviate the lengthy fuel queues, providing a vital solution to a pressing issue.",
    imageUrl:
      "https://yasith.art/assests/images/university-projects/tokenG10.png",
    techStack: ["JavaFx", "Java", "Hibernate"],
    githubLink: "https://github.com/yashEra/tokenG10",
    demoLink: "",
    projectType: "2nd Year Project",
  },
  {
    title: "Tocken Generation System",
    description:
      "The ongoing crisis in Sri Lanka, marked by a severe shortage of foreign currency, has led to skyrocketing prices of essential goods, particularly food, plunging many into hunger. Fuel restrictions have cascading effects, disrupting livelihoods and causing chaos in transportation. The introduction of Token G07 aims to alleviate the lengthy fuel queues, providing a vital solution to a pressing issue.",
    imageUrl:
      "https://yasith.art/assests/images/university-projects/tokenG10.png",
    techStack: ["JavaFx", "Java", "Hibernate"],
    githubLink: "https://github.com/yashEra/tokenG10",
    demoLink: "",
    projectType: "1st Year Java Project",
  },
];

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Featured Projects" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {projectData.map((project, index) => (
          <div className="flex flex-col xl:flex-row gap-6" key={index}>
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href={project.demoLink || "#"}
              target="_blank"
            >
              <div>
                <img
                  className="w-full h-full object-contain"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  {project.projectType}
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                {project.description}
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                {project.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href={project.githubLink}
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                {project.demoLink && (
                  <a
                    className="hover:text-textGreen duration-300"
                    href={project.demoLink}
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
