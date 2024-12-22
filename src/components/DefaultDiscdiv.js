import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button"; 

const DefaultDiscDiv = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/Home"); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-semibold text-customBlue mb-2">
        Welcome to the Chat!
      </h2>
      <p className="text-sm text-customBlue font-medium text-center max-w-md mb-4">
        Select a conversation or start a new one to begin chatting with experts.
      </p>
      <Button 
        text="Go to Homepage" 
        onClick={handleGoToHome} 
      />
    </div>
  );
};

export default DefaultDiscDiv;
