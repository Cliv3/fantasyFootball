// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import playerImage from "../assets/image/playerImg.png";
// import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const PrevArrow = ({ onClick }) => (
//   <TfiArrowCircleLeft
//     size={30}
//     onClick={onClick}
//     className="absolute left-[-2rem] md:left-[-3rem] top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10"
//   />
// );

// const NextArrow = ({ onClick }) => (
//   <TfiArrowCircleRight
//     size={30}
//     onClick={onClick}
//     className="absolute right-[-2rem] md:right-[-3rem] top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10"
//   />
// );

// const Topplayer = () => {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     const fetchPlayers = async () => {
//       try {
//         const response = await fetch(
//           "https://baller-fantasy.onrender.com/api/fantasy_players?page=1&per_page=100"
//         );
//         const data = await response.json();
//         setPlayers(data || []);
//       } catch (error) {
//         console.error("Failed to fetch players:", error);
//       }
//     };

//     fetchPlayers();
//   }, []);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="bg-black px-4 text-white relative">
//       <div className="flex justify-center items-center text-center mb-8 relative z-10">
//         <h2 className="flex justify-center items-center text-7xl md:text-[150px] lg:text-[150px] font-diaclone-3d opacity-5 uppercase leading-none">
//           Meet the best
//         </h2>
//         <h3 className=" bg-black shadow-black  text-white mb-4 text-[24px] top-10 md:text-[40px] 
//         lg:text-[60px] font-diacloneRegular uppercase absolute md:top-20 lg:top-26 tracking-wider">
//           ★ Players ★
//         </h3>
//       </div>

//       <div className="relative max-w-6xl mx-auto px-4">
//         <Slider {...settings}>
//           {players.map((player, index) => (
//             <div key={index} className="px-2">
//               <div className="bg-neutral-900 border border-gray-700 p-4 rounded-lg text-white">
//                 <div className="flex justify-between items-start mb-2">
//                   <span className="bg-gray-800 px-3 py-1 text-xs">
//                     {player.player_position || "Unknown"}
//                   </span>
//                   <div className="text-right">
//                     <h4 className="text-sm font-semibold">
//                       {player.player_name?.split(" ")[0] || "Unknown"}
//                     </h4>
//                     <p className="text-xs text-gray-400 uppercase font-bold">
//                       {player.player_name?.split(" ")[1] || ""}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex justify-center my-4">
//                   <img
//                     src={
//                       player.player_img && !player.player_img.includes("no.gif")
//                         ? `https://ballerleague.uk${player.player_img}`
//                         : playerImage
//                     }
//                     alt={player.player_name}
//                     className="w-28 h-28 object-contain"
//                   />
//                 </div>
//                 <div className="grid grid-cols-3 text-center mb-4 gap-2">
//                   <div className="bg-gray-800 py-2 rounded">
//                     <p className="text-xs text-gray-400">Apps</p>
//                     <p className="text-lg">{player.appearances || 0}</p>
//                   </div>
//                   <div className="bg-gray-800 py-2 rounded">
//                     <p className="text-xs text-gray-400">Goals</p>
//                     <p className="text-lg">{player.goals || 0}</p>
//                   </div>
//                   <div className="bg-gray-800 py-2 rounded">
//                     <p className="text-xs text-gray-400">Assists</p>
//                     <p className="text-lg">{player.assists || 0}</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between text-sm mb-3">
//                   {/* <p>£{player.price || "0"}</p>
//                   <div className="text-right">
//                     <p className="text-xs text-gray-400">Fantasy Pts</p>
//                     <p className="text-green-500 text-lg font-bold">
//                       {player.fantasy_points || 0}
//                     </p>
//                   </div> */}
//                 </div>
//                 <a
//                   href={player.player_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full block text-center py-2 bg-[#06FF8B] text-black font-bold rounded hover:bg-green-600 transition"
//                 >
//                   View Player
//                 </a>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <h2 className="flex justify-center items-center text-7xl md:text-[70px] lg:text-[150px] font-diaclone-3d opacity-5 uppercase leading-none">
//         Of the best
//       </h2>
//     </section>
//   );
// };

// export default Topplayer;


import React from "react";
import Slider from "react-slick";
import playerImage from "../assets/image/playerImg.png";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const players = Array(6).fill({
  name: "David Lumen",
  position: "Midfielder",
  apps: 1,
  goals: 7,
  assists: 5,
  price: "£120,000",
  fantasyPoints: 10,
  image: playerImage,
});

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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-black px-4 text-white relative pt-10 pb-20 overflow-hidden">
      {/* Background Title */}
      <div className="text-center mb-4 relative z-10">
        <h2 className="text-6xl md:text-[150px] font-diaclone-3d opacity-5 uppercase leading-none">
          Meet the best
        </h2>
        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] text-white text-[24px] md:text-[40px] font-diacloneRegular uppercase tracking-wider z-20">
          ★ Top Players ★
        </h3>
      </div>

      {/* Slider */}
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
                    <h4 className="text-sm font-semibold">{player.name.split(" ")[0]}</h4>
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

      {/* Ending Background Title */}
      <h2 className="text-6xl md:text-[150px] font-diaclone-3d opacity-5 uppercase text-center mt-10">
        Of the best
      </h2>
    </section>
  );
};

export default Topplayer;

