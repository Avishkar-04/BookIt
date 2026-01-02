import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// ✅ Import your original images
import nandi from "../assets/nandi.jpg";
import coffee from "../assets/coffee.jpg";
import bungee from "../assets/bungee.jpg";
import beach1 from "../assets/beach1.jpg";
import kayaking from "../assets/kayaking.jpg";
import boat from "../assets/boat.jpg";

// ✅ Original experiences restored
const experiences = [
  {
    id: 1,
    title: "Nandi Hill Sunrise Trek",
    location: "Bangalore",
    price: "₹2999",
    image: nandi,
  },
  {
    id: 2,
    title: "Coffee Trail",
    location: "Coorg",
    price: "₹1499",
    image: coffee,
  },
  {
    id: 3,
    title: "Bungee Jumping",
    location: "Rishikesh",
    price: "₹4999",
    image: bungee,
  },
  {
    id: 4,
    title: "Kayaking Adventure",
    location: "Goa",
    price: "₹2499",
    image: kayaking,
  },
  {
    id: 5,
    title: "Boat Cruise",
    location: "Alleppey",
    price: "₹3499",
    image: boat,
  },
  {
    id: 6,
    title: "Beach Relaxation",
    location: "Goa",
    price: "₹1999",
    image: beach1,
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-16 bg-gray-50 mt-16"> {/* Added mt-16 for space under fixed navbar */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-gray-500 mb-8">
          Find exciting experiences around India.
        </p>
      </div>

      {/* Experiences Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
          Popular Experiences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => navigate(`/experience/${exp.id}`)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {exp.title}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{exp.location}</p>
              <p className="text-blue-600 font-semibold">{exp.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
