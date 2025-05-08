import React from "react";

const MarqueeBanner = () => {
  return (
    <div className="overflow-hidden bg-[#06FF8B] border-10 border-[#06FF8B] text-black py-4 text-center mx-5 mb-4">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animation: "marquee 80s linear infinite",
        }}
      >
        <h2 className="text-3xl md:text-6xl font-diaclone-expanded-italic px-4">
          ULTIMATE BALLER-LEAGUE FANTASY
        </h2>
        <h2 className="text-3xl md:text-6xl font-diaclone-expanded-italic px-4">
          ULTIMATE BALLER-LEAGUE FANTASY
        </h2>
        <h2 className="text-3xl md:text-6xl font-diaclone-expanded-italic px-4">
          ULTIMATE BALLER-LEAGUE FANTASY
        </h2>
      </div>

      {/* Inline style for marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default MarqueeBanner;
