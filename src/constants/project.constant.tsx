import Image from "next/image";
import typescriptIcon from "../assets/typescript-svgrepo-com.svg";
import reactIcon from "../assets/react.svg";
import reduxIcon from "../assets/redux-svgrepo-com.svg";
import nodeIcon from "../assets/nodejs-icon-svgrepo-com.svg";
import { SiMongoose } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import mongodbIcon from "../assets/mongodb.svg";
import firebaseIcon from "../assets/icons8-firebase-48.svg";
import nextIcon from "../assets/nextjs-icon.svg";
import tailwindIcon from "../assets/tailwind-css-icon.svg";
import javascriptIcon from "../assets/JavaScript.svg";
import tanstackIcon from "../assets/logos--react-query-icon.svg";

//   javascript, html, css, tanstack, axios, react-hook, next-, formik,

export const projectTechs = {
  react: <Image alt="html" src={reactIcon} width={24} height={24} />,
  redux: <Image alt="html" src={reduxIcon} width={22} height={22} />,
  typescript: <Image alt="html" src={typescriptIcon} width={21} height={21} />,
  node: <Image alt="html" src={nodeIcon} width={22} height={22} />,
  mongoose: <SiMongoose size={27} className="text-white" />,
  express: <SiExpress size={20} className="text-white" />,
  mongodb: <Image alt="html" src={mongodbIcon} width={32} height={32} />,
  firebase: <Image alt="html" src={firebaseIcon} width={22} height={22} />,
  nextjs: <Image alt="html" src={nextIcon} width={22} height={22} />,
  tailwind: <Image alt="html" src={tailwindIcon} width={22} height={22} />,
  javascript: <Image alt="html" src={javascriptIcon} width={21} height={21} />,
  tanstack: <Image alt="html" src={tanstackIcon} width={21} height={21} />,
};

export const projects = [
  {
    image: "https://junayed-noman.web.app/assets/sdf-tf1PytzV.png",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store for electronics with cart and payment gateway integration.",
    _id: "1",
    techs: ["react", "typescript", "redux", "node", "express", "mongoose"],
  },
  {
    image: "https://junayed-noman.web.app/assets/quill-9Wr1AN_Y.png",
    title: "Social Media App",
    description:
      "A platform for users to connect, share posts, and follow each other.",
    _id: "2",
    techs: ["react", "typescript", "redux", "node", "express", "mongoose"],
  },
  {
    image: "https://junayed-noman.web.app/assets/sdf-tf1PytzV.png",
    title: "Blog Website",
    description:
      "A responsive blog site with markdown editor and comment section.",
    _id: "3",
    techs: ["react", "typescript", "redux", "node", "express", "mongoose"],
  },
  {
    image: "https://junayed-noman.web.app/assets/quill-9Wr1AN_Y.png",
    title: "Fitness Tracker",
    description:
      "An app to track workout progress, set goals, and monitor fitness metrics.",
    _id: "4",
    techs: ["react", "typescript", "redux", "node", "express", "mongoose"],
  },
  {
    image: "https://junayed-noman.web.app/assets/share%20a%20bite-7YyO2cxz.png",
    title: "Task Management Tool",
    description:
      "A productivity app to organize tasks, set priorities, and track deadlines.",
    _id: "5",
    techs: ["react", "typescript", "redux", "node", "express", "mongoose"],
  },
  {
    image: "https://junayed-noman.web.app/assets/sdf-tf1PytzV.png",
    title: "Real Estate Listing",
    description:
      "A web platform for browsing and listing real estate properties with map integration.",
    _id: "6",
    techs: ["react", "typescript", "redux", "node", "express", "mongoose"],
  },
];

export const techOptions = [
  { value: "react", label: "React" },
  { value: "redux", label: "Redux" },
  { value: "typescript", label: "Typescript" },
  { value: "node", label: "Node" },
  { value: "express", label: "Express" },
  { value: "mongoose", label: "Mongoose" },
  { value: "mongodb", label: "MongoDB" },
  { value: "firebase", label: "Firebase" },
  { value: "nextjs", label: "Next.js" },
  { value: "tailwind", label: "TailwindCSS" },
  { value: "javascript", label: "Javascript" },
  { value: "tanstack", label: "React Query" },
];
