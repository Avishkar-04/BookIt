import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import experiences from "../data/experiences";
import BackButton from "../components/BackButton";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get("date");
  const time = searchParams.get("time");

  const experience = experiences.find((exp) => exp.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Experience not found.
      </div>
    );
  }

  const subtotal = experience.price * quantity;
  const taxes = Math.round(subtotal * 0.1);
  const total = subtotal + taxes;

  // ✅ When user clicks "Pay and Confirm"
  const handlePayAndConfirm = () => {
    // 1️⃣ Create booking data object
    const booking = {
      experienceId: experience.id,
      title: experience.title,
      date,
      time,
      qty: quantity,
      total,
      image: experience.image,
      location: experience.location,
    };

    // 2️⃣ Get existing bookings from localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // 3️⃣ Add new booking
    existingBookings.push(booking);

    // 4️⃣ Save back to localStorage
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    // 5️⃣ Redirect to Booking Confirmed page
    navigate("/booking-confirmed");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row gap-6 p-6 relative">
      {/* 🔙 Back Button ABOVE Image */}
      <div className="absolute top-4 left-4 z-20">
        <BackButton />
      </div>

      {/* Left - Experience Info */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6 relative">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-semibold mt-4">{experience.title}</h2>
        <p className="text-gray-600">{experience.location}</p>
        <p className="text-gray-700 mt-2">{experience.description}</p>
      </div>

      {/* Right - Booking Summary */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Booking Summary
        </h3>

        <div className="space-y-3 mb-4">
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>

          <div className="flex items-center gap-2">
            <strong>Quantity:</strong>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <hr className="my-3" />

        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Subtotal:</strong> ₹{subtotal}
          </p>
          <p>
            <strong>Taxes:</strong> ₹{taxes}
          </p>
          <p className="font-semibold text-lg">Total: ₹{total}</p>
        </div>

        <button
          onClick={handlePayAndConfirm}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
        >
          Pay and Confirm
        </button>
      </div>
    </div>
  );
};

export default Checkout;
