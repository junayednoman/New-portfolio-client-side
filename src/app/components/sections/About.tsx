import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import FContainer from "../ui/FContainer";
import FeatureCard from "../ui/FeatureCard";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import MagicButtonSmall from "../ui/MagicButtonSmall";
import PIcon from "../ui/PIcon";

const About = () => {
  return (
    <section className="md:pb-20 z-10">
      <FContainer>
        <div className="">
          <div>
            <div className="md:text-3xl text-white font-bold text-center uppercase flex items-center justify-center gap-3">
              <span>About Me</span>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="border rounded-[12px] border-neutral-800 sm:p-6 p-5 flex flex-col justify-between">
              <div>
                <div className="flex gap-3 max-w-[300px]">
                  <div className="border-[2px] border-neutral-400 rounded-[10px]">
                    <Image
                      src="https://junayed-noman.web.app/assets/junayed%20noman-_X6r-cS-.jpg"
                      alt="me"
                      width={70}
                      height={70}
                      className="rounded-[10px] border-2 "
                    />
                  </div>
                  <div className="text-white py-2">
                    <h5 className="font-semibold text-lg">Junayed Noman</h5>
                    <p className="text-slate-300 mt-2">Available to hire</p>
                  </div>
                </div>
                <p className="text-white-100 text-sm leading-[22px] mt-4">
                  At the end of 2021, I began my journey with HTML and CSS,
                  expanding into Bootstrap, PHP, and MySQL(basic). I freelanced
                  with these skills until June 2023. During the freelance
                  period, I have worked with raw HTML and CSS. Then I started
                  learning JavaScript-based front-end and basic back-end
                  development in July 2023.
                </p>
                <p className="text-white-100 text-sm leading-[22px] mt-2">
                  Afterward, I collaborated on some contractual projects. In
                  particular, I got an opportunity to develop a ‘data collection
                  system’ for around 200 primary schools that won first place in
                  a divisional competition of the primary education department.
                  That significantly enhanced my skills. These projects were a
                  blessing for me. I have learned such knowledge that I couldn’t
                  learn without working on such real-world projects.
                </p>
              </div>
              <div className="flex items-center sm:gap-4 gap-2 mt-6">
                <PIcon link="https://www.linkedin.com/in/junayed-noman/">
                  <FaLinkedin size={20} />
                </PIcon>
                <PIcon link="https://github.com/junayednoman">
                  <FaGithub size={20} />
                </PIcon>
                <PIcon link="https://www.facebook.com/JunayedNoman.me">
                  <FaFacebookSquare size={20} />
                </PIcon>
                <div className="sm:block hidden">
                  <PIcon link="https://twitter.com/junayednoman">
                    <FaSquareXTwitter size={20} />
                  </PIcon>
                </div>
                <MagicButtonSmall icon={<FaCloudDownloadAlt size={18} />}>
                  Download Resume
                </MagicButtonSmall>
              </div>
            </div>
            <div className="relative">
              <div
                className="h-[800px] absolute -top-[200px] -left-30 w-full z-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(90,39,158,0.3714826995251226) 0%, rgba(0,0,0,0) 45%)",
                }}
              ></div>
              <div className="grid grid-cols-1 sm:grid-cols-2  relative z-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                  <FeatureCard key={feature.title} {...feature} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </FContainer>
    </section>
  );
};

export default About;

const features = [
  {
    title: "Full-Stack Expertise",
    description:
      "Proficient in building end-to-end applications Typescript, Mongoose, Express.Js, React.",
    icon: <GoPackage size={22} />,
  },
  {
    title: "Responsive Design",
    description:
      "Skilled in creating mobile-first, responsive designs that look great on any device.",
    icon: <MdDevices size={22} />,
  },
  {
    title: "Modern Front-End Skills",
    description:
      "Focused on modern front-end development with React, Tailwind CSS, Redux and Next.js.",
    icon: <GiSkills size={22} />,
  },
  {
    title: "Continuous Learner",
    description:
      "Moving forward, I aim to master modern technologies like PostgreSQL, Prisma, GraphQL, and Docker",
    icon: <FaBookReader size={22} />,
  },
];
