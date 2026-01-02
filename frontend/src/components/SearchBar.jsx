import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full flex justify-center my-6">
      <input
        type="text"
        placeholder="Search experiences..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-5 py-3 rounded-lg w-80 outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
