import React from "react";

const MarqueeBanner = () => {
  return (
    <div className="overflow-hidden bg-[#06FF8B] border-10 border-[#06FF8B] text-black py-4 text-center mx-5 mb-4">
      <div className="relative w-full">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {/* Duplicate enough content to ensure seamless scroll */}
          {Array(6).fill(
            <h2 className="text-3xl md:text-6xl font-diaclone-expanded-italic px-8">
              ULTIMATE BALLER-LEAGUE FANTASY
            </h2>
          )}
        </div>
      </div>

      {/* Inline animation style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MarqueeBanner;
