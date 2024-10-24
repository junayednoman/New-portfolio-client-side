"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HighLightText = ({
  children,
  fontWeight,
  duration = 1,
}: {
  children: React.ReactNode;
  fontWeight?: number;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when the element comes into view

  const bgVariants = {
    hidden: { backgroundSize: "0% 100%" },
    visible: {
      backgroundSize: "100% 100%",
      transition: { duration: duration, ease: "easeInOut" },
    },
  };

  return (
    <motion.span
      ref={ref}
      className="px-2 py-[1px] rounded-[5px] inline-block"
      style={{
        backgroundImage: "linear-gradient(to right, #7d33cc, #e6993a)",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 100%",
        color: "white",
      }}
      variants={bgVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger the animation based on the viewport visibility
      transition={{ delay: 0.5 }}
    >
      <strong style={{ fontWeight: fontWeight || 500 }}>{children}</strong>
    </motion.span>
  );
};

export default HighLightText;
