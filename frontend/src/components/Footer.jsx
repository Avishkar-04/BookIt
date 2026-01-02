import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-semibold text-blue-600 mb-3 md:mb-0">BookIt</h2>

        <div className="flex space-x-6 text-gray-600 text-sm mb-3 md:mb-0">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          <a href="/help" className="hover:text-blue-600 transition">Help</a>
        </div>

        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} BookIt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
