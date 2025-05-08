import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Humble from "../assets/image/Humble.png";
import Sharky from "../assets/image/Sharky.png";
import Terry from "../assets/image/Terry.png";
import Clint from "../assets/image/Clint.png";
import Ethan from "../assets/image/Ethan.png";

const cards = [Humble, Sharky, Terry, Clint, Ethan];

const StackedCards = () => {
  const controls = useAnimation();

  useEffect(() => {
    async function runAnimation() {
      // Step 1: Slide in from bottom
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });

      // Step 2: Spread out
      controls.start((i) => ({
        x: i * 4,
        y: i * 4,
        rotate: i * 2,
        transition: { duration: 0.8, delay: i * 0.1 },
      }));
    }

    runAnimation();
  }, [controls]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      className="relative w-[180px] h-[260px] mx-auto"
    >
      {cards.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          custom={i}
          className="absolute top-0 left-0 w-full rounded-lg shadow-lg"
          style={{ zIndex: cards.length - i }}
        />
      ))}
    </motion.div>
  );
};

export default StackedCards;
