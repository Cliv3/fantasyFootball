import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Humble from "../assets/image/Humble1.png";
import Sharky from "../assets/image/Sharky2.png";
import Terry from "../assets/image/Terry1.png";
import Clint from "../assets/image/Clint1.png";
import Ethan from "../assets/image/Ethan1.png";

const fullCards = [Ethan, Clint, Humble, Terry, Sharky];

const StackedCards = () => {
  const controls = useAnimation();
  const [cards, setCards] = useState(fullCards);

  useEffect(() => {
    // Adjust number of visible cards based on screen width
    const updateCardCount = () => {
      if (window.innerWidth < 768) {
        setCards(fullCards.slice(-3)); // Show last 3 cards for small screens
      } else {
        setCards(fullCards);
      }
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);

  useEffect(() => {
    async function runAnimation() {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      });

      setTimeout(() => {
        controls.start((i) => {
          const centerIndex = cards.length - 1;
          const offset = centerIndex - i;
          const direction = offset % 2 === 0 ? 1 : -1;
          const spreadDistance = Math.ceil(offset / 2) * 120 * direction;
          const rotate = Math.ceil(offset / 2) * 6 * direction;
          const vertical = Math.abs(offset) * 8;

          return {
            x: offset === 0 ? 0 : spreadDistance,
            y: vertical,
            rotate: offset === 0 ? 0 : rotate,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              delay: i * 0.1,
            },
          };
        });
      }, 5000);
    }

    runAnimation();
  }, [controls, cards]);

  return (
    <div className="relative mx-auto w-[180px] h-[220px] sm:w-[200px] sm:h-[250px] md:w-[240px] md:h-[300px] lg:w-[280px] lg:h-[350px]">
      {cards.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          custom={i}
          initial={{ y: 100, opacity: 0, x: 0, rotate: 0 }}
          animate={controls}
          className="absolute top-0 left-0 w-full h-auto sm:ml-20 max-w-[80%] sm:max-w-[85%] md:max-w-full rounded-lg shadow-xl object-contain"
          style={{ zIndex: i }}
        />
      ))}
    </div>
  );
};

export default StackedCards;
