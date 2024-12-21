import React from "react";
import DiscussionBubble from "./DiscussionBubble";
import { formatDate } from "../utils/formatDate";
import { LuSendHorizontal } from "react-icons/lu";
import '../App.css';

function Discussion({ customMessage, timestamp }) {
  const formattedTimestamp = formatDate(timestamp);

  return (
    <div className="p-4 bg-white/70 rounded-xl shadow-md h-[500px] flex flex-col">
      <p className="text-orange text-sm font-semibold text-center mb-2">{`${formattedTimestamp}`}</p>
      
      <div className="flex-1 overflow-y-auto p-2 space-y-3 custom-scrollbar">
        <DiscussionBubble message={customMessage} sender="expert" timestamp={timestamp} />
      </div>
      <div className="mt-4 flex items-center gap-1">
        <input
          type="text"
          placeholder="Write your message"
          className="text-sm flex-grow border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-orange focus:ring-1"
        />
        <button className="bg-orange text-white font-semibold px-4 h-full rounded-lg hover:bg-customBlue shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center">
          <LuSendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}

export default Discussion;
