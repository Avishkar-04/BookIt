import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // clean icon

export default function BackButton({ className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 text-gray-700 hover:text-blue-600 transition font-medium ${className}`}
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
}
