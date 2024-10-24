const BoxBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full dark:bg-black bg-white  sm:dark:bg-grid-white/[0.04] dark:bg-grid-white/[0.08] bg-grid-black/[0.1] flex items-center justify-center ${className}`}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white sm:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      {children}
    </div>
  );
};

export default BoxBackground;
