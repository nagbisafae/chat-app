import React from "react";
import InputField from "../components/InputField";

function login() {
  return (
    <div class=" bg-BlueVert bg-opacity-30 min-h-screen bgc">
      <div>
        {/* Premier partie  */}
        <label class="font-serif font-bold text-customBlue leading-4 text-2xl mt-5 ml-60 inline-block ">
          Welcome Back!
        </label>
        <div class=" mt-10  ml-40 rounded-3xl border border-BlueVert-2 w-96 h-96 bg-BlueVert bg-opacity-50 ">
          {/* Formulaire   */}
          <form class="relative">
            <InputField
              label="Email:"
              type="email"
              placeholder="Enter your email"
            />
            <svg
              class="absolute left-80 top-16"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M4.99376 0.887503L10.7322 3.97907C13.3064 5.36595 13.3064 7.63406 10.7322 9.02093L4.99376 12.1125C1.13241 14.1928 -0.442967 12.4881 1.48771 8.33472L2.07093 7.08509C2.23853 6.7167 2.23853 6.29053 2.07093 5.92214L1.48771 4.66528C-0.442967 0.511893 1.13911 -1.1928 4.99376 0.887503Z"
                fill="#2B616D"
              />
            </svg>
            <InputField
              label="Password:"
              type="password"
              placeholder="Enter your password"
            />
            <svg
              class="absolute left-80 top-36"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.40015 5.8V4.6C3.40015 2.614 4.00015 1 7.00015 1C10.0001 1 10.6001 2.614 10.6001 4.6V5.8"
                stroke="#2B616D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 13H4C1.6 13 1 12.4 1 10V8.8C1 6.4 1.6 5.8 4 5.8H10C12.4 5.8 13 6.4 13 8.8V10C13 12.4 12.4 13 10 13Z"
                stroke="#2B616D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.39819 9.39996H9.40353"
                stroke="#2B616D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.99756 9.39996H7.00296"
                stroke="#2B616D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.59668 9.39999H4.60207"
                stroke="#2B616D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <label class="font-serif font-bold text-customBlue inline-block text-sm ml-32 mt-8 t">
              Forgot password ?
            </label>
          </form>
        </div>
      </div>
      <div>{/*Deuxieme partie  */}</div>
    </div>
  );
}

export default login;
