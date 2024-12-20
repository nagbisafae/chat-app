import React from "react";

function InputField({ label, type, placeholder, col }) {
  return (
    <div>
      <label className="font-serif  text-customBlue font-bold inline-block mt-5">
        {label}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        className={`${col} font-medium text-sm font-serif  mt-2 rounded-xl bg-BlueVert bg-opacity-50 pl-6 h-8 w-80 border-2 border-BlueVert`}
      />
    </div>
  );
}

export default InputField;
