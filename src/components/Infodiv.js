import React, { useState, useRef, useEffect } from "react";
import Infochamps from "./Infochamps";
// Replace the line below with your own default image
import DefaultPic from "../assets/defaultProfile.png";

function Infodiv() {
  // State variables for user data
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("********"); 
  const [image, setImage] = useState(DefaultPic);
  const [isEditing, setIsEditing] = useState(false);

  const fileInputRef = useRef(null);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserName(loggedInUser.name || "");
      setEmail(loggedInUser.email || "");
      setPhoneNumber(loggedInUser.phone || "");
      if (loggedInUser.image) {
        setImage(loggedInUser.image);
      }
    }
  }, []);

  // Function to save updated user data to localStorage
  const updateUserData = (key, value) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    loggedInUser[key] = value;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  };

  // Handle image selection and update localStorage
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      updateUserData("image", imageUrl);
    }
  };

  // Handle changes in text fields
  const handleNameChange = (e) => {
    setUserName(e.target.value);
    updateUserData("name", e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateUserData("email", e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    updateUserData("phone", e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    updateUserData("password", e.target.value);
  };

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      {/* Profile Picture Section */}
      <div>
        <img
          src={image}
          alt="Profile"
          className="w-28 mt-5 cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        />
        <div className="flex justify-center items-center">
          <label className="font-libre text-customBlue mt-2 font-bold">
            {userName || "Your Name"}
          </label>
        </div>

        {/* Hidden file input always present, triggered by clicking the image */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Profile Info Section */}
      <div className="bg-white bg-opacity-70 lg:h-72 h-[550px] lg:rounded-lg md:rounded-lg rounded-t-3xl mt-3 pt-6 lg:w-[777px] w-full md:w-[550px] pb-14 md:pb-2 justify-end items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center items-center">
          <Infochamps
            label="Full Name"
            value={userName}
            col="text-orange"
            isEditable={isEditing}
            onChange={handleNameChange}
          />
          <Infochamps
            label="Your Email"
            col="text-orange"
            value={email}
            isEditable={isEditing}
            onChange={handleEmailChange}
          />
          <Infochamps
            label="Your Phone Number"
            col="text-orange"
            value={phoneNumber}
            isEditable={isEditing}
            onChange={handlePhoneChange}
          />
          <Infochamps
            label="Your Password"
            col="text-orange"
            value={password}
            isEditable={isEditing}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleEditClick}
            className="hover:bg-customBlue transition duration-150 ease-out hover:ease-in bg-orange h-10 text-white rounded-full font-serif w-72 mt-8 mb-8 text-center font-semibold text-sm"
          >
            {isEditing ? "Save Changes" : "Edit"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Infodiv;