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
            <div className="border rounded-[12px] border-neutral-700 sm:p-6 p-5 flex flex-col justify-between max-w-full">
              <div>
                <div className="flex gap-3">
                  <div
                    className="border-[2px] w-[70px] h-[70px] border-neutral-400 bg-cover bg-center bg-none rounded-[10px]"
                    style={{
                      backgroundImage: `url('https://i.ibb.co.com/hXSksZF/464806637-1000091268468332-6036196829907894674-n.jpg')`,
                    }}
                  ></div>
                  <div className="text-white py-2">
                    <h5 className="font-semibold text-lg">Junayed Noman</h5>
                    <p className="text-slate-300 mt-2 text-sm">
                      junayednoman05@gmail.com
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-white-100 mt-4 text-sm">
                    After more than a year of learning, I have developed a solid
                    foundation in the MERN stack and have experience in building
                    dynamic and scalable applications. In the coming year, my
                    goal is to master modern technologies such as PostgreSQL,
                    Prisma, GraphQL, Docker, and AWS to create secure,
                    efficient, and future- proof solutions that address
                    real-world challenges. I aim to build a strong foundation
                    and increase my versatility by exploring these technologies.
                  </p>
                  <p className="text-white-100 mt-3 text-sm">
                    Furthermore, I’ll be learning new technologies to stay
                    aligned with the industry trends and demand. Ultimately, I
                    aspire to become a senior software developer with a
                    comprehensive skill set and the confidence to lead projects
                    effectively after 2-4 years.
                  </p>
                </div>
              </div>
              <div className="flex items-center sm:gap-3 gap-2 mt-6">
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
                </div>
                <div className="sm:block hidden">
                  <PIcon link="https://twitter.com/junayednoman">
                    <FaSquareXTwitter size={20} />
                  </PIcon>
                </div>

                <MagicButtonSmall
                  link="https://drive.google.com/file/d/1S_J4ttPQRdtIUczV5XemRLk-00zE9352/view?usp=sharing"
                  target="_blank"
                  icon={<FaArrowUpRightFromSquare size={13} />}
                >
                  View Resume
                </MagicButtonSmall>
              </div>
            </div>
            <div className="relative max-w-full">
              <GradientShadow className="-left-[350px]" />
              <div className="grid grid-cols-1 sm:grid-cols-2 relative z-10 max-w-7xl mx-auto">
                {KeyStrengths.map((feature, index) => (
                  <FeatureCard key={feature.title} {...feature} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* about me bottom */}
          <div className="md:mt-7 mt-5 flex xl:flex-row flex-col items-center lg:gap-8 gap-5">
            <div className="flex xl:w-[520px] w-full items-center justify-center sm:h-[208px] h-[150px] border dark:border-neutral-700 rounded-[12px]">
              <RevealText />
            </div>
            <div className="w-full border dark:border-neutral-700 rounded-[12px] p-8">
              <div>
                <h5 className="font-semibold sm:text-xl text-lg text-center text-white">
                  <HighLightText>
                    <span className="font-semibold">My Strengths</span>
                  </HighLightText>
                </h5>
              </div>

              <div className="relative flex flex-col items-center justify-center overflow-x-hidden bg-background md:shadow-xl mt-6 xl:max-w-[700px] max-w-full mx-auto">
                <div>
                  <Marquee
                    pauseOnHover
                    className="lg:[--duration:70s] md:[--duration:95s] [--duration:125s] [--gap:8px]"
                  >
                    {firstRow.map((item, i) => (
                      <div
                        key={i}
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
                    {secondRow.map((item, i) => (
                      <div
                        key={i}
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
