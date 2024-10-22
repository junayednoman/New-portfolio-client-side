const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h3 className="md:text-4xl text-3xl text-white font-bold text-center uppercase">
        {children}
      </h3>
    </div>
  );
};

export default SectionTitle;
