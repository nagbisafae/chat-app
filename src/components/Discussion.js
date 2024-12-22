import React, { useState, useEffect } from "react";
import DiscussionBubble from "./DiscussionBubble";
import { useParams } from "react-router-dom"; // Pour récupérer l'ID depuis l'URL
import { formatDate } from "../utils/formatDate";
import { LuSendHorizontal } from "react-icons/lu";
import Fuse from "fuse.js";

function Discussion({ customMessage, timestamp }) {
  const { expertId } = useParams(); // Récupère l'ID depuis l'URL
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "expert", message: customMessage, timestamp },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState([]); // Stocker les données récupérées de l'API

  // Mapping des spécialités en fonction de l'ID
  const specialties = {
    1: "health", // Salma
    2: "lawyer", // Nada
    3: "cuisine", // Amine
  };

  // Récupération de la spécialité
  const specialty = specialties[expertId] || null;

  // Charger les données de l'API Mockaroo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/response.json?key=3d86e990"
        );
        const data = await response.json();
        setApiData(data); // Stocker les données récupérées
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

    setMessages((prev) => [...prev, newUserMessage]);
    setLoading(true);
    setError("");

    try {
      // Configurer Fuse.js
      const fuse = new Fuse(apiData, {
        keys: ["question"], // Rechercher dans le champ "question"
        threshold: 0.6, // Accepte des correspondances éloignées
        minMatchCharLength: 1, // Correspond même à un seul mot
        includeScore: true, // Ajoute un score pour trier les résultats
        shouldSort: true, // Trie les résultats par pertinence
      });

      // Rechercher dans les données de l'API
      const results = fuse.search(userMessage);

      // Gérer la réponse
      const responseMessage =
        results.length > 0
          ? results[0].item.answer
          : "Sorry, I couldn't find a relevant answer. Could you try rephrasing?";

      const newExpertMessage = {
        sender: "expert",
        message: responseMessage,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newExpertMessage]);
    } catch (error) {
      console.error("Error handling message:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      setUserMessage(""); // Vide le champ de saisie
    }
  };

  if (!specialty) {
    return <p className="text-center text-red-500">Expert not found!</p>;
  }

  return (
    <div className="p-4 bg-white/70 rounded-xl shadow-md h-[400px] flex flex-col">
      <p className="text-orange text-sm font-semibold text-center mb-2">
        {formatDate(timestamp)}
      </p>

      {/* Affichage des messages */}
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

      {/* Affichage des erreurs */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* Zone de saisie */}
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
