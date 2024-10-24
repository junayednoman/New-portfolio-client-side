import Image from "next/image";
import loading from "../../../assets/purple-spin.svg";
const PurpleLoading = ({ className = "h-[70vh]" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        className="mx-auto"
        src={loading}
        alt="loading"
        width={120}
        height={120}
      />
    </div>
  );
};

export default PurpleLoading;
