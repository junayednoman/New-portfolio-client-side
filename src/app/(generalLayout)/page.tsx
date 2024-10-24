import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import { Education } from "../components/sections/Education";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
const Page = () => {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden h-auto flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Blogs />
    </main>
  );
};

export default Page;
