import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { Download, Upload, Camera } from 'lucide-react';

// Import team logos from assets
import N5FC from '../assets/image/N5FC.svg';
import M7FC from '../assets/image/M7FC.svg';
import MVP from '../assets/image/MVPunited.svg';
import Santan from '../assets/image/Santan.svg';
import SDC from '../assets/image/SDC.svg';
import Trebol from '../assets/image/Trebol.svg';
import VZN from '../assets/image/VZN.svg';
import Wembley from '../assets/image/Wembley.svg';
import Yanited from '../assets/image/Yanited.svg';
import ers from '../assets/image/26ers.svg';
import Deportrio from '../assets/image/Deportrio.svg';
import FCRTW from '../assets/image/FCRTW.svg';

const CustomizedCard = () => {
  const [cardData, setCardData] = useState({
    displayName: '',
    position: '',
    team: '',
    image: null,
  });

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCardData({
        ...cardData,
        image: URL.createObjectURL(file),
      });
    }
  };

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
        link.download = `${cardData.displayName || 'fantasy-card'}.png`;
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
        return {
          gradient: 'from-blue-600 via-blue-500 to-blue-700',
          badge: 'bg-yellow-400 text-blue-900',
          pattern: 'text-blue-300/20',
        };
      case 'DEF':
        return {
          gradient: 'from-red-600 via-red-500 to-red-700',
          badge: 'bg-yellow-400 text-red-900',
          pattern: 'text-red-300/20',
        };
      case 'MID':
        return {
          gradient: 'from-green-600 via-green-500 to-green-700',
          badge: 'bg-yellow-400 text-green-900',
          pattern: 'text-green-300/20',
        };
      case 'FWD':
        return {
          gradient: 'from-purple-600 via-purple-500 to-purple-700',
          badge: 'bg-yellow-400 text-purple-900',
          pattern: 'text-purple-300/20',
        };
      default:
        return {
          gradient: 'from-gray-600 via-gray-500 to-gray-700',
          badge: 'bg-gray-400 text-gray-900',
          pattern: 'text-gray-300/20',
        };
    }
  };

  const getTeamLogo = () => {
    const logos = {
      'N5FC': N5FC,
      'M7FC': M7FC,
      'MVPunited': MVP,
      'Santan': Santan,
      'SDC': SDC,
      'Trebol': Trebol,
      'VZN': VZN,
      'Wembley': Wembley,
      'Yanited': Yanited,
      '26ers': ers,
      'Deportrio': Deportrio,
      'FCRTW': FCRTW,
    };
    return logos[cardData.team] || null;
  };

  const positionStyles = getPositionStyles();

  return (
    <div className="min-h-screen bg-black border-8 border-[#06FF8B] text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-[#06FF8B] bg-clip-text text-transparent mb-4">
            Fantasy Card Creator Pro
          </h1>
          <p className="text-xl text-white">Create professional fantasy cards like the pros</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="bg-black backdrop-blur-sm p-5 rounded-3xl border border-[#06FF8B] shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Customize Your Card</h2>
            <div className="space-y-3">
              {/* Image Upload */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2">Player Photo</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center w-full p-3 border-2 border-dashed border-[#06FF8B] rounded-xl cursor-pointer hover:border-white transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="mx-auto h-4 w-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-400">
                        {cardData.image ? 'Change Photo' : 'Upload Player Photo'}
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Player Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Player Name</label>
                <input
                  name="displayName"
                  placeholder="Enter player name"
                  value={cardData.displayName}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-medium mb-2">Position</label>
                <select
                  name="position"
                  value={cardData.position}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white"
                >
                  <option value="">Select Position</option>
                  <option value="GK">Goalkeeper</option>
                  <option value="DEF">Defender</option>
                  <option value="MID">Midfielder</option>
                  <option value="FWD">Forward</option>
                </select>
              </div>

              {/* Team */}
              <div>
                <label className="block text-sm font-medium mb-2">Team</label>
                <select
                  name="team"
                  value={cardData.team}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-white"
                >
                  <option value="">Select Team</option>
                  <option value="N5FC">N5FC</option>
                  <option value="M7FC">M7FC</option>
                  <option value="MVP United">MVP United</option>
                  <option value="Santan">Santan</option>
                  <option value="SDC">SDC</option>
                  <option value="Trebol">Trebol</option>
                  <option value="VZN">VZN</option>
                  <option value="Wembley">Wembley</option>
                  <option value="Yanited">Yanited</option>
                  <option value="26ers">26ers</option>
                  <option value="Deportrio">Deportrio</option>
                  <option value="FCRTW">FCRTW</option>
                </select>
              </div>

              {/* Download Button */}
              <button
                onClick={downloadCard}
                disabled={!cardData.displayName || !cardData.position}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="h-5 w-5" />
                Download Card
              </button>
            </div>
          </div>

          {/* Card Preview */}
          <div className="flex justify-center">
            <div
              id="card-preview"
              className={`w-[320px] h-[450px] bg-gradient-to-br ${positionStyles.gradient} rounded-2xl shadow-2xl relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-repeat" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30l30-30v60l-30-30zm0 0l-30 30V0l30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }} />
              </div>

              {/* Team Logo */}
              {cardData.team && getTeamLogo() && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                  <img
                    src={getTeamLogo()}
                    alt={cardData.team}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              )}

              {/* Position Badge */}
              {cardData.position && (
                <div className={`absolute top-4 left-4 ${positionStyles.badge} px-3 py-1 rounded-lg font-bold text-sm shadow-lg`}>
                  {cardData.position}
                </div>
              )}

              {/* Player Image */}
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

              {/* Player Name */}
              <div className="text-center px-6 mb-2">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {cardData.displayName || 'Player Name'}
                </h3>
              </div>

              {/* Position and Team */}
              {(cardData.position || cardData.team) && (
                <div className="text-center px-6 mb-6">
                  <p className="text-white/90 font-medium text-lg drop-shadow">
                    {cardData.position && cardData.team
                      ? `${cardData.position} • ${cardData.team}`
                      : cardData.position || cardData.team}
                  </p>
                </div>
              )}

              {/* Branding */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="bg-white/10 backdrop-blur-sm mx-6 py-2 rounded-lg">
                  <p className="text-white/80 font-semibold text-sm">
                    FANTASY LEAGUE 2024
                  </p>
                </div>
              </div>

              {/* Decoration */}
              <div className="absolute bottom-2 left-2 text-6xl opacity-10 font-bold text-white">
                {cardData.position || '★'}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400">
          <p>Create stunning fantasy cards and share them with your league!</p>
        </div>
      </div>
    </div>
  );
};

export default CustomizedCard;
