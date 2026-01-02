import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // ✅ Check login status on mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center z-50">
      {/* 🔹 Logo */}
      <Link
        to="/"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
      >
        BookIt
      </Link>

      {/* 🔹 Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search experiences..."
          className="w-64 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
        >
          Search
        </button>
      </form>

      {/* 🔹 Navigation Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
          Home
        </Link>
        <Link
          to="/bookings"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          My Bookings
        </Link>

        {/* 🔹 Conditional Auth Buttons */}
        {!isLoggedIn ? (
          <button
            onClick={() => navigate("/login")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-200"
          >
            Login / Register
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
