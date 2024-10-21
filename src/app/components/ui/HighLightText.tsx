"use client";
import { motion } from "framer-motion";

const HighLightText = ({
  children,
  fontWeight,
}: {
  children: React.ReactNode;
  fontWeight?: number;
}) => {
  const bgVariants = {
    hidden: { backgroundSize: "0% 100%" },
    visible: {
      backgroundSize: "100% 100%",
      transition: { duration: 1.3, ease: "easeInOut" },
    },
  };
  return (
    <motion.span
      className="px-2 py-[1px] rounded-[5px] inline-block"
      style={{
        backgroundImage: "linear-gradient(to right, #7d33cc, #e6993a)",
        // backgroundImage: "linear-gradient(to right, #9c40ff, #ffaa40)",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 100%",
        color: "white",
      }}
      variants={bgVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5 }}
    >
      <strong style={{ fontWeight: fontWeight || 500 }}>{children}</strong>
    </motion.span>
  );
};

export default HighLightText;
