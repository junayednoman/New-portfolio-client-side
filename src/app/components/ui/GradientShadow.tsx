const GradientShadow = ({ className }: { className?: string }) => {
  return (
    <div
      className={`h-[800px] absolute top-0 w-full -z-10 ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(125,51,204,0.2566367611497724) 0%, rgba(0,0,0,0) 80%)",
      }}
    ></div>
  );
};

export default GradientShadow;
