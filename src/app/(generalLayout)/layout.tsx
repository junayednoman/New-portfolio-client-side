import { ReactNode } from "react";
import { FloatingNav } from "../../layouts/Navbar";
import { navItems } from "../../constants/navbar.constant";
import { ThemeProvider } from "../../providers/themeProvider";
import CTA from "../components/sections/Cta";
import Footer from "../components/sections/Footer";

const GeneralLayout = ({
  children,
}: {
  children: ReactNode;
  homeBanner: ReactNode;
  featuredStory: ReactNode;
}) => {
  return (
    <>
      <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        enableSystem
        disableTransitionOnChange
      >
        <FloatingNav navItems={navItems} />
        {children}
        <CTA />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default GeneralLayout;
