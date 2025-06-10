import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#06FF8B] text-black text-center px-4 pt-10 pb-4">
      {/* Main Title */}
      <h2 className="text-4xl md:text-[80px] lg:text-[100px] font-diaclone-spaced font-black tracking-wider mb-10">
        FANTASY BALLER LEAGUE
      </h2> 

     {/* Social Links */}
<div className="flex flex-col items-center md:flex  gap-4 md:gap-6 mb-10">
  {/* Follow + Social Links Row */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-3">
    <span className="font-medium whitespace-nowrap">FOLLOW US</span>

    <a
      href="#"
      className="border border-black px-4 py-2 font-medium hover:bg-black hover:text-[#00FF7F] transition text-sm"
    >
      INSTAGRAM
    </a>
    <a
      href="#"
      className="border border-black px-4 py-2 font-medium hover:bg-black hover:text-[#00FF7F] transition text-sm"
    >
      DISCORD
    </a>
    <a
      href="#"
      className="border border-black px-4 py-2 font-medium hover:bg-black hover:text-[#00FF7F] transition text-sm"
    >
      TWITTER
    </a>
  </div>

  {/* Back to Top Link */}
  <a
    href="#"
    className="font-diacloneRegular tracking-wide text-lg md:text-xl underline"
  >
    BACK TO TOP
  </a>
</div>


      {/* Motto Section */}
      <div className="bg-black text-[#06FF8B] font-semibold py-4 text-sm md:text-base">
        THE UNOFFICIAL FANTASY GAME, MADE BY THE STREETS FOR THE STREETS
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-black mt-4 max-w-4xl mx-auto leading-relaxed">
        Disclaimer: This platform is an independent, unofficial fantasy football experience
        created by fans for fans. It is not affiliated with, endorsed by, or connected to the
        Ballers League, its clubs, players, or any of its official partners. All player names and
        statistics used are based on publicly available information and are used purely for the
        purpose of gameplay.
      </p>
      <div className="flex justify-center items-center gap-4 text-xs underline mt-2 cursor-pointer">
        <p><a href="/termsandcondition">Terms and Conditions</a></p>
        <p><a href="/privacypolicy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
