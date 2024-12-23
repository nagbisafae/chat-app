import React, { useState } from "react";
import InputField from "../components/InputField";
import Socialmedia from "../components/Socialmedia";
import GreenCard from "../components/GreenCard";
import { motion } from "framer-motion";
import girl from "../assets/Profilegirl.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Check and store user in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert("A user with this email already exists!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please log in.");
    navigate("/Login");
  };

  return (
    <>
      <div className="flex justify-between bg-gradient-to-b from-BlueVert to-[#F3F6F6]">
        <div>
          <GreenCard
            att="hidden md:hidden lg:block"
            roundedClass="rounded-e-3xl"
            btntxt="Login"
            btnhref="/Login"
            smtxt="Start your journey with us."
            maintxt="Welcome to"
            maintxt1="our platform"
            alignment="left"
          />
        </div>
        <div className="h-screen flex items-center justify-center lg:w-2/3 w-custom7 custom-scrollbar overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:flex flex justify-center items-center lg:hidden">
              <img src={girl} alt="welcome" className="w-56 h-48 mt-4" />
            </div>
            <div className="flex justify-center items-center">
              <label className="font-serif font-semibold text-customBlue text-4xl mb-4 inline-block">
                Join Us!
              </label>
            </div>
            <div className="flex justify-center items-center">
              <div className="lg:drop-shadow-lg lg:rounded-3xl lg:border border-BlueVert-2 lg:w-96 lg:h-[500px] lg:bg-BlueVert lg:bg-opacity-50">
                {/* Form */}
                <form className="relative mt-6" onSubmit={handleSignup}>
                  <div className="flex justify-center items-center">
                    <InputField
                      label="Name:"
                      type="text"
                      placeholder="Enter your name"
                      col="text-gris"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      svg={
                        <svg
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
                      }
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <InputField
                      label="Email:"
                      type="email"
                      placeholder="Enter your email"
                      col="text-gris"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      svg={
                        <svg
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
                      }
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <InputField
                      label="Password:"
                      type="password"
                      placeholder="Enter your password"
                      col="text-gris"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      svg={
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.40015 5.8V4.6C3.40015 2.614 4.00015 1 7.00015 1C10.0001 1 10.6001 2.614 10.6001 4.6V5.8"
                            stroke="#2B616D"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 13H4C1.6 13 1 12.4 1 10V8.8C1 6.4 1.6 5.8 4 5.8H10C12.4 5.8 13 6.4 13 8.8V10C13 12.4 12.4 13 10 13Z"
                            stroke="#2B616D"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                    />
                  </div>
                </form>
                <Socialmedia
                  buttonText2="/Login"
                  gray="Already have an account? "
                  buttonText="Create an account"
                  undertext="&nbsp;Log in"
                  handleClick={handleSignup}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Signup;
