import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function DiscussionAvatar({ avatar, name, onDelete }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleDeleteConversation = () => {
    if (onDelete) {
      onDelete();
    }
    setMenuVisible(false); // Close the menu after deletion
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-4 p-4 bg-BlueVert rounded-xl shadow-md mb-4">
        <img src={avatar} alt={name} className="h-20 object-contain rounded-full" />
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-customBlue">{name}</h2>
        </div>
        <div className="relative">
          {/* Three-dot menu icon */}
          <button
            className="text-gray-500 hover:text-customBlue"
            onClick={handleMenuToggle}
          >
            <HiOutlineDotsHorizontal size={24} />
          </button>
          {menuVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1 z-10 hover:bg-red-100">
              <button
                className="w-full text-center px-4 py-2 text-sm font-medium text-red-500"
                onClick={handleDeleteConversation}
              >
                Delete Conversation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DiscussionAvatar;
