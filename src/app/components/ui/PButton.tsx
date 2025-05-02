import { Button } from "antd";
type RButtonProps = {
  children: string;
  link?: string;
  wFull?: boolean;
  onclick?: () => void;
  htmlType?: "button" | "submit" | "reset";
  disabled?: boolean;
};
const PButton = ({
  children,
  link,
  wFull,
  onclick,
  htmlType,
  disabled = false,
}: RButtonProps) => {
  return (
    <Button
      disabled={disabled}
      type="link"
      htmlType={htmlType}
      href={link}
      onClick={onclick}
      className={`bg-accent dark:bg-transparent py-[21px] px-7 sm:uppercase capitalize text-sm font-montserrat font-semibold hover:bg-accentDark decoration-transparent  border relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white rounded-[10px] ${
        wFull && "w-full"
      }`}
    >
      {children}
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px dark:bg-gradient-to-r from-transparent via-purple to-transparent h-px" />
    </Button>
  );
};

export default PButton;
