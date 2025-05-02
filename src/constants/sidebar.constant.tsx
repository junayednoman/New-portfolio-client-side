import { MenuProps } from "antd";
import { AiOutlineProject } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { Home, NotebookPen, User } from "lucide-react";
import Link from "next/link";

export const menuItems = [
  {
    key: "1",
    icon: <AiOutlineProject size={16} />,
    label: <Link href={"/admin/create-project"}>Create Project</Link>,
  },
  {
    key: "2",
    icon: <AiOutlineProject size={16} />,
    label: <Link href={"/admin/projects"}>Projects</Link>,
  },
  {
    key: "3",
    icon: <NotebookPen size={16} />,
    label: <Link href={"/admin/create-blog"}>Create Blog</Link>,
  },
  {
    key: "4",
    icon: <NotebookPen size={16} />,
    label: <Link href={"/admin/my-blogs"}>Blogs</Link>,
  },
  {
    key: "5",
    icon: <GiSkills size={16} />,
    label: <Link href={"/admin/skills"}>Skills</Link>,
  },
];

export const items: MenuProps["items"] = [
  {
    label: (
      <div className="flex items-center gap-2">
        <Home size={14} />
        <Link className="text-text" href="/">
          Home
        </Link>
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div className="flex items-center gap-2">
        <User size={14} />
        <Link className="text-text" href="/profile">
          Profile
        </Link>
      </div>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
];

export const protectedRoutes = ["/admin"];
