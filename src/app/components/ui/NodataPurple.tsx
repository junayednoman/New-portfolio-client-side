import Image from "next/image";
import image from "../../../assets/nodata.png";

const NodataPurple = ({ className }: { className?: string }) => {
  return (
    <div
      className={`h-[300px] flex items-center justify-center text-center ${className}`}
    >
      <div>
        <Image
          className="mx-auto pointer-events-none"
          src={image}
          alt="No data"
          width={120}
          height={120}
        />
        <h4 className="text-white-100 text-xl font-semibold mt-4">
          No data found!
        </h4>
      </div>
    </div>
  );
};

export default NodataPurple;
