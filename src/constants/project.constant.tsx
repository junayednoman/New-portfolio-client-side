import Image from "next/image";
import typescriptIcon from "../assets/typescript-svgrepo-com.svg";
import reactIcon from "../assets/react.svg";
import reduxIcon from "../assets/redux-svgrepo-com.svg";
import nodeIcon from "../assets/nodejs-icon-svgrepo-com.svg";
import { SiMongoose } from "react-icons/si";
import expressIcon from "../assets/express-js.svg";
import { SiExpress } from "react-icons/si";

export const projectTechs = {
  react: <Image alt="html" src={reactIcon} width={24} height={24} />,
  redux: <Image alt="html" src={reduxIcon} width={22} height={22} />,
  typescript: <Image alt="html" src={typescriptIcon} width={21} height={21} />,
  node: <Image alt="html" src={nodeIcon} width={22} height={22} />,
  mongoose: <SiMongoose size={27} className="text-white" />,
  express: <SiExpress size={20} className="text-white" />,
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
