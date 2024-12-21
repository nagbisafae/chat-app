import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Card({ image, name, description, buttonText, id }) {
  const navigate = useNavigate();

  const handleStartConversation = () => {
    navigate(`/chats/${id}`);
  };
  return (
    <div className="w-full max-w-2xl bg-white/80 shadow-md rounded-xl p-3 flex gap-8 items-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded-2xl" />
      <div className="flex-1 flex flex-col justify-center items-center">
        <h3 className="text-base font-bold mb-2 text-customBlue text-center">{name}</h3>
        <p className="text-black text-sm mb-4 text-center">{description}</p>
        <Button 
          text={buttonText} 
          onClick={handleStartConversation}/>
      </div>
    </div>
  );
}

export default Card;
