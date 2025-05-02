"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface TooltipProps {
  content: string; // The content of the tooltip
  children: React.ReactNode; // The element that the tooltip will be attached to
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 10 };
  const x = useMotionValue(0); // to set this value on mouse move
  const y = useMotionValue(0); // to set vertical movement on mouse move

  // Tooltip's rotation based on the mouse movement
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-15, 15]),
    springConfig
  );

  // Tooltip's translation based on mouse movement
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-20, 20]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(y, [-100, 100], [-20, 20]),
    springConfig
  );

  // Handle mouse movement to update tooltip's position
  const handleMouseMove = (event: React.MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const halfWidth = event.currentTarget.offsetWidth / 2;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const halfHeight = event.currentTarget.offsetHeight / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
    y.set(event.nativeEvent.offsetY - halfHeight);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 300, damping: 25 },
            }}
            exit={{ opacity: 0, scale: 0.6 }}
            style={{
              translateX: translateX,
              translateY: translateY,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-2 flex text-xs flex-col items-center justify-center bg-black text-white rounded-md px-4 py-2 shadow-lg"
          >
            <div className="font-bold">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
