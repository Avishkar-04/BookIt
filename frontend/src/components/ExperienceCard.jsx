import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Import images from assets folder
import beach1 from "../assets/beach1.jpg";
import bungee from "../assets/bungee.jpg";
import boat from "../assets/boat.jpg";
import coffee from "../assets/coffee.jpg";
import kayaking from "../assets/kayaking.jpg";
import nandi from "../assets/nandi.jpg";

// ✅ Experience data (your original list)
const experiences = [
  {
    id: 1,
    title: "Beach Escape",
    location: "Goa",
    price: 4999,
    image: beach1,
  },
  {
    id: 2,
    title: "Bungee Jumping",
    location: "Rishikesh",
    price: 6499,
    image: bungee,
  },
  {
    id: 3,
    title: "Boat Cruising",
    location: "Alleppey",
    price: 5999,
    image: boat,
  },
  {
    id: 4,
    title: "Coffee Trail",
    location: "Coorg",
    price: 2499,
    image: coffee,
  },
  {
    id: 5,
    title: "Kayaking Adventure",
    location: "Goa",
    price: 2999,
    image: kayaking,
  },
  {
    id: 6,
    title: "Nandi Hill Sunrise Trek",
    location: "Bangalore",
    price: 3499,
    image: nandi,
  },
];

// ✅ Main component
const ExperienceCard = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/experience/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
          onClick={() => handleClick(exp.id)}
        >
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-gray-500">{exp.location}</p>
            <p className="text-blue-600 font-bold mt-2">₹{exp.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
