import React, { useState, useEffect } from "react";
import DiscussionBubble from "./DiscussionBubble";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { LuSendHorizontal } from "react-icons/lu";

function Discussion({ timestamp }) {
  const { expertId } = useParams();
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const specialties = {
    1: "health", // Salma
    2: "lawyer", // Nada
    3: "cuisine", // Amine
  };

  const specialty = specialties[expertId] || null;

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chatHistory")) || {};
    const userChats = storedChats[loggedInUser?.email]?.[expertId] || [];

    // Ne mettez à jour les messages que si nécessaire
    if (JSON.stringify(userChats) !== JSON.stringify(messages)) {
      setMessages(userChats);
    }
  }, [loggedInUser, expertId, messages]);

  const saveMessagesToLocalStorage = (newMessages) => {
    const storedChats = JSON.parse(localStorage.getItem("chatHistory")) || {};
    const userChats = storedChats[loggedInUser?.email] || {};

    userChats[expertId] = newMessages;
    storedChats[loggedInUser?.email] = userChats;

    localStorage.setItem("chatHistory", JSON.stringify(storedChats));
  };

  const handleSendMessage = async () => {
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
      console.log("Envoi de la requête à l'API...");
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama3-8b-8192",
            messages: [
              { role: "system", content: `You are an expert in ${specialty}.` },
              { role: "user", content: userMessage },
            ],
            max_tokens: 100,
          }),
        }
      );

      console.log("Réponse brute de l'API :", response);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          "Erreur API (status non OK) :",
          response.status,
          errorText
        );
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Données JSON reçues :", data);

      const responseMessage =
        data.choices[0]?.message?.content || "Pas de réponse.";
      console.log("Message extrait :", responseMessage);

      const newExpertMessage = {
        sender: "expert",
        message: responseMessage,
        timestamp: new Date(),
      };

      const finalMessages = [...updatedMessages, newExpertMessage];
      setMessages(finalMessages);
      saveMessagesToLocalStorage(finalMessages);
    } catch (err) {
      console.error("Erreur lors de l'appel API :", err);
      setError("Une erreur s'est produite. Réessayez plus tard.");
    } finally {
      setLoading(false);
      setUserMessage("");
    }
  };

  if (!specialty) {
    return <p className="text-center text-red-500">Expert introuvable !</p>;
  }

  return (
    <div className="p-4 lg:mb-0 mb-20 bg-white/70 rounded-xl shadow-md h-[500px] lg:h-[550px] flex flex-col">
      <p className="text-orange text-sm font-semibold text-center mb-2">
        {formatDate(timestamp)}
      </p>

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

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="mt-4 flex items-center gap-1">
        <input
          type="text"
          placeholder={`Posez une question sur ${specialty}`}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="text-sm flex-grow border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-orange focus:ring-1"
        />
        <button
          onClick={handleSendMessage}
          className="bg-orange text-white font-semibold px-4 h-full rounded-lg hover:bg-customBlue shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? "Envoi..." : <LuSendHorizontal size={20} />}
        </button>
      </div>
    </div>
  );
}

export default Discussion;