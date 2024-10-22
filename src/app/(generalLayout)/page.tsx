import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import { Skills } from "../components/sections/Skills";

const Page = () => {
  return (
    <main className="bg-black min-h-screen h-auto flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
    </main>
  );
};

export default Page;
