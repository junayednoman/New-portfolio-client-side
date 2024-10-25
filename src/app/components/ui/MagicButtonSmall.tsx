import { HTMLAttributeAnchorTarget } from "react";

const MagicButtonSmall = ({
  children,
  icon,
  iconPosition = "right",
  link,
  target,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  link?: string;
  target?: HTMLAttributeAnchorTarget;
}) => {
  return (
    <a target={target} href={link || "/"}>
      <button className="relative inline-flex h-10 overflow-hidden rounded-[10px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {iconPosition === "left" && icon}
          <span
            className={`text-[13px] ${
              iconPosition === "left" ? "ml-2" : "mr-2"
            }`}
          >
            {children}
          </span>
          {iconPosition === "right" && icon}
        </span>
      </button>
    </a>
  );
};

export default MagicButtonSmall;
