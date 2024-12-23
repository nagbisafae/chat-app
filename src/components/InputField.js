import React from "react";

function InputField({ label, type, placeholder, col, value, onChange }) {
  return (
    <div>
      <label className="font-serif  text-customBlue font-bold inline-block mt-5">
        {label}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        value={value} // This must match the parent state
        onChange={onChange} // This must update the parent state
        className={`${col} font-medium text-sm font-serif  mt-2 rounded-xl bg-BlueVert bg-opacity-50 pl-6 h-8 w-80 border-2 border-BlueVert`}
      />
    </div>
  );
}

export default InputField;
