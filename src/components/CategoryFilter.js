import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="ml-4 sm:m-0">
      <div className="relative w-full max-w-2xl mx-auto overflow-x-auto no-scrollbar">
      <div className="flex justify-start gap-2 py-2 w-max">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? "bg-orange text-white"
                : "bg-gray-100 text-[#2B616D]"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CategoryFilter;
