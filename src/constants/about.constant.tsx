import { GoPackage } from "react-icons/go";
import { FaBookReader, FaDatabase } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiEnglishInput } from "react-icons/ri";
import { GiExpander } from "react-icons/gi";
import { SiNginx, SiSocketdotio } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BsStars } from "react-icons/bs";
import {
  ArrowUpWideNarrow,
  BrainCog,
  CloudCog,
  Container,
  Focus,
  Handshake,
  Lightbulb,
  Users,
  Workflow,
} from "lucide-react";
import { DiLinux } from "react-icons/di";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";

export const AllStrengths = [
  { title: "Typescript Mastery", icon: <BiLogoTypescript size={19} /> },
  {
    title: "RESTful APIs",
    icon: <AiOutlineApi size={19} />,
  },
  { title: "Continuous Learner", icon: <FaBookReader size={19} /> },
  { title: "Clear Communication", icon: <Handshake size={19} /> },
  { title: "Problem Solving", icon: <Lightbulb size={20} /> },
  { title: "Backend First", icon: <GoPackage size={19} /> },
  { title: "English Proficiency", icon: <RiEnglishInput size={19} /> },
  { title: "Team Friendly", icon: <Users size={19} /> },
  { title: "Typescript Mastery", icon: <BiLogoTypescript size={19} /> },
  { title: "Scalable Code", icon: <GiExpander size={17} /> },
  { title: "Linux Essentials", icon: <DiLinux size={19} /> },
  { title: "Ownership Mindset", icon: <BrainCog size={19} /> },
  { title: "Detail Focused", icon: <Focus size={19} /> },
  { title: "Socket Uses", icon: <SiSocketdotio size={19} /> },
  { title: "GraphQL Guru", icon: <GrGraphQl size={19} /> },
  { title: "Nginx Knowledge", icon: <SiNginx size={19} /> },
  {
    title: "Reliability",
    icon: <VscWorkspaceTrusted size={18} />,
  },
  { title: "Cloud Computing", icon: <CloudCog size={19} /> },
  {
    title: "Docker Container",
    icon: <Container size={19} />,
  },
  { title: "Clear Communication", icon: <Handshake size={19} /> },
  { title: "Continuous Learner", icon: <FaBookReader size={19} /> },
  { title: "Team Friendly", icon: <Users size={19} /> },
  { title: "Typescript Mastery", icon: <BiLogoTypescript size={19} /> },
  { title: "Ownership Mindset", icon: <BrainCog size={19} /> },
  { title: "Database Management", icon: <FaDatabase size={19} /> },
  { title: "AI Integration", icon: <BsStars size={19} /> },
  { title: "English Proficiency", icon: <RiEnglishInput size={19} /> },
  { title: "DevOps Knowledge", icon: <Workflow size={19} /> },
];

export const KeyStrengths = [
  {
    title: "Backend Focus",
    description:
      "I build APIs and databases that are simple to use and easy to maintain.",
    icon: <GoPackage size={22} />,
  },
  {
    title: "Good Communication",
    description:
      "I ask the right questions and keep everyone aligned during development.",
    // "Skilled in creating mobile-first, responsive designs that look great on any device.",
    icon: <Handshake size={22} />,
  },
  {
    title: "Problem Solver",
    description:
      "I prefer practical solutions over complexity and over-engineering.",
    icon: <Lightbulb size={22} />,
  },
  {
    title: "Always improving",
    description:
      "I want each project I work on to be smoother and better than the last one.",
    icon: <ArrowUpWideNarrow size={22} />,
  },
];
