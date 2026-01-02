import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import experiences from "../data/experiences";
import { ArrowLeft } from "lucide-react";

const CheckoutDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [experience, setExperience] = useState(null);

  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const qty = Number(searchParams.get("qty")) || 1;

  useEffect(() => {
    const selected = experiences.find((item) => item.id === Number(id));
    setExperience(selected);
  }, [id]);

  if (!experience) {
    return (
      <div className="text-center mt-20 text-lg text-gray-600">
        No experience data found.
      </div>
    );
  }

  const subtotal = experience.price * qty;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + taxes;

  const handleConfirmBooking = () => {
    const refId =
      "HD" + Math.random().toString(36).substring(2, 8).toUpperCase();
    navigate(
      `/booking-confirmed?ref=${refId}&date=${date}&time=${time}&experience=${encodeURIComponent(
        experience.title
      )}&qty=${qty}&total=${total}`
    );
  };

  return (
    <div className="flex flex-col items-center py-10 px-5">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10">
        {/* Left - Image & Checkout Form */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow">
          {/* 🔙 Back Button ABOVE the image */}
          <div className="mb-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-700 hover:text-black bg-white/90 px-3 py-1 rounded-md shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </div>

          {/* Experience Image */}
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full name"
              className="border border-gray-300 rounded-md px-3 py-2"
              defaultValue="John Doe"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-3 py-2"
              defaultValue="test@test.com"
            />
          </div>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Promo code"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              Apply
            </button>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" defaultChecked className="mr-2" />
            <label className="text-sm text-gray-600">
              I agree to the terms and safety policy
            </label>
          </div>
        </div>

        {/* Right - Summary */}
        <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Experience Summary</h3>
          <div className="space-y-1 text-gray-700">
            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {experience.title}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {date}
            </p>
            <p>
              <span className="font-semibold">Time:</span> {time}
            </p>
            <p>
              <span className="font-semibold">Qty:</span> {qty}
            </p>
          </div>
          <hr className="my-3" />
          <p>
            <span className="font-semibold">Subtotal:</span> ₹{subtotal}
          </p>
          <p>
            <span className="font-semibold">Taxes:</span> ₹{taxes}
          </p>

          <div className="flex justify-between mt-4 font-semibold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="w-full bg-yellow-400 hover:bg-yellow-500 mt-6 py-2 rounded-md font-semibold"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
