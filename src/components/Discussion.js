import React, { useState, useEffect } from "react";
import DiscussionBubble from "./DiscussionBubble";
import { useParams } from "react-router-dom"; // For fetching the ID from the URL
import { formatDate } from "../utils/formatDate";
import { LuSendHorizontal } from "react-icons/lu";
import Fuse from "fuse.js";

function Discussion({ customMessage, timestamp }) {
  const { expertId } = useParams(); // Fetch the ID from the URL
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState([]); // Store API data

  // Fetch logged-in user
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Specialties based on expert ID
  const specialties = {
    1: "health", // Salma
    2: "lawyer", // Nada
    3: "cuisine", // Amine
  };

  // Get specialty
  const specialty = specialties[expertId] || null;

  // Load chat history from localStorage on mount
  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chatHistory")) || {};
    const userChats = storedChats[loggedInUser?.email]?.[expertId] || [];
    setMessages(userChats);
  }, [loggedInUser, expertId]);

  // Save messages to localStorage
  const saveMessagesToLocalStorage = (newMessages) => {
    const storedChats = JSON.parse(localStorage.getItem("chatHistory")) || {};
    const userChats = storedChats[loggedInUser?.email] || {};

    userChats[expertId] = newMessages;
    storedChats[loggedInUser?.email] = userChats;

    localStorage.setItem("chatHistory", JSON.stringify(storedChats));
  };

  // Load data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/chatss.json?key=a7019b10"
        );
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        console.error("Error fetching API data:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    const newUserMessage = {
      sender: "user",
      message: userMessage,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    saveMessagesToLocalStorage(updatedMessages);

    setLoading(true);
    setError("");

    try {
      // Filter API data based on the current specialty
      const filteredData = apiData.filter(
        (item) => item.category === specialty
      );
      console.log("Filtered data based on specialty:", filteredData);

      // Configure Fuse.js with filtered data
      const fuse = new Fuse(filteredData, {
        keys: ["question"], // Search within the "question" field
        threshold: 0.5, // Accept loose matches
        minMatchCharLength: 1, // Match even a single word
        includeScore: true, // Include scores for sorting results
        shouldSort: true, // Sort results by relevance
      });

      // Search in the filtered data
      const results = fuse.search(userMessage);
      console.log("Search results:", results);

      // Handle response
      const responseMessage =
        results.length > 0
          ? results[0].item.answer
          : `Sorry, I can only answer questions related to ${specialty}.`;

      const newExpertMessage = {
        sender: "expert",
        message: responseMessage,
        timestamp: new Date(),
      };

      const finalMessages = [...updatedMessages, newExpertMessage];
      setMessages(finalMessages);
      saveMessagesToLocalStorage(finalMessages);
    } catch (error) {
      console.error("Error handling message:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      setUserMessage("");
    }
  };

  if (!specialty) {
    return <p className="text-center text-red-500">Expert not found!</p>;
  }

  return (
    <div className="p-4 bg-white/70 rounded-xl shadow-md h-[420px]  flex flex-col">
      <p className="text-orange text-sm font-semibold text-center mb-2">
        {formatDate(timestamp)}
      </p>

      {/* Display messages */}
      <div className="flex-1 overflow-y-auto p-2 space-y-3 custom-scrollbar">
        {messages.map((msg, index) => (
          <DiscussionBubble
            key={index}
            message={msg.message}
            sender={msg.sender}
            timestamp={msg.timestamp}
          />
        ))}
      </div>

      {/* Display errors */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* Input field */}
      <div className="mt-4 flex items-center gap-1">
        <input
          type="text"
          placeholder={`Ask something about ${specialty}`}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="text-sm flex-grow border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-orange focus:ring-1"
        />
        <button
          onClick={handleSendMessage}
          className="bg-orange text-white font-semibold px-4 h-full rounded-lg hover:bg-customBlue shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? "Loading..." : <LuSendHorizontal size={20} />}
        </button>
      </div>
    </div>
  );
}

export default Discussion;
