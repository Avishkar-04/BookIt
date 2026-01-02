import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

// ✅ Import images (same as Home page)
import nandi from "../assets/nandi.jpg";
import coffee from "../assets/coffee.jpg";
import bungee from "../assets/bungee.jpg";
import beach1 from "../assets/beach1.jpg";
import kayaking from "../assets/kayaking.jpg";
import boat from "../assets/boat.jpg";

// ✅ Experience data
const experiences = [
  { id: 1, title: "Nandi Hill Sunrise Trek", location: "Bangalore", price: "₹2999", image: nandi },
  { id: 2, title: "Coffee Trail", location: "Coorg", price: "₹1499", image: coffee },
  { id: 3, title: "Bungee Jumping", location: "Rishikesh", price: "₹4999", image: bungee },
  { id: 4, title: "Kayaking Adventure", location: "Goa", price: "₹2499", image: kayaking },
  { id: 5, title: "Boat Cruise", location: "Alleppey", price: "₹3499", image: boat },
  { id: 6, title: "Beach Relaxation", location: "Goa", price: "₹1999", image: beach1 },
];

function Search() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Extract the query from URL (e.g., /search?q=goa)
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  // ✅ Filter experiences by title or location
  const filteredResults = experiences.filter(
    (exp) =>
      exp.title.toLowerCase().includes(query) ||
      exp.location.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 px-6 max-w-6xl mx-auto relative">
        {/* 🔙 Back Button */}
        <div className="absolute top-0 left-0">
          <BackButton className="ml-2 mt-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg shadow hover:bg-white transition" />
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-gray-800 mt-10">
          Search Results for: <span className="text-blue-600">"{query}"</span>
        </h2>

        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredResults.map((exp) => (
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
        ) : (
          <div className="text-gray-500 text-center text-lg mt-20">
            No experiences found for <span className="text-blue-600 font-semibold">"{query}"</span>.
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
