import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import experiences from "../data/experiences"; // use your actual experience data

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // 🟢 Temporary: Load dummy bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <p className="text-lg mb-4">No bookings yet.</p>
        <Link
          to="/"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition"
        >
          Book an Experience
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold mb-6">My Bookings</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking, index) => {
          const experience = experiences.find((exp) => exp.id === booking.experienceId);
          if (!experience) return null; // skip if deleted experience
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-3">{experience.title}</h2>
              <p className="text-gray-600">{experience.location}</p>
              <div className="mt-2 text-gray-700 space-y-1">
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Time:</strong> {booking.time}</p>
                <p><strong>Quantity:</strong> {booking.qty}</p>
                <p className="font-semibold text-lg text-yellow-600">
                  ₹{booking.total}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
