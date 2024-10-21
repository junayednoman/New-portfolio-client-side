import { ReactNode } from "react";
import { FloatingNav } from "../../layouts/Navbar";
import { navItems } from "../../constants/navbar.constant";

const GeneralLayout = ({
  children,
}: {
  children: ReactNode;
  homeBanner: ReactNode;
  featuredStory: ReactNode;
}) => {
  return (
    <>
      <FloatingNav navItems={navItems} />
      {children}
    </>
  );
};

export default GeneralLayout;
