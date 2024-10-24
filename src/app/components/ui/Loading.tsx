import Image from "next/image";
import loading from "../../../assets/loading.svg";
const Loading = ({ className = "h-[70vh]" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        className="mx-auto"
        src={loading}
        alt="loading"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
