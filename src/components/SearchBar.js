import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="mx-4 my-4">
        <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-md focus:outline-none focus:ring focus:ring-orange pr-10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <IoSearchOutline
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-customBlue"
        size={20}
      />
    </div>
    </div>
  );
}

export default SearchBar;
