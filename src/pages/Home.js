import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Salma from "../images/salma.jpg";
import Nada from "../images/nada.png";
import Amine from "../images/amine.png";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import "../App.css"

function Home() {
  const experts = [
    {
      id: 1,
      name: "Dr. Salma - Your Animal Care Expert",
      description: "Ask your questions to an expert veterinarian about the health, nutrition, and care of your pets.",
      buttonText: "Start a conversation",
      image: Salma,
      category: "Veterinarian",
    },
    {
      id: 2,
      name: "Nada - Experienced Lawyer",
      description: "Share your legal questions with a qualified lawyer. Get quick and tailored answers.",
      buttonText: "Start a conversation",
      image: Nada,
      category: "Law",
    },
    {
      id: 3,
      name: "Chef Amine - Your Culinary Expert",
      description: "Discover delicious recipes and tips to impress your guests.",
      buttonText: "Start a conversation",
      image: Amine,
      category: "Cuisine",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Recommended");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les experts en fonction de la catégorie sélectionnée et du terme de recherche
  const filteredExperts = experts.filter(
    (expert) =>
      (selectedCategory === "Recommended" || expert.category === selectedCategory) &&
      (expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expert.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  

  return (
    <div className="min-h-screen h-screen overflow-y-auto bg-gradient-to-b from-BlueVert to-[#F3F6F6] pb-20 sm:pb-0 custom-scrollbar">
      <Header />
      <Sidebar />
      <SearchBar
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
        placeholder="Search for an expert..."
      />
      <CategoryFilter
        categories={["Recommended", "Cuisine", "Law", "Veterinarian", "Psychology"]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="w-full max-w-2xl mt-2 grid grid-cols-1 gap-3 px-4 sm:px-0 mx-auto">
        {filteredExperts.map((expert) => (
          <div key={expert.id} className="w-full">
            <Card
              image={expert.image}
              name={expert.name}
              description={expert.description}
              buttonText={expert.buttonText}
            />
          </div>
        ))}
        {filteredExperts.length === 0 && (
        <p className="text-center text-customBlue">No results found.</p>
      )}

      </div>
    </div>
  );
}

export default Home;
