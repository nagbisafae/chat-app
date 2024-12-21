import React from "react";
import DiscussionAvatar from "./DiscussionAvatar";
import Discussion from "./Discussion";
import experts from "../data/experts";
import { useParams } from "react-router-dom";

function Discdiv() {
  const { expertId } = useParams();

  const selectedExpert = experts.find((expert) => expert.id === parseInt(expertId));

  if (!selectedExpert) {
    return <p className="text-center text-customBlue">Expert not found!</p>;
  }

  return (
    <div>
      <DiscussionAvatar
        avatar={selectedExpert.image}
        name={selectedExpert.name}
      />
      <Discussion
        customMessage={selectedExpert.customMessage}
        timestamp={new Date()} 
      />
    </div>
  );
}

export default Discdiv;
