import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const projectData = [
  {
    title: "HR Analytics Dashboard",
    description:
      "Transforming HR Data into Actionable Insights Introducing my HR Analytics Dashboard, a dynamic and interactive solution built with Power BI to help HR teams make data-driven decisions with ease.",
    imageUrl:
      "assets/images/pbi-1.jpg",
    techStack: ["Power BI", "DAX (Data Analysis Expressions)", "Data Modeling"],
    githubLink: "#",
    demoLink: "https://www.linkedin.com/posts/thimirakalansooriya_dax-dataanalytics-powerbi-activity-7278356356032602112-JCKH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRtKIYBBYm15hLm4R_rSUOjqmu7K4mQNTI",
    // projectType: "1st Year DAX (Data Analysis Expressions) Project",
  },
  {
    title: "Player Performance Analytics Dashboard",
    description:
      "This interactive Player Performance Analytics Dashboard provides in-depth insights into a cricket player's performance. It presents key metrics in a visually appealing and easy-to-understand format, making data-driven analysis effortless.",
    imageUrl:
      "assets/images/pbi-2.jpg",
    techStack: ["Power BI", "DAX (Data Analysis Expressions)", "Data Modeling"],
    githubLink: "#",
    demoLink: "https://www.linkedin.com/posts/thimirakalansooriya_dax-dataanalytics-powerbi-activity-7278356356032602112-JCKH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRtKIYBBYm15hLm4R_rSUOjqmu7K4mQNTI",
    // projectType: "1st Year Java Project",
  },
];

const PowerBIProjects = () => {
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

export default PowerBIProjects;
