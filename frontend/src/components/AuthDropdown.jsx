import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => setOpen(!open);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition duration-200"
      >
        Login
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-100">
          <button
            onClick={() => navigate("/login")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthDropdown;
