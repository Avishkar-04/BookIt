import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import experiences from "../data/experiences";
import BackButton from "../components/BackButton";

const SelectTime = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedDate = location.state?.selectedDate || "";

  const [selectedTime, setSelectedTime] = useState("");

  const experience = experiences.find((exp) => exp.id === parseInt(id));

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Experience not found.
      </div>
    );
  }

  const handleConfirm = () => {
    if (!selectedTime) {
      alert("Please select a time before confirming!");
      return;
    }

    navigate(`/checkout/${id}?date=${selectedDate}&time=${selectedTime}`);
  };

  const availableTimes = [
    "06:00 AM",
    "08:00 AM",
    "10:00 AM",
    "12:00 PM",
    "03:00 PM",
    "05:00 PM",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row gap-6 p-6">
      {/* Left - Experience Info */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6 relative">
        {/* 🔙 Back Button (positioned above image on the left) */}
        <div className="absolute -top-4 left-4 z-20">
          <BackButton className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow hover:bg-white transition" />
        </div>

        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-semibold mt-4">{experience.title}</h2>
        <p className="text-gray-600">{experience.location}</p>
        <p className="text-gray-700 mt-2">{experience.description}</p>
      </div>

      {/* Right - Time Selection */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Select Time</h3>

        <div className="flex flex-col gap-3 mb-4">
          {availableTimes.map((time) => (
            <button
              key={time}
              className={`py-2 rounded-lg border transition ${
                selectedTime === time
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="text-gray-700 space-y-1 mb-4">
          <p className="flex justify-between">
            <span>Date:</span> <span>{selectedDate || "Not selected"}</span>
          </p>
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
          onClick={handleConfirm}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SelectTime;
