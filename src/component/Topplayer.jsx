import React from "react";
import Slider from "react-slick";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import player images
import Max from "../assets/image/Max.png";
import Remy from "../assets/image/Remy.png";
import Micheal from "../assets/image/Micheal.png";
import Kadell from "../assets/image/Kadell.png";
import Medy from "../assets/image/Medy.png";
import Mohammed from "../assets/image/Mohammed.png";
import Henry from "../assets/image/Henry.png";
import Harry from "../assets/image/Harry.png";
import Pique from "../assets/image/Pique.png";
import Tyler from "../assets/image/Tyler.png";
import Daniel from "../assets/image/Daniel.png";



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
    name: "Max Pitman",
    position: "Goalkeeper",
    apps: 8,
    goals: 2,
    assists: 1,
    price: "£9.0M",
    fantasyPoints: 1,
    image: Max
  },
  {
    name: "Micheal Heactor",
    position: "Defender",
    apps: 3,
    goals: 0,
    assists: 2,
    price: "£10.5M",
    fantasyPoints: 3,
    image: Micheal,
  },
  {
    name: "Remy Clerima",
    position: "Defender",
    apps: 5,
    goals: 2,
    assists: 3,
    price: "£5.0M",
    fantasyPoints: 20,
    image: Remy,
  },
  {
    name: "Kadell Daniel",
    position: "Striker",
    apps: 0,
    goals: 0,
    assists: 0,
    price: "£5.5M",
    fantasyPoints: 45,
    image: Kadell,
  },
  {
    name: "Mohammed Mayhoub",
    position: "Striker",
    apps: 5,
    goals: 3,
    assists: 1,
    price: "£6.5M",
    fantasyPoints: 11,
    image: Mohammed,
  },
  {
    name: "Medy Elito",
    position: "Midfielder",
    apps: 7,
    goals: 0,
    assists: 2,
    price: "£6.5M",
    fantasyPoints: 10,
    image: Medy,
  },
  {
    name: "Harry Cain",
    position: "Midfielder",
    apps: 5,
    goals: 4,
    assists: 2,
    price: "£6.5M",
    fantasyPoints: 7,
    image: Harry,
  },
  {
    name: "Pique Humble",
    position: "Defender",
    apps: 7,
    goals: 6,
    assists: 2,
    price: "£6.5M",
    fantasyPoints: 17,
    image: Pique,
  },
  {
    name: "Henry Ochieng",
    position: "Midfielder",
    apps: 8,
    goals: 2,
    assists: 2,
    price: "£6.5M",
    fantasyPoints: 4,
    image: Henry,
  },
  {
    name: "Tyler Winters",
    position: "Striker",
    apps: 8,
    goals: 11,
    assists: 3,
    price: "£6.5M",
    fantasyPoints: 99,
    image: Tyler,
  },
  {
    name: "Daniel Thompson",
    position: "Striker",
    apps: 4,
    goals: 0,
    assists: 2,
    price: "£6.5M",
    fantasyPoints: 36,
    image: Daniel,
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
