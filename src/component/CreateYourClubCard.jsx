import React, { useState, useEffect } from "react";
import { RiFootballLine } from "react-icons/ri";
import { motion } from "framer-motion";

const CreateYourClubCard = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="bg-[#090909] flex justify-center p-6 rounded-lg text-center w-full max-w-md mx-auto relative h-[320px]"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Animated Area */}
      <motion.div
        key={animationKey}
        className="flex flex-col items-center justify-center absolute top-[100px] left-1/2 transform -translate-x-1/2"
        initial="collapsed"
        animate="expanded"
        variants={{
          collapsed: { gap: 0 },
          expanded: { gap: 10 },
        }}
      >
        <div className="flex items-center gap-4">
          {/* Input bar (Left) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800 h-8 w-24 rounded-md"
          />

          {/* Icon (Center) */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center"
          >
            <RiFootballLine className="text-white" />
          </motion.div>

          {/* Progress Bar (Right) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-1"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-1 bg-green-400 rounded-sm"
                style={{ opacity: (i + 1) / 10 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Title & Description */}
      <div className="absolute bottom-6 w-full text-center px-4">
        <h3 className="text-xl font-semibold text-white">Create Your Club</h3>
        <p className="text-gray-400 text-[12px] mt-1 leading-relaxed">
          Pick a killer club name and customize your preferences <br />
          to kick off your fantasy journey!
        </p>
      </div>
    </motion.div>
  );
};

export default CreateYourClubCard;
