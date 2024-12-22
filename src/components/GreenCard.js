import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import logo from "../assets/LOGO.png";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GreenCard({
  maintxt,
  btntxt,
  smtxt,
  maintxt1,
  roundedClass,
  btnhref,
  att,
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`bg-customBlue h-screen w-custom2 ${roundedClass} flex justify-center pt-12 ${att}`}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
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
            stroke-width="1.50643"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.9311 99.0733C5.29562 89.2078 15.2341 56.1235 36.9182 63.8495C37.7509 64.1659 38.4867 64.6607 39.0626 65.2916C39.6385 65.9225 40.0374 66.6706 40.2251 67.472C40.4229 68.2615 40.4252 69.081 40.2318 69.8714C40.0385 70.6618 39.6544 71.4034 39.1071 72.0428C37.9297 73.3542 36.3085 74.2765 34.4949 74.6668C32.6812 75.057 30.7764 74.8935 29.0756 74.2015C14.7475 68.6289 24.673 45.8998 41.9982 42.0999"
            stroke="#FA8D62"
            stroke-width="1.50643"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44.9314 41.6499C45.3202 41.6156 45.7129 41.591 46.1095 41.576"
            stroke="#FA8D62"
            stroke-width="1.50643"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M40.5596 23.7152C40.2982 23.4506 40.1301 23.1209 40.0771 22.7687C40.0241 22.4165 40.0886 22.058 40.2624 21.7394C40.4361 21.4208 40.7111 21.1568 41.0518 20.9815C41.3924 20.8061 41.7832 20.7275 42.1736 20.7557L106.616 25.4003C107.017 25.4296 107.399 25.5703 107.708 25.8034C108.018 26.0365 108.242 26.3506 108.348 26.7029C108.454 27.0553 108.439 27.4288 108.303 27.7727C108.167 28.1166 107.918 28.4142 107.589 28.625L54.7451 62.4202C54.4251 62.6252 54.0447 62.7384 53.6531 62.7451C53.2614 62.7518 52.8766 62.6517 52.5483 62.4578C52.2199 62.2639 51.9633 61.9851 51.8114 61.6575C51.6595 61.3298 51.6194 60.9683 51.6962 60.6197L56.1023 40.5123C56.1619 40.2418 56.1512 39.9623 56.0711 39.6962C55.9909 39.43 55.8435 39.1845 55.6405 38.9791L40.5596 23.7152Z"
            fill="white"
            stroke="#45413C"
            stroke-width="1.50643"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.103 40.5121L51.6969 60.6195C51.6207 60.9679 51.6612 61.3291 51.8133 61.6565C51.9654 61.9838 52.222 62.2623 52.5501 62.4561C52.8782 62.6498 53.2627 62.7499 53.6541 62.7435C54.0454 62.7371 54.4257 62.6244 54.7459 62.42L107.591 28.6247C107.92 28.4138 108.17 28.1159 108.306 27.7715C108.442 27.4271 108.458 27.0531 108.352 26.7002L56.0712 39.6963C56.1519 39.9622 56.1628 40.2416 56.103 40.5121Z"
            fill="#DAEDF7"
            stroke="#45413C"
            stroke-width="1.50643"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>
          <p class="font-serif text-white text-5xl pl-12 ">
            {maintxt}
            <br></br>
            {maintxt1}
          </p>

          <img
            src={logo}
            alt="LOGO"
            className="object-contain h-24 pt-2 pl-16"
          />
        </div>
        <div class="flex justify-center items-center">
          <p class="text-white font-serif pt-4 ">{smtxt}</p>
        </div>
        <div class="flex justify-center items-center">
          <button
            onClick={() => navigate(btnhref)}
            class="hover:bg-orange transition duration-150 ease-out hover:ease-in bg-white h-10 text-customBlue rounded-full drop-shadow-lg  font-serif w-72 mt-8 text-center font-semibold text-sm border-2 border-orange"
          >
            {btntxt}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default GreenCard;
