import { MdDevices, MdLightMode, MdOutlinePayment } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { FaBookReader, FaDatabase } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import Image from "next/image";
import resApi from "../assets/api.png";
import { TbBrandRedux } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { GiExpander } from "react-icons/gi";
import { RiReactjsLine } from "react-icons/ri";
import { FiLayout } from "react-icons/fi";
import {
  SiOctanerender,
  SiTailwindcss,
  SiJsonwebtokens,
  SiNextdotjs,
  SiCcleaner,
  SiReactquery,
} from "react-icons/si";
import { BsStars } from "react-icons/bs";

export const AllStrengths = [
  { title: "Typescript Mastery", icon: <BiLogoTypescript size={20} /> },
  {
    title: "RESTful APIs",
    icon: <Image src={resApi} width={18} height={18} alt="restful api" />,
  },
  { title: "Continuous Learner", icon: <FaBookReader size={20} /> },
  { title: "Next.js Proficiency", icon: <SiNextdotjs size={19} /> },
  { title: "JWT Authentication", icon: <SiJsonwebtokens size={18} /> },
  { title: "Redux Toolkit", icon: <TbBrandRedux size={20} /> },
  { title: "English Proficiency", icon: <RiEnglishInput size={20} /> },
  { title: "Responsive Design", icon: <MdDevices size={20} /> },
  { title: "Typescript Mastery", icon: <BiLogoTypescript size={20} /> },
  { title: "Scalable Code", icon: <GiExpander size={18} /> },
  { title: "Continuous Learner", icon: <FaBookReader size={20} /> },
  { title: "React Expertise", icon: <RiReactjsLine size={20} /> },
  { title: "UI Optimization", icon: <FiLayout size={20} /> },
  { title: "SSG & ISR", icon: <SiOctanerender size={20} /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
  { title: "English Proficiency", icon: <RiEnglishInput size={20} /> },
  {
    title: "API Integration",
    icon: <Image src={resApi} width={18} height={18} alt="api" />,
  },
  { title: "Theming", icon: <MdLightMode size={20} /> },
  {
    title: "Scalable APIs",
    icon: <Image src={resApi} width={18} height={18} alt="restful api" />,
  },
  { title: "Payment Integration", icon: <MdOutlinePayment size={20} /> },
  { title: "Continuous Learner", icon: <FaBookReader size={20} /> },
  {
    title: "RESTful APIs",
    icon: <Image src={resApi} width={18} height={18} alt="restful api" />,
  },
  { title: "Typescript Mastery", icon: <BiLogoTypescript size={20} /> },
  { title: "Clean Code", icon: <SiCcleaner size={20} /> },
  { title: "Database Management", icon: <FaDatabase size={20} /> },
  { title: "AI Integration", icon: <BsStars size={20} /> },
  { title: "English Proficiency", icon: <RiEnglishInput size={20} /> },
  { title: "Tanstack Query", icon: <SiReactquery size={20} /> },
];

export const KeyStrengths = [
  {
    title: "Full-Stack Expertise",
    description:
      "Proficient in building end-to-end applications Typescript, Mongoose, Express.Js, React.",
    icon: <GoPackage size={22} />,
  },
  {
    title: "English Proficiency",
    description:
      "I have strong English communication skills, both written and verbal.",
    // "Skilled in creating mobile-first, responsive designs that look great on any device.",
    icon: <RiEnglishInput size={22} />,
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
