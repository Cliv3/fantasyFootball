import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

const CustomizedCard = () => {
  const [userInfo, setUserInfo] = useState({});
  const [cardData, setCardData] = useState({
    displayName: '',
    position: '',
    team: '',
    background: '',
    image: null,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(saved || {});
  }, []);

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setCardData({ ...cardData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const downloadCard = () => {
    const card = document.getElementById('card-preview');
    html2canvas(card).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'fantasy-card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Customize Your Player Card</h2>

      <div className="space-y-4 w-full max-w-md text-white">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full"
        />
        <input
          name="displayName"
          placeholder="Display Name"
          value={cardData.displayName}
          onChange={handleChange}
          className="w-full p-2 rounded "
        />
        <select
          name="position"
          onChange={handleChange}
          className="w-full p-2 rounded bg-black"
        >
          <option value="">Select Position</option>
          <option value="GK">Goalkeeper</option>
          <option value="DEF">Defender</option>
          <option value="MID">Midfielder</option>
          <option value="FWD">Forward</option>
        </select>
        <select
          name="team"
          onChange={handleChange}
          className="w-full p-2 rounded bg-black" 
        >
          <option value="">Select Team</option>
          <option value="Red Fury">Red Fury</option>
          <option value="Blue Hawks">Blue Hawks</option>
          <option value="Golden Strikers">Golden Strikers</option>
          <option value="Shadow Wolves">Shadow Wolves</option>
        </select>
      </div>

      {/* Preview */}
      <div id="card-preview" className="mt-10 w-[300px] h-[400px] bg-white text-black rounded-lg shadow-lg p-4 relative text-center">
        {cardData.image && (
          <img src={cardData.image} alt="Uploaded" className="w-24 h-24 rounded-full mx-auto mb-2 object-cover" />
        )}
        <h3 className="text-xl font-bold">{cardData.displayName}</h3>
        <p>{cardData.position} - {cardData.team}</p>
        <p className="text-sm mt-2 text-gray-600">Fantasy Baller League</p>
      </div>

      <button
        onClick={downloadCard}
        className="mt-6 bg-[#06FF8B] text-black px-6 py-2 rounded-full font-semibold"
      >
        Download PNG
      </button>

      <p className="text-green-400 text-sm mt-2">Tag us @yourhandle on Instagram to be featured!</p>
    </div>
  );
};

export default CustomizedCard;
