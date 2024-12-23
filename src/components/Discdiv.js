import React from "react";
import DiscussionAvatar from "./DiscussionAvatar";
import Discussion from "./Discussion";
import experts from "../data/experts";
import { useParams, useNavigate } from "react-router-dom";

function Discdiv() {
  const { expertId } = useParams();
  const navigate = useNavigate();

  const selectedExpert = experts.find(
    (expert) => expert.id === parseInt(expertId)
  );

  const handleDeleteConversation = () => {
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || {};
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser?.email) {
      delete chatHistory[loggedInUser.email]?.[expertId];
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }

    navigate("/chats");
    window.location.reload(); // Redirect to the chat list after deletion
  };

  if (!selectedExpert) {
    return <p className="text-center text-customBlue">Expert not found!</p>;
  }

  return (
    <div>
      <DiscussionAvatar
        avatar={selectedExpert.image}
        name={selectedExpert.name}
        onDelete={handleDeleteConversation}
      />
      <Discussion
        customMessage={selectedExpert.customMessage}
        timestamp={new Date()}
      />
    </div>
  );
}

export default Discdiv;
