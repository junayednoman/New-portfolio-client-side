const MagicButton = ({
  children,
  icon,
  iconPosition = "right",
  className,
  link = "#",
  type,
  blank = false,
  bgColor = "bg-slate-950",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  link?: string;
  type?: "button" | "submit" | "reset";
  blank?: boolean;
  bgColor?: string;
}) => {
  return (
    <a target={blank ? "_blank" : "_self"} href={link}>
      <button
        type={type}
        className={`relative inline-flex h-12 overflow-hidden rounded-[12px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[12px] ${bgColor} px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl`}
        >
          {iconPosition === "left" && icon}
          <span className={`${iconPosition === "left" ? "ml-3" : "mr-3"}`}>
            {children}
          </span>
          {iconPosition === "right" && icon}
        </span>
      </button>
    </a>
  );
};

export default MagicButton;
