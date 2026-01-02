import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🧩 Components
import Navbar from "./components/Navbar";

// 🧩 Import all pages
import Home from "./pages/Home";
import ExperienceDetails from "./pages/ExperienceDetails";
import SelectDate from "./pages/SelectDate";
import SelectTime from "./pages/SelectTime";
import Checkout from "./pages/Checkout";
import CheckoutDetails from "./pages/CheckoutDetails";
import BookingConfirmed from "./pages/BookingConfirmed";
import Search from "./pages/Search";
import Login from "./pages/Login";        // ✅ Added
import Register from "./pages/Register";  // ✅ Added
import MyBookings from "./pages/MyBookings";


// 🧭 Main App Component
function App() {
  return (
    <Router>
      {/* Constant Navbar */}
      <Navbar />

      {/* Add padding top so content isn’t hidden under navbar */}
      <div className="pt-24 px-4 md:px-0">
        <Routes>
          {/* 🔹 Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />

          {/* 🔹 Experience Details */}
          <Route path="/experience/:id" element={<ExperienceDetails />} />

          {/* 🔹 Booking Flow */}
          <Route path="/select-date/:id" element={<SelectDate />} />
          <Route path="/select-time/:id" element={<SelectTime />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/checkout/:id/details" element={<CheckoutDetails />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          <Route path="/bookings" element={<MyBookings />} />



          {/* 🔹 Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          {/* 🔹 Fallback Route */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-600">
                404 | Page Not Found
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
