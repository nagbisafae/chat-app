import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import logo from "../assets/LOGO.png";
import { useNavigate } from "react-router-dom";

function GreenCard({
  maintxt,
  btntxt,
  smtxt,
  maintxt1,
  roundedClass,
  btnhref,
  att,
  alignment, // 'right' or 'left'
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`bg-customBlue h-screen w-1/3 ${roundedClass} flex justify-center items-center absolute ${
        alignment === "left" ? "left-0" : "right-0"
      } ${att}`}
      initial={{ opacity: 0, x: alignment === "left" ? "-100%" : "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: alignment === "left" ? "100%" : "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center">
        <svg
          className="mr-60"
          width="119"
          height="108"
          viewBox="0 0 119 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.7303 100.954C37.3376 100.883 36.9535 100.807 36.5781 100.726"
            stroke="#FA8D62"
            strokeWidth="1.50643"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Add other SVG paths here */}
        </svg>
        <div>
          <p className="font-serif text-white text-5xl pl-12">
            {maintxt}
            <br />
            {maintxt1}
          </p>

          <img
            src={logo}
            alt="LOGO"
            className="object-contain h-24 pt-2 pl-16"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white font-serif mt-20 pt-4">{smtxt}</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate(btnhref)}
            className="hover:bg-orange hover:text-white transition duration-150 ease-out hover:ease-in bg-white h-10 text-customBlue rounded-full drop-shadow-lg font-serif w-72 mt-8 text-center font-semibold text-sm border-2 border-BlueVert"
          >
            {btntxt}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default GreenCard;
