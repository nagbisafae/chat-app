import React from "react";
import InputField from "../components/InputField";
import Socialmedia from "../components/Socialmedia";
import GreenCard from "../components/GreenCard";

function signup() {
  return (
    <div class=" bg-gradient-to-b from-BlueVert to-[#F3F6F6] min-h-screen ">
      <div class="flex justify-between">
        <div>
          <GreenCard
            btnhref="/Login"
            roundedClass="rounded-e-3xl"
            btntxt="Log In"
            smtxt=" Connect. Discover. Solve. Join Haven today."
            maintxt=" Welcome to "
          />
        </div>
        <div>
          {/* Premier partie  */}
          <label class="font-serif font-semibold text-customBlue leading-4 text-4xl mt-8 ml-28 inline-block ">
            Join Us!
          </label>
          <div class=" mt-3  mr-48 drop-shadow-lg rounded-3xl border border-BlueVert-2 w-96  bg-BlueVert bg-opacity-50 ">
            {/* Formulaire   */}
            <form class="relative">
              <div class="flex justify-center items-center">
                <InputField
                  label="Name:"
                  type="name"
                  placeholder="Enter your name"
                  col="text-gris"
                />
                <svg
                  class="absolute left-80 top-16"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00003 5.85366C7.82273 5.85366 9.30035 4.54327 9.30035 2.92683C9.30035 1.31039 7.82273 0 6.00003 0C4.17731 0 2.69971 1.31039 2.69971 2.92683C2.69971 4.54327 4.17731 5.85366 6.00003 5.85366Z"
                    fill="#2B616D"
                  />
                  <path
                    d="M6.00001 7.31689C2.69306 7.31689 0 9.28372 0 11.7071C0 11.871 0.145214 11.9998 0.330032 11.9998H11.67C11.8548 11.9998 12 11.871 12 11.7071C12 9.28372 9.30694 7.31689 6.00001 7.31689Z"
                    fill="#2B616D"
                  />
                </svg>
              </div>
              <div class="flex justify-center items-center">
                <InputField
                  label="Email:"
                  type="email"
                  placeholder="Enter your email"
                  col="text-gris"
                />
                <svg
                  class="absolute left-80 top-36"
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
              </div>
              <div class="flex justify-center items-center">
                <InputField
                  label="Password:"
                  type="password"
                  placeholder="Enter your password"
                  col="text-gris"
                />
                <svg
                  class="absolute left-80 top-cust "
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
              </div>
              <label class="font-serif font-bold text-customBlue inline-block text-sm ml-120px mt-8 ">
                Forgot password ?
              </label>
            </form>
            <Socialmedia
              gray="Already have an account? "
              buttonText="Create an account"
              undertext="&nbsp;Log in"
              btnhref="/Home"
            />
          </div>
        </div>
      </div>
      <div>{/*Deuxieme partie  */}</div>
    </div>
  );
}

export default signup;
