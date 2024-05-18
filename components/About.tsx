import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <h1>Hello there! I'm Thimira Kalansooriya.</h1>
          <p>
            Welcome to my corner of the digital world! I'm passionate about
            crafting engaging experiences on the web. My journey into web
            development began in 2012 with a curious dive into customizing
            Tumblr themes. Those early experiments, like tinkering with a
            bespoke reblog button, sparked my fascination with HTML & CSS.
          </p>
          <p>
            Over the years, I've had the privilege of shaping digital landscapes
            across diverse environments. From collaborating in advertising
            agencies and dynamic start-ups to contributing to the initiatives of
            large corporations and innovative student-led design studios, each
            experience has enriched my understanding of user-centric design.
          </p>
          <p>
            I thrive on the art of blending creativity with functionality.
            Whether it's conceptualizing intuitive user interfaces or
            meticulously crafting pixel-perfect front-end solutions, I'm
            dedicated to bringing ideas to life in ways that resonate with
            audiences. Let's connect and create something extraordinary
            together!
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Figma
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              PHP
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <img
                className="rounded-lg h-full object-cover"
                src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/441179714_2746507308864341_5817944098945206154_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yWctUpqobT4Q7kNvgF6Ilx4&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AYAto64rTI_Q5q_vgTYJBQ2JeNxXM-nP-IQay9CQyO73Vg&oe=664E2494"
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
