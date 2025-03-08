import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const projectData = [
  {
    title: "Fast Food Delivery App",
    description:
      "Modern & Appetizing DesignDesigned a visually enticing interface that reflects the vibrant essence of fast food, blending modern aesthetics with an appetizing appeal.",
    imageUrl:
      "assets/images/uiux-1.jpg",
    techStack: ["Figma"],
    // githubLink: "#",
    demoLink: "",
    // projectType: "1st Year Java Project",
  },
  {
    title: "Parking Management System",
    description:
      "Sleek & Functional DesignDeveloped a modern and intuitive interface that enhances the parking experience with clear navigation and a visually appealing layout.",
    imageUrl:
      "assets/images/uiux-2.jpg",
    techStack: ["Figma"],
    // githubLink: "#",
    demoLink: "",
    // projectType: "1st Year Java Project",
  },
];

const UIUXProjects = () => {
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
                {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  {project.projectType}
                </p> */}
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
                {/* <a
                  className="hover:text-textGreen duration-300"
                  href={project.githubLink}
                  target="_blank"
                >
                  <TbBrandGithub />
                </a> */}
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

export default UIUXProjects;
