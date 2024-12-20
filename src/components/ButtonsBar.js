import React from "react";

// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaHome } from "react-icons/fa";

function ButtonsBar({
  icone: Icon,
  label,
  backcol,
  textcol,
  btnhref,
  shad,
  marg,
}) {
  const navigate = useNavigate();
  // const [bgColor, setbgColor] = useState("bg-customBlue");
  // const [textColor, settextColor] = useState("text-customBlue");
  // const handleChangeColor = () => {
  //   setbgColor("bg-orange");
  //   settextColor("text-white");
  // };
  const handleClick = () => {
    // handleChangeColor(); // Change la couleur
    navigate(btnhref); // Redirige vers la route
  };
  return (
    <button
      onClick={handleClick}
      className={`flex flex-row items-center p-4 gap-4 ${marg} rounded-lg hover:bg-BlueVert text-customBlue ${backcol} ${textcol} ${shad}  h-10 mb-6`}
    >
      <Icon size={20} className={` text-3xl mb-1  `} />
      <p className={`text-lg font-serif   font-bold`}>{label}</p>
    </button>
  );
}

export default ButtonsBar;
