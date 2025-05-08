import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imageIcon from "../assets/image/image1.png";
import image2 from "../assets/image/image2.png";

const iconVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 500,
    },
  }),
  exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
};

const circularPositions = (radius, centerX, centerY) => [
  { left: centerX - radius, top: centerY - radius },
  { left: centerX + radius, top: centerY - radius },
  { left: centerX - radius, top: centerY + radius },
  { left: centerX + radius, top: centerY + radius },
];

const Playandwin = () => {
  const [expanded, setExpanded] = useState(false);
  const [centerX, setCenterX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateCenterX = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCenterX(rect.width / 2);
      }
    };

    updateCenterX();
    window.addEventListener("resize", updateCenterX);
    return () => window.removeEventListener("resize", updateCenterX);
  }, []);

  const radius = 50;
  const centerY = expanded ? 100 : 80;
  const iconPositions = circularPositions(radius, centerX, centerY);

  return (
    <motion.div
      ref={containerRef}
      className="bg-[#090909] flex justify-center rounded-xl w-full max-w-md mx-auto p-6 text-center text-white relative h-[320px]"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Central icon */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        animate={{ top: centerY }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <div className="bg-[#1E1E1E] rounded-full w-10 h-10 flex items-center justify-center">
          <img src={imageIcon} alt="center-icon" />
        </div>
      </motion.div>

      {/* Surrounding icons */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {expanded &&
            iconPositions.map((pos, i) => (
              <motion.img
                key={i}
                src={image2}
                alt="icon"
                className="absolute w-4 h-4"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: "translate(-50%, -50%)",
                }}
                custom={i}
                variants={iconVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            ))}
        </AnimatePresence>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-6 w-full text-center px-4 flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold text-white">Play and Win</h3>
        <p className="text-gray-400 text-[12px] mt-1 leading-relaxed">
          Build your dream team by handpicking top ballers
          <br />
          for your ultimate fantasy league squad!
        </p>
      </div>
    </motion.div>
  );
};

export default Playandwin;
