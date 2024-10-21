import MagicButton from "../ui/MagicButton";
import { Spotlight } from "../ui/Spotlite";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section>
      <div className="text-center">
        <Spotlight fill="#5a279e" className="right-0 h-full top-0 opacity-10" />

        <div className="xl:py-[230px] md:py-[200px] py-16 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.1] flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="max-w-4xl mx-auto px-3">
            <TextGenerateEffect
              className="font-bold md:text-[85px] md:leading-[85px] text-5xl text-white tracking-tighter"
              words="Hi, I'm Junayed Noman"
              duration={2}
              filter={false}
            />
            <p className="sm:mt-8 mt-5  text-white sm:text-lg text-[15px] sm:leading-7 leading-6">
              A Full Stack Developer with expertise in the MERN stack, building
              adaptable and impactful web applications. My work spans from
              intuitive front-end designs to robust back-end systems.
            </p>
            <a
              href="#projects"
              className="cursor-default mb-2 inline-block mt-12"
            >
              <MagicButton icon={<FaLocationArrow />}>All Projects</MagicButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
