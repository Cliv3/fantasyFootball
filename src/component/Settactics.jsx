import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";

const Settactics = () => {
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
    const updateCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCenterX(rect.width / 2);
      }
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  const userVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 400 },
    }),
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
  };

  const radius = 70;
  const centerY = 120;
  const userCount = 6;

  const userPositions = Array.from({ length: userCount }, (_, i) => {
    const angle = (i / userCount) * 2 * Math.PI - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { left: x, top: y };
  });

  return (
    <motion.div
      ref={containerRef}
      className="bg-[#090909] p-6 rounded-lg text-center w-full max-w-md mx-auto relative h-[320px] overflow-hidden"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Center Ball Icon */}
      <motion.div className="absolute left-1/2 top-[140px] transform -translate-x-1/2 -translate-y-1/2 z-10">
        <RiFootballLine className="text-green-500 text-3xl" />
      </motion.div>

      {/* Circular Positioned User Icons */}
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
                <FaUserCircle className="text-white text-xl" />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 left-0 right-0 px-4 text-center">
        <h3 className="text-xl font-semibold text-white">Set Your Tactics</h3>
        <p className="text-gray-400 text-[12px] mt-1 leading-snug">
          Choose your formation, position your players,
          <br />
          and call the shots like the boss you are—you're the coach now!
        </p>
      </div>
    </motion.div>
  );
};

export default Settactics;
