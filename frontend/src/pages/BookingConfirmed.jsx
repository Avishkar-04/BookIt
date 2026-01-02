import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const ref = searchParams.get("ref");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const experience = searchParams.get("experience");
  const qty = searchParams.get("qty");
  const total = searchParams.get("total");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          Booking Confirmed 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your booking! Here are your details:
        </p>

        <div className="text-left text-gray-700 space-y-2 mb-6">
          <p>
            <strong>Reference ID:</strong> {ref}
          </p>
          <p>
            <strong>Experience:</strong> {experience}
          </p>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
          <p>
            <strong>Quantity:</strong> {qty}
          </p>
          <p>
            <strong>Total Paid:</strong> ₹{total}
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-md font-semibold text-black"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmed;
