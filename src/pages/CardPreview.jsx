import React from 'react';
import html2canvas from 'html2canvas';
import { Camera, Download } from 'lucide-react';
import { useCard } from '../CardContext'; // Context hook
import { ArrowLeft } from 'lucide-react';


const CardPreview = () => {
  const { cardData } = useCard();

  if (!cardData) {
    return <div className="text-white text-center mt-20">No card data available</div>;
  }

  const downloadCard = async () => {
    const card = document.getElementById('card-preview');
    if (card) {
      try {
        const canvas = await html2canvas(card, {
          backgroundColor: null,
          scale: 2,
          useCORS: true,
        });
        const link = document.createElement('a');
        link.download = `${cardData.fullName || 'fantasy-card'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error generating card:', error);
      }
    }
  };

  const getPositionStyles = () => {
    switch (cardData.position) {
      case 'GK':
        return { gradient: 'from-blue-600 via-blue-500 to-blue-700', badge: 'bg-yellow-400 text-blue-900' };
      case 'DEF':
        return { gradient: 'from-red-600 via-red-500 to-red-700', badge: 'bg-yellow-400 text-red-900' };
      case 'MID':
        return { gradient: 'from-green-600 via-green-500 to-green-700', badge: 'bg-yellow-400 text-green-900' };
      case 'FWD':
        return { gradient: 'from-purple-600 via-purple-500 to-purple-700', badge: 'bg-yellow-400 text-purple-900' };
      default:
        return { gradient: 'from-gray-600 via-gray-500 to-gray-700', badge: 'bg-gray-400 text-gray-900' };
    }
  };

  const getTeamLogo = () => {
    const logos = {
      'Red Fury': '🔥',
      'Blue Hawks': '🦅',
      'Golden Strikers': '⚡',
      'Shadow Wolves': '🐺',
    };
    return logos[cardData.team] || '⭐';
  };

  const positionStyles = getPositionStyles();

  return (
    <div className="min-h-screen bg-black border-8 border-[#06FF8B] text-white p-6 flex flex-col items-center justify-center">
        <div className=" self-start mb-4">
            <button
                onClick={() => window.history.back()}
                className="text-white text-sm bg-black border-2 border-[#06FF8B] px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
            >
                <ArrowLeft className="h-4 w-4" />
                Back
            </button>
        </div>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-[#06FF8B] bg-clip-text text-transparent mb-2">Your Fantasy Card</h1>
        <p className="text-lg text-white/80">Download and share your custom card!</p>
      </div>

      {/* Card Preview Box */}
      <div
        id="card-preview"
        className={`w-[320px] h-[480px] bg-gradient-to-br ${positionStyles.gradient} rounded-2xl shadow-2xl relative overflow-hidden mb-6`}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-30 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30l30-30v60l-30-30zm0 0l-30 30V0l30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Top icons */}
        {cardData.team && (
          <div className="absolute top-4 right-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
            {getTeamLogo()}
          </div>
        )}
        {cardData.position && (
          <div className={`absolute top-4 left-4 ${positionStyles.badge} px-3 py-1 rounded-lg font-bold text-sm shadow-lg`}>
            {cardData.position}
          </div>
        )}

        {/* Avatar */}
        <div className="flex justify-center mt-16 mb-4">
          {cardData.image ? (
            <div className="relative">
              <img
                src={cardData.image}
                alt="Player"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/80 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center">
              <Camera className="h-12 w-12 text-white/60" />
            </div>
          )}
        </div>

        {/* Full Name */}
        <div className="text-center px-6 mb-1">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {cardData.fullName || 'Player Name'}
          </h3>
        </div>

        {/* Position + Team */}
        <div className="text-center px-6 mb-2">
          <p className="text-white/90 font-medium text-sm drop-shadow">
            {cardData.position && cardData.team
              ? `${cardData.position} • ${cardData.team}`
              : cardData.position || cardData.team}
          </p>
        </div>

        {/* Email + Instagram Handle */}
        <div className="text-center px-6 space-y-1 text-white/80 text-xs">
          <p>{cardData.email}</p>
          <p>@{cardData.instagramHandle}</p>
        </div>

        {/* Footer badge */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="bg-white/10 backdrop-blur-sm mx-6 py-2 rounded-lg">
            <p className="text-white/80 font-semibold text-sm">FANTASY LEAGUE 2024</p>
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-2 left-2 text-6xl opacity-10 font-bold text-white">
          {cardData.position || '★'}
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadCard}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center gap-2 shadow-lg"
      >
        <Download className="h-5 w-5" />
        Download PNG
      </button>
       {/* Encouragement Text */}
       <p className="mt-4 text-white/70 text-sm text-center">
        Tag us on Instagram <span className="text-[#06FF8B] font-semibold">@ourhandle</span> to be featured!
      </p>
    </div>
  );
};

export default CardPreview;
