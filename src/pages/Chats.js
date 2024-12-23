import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Discdiv from "../components/Discdiv";
import Chatdiv from "../components/Chatdiv";
import DefaultDiscdiv from "../components/DefaultDiscdiv";
import Sidebar from "../components/Sidebar";

function Chats() {
  const { expertId } = useParams();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const [showChatDiv, setShowChatDiv] = useState(true); // For toggling between Chatdiv and Discdiv

  useEffect(() => {
    // Detect screen size changes
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show Discdiv and hide Chatdiv when an expert is selected
  useEffect(() => {
    if (isSmallScreen && expertId) {
      setShowChatDiv(false);
    } else {
      setShowChatDiv(true);
    }
  }, [expertId, isSmallScreen]);

  return (
    <div className="bg-gradient-to-b from-BlueVert to-[#F3F6F6] min-h-screen flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow lg:ml-[200px] px-6 flex flex-col lg:flex-row gap-4 mt-[15px] mb-[15px]">
        {/* Chatdiv visible only on small screens or alongside Discdiv on larger screens */}
        {(isSmallScreen ? showChatDiv : true) && (
          <Chatdiv className="w-full lg:w-1/3" />
        )}

        {/* Discdiv or DefaultDiscdiv */}
        <div
  className={`flex-grow flex items-center justify-center ${
    isSmallScreen && !showChatDiv ? "block" : "hidden lg:flex"
  }`}
>
  <div className="w-full max-w-3xl">
    {expertId ? (
      <Discdiv />
    ) : (
      !isSmallScreen && <DefaultDiscdiv /> // Hide DefaultDiscdiv on small screens
    )}
  </div>
</div>
      </div>
    </div>
  );
}

export default Chats;
