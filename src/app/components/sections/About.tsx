import { FaGithub, FaLinkedin } from "react-icons/fa";
import FeatureCard from "../ui/FeatureCard";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import MagicButtonSmall from "../ui/MagicButtonSmall";
import PIcon from "../ui/PIcon";
import GradientShadow from "../ui/GradientShadow";
import HighLightText from "../ui/HighLightText";
import { AllStrengths, KeyStrengths } from "../../../constants/about.constant";
import { Marquee } from "../ui/Marquee";
import ShinyButton from "../ui/ShinyButton";
import SectionTitle from "../ui/SectionTitle";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { RevealText } from "../ui/RevealText";
import Container from "../ui/Container";

const About = () => {
  const firstRow = AllStrengths.slice(0, AllStrengths.length / 2);
  const secondRow = AllStrengths.slice(AllStrengths.length / 2);
  return (
    <section id="about" className="md:pb-20 pb-8 md:pt-0 pt-12 z-10">
      <Container>
        <div className="">
          <SectionTitle>About me</SectionTitle>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="border rounded-[12px] border-neutral-700 sm:p-6 p-5 flex flex-col justify-between">
              <div>
                <div className="flex gap-3">
                  <div
                    className="border-[2px] w-[70px] h-[70px] border-neutral-400 bg-cover bg-center bg-none rounded-[10px]"
                    style={{
                      backgroundImage: `url('https://junayed-noman.web.app/assets/junayed%20noman-_X6r-cS-.jpg')`,
                    }}
                  ></div>
                  <div className="text-white py-2">
                    <h5 className="font-semibold text-lg">Junayed Noman</h5>
                    <p className="text-slate-300 mt-2 text-sm">
                      junayednoman05@gmail.com
                    </p>
                  </div>
                </div>
                <p className="text-white-100 text-sm leading-[22px] mt-4">
                  At the end of 2021, I began my journey with HTML and CSS, and
                  Bootstrap. I freelanced with these skills until June 2023.
                  During the freelance period, I have worked with{" "}
                  <span className="text-lavender font-medium">
                    raw HTML and CSS
                  </span>{" "}
                  Then I started learning JavaScript-based front-end and basic
                  back-end development in July 2023.
                </p>
                <p className="text-white-100 text-sm leading-[22px] mt-2">
                  Afterward, I collaborated on some contractual projects. In
                  particular, I got an opportunity to develop a ‘data collection
                  system’ for around{" "}
                  <span className="text-lavender font-medium">
                    200 primary schools
                  </span>{" "}
                  that won first place in a divisional competition of the
                  primary education department. That significantly enhanced my
                  skills. I have learned such knowledge that I couldn’t learn
                  without working on such real-world projects.
                </p>
              </div>
              <div className="flex items-center sm:gap-4 gap-2 mt-6">
                <PIcon link="https://www.linkedin.com/in/junayed-noman/">
                  <FaLinkedin size={20} />
                </PIcon>
                <PIcon link="https://github.com/junayednoman">
                  <FaGithub size={20} />
                </PIcon>

                <div className="sm:block hidden">
                  <PIcon link="https://www.facebook.com/JunayedNoman.me">
                    <FaFacebookSquare size={20} />
                  </PIcon>
                  <PIcon link="https://twitter.com/junayednoman">
                    <FaSquareXTwitter size={20} />
                  </PIcon>
                </div>
                <a
                  href="https://drive.google.com/file/d/1W6xp-K4rSH5h9h5VjhO7coGOzk1SaUKN/view?usp=sharing"
                  target="_blank"
                >
                  <MagicButtonSmall
                    icon={<FaArrowUpRightFromSquare size={13} />}
                  >
                    View Resume
                  </MagicButtonSmall>
                </a>
              </div>
            </div>
            <div className="relative">
              <GradientShadow className="-left-[350px]" />
              <div className="grid grid-cols-1 sm:grid-cols-2  relative z-10 max-w-7xl mx-auto">
                {KeyStrengths.map((feature, index) => (
                  <FeatureCard key={feature.title} {...feature} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* about me bottom */}
          <div className="md:mt-7 mt-5 flex xl:flex-row flex-col items-center lg:gap-8 gap-5 overflow-hidden">
            <div className="flex xl:w-[520px] w-full items-center justify-center sm:h-[208px] h-[150px] border dark:border-neutral-700 rounded-[12px]">
              <RevealText />
            </div>
            <div className="w-full border dark:border-neutral-700 rounded-[12px] p-8">
              <div>
                <h5 className="font-semibold sm:text-xl text-lg text-center text-white">
                  My Key{" "}
                  <HighLightText>
                    <span className="font-semibold">Strengths</span>
                  </HighLightText>
                </h5>
              </div>

              <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl mt-6 xl:max-w-[700px] max-w-full mx-auto">
                <div>
                  <Marquee
                    pauseOnHover
                    className="lg:[--duration:70s] md:[--duration:95s] [--duration:125s] [--gap:8px]"
                  >
                    {firstRow.map((item) => (
                      <div
                        key={item.title}
                        className="flex p-2 rounded-[10px] border border-neutral-700"
                      >
                        <ShinyButton icon={item.icon}>{item.title}</ShinyButton>
                      </div>
                    ))}
                  </Marquee>
                  <Marquee
                    reverse
                    pauseOnHover
                    className="lg:[--duration:70s] md:[--duration:95s] [--duration:125s] [--gap:8px]"
                  >
                    {secondRow.map((item) => (
                      <div
                        key={item.title}
                        className="flex p-2 rounded-[10px] border border-neutral-700"
                      >
                        <ShinyButton icon={item.icon}>{item.title}</ShinyButton>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
