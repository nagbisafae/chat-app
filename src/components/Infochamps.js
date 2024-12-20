import React from "react";

function Infochamps({ label, value, col, isEditable, onChange }) {
  return (
    <div>
      <label className="font-serif text-customBlue font-bold inline-block mt-5">
        {label}
      </label>
      <br />

      {isEditable ? (
        <input
          type="text"
          value={value}
          onChange={onChange} // Gère le changement de valeur dans le parent
          className={`${col} font-semibold pt-1 text-sm font-serif mt-2 rounded-xl bg-BlueVert bg-opacity-50 pl-6 h-8 w-80 border-2 border-BlueVert`}
        />
      ) : (
        <p
          className={`${col} font-semibold pt-1 text-sm font-serif mt-2 rounded-xl bg-BlueVert bg-opacity-50 pl-6 h-8 w-80 border-2 border-BlueVert`}
        >
          {value}
        </p>
      )}
    </div>
  );
}

export default Infochamps;
