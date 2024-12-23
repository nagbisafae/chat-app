import React from "react";

function InputField({ label, type, placeholder, col, value, onChange, svg }) {
  return (
    <div>
      <label className="font-serif text-customBlue font-bold inline-block mt-5">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          type={type}
          placeholder={placeholder}
          value={value} // This must match the parent state
          onChange={onChange} // This must update the parent state
          className={`${col} placeholder-gray-500 font-medium text-sm font-serif outline-none rounded-xl border-BlueVert border-2 bg-white bg-opacity-50 pl-6 h-8 w-80 focus:border-2 focus:border-customBlue`}
        />
        {/* Position the SVG icon */}
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
          {svg}
        </div>
      </div>
    </div>
  );
}

export default InputField;
