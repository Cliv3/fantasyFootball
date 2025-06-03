import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";

const Pickyoursquad = () => {
  const [step, setStep] = useState(0);

  // Control the looped steps
  useEffect(() => {
    let timeouts = [];

    // Step 0: Reset
    if (step === 0) {
      timeouts.push(setTimeout(() => setStep(1), 500)); // Ball drop
    }

    // Step 1: Ball dropped, show users
    if (step === 1) {
      timeouts.push(setTimeout(() => setStep(2), 2500)); // Show users
    }

    // Step 2: All shown, wait before reset
    if (step === 2) {
      timeouts.push(setTimeout(() => setStep(0), 3000)); // Restart
    }

    return () => timeouts.forEach(clearTimeout);
  }, [step]);

  return (
    <div className="bg-[#090909] flex flex-col items-center justify-center text-center
     p-6 rounded-lg w-full max-w-md mx-auto relative h-[320px] overflow-hidden">
      
      {/* Ball Icon Animation */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            key="ball"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center">
              <RiFootballLine className="text-white text-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Icons - 2 rows of 3 */}
      <AnimatePresence>
        {step === 2 && (
          <motion.div
            key="users"
            className="grid grid-cols-3 gap-10 mb-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <FaUserCircle className="text-green-400 text-2xl" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text */}
      <div className="text-center absolute bottom-6 w-full px-4">
        <h3 className="text-xl font-semibold text-white">Pick Your Squad</h3>
        <p className="text-gray-400 text-[12px] mt-1 leading-relaxed">
          Build your dream team by handpicking top ballers
          <br />
          for your ultimate fantasy league squad!
        </p>
      </div>
    </div>
  );
};

export default Pickyoursquad;
