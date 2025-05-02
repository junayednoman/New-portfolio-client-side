import About from "../components/sections/About";
import Blogs from "../components/sections/Blogs";
import { Journey } from "../components/sections/Journey";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Certificates } from "../components/sections/Certificates";
import { certificateItems } from "../../constants/certificate.constant";
const Page = () => {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden h-auto flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Certificates items={certificateItems} autoplay />
      <Blogs />
      <div>{/* <Tooltip content="hello there">ami dev</Tooltip> */}</div>
    </main>
  );
};

export default Page;
