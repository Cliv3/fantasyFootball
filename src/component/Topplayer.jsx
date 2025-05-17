import React from "react";
import Slider from "react-slick";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import player images
import playerImg1 from "../assets/image/playerImg1.png";
import playerImg2 from "../assets/image/playerImg2.png";
import playerImg3 from "../assets/image/playerImg3.png";
import playerImg4 from "../assets/image/playerImg4.png";
import playerImg5 from "../assets/image/playerImg5.png";

const PrevArrow = ({ onClick }) => (
  <TfiArrowCircleLeft
    size={30}
    onClick={onClick}
    className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10 hidden md:block"
  />
);

const NextArrow = ({ onClick }) => (
  <TfiArrowCircleRight
    size={30}
    onClick={onClick}
    className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10 hidden md:block"
  />
);

const players = [
  {
    name: "Marcus Rashford",
    position: "Forward",
    apps: 28,
    goals: 14,
    assists: 6,
    price: "£9.0M",
    fantasyPoints: 98,
    image: playerImg2,
  },
  {
    name: "Bruno Fernandes",
    position: "Midfielder",
    apps: 30,
    goals: 10,
    assists: 9,
    price: "£10.5M",
    fantasyPoints: 110,
    image: playerImg3,
  },
  {
    name: "Lisandro Martinez",
    position: "Defender",
    apps: 25,
    goals: 2,
    assists: 1,
    price: "£5.0M",
    fantasyPoints: 72,
    image: playerImg5,
  },
  {
    name: "André Onana",
    position: "Goalkeeper",
    apps: 32,
    goals: 0,
    assists: 0,
    price: "£5.5M",
    fantasyPoints: 84,
    image: playerImg4,
  },
  {
    name: "Casemiro",
    position: "Midfielder",
    apps: 27,
    goals: 3,
    assists: 4,
    price: "£6.5M",
    fantasyPoints: 77,
    image: playerImg1
  },
];

const Topplayer = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-black px-4 text-white relative pt-10 pb-20 overflow-hidden">
      <div className="text-center mb-4 relative z-10">
        <h2 className="text-6xl md:text-[150px] font-diaclone-3d opacity-5 uppercase leading-none">
          Meet the best
        </h2>
        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] text-white text-[24px] md:text-[40px] font-diacloneRegular uppercase tracking-wider z-20">
          ★ Top Players ★
        </h3>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 z-20">
        <Slider {...settings}>
          {players.map((player, index) => (
            <motion.div
              key={index}
              className="px-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-neutral-900 border border-gray-700 p-4 rounded-lg text-white shadow-md hover:shadow-green-600/20 transition">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-gray-800 px-3 py-1 text-xs rounded-full">
                    {player.position}
                  </span>
                  <div className="text-right">
                    <h4 className="text-sm font-semibold">
                      {player.name.split(" ")[0]}
                    </h4>
                    <p className="text-xs text-gray-400 uppercase font-bold">
                      {player.name.split(" ")[1]}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="grid grid-cols-3 text-center mb-4 gap-2">
                  <div className="bg-gray-800 py-2 rounded">
                    <p className="text-xs text-gray-400">Apps</p>
                    <p className="text-lg">{player.apps}</p>
                  </div>
                  <div className="bg-gray-800 py-2 rounded">
                    <p className="text-xs text-gray-400">Goals</p>
                    <p className="text-lg">{player.goals}</p>
                  </div>
                  <div className="bg-gray-800 py-2 rounded">
                    <p className="text-xs text-gray-400">Assists</p>
                    <p className="text-lg">{player.assists}</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <p>{player.price}</p>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Fantasy Pts</p>
                    <p className="text-green-500 text-lg font-bold">
                      {player.fantasyPoints}
                    </p>
                  </div>
                </div>
                <button className="w-full py-2 bg-[#06FF8B] text-black font-bold rounded hover:bg-green-600 transition">
                  View Player
                </button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      <h2 className="text-6xl md:text-[150px] font-diaclone-3d opacity-5 uppercase text-center mt-10">
        Of the best
      </h2>
    </section>
  );
};

export default Topplayer;
