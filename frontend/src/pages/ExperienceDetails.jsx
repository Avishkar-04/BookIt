import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import experiences from "../data/experiences";

const ExperienceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find experience by ID
  const experience = experiences.find((exp) => exp.id === Number(id));

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Experience not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-24 px-4 py-10">
        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {experience.title}
          </h1>
          <p className="text-gray-500 text-lg mt-1">{experience.location}</p>
          <p className="text-gray-700 mt-5 leading-relaxed text-justify">
            {experience.description}
          </p>

          <p className="text-blue-600 font-semibold text-2xl mt-6">
            ₹{experience.price}
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => navigate(`/select-date/${experience.id}`)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
            >
              Select Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
