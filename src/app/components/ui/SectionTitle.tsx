import { TextGenerateEffect } from "./TextGenerateEffect";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextGenerateEffect
        duration={0.5}
        className="md:text-4xl text-3xl text-white font-bold text-center uppercase"
        words={children.toString()}
      />
    </>
  );
};

export default SectionTitle;
