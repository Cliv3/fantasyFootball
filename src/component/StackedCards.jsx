import React from "react";
import { motion } from "framer-motion";
import Humble from "../assets/image/Humble.png";
import Sharky from "../assets/image/Sharky.png";
import Terry from "../assets/image/Terry.png";
import Clint from "../assets/image/Clint.png";
import Ethan from "../assets/image/Ethan.png";

const StackedCards = () => {
  const cards = [Humble, Sharky, Terry, Clint, Ethan];

  return (
    <div className="relative w-[180px] h-[260px] mx-auto">
      {cards.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`Stacked Card ${i + 1}`}
          className="absolute top-0 left-0 w-full rounded-lg shadow-lg"
          style={{
            zIndex: cards.length - i,
            transform: `translate(${i * 4}px, ${i * 4}px) rotate(${i * 2}deg)`,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        />
      ))}
    </div>
  );
};

export default StackedCards;
