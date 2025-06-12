import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCard } from '../CardContext';
import { Upload } from 'lucide-react';
import { ArrowLeft } from "lucide-react";

const CardForm = () => {
  const { cardData, setCardData } = useCard();
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    if (
      cardData?.fullName &&
      cardData?.email &&
      cardData?.instagramHandle &&
      cardData?.position &&
      cardData?.team &&
      cardData?.image
    ) {
      navigate('/cardpreview');
    } else {
      alert('Please fill in all fields and upload a photo.');
    }
  };

  const isDisabled = !(
    cardData?.fullName &&
    cardData?.email &&
    cardData?.instagramHandle &&
    cardData?.position &&
    cardData?.team &&
    cardData?.image
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
        <div className="mb-4">
            <button
                onClick={() => navigate(-1)}
                className="text-white text-sm bg-black border-2 border-[#06FF8B] px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
            >
                <ArrowLeft className="h-4 w-4" />
                Back
            </button>
        </div>

      <div className="max-w-xl mx-auto bg-gray-900 border border-[#06FF8B] p-6 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#06FF8B]">
          Create Your Fantasy Card
        </h2>

        <div className="space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block text-sm mb-1">Player Photo</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
            <label htmlFor="image-upload" className="flex justify-center items-center border border-[#06FF8B] p-3 rounded-xl cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              {cardData.image ? 'Change Photo' : 'Upload Photo'}
            </label>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              required
              type="text"
              name="fullName"
              value={cardData.fullName || ''}
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg text-white border border-gray-700 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">E-mail</label>
            <input
              required
              type="email"
              name="email"
              value={cardData.email || ''}
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg text-white border border-gray-700 focus:outline-none"
            />
          </div>

          {/* Instagram Handle */}
          <div>
            <label className="block text-sm mb-1">Instagram Handle</label>
            <input
              required
              type="text"
              name="instagramHandle"
              value={cardData.instagramHandle || ''}
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg text-white border border-gray-700 focus:outline-none"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm mb-1">Position</label>
            <select
              name="position"
              value={cardData.position || ''}
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg text-white border border-gray-700"
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
            <label className="block text-sm mb-1">Team</label>
            <select
              name="team"
              value={cardData.team || ''}
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg text-white border border-gray-700"
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

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isDisabled}
            className={`w-full py-3 rounded-xl font-bold transition ${
              isDisabled
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-[#06FF8B] text-black hover:bg-green-400 cursor-pointer'
            }`}
          >
            Create Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
