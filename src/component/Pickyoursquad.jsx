import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";

const Pickyoursquad = () => {
  const [expanded, setExpanded] = useState(false);
  const [centerX, setCenterX] = useState(0);
  const containerRef = useRef(null);

  // Toggle expansion
  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate centerX dynamically from container width
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

  const userVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        delay: 0.05 * i,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    },
  };

  const radius = 80;
  const centerY = expanded ? 100 : 80;
  const userCount = 6;

  const userPositions = Array.from({ length: userCount }, (_, i) => {
    const angle = (i / userCount) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { left: x, top: y };
  });

  return (
    <motion.div
      ref={containerRef}
      className="bg-[#090909] flex justify-center p-6 rounded-lg text-center w-full max-w-md mx-auto relative h-[320px]"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Center Icon */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        animate={{ top: expanded ? 100 : 80 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <div className="bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center">
          <RiFootballLine className="text-white" />
        </div>
      </motion.div>

      {/* User Icons Around the Ball */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {expanded &&
            userPositions.map((pos, i) => (
              <motion.div
                key={i}
                style={{
                  top: pos.top,
                  left: pos.left,
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
                custom={i}
                variants={userVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <FaUserCircle className="text-green-400 text-xl" />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Title & Description */}
      <div className="absolute bottom-6 w-full text-center px-4">
        <h3 className="text-xl font-semibold text-white">Pick Your Squad</h3>
        <p className="text-gray-400 text-[12px] mt-1 leading-relaxed">
          Build your dream team by handpicking top ballers
          <br />
          for your ultimate fantasy league squad!
        </p>
      </div>
    </motion.div>
  );
};

export default Pickyoursquad;
