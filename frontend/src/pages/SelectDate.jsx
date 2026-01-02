import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import experiences from "../data/experiences";
import BackButton from "../components/BackButton"; // ✅ import back button

const SelectDate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

  const experience = experiences.find((exp) => exp.id === parseInt(id));

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Experience not found.
      </div>
    );
  }

  // ✅ Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const handleContinue = () => {
    if (!selectedDate) {
      alert("Please select a date before continuing!");
      return;
    }
    navigate(`/select-time/${id}`, { state: { selectedDate } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row gap-6 p-6 relative">
      {/* 🔙 Back Button (above booking box) */}
      <div className="absolute -top-4 left-4 z-10">
        <BackButton className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow hover:bg-white transition" />
      </div>

      {/* Left - Experience Info */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-semibold mt-4">{experience.title}</h2>
        <p className="text-gray-600">{experience.location}</p>
        <p className="text-gray-700 mt-2">{experience.description}</p>
      </div>

      {/* Right - Date Selection */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-6 flex flex-col relative">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Select Date</h3>

        <input
          type="date"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={today} // disables past dates
        />

        <div className="border-t border-gray-200 my-4"></div>

        <div className="text-gray-700 space-y-1 mb-4">
          <p className="flex justify-between">
            <span>Price:</span> <span>₹{experience.price}</span>
          </p>
          <p className="flex justify-between">
            <span>Taxes:</span> <span>₹{Math.round(experience.price * 0.1)}</span>
          </p>
          <p className="flex justify-between font-semibold">
            <span>Total:</span>{" "}
            <span>₹{experience.price + Math.round(experience.price * 0.1)}</span>
          </p>
        </div>

        <button
          onClick={handleContinue}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectDate;
