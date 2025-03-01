import React, { useState } from "react";
import "../App.css";
import InputField from "../components/InputField";
import Socialmedia from "../components/Socialmedia";
import GreenCard from "../components/GreenCard";
import girl from "../assets/Profilegirl.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      alert("Invalid email or password!");
      return;
    }

    // Save logged-in user to localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Redirect to the home page
    //alert(`Welcome back, ${user.name}!`);
    navigate("/Home");
  };

  return (
    <>
      <div className="custom-scrollbar bg-gradient-to-b overflow-y-auto from-BlueVert to-[#F3F6F6]">
        <div className="flex justify-between ">
        <div className="h-screen flex items-center justify-center lg:w-2/3 w-custom7">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className=" md:flex flex justify-center items-center lg:hidden">
                <img src={girl} alt="welcome" className="w-56 h-48 mt-4" />
              </div>
              <div class=" flex justify-center items-center ">
                <label class="font-serif font-semibold text-customBlue text-3xl inline-block mb-4">
                  Welcome Back!
                </label>
              </div>
              <div class=" flex justify-center items-center ">
                <div class="lg:drop-shadow-lg lg:rounded-3xl lg:border lg:border-BlueVert-2 lg:w-96 lg:h-[500px] lg:bg-BlueVert lg:bg-opacity-50 ">
                  {/* Formulaire   */}
                  <form class="relative mt-10" onSubmit={handleLogin}>
                    <div class="flex justify-center items-center">
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
                    <div class="flex justify-center items-center">
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
                    <label class="font-serif font-bold text-customBlue text-sm  mt-8 flex justify-center items-center ">
                      Forgot password ?
                    </label>
                  </form>
                  <Socialmedia
                    buttonText2="/Signup"
                    buttonText="Log in "
                    undertext="&nbsp;create an account "
                    gray="Not registred yet ?  "
                    handleClick={handleLogin}
                  />
                </div>
              </div>
              <div>{/*Deuxieme partie  */}</div>
            </motion.div>
          </div>

          <div>
          <GreenCard
            att="hidden md:hidden lg:block"
            roundedClass="rounded-s-3xl"
            btntxt="Create account"
            btnhref="/Signup"
            smtxt="Reconnect with solutions tailored to your needs."
            maintxt="Happy to see"
            maintxt1="you again at"
            alignment="right"
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
