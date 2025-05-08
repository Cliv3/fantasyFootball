import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import CreateYourClubCard from "./CreateYourClubCard";
import Pickyoursquad from "./Pickyoursquad";
import Settactics from "./Settactics";
import Playandwin from "./Playandwin";

const Howtoplay = () => {

  return (
    <section
      className="bg-black text-white py-16 px-4"
      
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-diacloneRegular flex items-center justify-center gap-2">
          <span>★</span> HOW TO PLAY <span>★</span>
        </h2>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Animated CreateYourClub card first */}
        <CreateYourClubCard />
        <Pickyoursquad />
        <Settactics />
        <Playandwin />

        {/* Other steps */}

      
      </div>
    </section>
  );
};

export default Howtoplay;
