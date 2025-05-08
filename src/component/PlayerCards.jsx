import React from "react";
import humble from "../assets/image/humble.png";
import terry from "../assets/image/terry.png";
import sharky from "../assets/image/sharky.png";
import clint from "../assets/image/clint.png";
import ethan from "../assets/image/ethan.png";

const players = [
  { name: "HUMBLE", image: humble, rotation: "-rotate-[10deg]", z: "z-10" },
  { name: "TERRY", image: terry, rotation: "-rotate-[5deg]", z: "z-20" },
  { name: "SHARKY", image: sharky, rotation: "rotate-0", z: "z-30" },
  { name: "CLINT", image: clint, rotation: "rotate-[5deg]", z: "z-20" },
  { name: "ETHAN", image: ethan, rotation: "rotate-[10deg]", z: "z-10" },
];

const PlayerCards = () => {
  return (
    <div className="w-full flex justify-center items-end py-10 overflow-x-hidden px-4">
      {players.map((player, index) => {
        // Hide first and last players on small & medium screens
        const isEdgePlayer = index === 0 || index === players.length - 1;
        const responsiveHide = isEdgePlayer ? "hidden lg:block" : "";

        return (
          <div
            key={index}
            className={`relative w-32 md:w-40 lg:w-48 transform ${player.rotation} ${player.z} -mx-6 transition-transform hover:scale-105 ${responsiveHide}`}
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerCards;
