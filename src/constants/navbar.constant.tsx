import { FaHome } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";
import { MdMessage } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome size={18} />,
  },
  {
    name: "About",
    link: "#about",
    icon: <BsFillInfoSquareFill />,
  },

  {
    name: "Projects",
    link: "#projects",
    icon: <VscProject size={18} />,
  },
  {
    name: "Testimonial",
    link: "#testimonial",
    icon: <MdMessage size={19} />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <MdOutlineSupportAgent size={21} />,
  },
  {
    name: "Blogs",
    link: "/blog",
    icon: <TfiWrite size={17} />,
  },
];
