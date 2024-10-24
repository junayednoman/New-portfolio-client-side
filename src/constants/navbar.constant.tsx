import { FaHome } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";

export const navItems = [
  {
    name: "Home",
    link: "https://junayednoman.vercel.app/#hero",
    icon: <FaHome size={14} />,
  },
  {
    name: "About",
    link: "https://junayednoman.vercel.app/#about",
    icon: <BsFillInfoSquareFill size={13} />,
  },
  {
    name: "Education",
    link: "https://junayednoman.vercel.app/#education",
    icon: <PiStudentFill size={14} />,
  },
  {
    name: "Projects",
    link: "https://junayednoman.vercel.app/#projects",
    icon: <VscProject size={13} />,
  },
  {
    name: "Blogs",
    link: "/blogs",
    icon: <ImBlog size={14} />,
  },
];
