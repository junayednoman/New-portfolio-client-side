import BoxBackground from "../ui/BoxBackground";
import HighLightText from "../ui/HighLightText";
import MagicButton from "../ui/MagicButton";
import { Spotlight } from "../ui/Spotlite";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";
import { MdGeneratingTokens } from "react-icons/md";

const Hero = () => {
  return (
    <section id="hero">
      <div className="text-center relative">
        <Spotlight fill="#5a279e" className="right-0 h-full top-0 opacity-10" />
        <BoxBackground className="xl:py-[230px] md:py-[200px] py-12 ">
          <div className="max-w-4xl mx-auto px-3">
            <TextGenerateEffect
              className="font-bold md:text-[80px] md:leading-[85px] text-[40px] leading-10 text-white tracking-tighter"
              words="Hi, I'm Junayed Noman"
              duration={2}
              filter={false}
            />
            <p className="sm:mt-10 mt-5  text-white sm:text-lg text-[15px] sm:leading-7 leading-6">
              A MERN Stack Developer with expertise in{" "}
              <HighLightText>Typescript & NextJs</HighLightText> , building
              secure and impactful web applications. My work spans from
              front-end designs to robust back-end systems.
            </p>
            <div className="flex sm:flex-row flex-col items-center gap-4 justify-center mb-2 mt-14">
              <a href="#projects" className="cursor-default">
                <MagicButton icon={<FaLocationArrow />}>
                  View Projects
                </MagicButton>
              </a>
              <a href="#testimonials" className="sm:block hidden">
                <MagicButton icon={<MdGeneratingTokens size={20} />}>
                  Testimonials
                </MagicButton>
              </a>
            </div>
          </div>
        </BoxBackground>
      </div>
    </section>
  );
};

export default Hero;
