import React from "react";
import { Camera, Star, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Camera className="w-8 h-8 text-green-600" />,
    title: "Take Your Photo",
    description: "Capture your best shot for your player card",
  },
  {
    icon: <Star className="w-8 h-8 text-green-600" />,
    title: "Generate Your Card",
    description: "Get a FIFA Ultimate Team style player card",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Join the Event",
    description: "Be part of our fantasy football community",
  },
];

const CreateYourPlayerCard = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black border-8 border-[#06FF8B] px-4 text-center">
      {/* Back Button in Top-Left */}
      <div className="absolute top-4 left-4">
        <Link
          to="/"
          className="flex items-center bg-[#06FF8B] text-black text-sm md:text-lg py-2 px-4 rounded-md hover:bg-[#00FF7F] transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Link>
      </div>

      {/* Main Icon */}
      <div className="bg-green-100 rounded-full p-4 mb-4">
        <Camera className="w-8 h-8 text-green-600" />
      </div>

      {/* Heading and Subtext */}
      <h1 className="text-3xl sm:text-4xl font-bold text-green-500">Fantasy 6</h1>
      <p className="text-green-400 mt-2 max-w-xl mx-auto">
        Create your ultimate FIFA-style player card for our in-person fantasy football event
      </p>

      {/* Feature Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-4xl w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg"
          >
            {feature.icon}
            <h3 className="mt-4 text-lg font-semibold text-green-800">{feature.title}</h3>
            <p className="mt-2 text-sm text-green-700">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
        <Link to="/formpage">
            <button className="mt-10 bg-[#06FF8B] text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#06FF8B] transition">
                Create Your Player Card <ArrowRight className="w-4 h-4" />
            </button>
        </Link>
    </section>
  );
};

export default CreateYourPlayerCard;
