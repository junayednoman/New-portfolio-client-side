import typescriptIcon from "../../../assets/typescript-svgrepo-com.svg";
import reactIcon from "../../../assets/react.svg";
import reduxIcon from "../../../assets/redux-svgrepo-com.svg";
import nodeIcon from "../../../assets/nodejs-icon-svgrepo-com.svg";
import mongooseIcon from "../../../assets/mongoose.svg";
import expressIcon from "../../../assets/express-js.svg";
import Image from "next/image";
export const skillIcons = {
  typescript: (
    <Image
      className="pointer-events-none"
      src={typescriptIcon}
      alt="Typescript"
      width={20}
      height={20}
    />
  ),
  react: (
    <Image
      className="pointer-events-none"
      src={reactIcon}
      alt="React"
      width={30}
      height={30}
    />
  ),
  redux: (
    <Image
      className="pointer-events-none"
      src={reduxIcon}
      alt="Redux"
      width={21}
      height={21}
    />
  ),
  node: (
    <Image
      className="pointer-events-none"
      src={nodeIcon}
      alt="node js"
      width={20}
      height={20}
    />
  ),
  mongoose: (
    <Image
      className="pointer-events-none"
      src={mongooseIcon}
      alt="Mongoose"
      width={50}
      height={50}
    />
  ),
  express: (
    <Image
      className="pointer-events-none"
      src={expressIcon}
      alt="Express"
      width={20}
      height={20}
    />
  ),
};
