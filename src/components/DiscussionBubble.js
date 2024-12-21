import React from "react";
import { formatTime } from "../utils/formatTime";

function DiscussionBubble({ message, sender, timestamp }) {
  const isExpert = sender === "expert";

  return (
    <div
      className={`mb-3 flex ${
        isExpert ? "justify-start" : "justify-end"
      }`} 
    >
      <div>
        <div
          className={`p-4 max-w-[300px] ${
            isExpert
              ? "bg-customBlue text-white text-left rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
              : "bg-white text-black text-right rounded-tl-2xl rounded-br-2xl rounded-bl-2xl border border-BlueVert"
          }`}
          style={{ wordWrap: "break-word" }}
        >
          <p>{message}</p>
        </div>
        <p
          className={`mt-1 text-xs ${
            isExpert ? "text-left" : "text-right mr-1"
          } text-gray-400`}
        >
          {formatTime(timestamp)}
        </p>
      </div>
    </div>
  );
}

export default DiscussionBubble;
