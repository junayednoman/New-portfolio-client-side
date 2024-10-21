import About from "../components/sections/About";
import Hero from "../components/sections/Hero";

const Page = () => {
  return (
    <main className="bg-black min-h-screen flex flex-col w-full">
      <Hero />
      <About />
    </main>
  );
};

export default Page;
