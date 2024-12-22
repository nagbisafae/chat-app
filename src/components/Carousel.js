import React, { useEffect, useState } from "react";
import experts from "../data/experts"; // Import expert data

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % experts.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleCarouselClick = (index) => {
    setActiveIndex(index);
  };

  const getItemPosition = (index) => {
    const totalItems = experts.length;
    const offset = (index - activeIndex + totalItems) % totalItems; // Calculate relative position
    if (offset === 0) return "z-20 scale-125 opacity-100"; // Center item
    if (offset === 1 || offset === totalItems - 1)
      return "z-10 scale-100 opacity-75"; // Next and previous items
    return "z-0 scale-90 opacity-50"; // Remaining items
  };

  return (
    <div className="m-8">
      <div
        className="relative w-full max-w-6xl mx-auto min-h-[80vh] p-8 flex flex-col justify-between items-center gap-8 rounded-2xl shadow-lg shadow-customBlue bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${experts[activeIndex].background})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-lg text-center font-libre">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {experts[activeIndex].name}
          </h2>
          <p className="text-sm md:text-xl">{experts[activeIndex].description}</p>
        </div>

        {/* Carousel */}
        <div className="relative z-10 flex items-center justify-center gap-8 bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-BlueVert">
          {experts.map((expert, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-[100px] h-[150px] md:w-[120px] md:h-[180px] lg:w-[150px] lg:h-[220px] rounded-md overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out transform ${getItemPosition(
                index
              )}`}
              onClick={() => handleCarouselClick(index)} // Allow manual selection
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
