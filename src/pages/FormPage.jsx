import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    instagram: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(formData));
    navigate("/customize");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black border-8 border-[#06FF8B] px-4">

      <h1 className="text-3xl sm:text-4xl font-bold text-green-500">
        Fantasy Baller League
      </h1>
      <p className="text-green-400 mt-2 max-w-md text-center">
        Submit your details and build your ultimate fantasy player card.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border border-green-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          name="email"
          placeholder="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-green-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          name="instagram"
          placeholder="Instagram Handle"
          value={formData.instagram}
          onChange={handleChange}
          required
          className="w-full border border-green-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Submit Button */}
        <Link to='/customizedcard'>
                <button
                type="submit"
                className="w-full bg-[#06FF8B] text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-[#06FF8B] transition"
                >
                Next <ArrowRight className="w-4 h-4" />
                </button>
        </Link>
      </form>
    </div>
  );
};

export default FormPage;
