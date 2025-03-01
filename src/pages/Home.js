import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import "../App.css";
import experts from "../data/experts";

function Home() {
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
    <div className="min-h-screen h-screen overflow-y-auto bg-gradient-to-b from-BlueVert to-[#F3F6F6] pb-28 lg:pb-0 custom-scrollbar">
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
      <div className="w-full max-w-2xl mt-2 grid grid-cols-1 gap-4 px-4 lg:px-0 mx-auto">
        {filteredExperts.map((expert) => (
          <div key={expert.id} className="w-full">
            <Card
              key={expert.id}
              id={expert.id}
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
