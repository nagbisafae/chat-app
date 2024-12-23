import React, { useEffect, useState } from "react";
import experts from "../data/experts";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

function Chatdiv() {
  const [latestMessages, setLatestMessages] = useState({});
  const [latestTimestamps, setLatestTimestamps] = useState({});
  const [activeExperts, setActiveExperts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActiveExperts = () => {
      const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || {};
      const userChats = chatHistory[loggedInUser?.email] || {};

      const activeExpertIds = Object.keys(userChats).map(Number);
      const activeExperts = experts.filter((expert) =>
        activeExpertIds.includes(expert.id)
      );

      const latestMessages = activeExperts.reduce((acc, expert) => {
        const messages = userChats[expert.id] || [];
        if (messages.length > 0) {
          const latestMessage = messages[messages.length - 1];
          acc[expert.id] = latestMessage.message;
        }
        return acc;
      }, {});

      const latestTimestamps = activeExperts.reduce((acc, expert) => {
        const messages = userChats[expert.id] || [];
        if (messages.length > 0) {
          const latestMessage = messages[messages.length - 1];
          acc[expert.id] = latestMessage.timestamp;
        }
        return acc;
      }, {});

      setActiveExperts(activeExperts);
      setLatestMessages(latestMessages);
      setLatestTimestamps(latestTimestamps);
    };

    fetchActiveExperts();
  }, []); // Remplacez [loggedInUser] par [] si aucune dépendance n'est nécessaire.

  const formatTimestamp = (timestamp) => {
    const messageDate = new Date(timestamp);
    const today = new Date();

    if (
      messageDate.getDate() === today.getDate() &&
      messageDate.getMonth() === today.getMonth() &&
      messageDate.getFullYear() === today.getFullYear()
    ) {
      // Format as h:m if it's today
      return messageDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else {
      // Format as dd/mm otherwise
      return `${String(messageDate.getDate()).padStart(2, "0")}/${String(
        messageDate.getMonth() + 1
      ).padStart(2, "0")}`;
    }
  };

  const handleCardClick = (expertId) => {
    navigate(`/chats/${expertId}`);
    window.location.reload(); // Reload the page after navigation
  };

  const filteredExperts = activeExperts
    .filter((expert) =>
      expert.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const timestampA = new Date(latestTimestamps[a.id]);
      const timestampB = new Date(latestTimestamps[b.id]);

      return timestampB - timestampA; // Sort descending (newest first)
    });

  return (
    <div
      className="bg-white rounded-[20px] shadow-md overflow-hidden p-4
      w-[80%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
      h-[70vh] sm:h-[75vh] lg:h-[95vh] flex flex-col"
    >
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search experts..."
      />

      <div className="space-y-4">
        {filteredExperts.map((expert) => (
          <div
            key={expert.id}
            className="flex items-center bg-gray-50 cursor-pointer hover:bg-BlueVert transition rounded-lg p-3 shadow-sm"
            onClick={() => handleCardClick(expert.id)}
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <div className="ml-4 flex flex-col overflow-hidden flex-grow">
              <p className="text-xs font-bold text-customBlue">
                {expert.name.split(" - ")[0]}
              </p>
              <p className="text-xs text-gray-600 truncate overflow-hidden whitespace-nowrap max-w-full">
                {latestMessages[expert.id] || ""}
              </p>
            </div>
            <div className="ml-auto text-xs text-gray-400">
              {latestTimestamps[expert.id]
                ? formatTimestamp(latestTimestamps[expert.id])
                : ""}
            </div>
          </div>
        ))}
        {filteredExperts.length === 0 && (
          <p className="text-sm text-customBlue text-center font-semibold mt-10">
            No experts found
          </p>
        )}
      </div>
    </div>
  );
}

export default Chatdiv;
